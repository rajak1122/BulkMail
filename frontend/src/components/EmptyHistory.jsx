import { HiOutlineInbox } from "react-icons/hi2";

function EmptyHistory() {
  return (
    <div
      className="
        rounded-3xl
        bg-[#141E30]
        py-20 px-6
        text-center
        shadow-[-8px_-8px_16px_#35577D,8px_8px_16px_#0b111c]
      "
    >
      <div
        className="
          mx-auto
          w-20 h-20
          rounded-3xl
          bg-[#141E30]
          flex items-center justify-center
          text-4xl text-[#6d9bc7]
          shadow-[-5px_-5px_10px_#35577D,5px_5px_10px_#0b111c]
        "
      >
        <HiOutlineInbox />
      </div>

      <h2 className="text-2xl font-semibold text-white/85 mt-7">
        No emails sent yet
      </h2>

      <p className="text-white/40 mt-2">
        Your sent email campaigns will appear here.
      </p>
    </div>
  );
}

export default EmptyHistory;
