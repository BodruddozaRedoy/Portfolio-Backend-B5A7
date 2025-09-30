import prisma from "../../prisma/client";

export const ProjectService = {
  getAllProjects: async () => {
    return prisma.project.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: { id: true, name: true, email: true, avatarUrl: true }
        }
      }
    });
  },

  getProjectById: async (id: number) => {
    return prisma.project.findUnique({
      where: { id },
      include: {
        user: {
          select: { id: true, name: true, email: true, avatarUrl: true }
        }
      }
    });
  },

  createProject: async (data: {
    title: string;
    description: string;
    slug?: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    thumbnail?: string;
    userId: number;
  }) => {
    return prisma.project.create({ data });
  },

  updateProject: async (id: number, data: any) => {
    return prisma.project.update({
      where: { id },
      data,
    });
  },

  deleteProject: async (id: number) => {
    return prisma.project.delete({
      where: { id },
    });
  },
};
