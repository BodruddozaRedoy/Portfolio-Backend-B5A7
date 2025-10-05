import express from "express";
import { userRoutes } from "./modules/user/user.routes";
import { blogRoutes } from "./modules/blogs/blog.routes";
import { projectRoutes } from "./modules/projects/project.routes";
import dotenv from 'dotenv'
import { authRoutes } from "./modules/auth/auth.routes";
import cors from 'cors'

const app = express();
dotenv.config()

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"]
}))

// Register routes
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/blog", blogRoutes)
app.use("/api/v1/project", projectRoutes)
app.use("/api/v1/auth", authRoutes)

// Initial route 
app.get("/", (req, res) => {
  res.send("API is working");
});

export default app;
