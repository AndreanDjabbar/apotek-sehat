import express from "express";
import { 
    loginController,
    logoutController
} from "../controller/auth.controller.js";

import { 
    loginSchema,
} from "../validation/auth.validation.js";

import validateToken from "../middleware/jwt.middleware.js";
import validateSchema from "../middleware/schema.middleware.js";
import catchAsync from "../middleware/catchAsync.middleware.js";
import timeout from "connect-timeout";

const router = express.Router();

router.post(
    "/login", 
    timeout('2s'),
    validateSchema(loginSchema),
    catchAsync(loginController)
);
router.post(
    "/logout",
    timeout('2s'),
    validateToken,
    catchAsync(logoutController)
)
export default router;