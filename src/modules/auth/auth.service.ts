import prisma from "../../config/db";
import bcrypt from "bcrypt";

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("User not found");
  }
  const decryptedPass = await bcrypt.compare(password, user.password);
  if (decryptedPass) {
    return user;
  } else {
    throw new Error("Password is incorrect");
  }
};

export const AuthService = {
  login,
};
