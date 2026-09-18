import jwt from 'jsonwebtoken';
import { JWT_EXPIRES_IN, JWT_SECRET } from './env.util.js';

export const generateJWTToken = ({
    userID,
    email,
    role
}) => {
    const payload = {
        userID,
        email,
        role,
    };

    return jwt.sign(payload, JWT_SECRET, {
        algorithm: 'HS256',
        expiresIn: JWT_EXPIRES_IN,
    });
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, PUBLIC_KEY, {
            algorithms: ['RS256'],
        });
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            throw new Error('Token has expired');
        } else if (error.name === 'JsonWebTokenError') {
            throw new Error('Invalid token');
        } else {
            throw new Error('Token verification failed');
        }
    }
};

export const decodeToken = (token) => {
    return jwt.decode(token);
};
