const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const tableRoutes = require("./routes/tableRoutes");
const path = require("path");

const app = express();

require("dotenv").config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // You can restrict this to specific domains for security
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

mongoose.connect(process.env.MONGODB_URI);

app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/table", tableRoutes);

app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
