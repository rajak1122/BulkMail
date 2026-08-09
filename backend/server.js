require("dotenv").config();
const mailRoutes = require("./routes/mailRoutes");
const credentialRoutes = require("./routes/credentialRoutes");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use("/api", credentialRoutes);
app.use("/", mailRoutes);



app.listen(5000, function () {
  console.log("server started...");
});
