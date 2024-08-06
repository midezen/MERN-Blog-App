import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database connection successful"))
    .catch((error) =>
      console.log({
        message: "Database connection unsuccessful",
        error: error.message,
      })
    );
};

export default connectDB;
