import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
let allowOrigins = [process.env.Cors_Origin, 'http://localhost:5173'];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not Allowed By CORS'));
      }
    }
  })
);


app.use(
  express.json({
    limit: "20kb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
// app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";

// import healthcheckRouter from "./routes/healthcheck.routes.js";

//routes declaration
// app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/users", userRouter);


export { app };
