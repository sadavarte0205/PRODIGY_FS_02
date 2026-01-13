const express = require("express");
const mongoose = require("mongoose");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/employees", employeeRoutes);

// DB
mongoose
  .connect("mongodb://127.0.0.1:27017/employeesDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
