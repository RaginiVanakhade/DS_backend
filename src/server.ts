import dotenv from "dotenv";
dotenv.config();

console.log("1. dotenv loaded");

import app from "./app";
console.log("2. app imported");

import connectDB from "./config/db";
console.log("3. db imported");

async function startServer() {
  try {
    console.log("4. Connecting to MongoDB...");
    await connectDB();
    console.log("5. MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`🚀 Server Running on ${PORT}`);
    });
  } catch (err) {
    console.error("Startup Error:", err);
  }
}

startServer();