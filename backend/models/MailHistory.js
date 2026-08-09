const mongoose = require("mongoose");

const mailHistorySchema = new mongoose.Schema({
  senderEmail: {
    type: String,
    required: true,
  },

  subject: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },

  recipients: {
    type: [String],
    required: true,
  },

  recipientCount: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },

  sentAt: {
    type: Date,
    default: Date.now,
  },
});

const MailHistory = mongoose.model("MailHistory", mailHistorySchema);

module.exports = MailHistory;
