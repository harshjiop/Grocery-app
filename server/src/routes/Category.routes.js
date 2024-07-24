import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createCategory } from "../controllers/Category.controller.js";
import { RoleCheck } from "../middlewares/role.middleware.js";

const router = Router();
router.use(verifyJWT);

//SECURED ROUTES
router.route("/add-category").post(RoleCheck("ADMIN"), createCategory);

export default router;
