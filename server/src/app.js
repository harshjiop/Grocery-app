import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
// let allowOrigins = [process.env.Cors_Origin, "http://localhost:5173"];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not Allowed By CORS"));
//       }
//     },
//   })
// );

app.use(
  express.json({
    limit: "20kb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";
import categoryRouter from "./routes/Category.routes.js";
import productRouter from "./routes/product.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productRouter);

export { app };

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzdjZDdkMDgyNjBmZTRhMjU5YTZiM2YiLCJlbWFpbCI6ImhrODA1MTg3MTQ5NkBnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImlhdCI6MTczNjI2Mzk1NSwiZXhwIjoxNzM3MjYzOTU1fQ.53-Gn4TEe3k6w_WCXmJGdyiFi3IdzRYcJJa8xJmwXP8
