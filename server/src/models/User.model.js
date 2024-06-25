import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { SendEmail, TransPorter } from "../utils/Transpoter.js";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
      trim: true,
      index: true,
    },

    avatar: {
      public_id: {
        type: String, // cloudinary
      },
      url: {
        type: String, // cloudinary
      },
    },
    account_email_Verified: {
      type: Boolean,
      default: false,
    },
    account_email_Verifi_otp: {
      type: Number, //OTP save
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.methods.generateAccessToken = async function () {
  return await jwt.sign(
    {
      _id: this._id,
      email: this.email,

      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      // expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      expiresIn: "5s",
    }
  );
};

userSchema.methods.GENERATE_RESET_PASSWORD_TOKEN = async function () {
  return await jwt.sign(
    {
      email: this.email,
    },
    process.env.RESET_SECRET_TOKEN,
    {
      expiresIn: process.env.RESET_EXPIRY_TOKEN,
    }
  );
};

export const User = mongoose.model("User", userSchema);
