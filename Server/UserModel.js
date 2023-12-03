import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    short: String,
    long: String,
    history: [{ timeStamp: { type: Number } }],
  },
  { timestamps: true }
);

export const User = new mongoose.model("users", UserSchema);
