import express from "express";
import { userRoutes } from "./modules/user/user.routes";

const app = express();

app.use(express.json());

// Register routes
app.use("/api/v1/user", userRoutes)

// Initial route 
app.get("/", (req, res) => {
  res.send("API is working");
});

export default app;
