require("dotenv").config();

const mailRoutes = require("./routes/mailRoutes");
const credentialRoutes = require("./routes/credentialRoutes");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());


app.use(
  cors({
    origin: true, 
    credentials: true,
  }),
);


app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("DB Middleware Error:", error.message);
    res
      .status(500)
      .json({ error: "Internal server error: Database disconnected" });
  }
});

app.use("/api", credentialRoutes);
app.use("/", mailRoutes);

module.exports = app;
