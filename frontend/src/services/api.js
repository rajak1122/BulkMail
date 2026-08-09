import axios from "axios";

function sendEmails(totalEmail, subject, message) {
  return axios.post("http://localhost:5000/sendemail", {
    totalEmail,
    subject,
    message,
  });
}

export default sendEmails;
