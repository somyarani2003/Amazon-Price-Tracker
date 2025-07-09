

import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    console.error("❌ MONGODB_URI not found in environment variables");
    throw new Error("Missing MONGODB_URI");
  }

  if (isConnected) {
    console.log("✅ Using existing MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(mongoURI, {
      dbName: "price-tracker", // ✅ Optional but recommended
      serverSelectionTimeoutMS: 5000, // ✅ Prevent hanging on DNS issues
    });

    isConnected = true;
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error; // ✅ Let the caller handle it
  }
};
