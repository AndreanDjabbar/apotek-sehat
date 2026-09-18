import bcrypt from "bcrypt";
import { generateJWTToken } from "../util/jwt.util.js";
import UserRepository from "../repository/user.repository.js";

class AuthService {
    static async login(username, password) {
        const user = await UserRepository.getByUsername(username);
        if (!user) {
            const error = new Error("User not found");
            error.statusCode = 404;
            throw error;
        }
        if (!user.is_verified) {
            const error = new Error("User is not verified");
            error.statusCode = 403;
            throw error;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!password || !isPasswordValid) {
            const error = new Error("Invalid email or password");
            error.statusCode = 400;
            throw error;
        } 

        const tokenJWT = generateJWTToken({
            userID: user.id,
        });

        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + 24);

        return {
            user: {
                id: user.id,
                name: user.name,
                role: user.role,
            },
            token: tokenJWT,
        };
    }
}

export default AuthService;