import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import cors from "cors";

dotenv.config();
// connectKafka();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    `User service is running on http://localhost:${process.env.PORT}`
  );
});
