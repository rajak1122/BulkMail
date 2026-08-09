const express = require("express");
const EmailCredential = require("../models/EmailCredential");

const router = express.Router();

router.post("/credentials", async (req, res) => {
  try {
    const { email, appPassword } = req.body;

    const credential = new EmailCredential({
      email,
      appPassword,
    });

    await credential.save();

    res.status(201).json({
      message: "Email credentials saved successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to save credentials",
    });
  }
});

module.exports = router;
