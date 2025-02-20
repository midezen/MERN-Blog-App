import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reference: { type: String, required: true },
    currency: { type: String, required: true },
    status: { type: String, default: pending, required: true },
    subscriptionPlan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Plan",
      required: true,
    },
    amount: { type: Number, default: true },
  },
  { timestamp: true }
);

export default mongoose.model("Payment", paymentSchema);
