import mongoose from "mongoose";

const profanityFilterSchema = new mongoose.Schema({
  bannedwords: [String],
});

export default mongoose.model("ProfanitySchema", profanityFilterSchema);
