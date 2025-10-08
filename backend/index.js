// index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/connectionDB.js";
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// static files (images)
app.use("/images", express.static("uploads"));

// routes
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

app.get("/", (req, res) => res.send("API is up"));

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Failed to start server due to DB connection error:", err);
  process.exit(1);
});
