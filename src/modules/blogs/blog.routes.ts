import { Router } from "express";
import { BlogController } from "./blog.controller";

const router = Router();

router.get("/", BlogController.getBlogs);           // GET all blogs
router.get("/:id", BlogController.getBlogById);     // GET single blog
router.post("/", BlogController.createBlog);        // CREATE blog
router.put("/:id", BlogController.updateBlog);      // UPDATE blog
router.delete("/:id", BlogController.deleteBlog);   // DELETE blog

export default router;
