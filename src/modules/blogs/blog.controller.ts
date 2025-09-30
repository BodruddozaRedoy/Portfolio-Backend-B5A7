import { Request, Response } from "express";
import { BlogService } from "./blog.service";

// GET all blogs
const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await BlogService.getAllBlogs();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error });
  }
};

// GET blog by ID
const getBlogById = async (req: Request, res: Response) => {
  try {
    const blog = await BlogService.getBlogById(Number(req.params.id));
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog", error });
  }
};

// CREATE blog
const createBlog = async (req: Request, res: Response) => {
  try {
    const newBlog = await BlogService.createBlog(req.body);
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: "Error creating blog", error });
  }
};

// UPDATE blog
const updateBlog = async (req: Request, res: Response) => {
  try {
    const updatedBlog = await BlogService.updateBlog(Number(req.params.id), req.body);
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: "Error updating blog", error });
  }
};

// DELETE blog
const deleteBlog = async (req: Request, res: Response) => {
  try {
    await BlogService.deleteBlog(Number(req.params.id));
    res.json({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog", error });
  }
};

export const BlogController = {
    getBlogs,
    createBlog,
    deleteBlog,
    getBlogById,
    updateBlog,
}