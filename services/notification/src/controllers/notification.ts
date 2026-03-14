import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth.js";
import { sql } from "../utils/db.js";
import ErrorHandler from "../utils/errorHandler.js";
import TryCatch from "../utils/TryCatch.js";

export const getNotifications = TryCatch(
  async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user.user_id;

    const notifications = await sql`
      SELECT * FROM notifications 
      WHERE user_id = ${userId} 
      ORDER BY created_at DESC 
      LIMIT 50
    `;

    res.json(notifications);
  }
);

export const markAsRead = TryCatch(
  async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;
    const userId = req.user.user_id;

    const [updated] = await sql`
      UPDATE notifications 
      SET is_read = true 
      WHERE id = ${id} AND user_id = ${userId} 
      RETURNING *
    `;

    if (!updated) {
      throw new ErrorHandler(404, "Notification not found");
    }

    res.json({
      message: "Marked as read",
      notification: updated,
    });
  }
);

export const clearNotifications = TryCatch(
  async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user.user_id;

    await sql`
      DELETE FROM notifications 
      WHERE user_id = ${userId}
    `;

    res.json({
      message: "All notifications cleared",
    });
  }
);

// Internal API to create notification
export const createNotification = TryCatch(
  async (req: any, res: Response) => {
    const { user_id, type, message, metadata } = req.body;

    if (!user_id || !type || !message) {
      throw new ErrorHandler(400, "Missing required fields");
    }

    const [newNotification] = await sql`
      INSERT INTO notifications (user_id, type, message, metadata) 
      VALUES (${user_id}, ${type}, ${message}, ${JSON.stringify(metadata)}) 
      RETURNING *
    `;

    res.status(201).json(newNotification);
  }
);
