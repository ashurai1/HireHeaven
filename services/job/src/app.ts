import express from "express";
import jobRoutes from "./routes/job.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/job", jobRoutes);

export default app;
