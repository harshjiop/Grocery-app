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

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEwNzk2ZjZjZGZmZDI0MmE2YTNmYWEiLCJlbWFpbCI6ImhrODA1MTg3MTQ5NkBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImlhdCI6MTcyMTc5Mjg3OSwiZXhwIjoxNzIyNzkyODc5fQ.tZ1zuA-WTt-OP-L_g3xGDocSfLqCoJt3JZPv5VF8X0c
