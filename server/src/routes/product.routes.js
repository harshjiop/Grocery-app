import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";

import { RoleCheck } from "../middlewares/role.middleware.js";
import { createProduct } from "../controllers/product.controller.js";

const router = Router();

//SECURED ROUTES
router.use(verifyJWT);
// router.route("/all-category").get(getAllCategories);
// router.route("/category-id").get(getCategoryById);

router.route("/add").post(createProduct);

export default router;
