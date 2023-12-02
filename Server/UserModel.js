import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
  short: String,
  long: String,
  // history: Array,
});

export const User = new mongoose.model("users", UserSchema);
