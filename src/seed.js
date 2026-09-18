import prisma from "./config/postgres.config.js";
import UserRepository from "./repository/user.repository.js";
import logger from "../logs/logger.js";

const seed = async () => {
    try {
        const adminUser = await UserRepository.getByUsername("admin");
        if (!adminUser) {
            await UserRepository.generateSeed();
            logger.info("Seed data generated successfully.");
        } else {
            logger.info("Admin user already exists. Seed data not generated.");
        }
    } catch (error) {
        logger.error("Error occurred while seeding data:", error);
    }
}

await seed();