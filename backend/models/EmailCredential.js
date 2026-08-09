const mongoose = require("mongoose");

const emailCredentialSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  appPassword: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const EmailCredential = mongoose.model(
  "EmailCredential",
  emailCredentialSchema,
);

module.exports = EmailCredential;
