import axios from "axios";

function sendEmails(totalEmail, subject, message) {
  return axios.post("https://bulk-mail-hqnw.vercel.app/sendemail", {
    totalEmail,
    subject,
    message,
  });
}

export default sendEmails;
