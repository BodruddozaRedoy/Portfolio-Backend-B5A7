import { Router } from "express";
import { BlogController } from "./blog.controller";

const router = Router();

router.get("/", BlogController.getBlogs);
router.get("/:id", BlogController.getBlogById);
router.post("/", BlogController.createBlog);
router.put("/:id", BlogController.updateBlog);
router.delete("/:id", BlogController.deleteBlog);

export const blogRoutes = router;
