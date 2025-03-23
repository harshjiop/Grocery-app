import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

function RoleCheck(role) {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      throw new ApiError(401, "Your are note access this page");
    }
    // next();
  };
}

export { RoleCheck };
