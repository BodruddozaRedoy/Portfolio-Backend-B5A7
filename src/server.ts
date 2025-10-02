import app from "./app";
import prisma, { connectDB } from "./config/db";
import bcrypt from 'bcrypt'

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB(); // check DB connection before starting server

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });

  const user = await prisma.user.findUnique({
    where: {email:process.env.ADMIN_EMAIL!}
  })
  if(user){
    console.log("Admin already created")
  }else{
    const encryptedPass =await bcrypt.hash(process.env.ADMIN_PASSWORD!, 10)
    console.log("encryptedPass",encryptedPass)
    const data = {
      name: process.env.ADMIN_NAME!,
      email: process.env.ADMIN_EMAIL,
      password: encryptedPass
    }
    await prisma.user.create({data})
  }
};

startServer();