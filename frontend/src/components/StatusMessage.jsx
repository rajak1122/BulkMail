import { useState } from "react";
import {
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
} from "react-icons/hi2";

function StatusMessage({ status }) {
  return (
    <>
      <div className="mt-10">
        {status === "sending" && (
          <p className="flex justify-center text-2xl items-center gap-2">
            <HiOutlineClock className="text-2xl mt-1" />
            Sending emails...
          </p>
        )}

        {status === "success" && (
          <p className="flex justify-center items-center text-2xl gap-2">
            <HiOutlineCheckCircle className="text-2xl mt-1 text-green-600" />
            Emails sent successfully
          </p>
        )}

        {status === "error" && (
          <p className="flex justify-center items-center text-2xl gap-2">
            <HiOutlineXCircle className="text-2xl mt-1 text-red-500" />
            Failed to send emails
          </p>
        )}
      </div>
    </>
  );
}

export default StatusMessage;
