import express from "express";
import { userRoutes } from "./modules/user/user.routes";
import { blogRoutes } from "./modules/blogs/blog.routes";

const app = express();

app.use(express.json());

// Register routes
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/blog", blogRoutes)

// Initial route 
app.get("/", (req, res) => {
  res.send("API is working");
});

export default app;
