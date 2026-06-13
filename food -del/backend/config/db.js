import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI ||
    "mongodb+srv://Renuka_Ankamreddy:Renuka8@cluster0.tlsxruo.mongodb.net/food-del";

  try {
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Database connection failed:", error.message);

    // Try local fallback if Atlas is unreachable
    if (!process.env.MONGO_URI) {
      const localUri = "mongodb://127.0.0.1:27017/food-del";
      try {
        await mongoose.connect(localUri);
        console.log("Connected to local MongoDB fallback");
        return;
      } catch (localErr) {
        console.error("Local MongoDB fallback failed:", localErr.message);
      }
    }

    // Do not exit the process; allow the server to start for development.
    console.warn("Continuing without a successful database connection.");
  }
};