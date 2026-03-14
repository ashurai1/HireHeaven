import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import notificationRoutes from "./routes/notification.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/notification", notificationRoutes);

const PORT = process.env.PORT || 5006;

app.listen(PORT, () => {
  console.log(`Notification service is running on http://localhost:${PORT}`);
});
