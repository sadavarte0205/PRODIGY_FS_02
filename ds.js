const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/employeeDB");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB error:", error.message);
  }
};

module.exports = connectDB;
