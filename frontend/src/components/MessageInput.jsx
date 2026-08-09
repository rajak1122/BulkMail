import { useState } from "react";

function MessageInput({ message, setMessage }) {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="w-[90%] md:w-[50%]">
          <h1 className="mb-2 text-lg font-medium text-[#C1CEDD] md:text-3xl">
            Message*
          </h1>

          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Type your email message here..."
            rows="8"
            className="w-full mt-3 px-6 py-5 rounded-3xl bg-[#141E30] shadow-[inset_5px_5px_10px_#0D1625,inset_-5px_-5px_10px_#1D2B43]
focus:shadow-[inset_3px_3px_7px_#0D1625,inset_-3px_-3px_7px_#1D2B43] text-white placeholder:text-[#AFC0D2] outline-none resize-none"
          />

          <p className="font-medium text-[#C1CEDD] md:text-xl">
            characters: {message.length}
          </p>
        </div>
      </div>
    </>
  );
}

export default MessageInput;
