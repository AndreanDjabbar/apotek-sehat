import { PrismaClient } from "../../prisma/generated/prisma/index.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

class UserRepository {
  static async getByUsername(username) {
    return await prisma.user.findUnique({
      where: { username },
    });
  }

  static async generateSeed() {
    const rawpassword = "admin123";
    const hashedPassword = await bcrypt.hash(rawpassword, 10);
    const seedData = [
      {
        name: "admin",
        username: "admin",
        email: "admin@example.com",
        password: hashedPassword,
        role: "ADMIN",
        is_verified: true,
      }
    ]
    return await prisma.user.createMany({
      data: seedData,
      skipDuplicates: true,
    });
  }
}

export default UserRepository;
