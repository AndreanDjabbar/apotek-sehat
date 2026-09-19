import UserRepository from "../repository/user.repository.js";
import bcrypt from "bcrypt";

class UserService {
    static async createStaff({
        name,
        username,
        email,
        password,
        role
    }) {
        const existingUser = await UserRepository.getByUsername(username);
        if (existingUser) {
            const error = new Error("Username already exists");
            error.statusCode = 400;
            throw error;
        }

        const existingEmail = await UserRepository.getByEmail(email);
        if (existingEmail) {
            const error = new Error("Email already exists");
            error.statusCode = 400;
            throw error;
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UserRepository.createUser({
            name,
            username,
            email,
            password: hashedPassword,
            isVerified: true,
            role
        });
        return newUser;
    }
}

export default UserService;