import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getAllCategories,
} from "../controllers/Category.controller.js";
import { RoleCheck } from "../middlewares/role.middleware.js";

const router = Router();

//SECURED ROUTES
router.use(verifyJWT);
router.route("/all-category").get(getAllCategories);
router.route("/category-id").get(getCategoryById);

router
  .route("/add-category")
  .post(RoleCheck("ADMIN"), createCategory)
  .patch(updateCategory)
  .delete(deleteCategory);


export default router;
