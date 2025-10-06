import { Request, Response } from "express";
import { ProjectService } from "./project.service";

// ✅ GET all projects
const getProjects = async (_req: Request, res: Response): Promise<void> => {
  try {
    const projects = await ProjectService.getAllProjects();
    res.json({ message: "Projects fetched successfully", data: projects });
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", data: null, error });
  }
};

// ✅ GET project by ID
const getProjectById = async (req: Request, res: Response): Promise<void> => {
  try {
    const project = await ProjectService.getProjectById(Number(req.params.id));
    if (!project) {
      res.status(404).json({ message: "Project not found", data: null });
      return; // ensures all code paths return
    }
    res.json({ message: "Project fetched successfully", data: project });
  } catch (error) {
    res.status(500).json({ message: "Error fetching project", data: null, error });
  }
};

// ✅ CREATE project
const createProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const newProject = await ProjectService.createProject(req.body);
    res.status(201).json({ message: "Project created successfully", data: newProject });
  } catch (error) {
    res.status(500).json({ message: "Error creating project", data: null, error });
  }
};

// ✅ UPDATE project
const updateProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedProject = await ProjectService.updateProject(Number(req.params.id), req.body);
    res.json({ message: "Project updated successfully", data: updatedProject });
  } catch (error) {
    res.status(500).json({ message: "Error updating project", data: null, error });
  }
};

// ✅ DELETE project
const deleteProject = async (req: Request, res: Response): Promise<void> => {
  try {
    await ProjectService.deleteProject(Number(req.params.id));
    res.json({ message: "Project deleted successfully", data: null });
  } catch (error) {
    res.status(500).json({ message: "Error deleting project", data: null, error });
  }
};

export const ProjectController = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
