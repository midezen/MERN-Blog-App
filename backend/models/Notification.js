import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    message: { type: String, required: true },
    isRead: { type: boolean, default: false },
  },
  { timestamp: true }
);

export default mongoose.model("Notification", notificationSchema);
