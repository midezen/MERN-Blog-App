import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
  {
    planName: { type: String, required: true },
    features: { type: [String] },
    limitations: { type: [String] },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Plan", planSchema);
