import axios from "axios";

function sendEmails(totalEmail, subject, message) {
  return axios.post("https://bulkmail-backend-gbj0.onrender.com/sendemail", {
    totalEmail,
    subject,
    message,
  });
}

export default sendEmails;
