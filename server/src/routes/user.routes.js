import { Router } from "express";
import {
  changeCurrentPassword,
  loginUser,
  logoutUser,
  registerUser,
  updateAccountDetails,
  updateUserAvatar,
  getCurrentUser,
  ForgetPassword,
  ForgetPasswordUpdate,
  accountverify,
  sendOtp,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/accountverify").post(verifyJWT,accountverify);
router.route("/login").post(loginUser);

//SECURED ROUTES
router.route("/lougout").get(verifyJWT, logoutUser);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/my-account").get(verifyJWT, getCurrentUser);
router.route("/otp").get(verifyJWT, sendOtp);
router
  .route("/forget-password")
  .post(ForgetPassword)
  .patch(ForgetPasswordUpdate);

router.route("/update-account").patch(verifyJWT, updateAccountDetails);
router
  .route("/avatar")
  .patch(verifyJWT, upload.single("avatar"), updateUserAvatar);

export default router;
