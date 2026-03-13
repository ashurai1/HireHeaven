import { OAuth2Client } from "google-auth-library";
import { sql } from "../utils/db.js";
import ErrorHandler from "../utils/errorHandler.js";
import { TryCatch } from "../utils/TryCatch.js";
import jwt from "jsonwebtoken";
import axios from "axios";
import getBuffer from "../utils/buffer.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = TryCatch(async (req, res, next) => {
  const { token } = req.body;

  if (!token) {
    throw new ErrorHandler(400, "Google token is required");
  }

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();
  if (!payload || !payload.email || !payload.name) {
    throw new ErrorHandler(400, "Invalid Google token payload");
  }

  const { email, name, picture } = payload;

  const user = await sql`
  SELECT u.user_id, u.name, u.email, u.password, u.phone_number, u.role, u.bio, u.resume, u.profile_pic, u.subscription, ARRAY_AGG(s.name) FILTER (WHERE s.name IS NOT NULL) as skills FROM users u LEFT JOIN user_skills us ON u.user_id = us.user_id
  LEFT JOIN skills s ON us.skill_id = s.skill_id
  WHERE u.email = ${email} GROUP BY u.user_id;
  `;

  if (user.length === 0) {
    // User doesn't exist, needs onboarding
    return res.json({
      requires_onboarding: true,
      googleData: {
        email,
        name,
        picture,
        token: token, // send back the token so frontend can use it in step 2
      },
    });
  }

  const userObject = user[0];
  userObject.skills = userObject.skills || [];
  delete userObject.password;

  const jwtToken = jwt.sign(
    { id: userObject?.user_id },
    process.env.JWT_SEC as string,
    {
      expiresIn: "15d",
    }
  );

  res.json({
    message: "Google login successful",
    userObject,
    token: jwtToken,
  });
});

export const googleRegister = TryCatch(async (req, res, next) => {
  const { token, role, phoneNumber, bio } = req.body;

  if (!token || !role || !phoneNumber) {
    throw new ErrorHandler(400, "Token, role, and phone number are required");
  }

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();
  if (!payload || !payload.email || !payload.name) {
    throw new ErrorHandler(400, "Invalid Google token payload");
  }

  const { email, name, picture } = payload;

  const existingUsers = await sql`SELECT user_id FROM users WHERE email = ${email}`;

  if (existingUsers.length > 0) {
    throw new ErrorHandler(409, "User with this email already exists. Please log in.");
  }

  let registeredUser;

  if (role === "recruiter") {
    const [user] =
      await sql`INSERT INTO users (name, email, phone_number, role, profile_pic, auth_provider) VALUES 
               (${name}, ${email}, ${phoneNumber}, ${role}, ${picture}, 'google') RETURNING user_id, name, email, phone_number, role, profile_pic, created_at`;

    registeredUser = user;
  } else if (role === "jobseeker") {
    const file = req.file;

    if (!file) {
      throw new ErrorHandler(400, "Resume file is required for jobseekers");
    }

    const fileBuffer = getBuffer(file);

    if (!fileBuffer || !fileBuffer.content) {
      throw new ErrorHandler(500, "Failed to generate buffer");
    }

    const { data } = await axios.post(
      `${process.env.UPLOAD_SERVICE}/api/utils/upload`,
      { buffer: fileBuffer.content }
    );
    const [user] =
      await sql`INSERT INTO users (name, email, phone_number, role, bio, resume, resume_public_id, profile_pic, auth_provider) VALUES 
               (${name}, ${email}, ${phoneNumber}, ${role}, ${bio}, ${data.url}, ${data.public_id}, ${picture}, 'google') RETURNING user_id, name, email, phone_number, role, bio, resume, profile_pic, created_at`;

    registeredUser = user;
  } else {
      throw new ErrorHandler(400, "Invalid role");
  }

  const jwtToken = jwt.sign(
    { id: registeredUser?.user_id },
    process.env.JWT_SEC as string,
    {
      expiresIn: "15d",
    }
  );

  res.json({
    message: "Google Registration successful",
    registeredUser,
    token: jwtToken,
  });
});
