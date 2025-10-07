import app from "./app";
import prisma, { connectDB } from "./config/db";
import bcrypt from "bcrypt";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB(); // check DB connection before starting server

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });

  // ✅ Ensure required env vars exist
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminName = process.env.ADMIN_NAME;

  if (!adminEmail || !adminPassword || !adminName) {
    console.error("❌ Missing ADMIN_* environment variables. Skipping admin creation.");
    return;
  }

  const user = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (user) {
    console.log("✅ Admin already exists");
  } else {
    const encryptedPass = await bcrypt.hash(adminPassword, 10);
    console.log("🔑 Encrypted admin password generated");

    const data = {
      name: adminName,
      email: adminEmail, // ✅ now guaranteed string
      password: encryptedPass,
    };

    await prisma.user.create({ data });
    console.log("👑 Admin account created successfully");
  }
};

startServer();
