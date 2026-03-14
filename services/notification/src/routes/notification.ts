import express from "express";
import {
  getNotifications,
  markAsRead,
  clearNotifications,
  createNotification,
} from "../controllers/notification.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all", isAuthenticated, getNotifications);
router.put("/read/:id", isAuthenticated, markAsRead);
router.delete("/clear", isAuthenticated, clearNotifications);

// Internal route (ideally protected by service-to-service auth, but keeping it simple for now)
router.post("/create", createNotification);

export default router;
