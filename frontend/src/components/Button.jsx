import { HiOutlinePaperAirplane } from "react-icons/hi2";
import sendEmails from "../services/api";

function Button({
  totalEmail,
  subject,
  message,
  setStatus,
  disabled,
  onSuccess,
}) {
  const handleSend = async () => {
    try {
      setStatus("sending");

      const response = await sendEmails(totalEmail, subject, message);

      console.log(response.data);

      setStatus("success");
      onSuccess();
    } catch (error) {
      console.log(error);

      setStatus("error");
    }
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <button
          disabled={disabled}
          onClick={handleSend}
          className={`flex items-center gap-3 px-16 py-4 rounded-xl
  bg-[#35577D]
  text-[#C1CEDD]
  shadow-[5px_5px_10px_#0D1625,-5px_-5px_10px_#1D2B43]
  ${
    disabled
      ? "cursor-not-allowed opacity-50"
      : "cursor-pointer hover:shadow-[3px_3px_7px_#0D1625,-3px_-3px_7px_#1D2B43]"
  }
  transition-all duration-300`}
        >
          <HiOutlinePaperAirplane className="text-[#AFC7DF] text-xl" />
          <span>Send Emails</span>
        </button>
      </div>
      {disabled && (
        <p className="text-red-500 italic text-center text-sm md:text-xl mt-5">
          Fill all mandatory fields to send mail
        </p>
      )}
    </>
  );
}

export default Button;
