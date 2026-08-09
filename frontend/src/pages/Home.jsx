import Button from "../components/Button";
import EmailCountCard from "../components/EmailCountCard";
import FileUploader from "../components/FileUploader";
import Footer from "../components/Footer";
import MessageInput from "../components/MessageInput";
import Navbar from "../components/Navbar";
import StatusMessage from "../components/StatusMessage";
import SubjectInput from "../components/SubjectInput";
import { useState } from "react";

function Home() {
  const [emailList, setEmailList] = useState([]);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);
  const [status, setStatus] = useState("idle");
  const [fileName, setFileName] = useState(null);
  const totalEmail = emailList;
  const isFormValid =
    totalEmail.length > 0 && subject.trim() !== "" && message.trim() !== "";
  const handleReset = () => {
    setEmailList([]);
    setSubject("");
    setMessage("");
    setFileUploaded(false);
    setFileName(null);
  };
  return (
    <>
      <div className="min-h-screen bg-[#141E30] text-white">
        <Navbar />
        <div className="flex justify-center mt-12">
          <div className="w-[80%] rounded-3xl bg-[#141E30] shadow-[6px_6px_12px_#0D1625,-6px_-6px_12px_#1D2B43] p-10">
            <SubjectInput subject={subject} setSubject={setSubject} />
            <FileUploader
              setEmailList={setEmailList}
              setFileUploaded={setFileUploaded}
              fileName={fileName}
              setFileName={setFileName}
            />
            <MessageInput message={message} setMessage={setMessage} />
            <EmailCountCard emailList={emailList} fileUploaded={fileUploaded} />
            <Button
              setStatus={setStatus}
              totalEmail={totalEmail}
              subject={subject}
              message={message}
              disabled={!isFormValid}
              onSuccess={handleReset}
            />
            <StatusMessage status={status} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
