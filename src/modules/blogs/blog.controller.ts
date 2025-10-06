import { Request, Response } from "express";
import { BlogService } from "./blog.service";

// ✅ GET all blogs
const getBlogs = async (_req: Request, res: Response): Promise<void> => {
  try {
    const blogs = await BlogService.getAllBlogs();
    res.json({ message: "Blogs fetched successfully", data: blogs });
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", data: null, error });
  }
};

// ✅ GET blog by ID
const getBlogById = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await BlogService.getBlogById(Number(req.params.id));
    if (!blog) {
      res.status(404).json({ message: "Blog not found", data: null });
      return; // ✅ ensures every code path returns
    }
    res.json({ message: "Blog fetched successfully", data: blog });
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog", data: null, error });
  }
};

// ✅ CREATE blog
const createBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const newBlog = await BlogService.createBlog(req.body);
    res.status(201).json({ message: "Blog created successfully", data: newBlog });
  } catch (error) {
    res.status(500).json({ message: "Error creating blog", data: null, error });
  }
};

// ✅ UPDATE blog
const updateBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedBlog = await BlogService.updateBlog(Number(req.params.id), req.body);
    res.json({ message: "Blog updated successfully", data: updatedBlog });
  } catch (error) {
    res.status(500).json({ message: "Error updating blog", data: null, error });
  }
};

// ✅ DELETE blog
const deleteBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    await BlogService.deleteBlog(Number(req.params.id));
    res.json({ message: "Blog deleted successfully", data: null });
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog", data: null, error });
  }
};

export const BlogController = {
  getBlogs,
  createBlog,
  deleteBlog,
  getBlogById,
  updateBlog,
};
