import mongoose from "mongoose";

const NormalUrlSchema = new mongoose.Schema(
  {
    short: String,
    long: String,
    history: [{ timeStamp: { type: Number } }],
  },
  { timestamps: true }
);

export const NormalUrl = new mongoose.model("RandomUrl", NormalUrlSchema);

const CustomUrlSchema = new mongoose.Schema(
  {
    short: String,
    long: String,
    history: [{ timeStamp: { type: Number } }],
  },
  { timestamps: true }
);

export const CustomUrl = new mongoose.model("CustomUrl", CustomUrlSchema);
