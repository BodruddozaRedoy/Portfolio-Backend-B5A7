import { Router } from "express";
import { ProjectController } from "./project.controller";

const router = Router();

router.get("/", ProjectController.getProjects);
router.get("/:id", ProjectController.getProjectById);
router.post("/", ProjectController.createProject);
router.patch("/:id", ProjectController.updateProject);
router.delete("/:id", ProjectController.deleteProject);

export const projectRoutes = router;
