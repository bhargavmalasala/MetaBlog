import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/connectionDB.js";
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";

const app = express();

//middlewares
app.use(cors());
app.use(express.json()); 


//API ENDPOINTS
app.use("/images", express.static("uploads"));
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
