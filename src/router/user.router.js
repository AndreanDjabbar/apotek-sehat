import express from "express";
import * as UserController from "../controller/user.controller.js";
import validateToken from "../middleware/jwt.middleware.js";
import authorizedRoles from "../middleware/role.middleware.js";
import validateSchema from "../middleware/schema.middleware.js";
import catchAsync from "../middleware/catchAsync.middleware.js";
import timeout from "connect-timeout";

import { 
  createStaffSchema,
} from "../validation/user.validation.js";

const router = express.Router();

// router.get(
//   "/me", 
//   timeout('3s'),
//   validateToken, 
//   catchAsync(UserController.getMyUserDataController)
// );
router.post(
  "/staff", 
  validateToken,
  timeout('8s'),
  validateSchema(createStaffSchema),
  authorizedRoles("ADMIN", "Developer"), 
  catchAsync(UserController.createStaffController)
);

export default router;