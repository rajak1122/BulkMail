const express = require("express");
const nodemailer = require("nodemailer");
const EmailCredential = require("../models/EmailCredential");
const MailHistory = require("../models/MailHistory");

const router = express.Router();

router.post("/sendemail", async (req, res) => {
  try {
    const { message, subject, totalEmail } = req.body;

    if (!Array.isArray(totalEmail) || totalEmail.length === 0) {
      return res.status(400).json({
        message: "Recipient email list is empty",
      });
    }

    const credential = await EmailCredential.findOne().sort({
      createdAt: -1,
    });

    if (!credential) {
      return res.status(404).json({
        message: "Email credentials not found",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: credential.email,
        pass: credential.appPassword,
      },
    });

    const emailPromises = totalEmail.map((email) => {
      return transporter.sendMail({
        from: credential.email,
        to: email,
        subject: subject,
        text: message,
      });
    });

    await Promise.all(emailPromises);

    await MailHistory.create({
      senderEmail: credential.email,
      subject: subject,
      message: message,
      recipients: totalEmail,
      recipientCount: totalEmail.length,
      status: "Sent",
    });

    console.log("Emails sent successfully");

    res.status(200).json({
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.log("Email sending failed:", error);

    res.status(500).json({
      message: "Failed to send emails",
    });
  }
});

router.get("/history", async (req, res) => {
  try {
    const history = await MailHistory.find().sort({ sentAt: -1 });

    res.status(200).json(history);
  } catch (error) {
    console.log("Failed to fetch history:", error);

    res.status(500).json({
      message: "Failed to fetch mail history",
    });
  }
});

module.exports = router;
