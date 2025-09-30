import prisma from "../../prisma/client";

const getAllBlogs = async () => {
  return prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
    include: {
        user: true
    }
  });
};

const getBlogById = async (id: number) => {
  return prisma.blog.findUnique({
    where: { id },
    include: {
        user: true
    }
  });
};

const createBlog = async (data: {
  title: string;
  slug: string;
  content: string;
  coverImage?: string;
  tags?: string[];
  published?: boolean;
  userId: number;  // required since Blog belongs to User
}) => {
  return prisma.blog.create({ data });
};

const updateBlog = async (id: number, data: any) => {
  return prisma.blog.update({
    where: { id },
    data,
  });
};

const deleteBlog = async (id: number) => {
  return prisma.blog.delete({
    where: { id },
  });
};

export const BlogService = {
    createBlog,
    deleteBlog,
    getAllBlogs,
    getBlogById,
    updateBlog
}
