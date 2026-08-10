import {
  HiOutlineEnvelope,
  HiOutlineUsers,
  HiOutlineCalendarDays,
} from "react-icons/hi2";

function HistoryCard({ mail }) {
  const formattedDate = new Date(mail.sentAt).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className="
        rounded-3xl
        p-6 md:p-7
        bg-[#141E30] shadow-[6px_6px_12px_#0D1625,-6px_-6px_12px_#1D2B43] hover:shadow-[4px_4px_14px_#0A111D,-4px_-4px_14px_#2A4263] transition-all duration-300
      "
    >
      {/* Top */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div
            className="
              w-12 h-12
              rounded-2xl
              bg-[#141E30]
              flex items-center justify-center
              text-xl text-[#6d9bc7]
              shadow-[inset_4px_4px_8px_#0b111c,inset_-4px_-4px_8px_#35577D]
            "
          >
            <HiOutlineEnvelope />
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold text-white/90">
              {mail.subject}
            </h3>

            <p className="text-sm text-white/40 mt-1">{mail.senderEmail}</p>
          </div>
        </div>

        {/* Status */}
        <span
          className="
            self-start md:self-auto
            px-4 py-2
            rounded-full
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-[#8fc7a5]
            bg-[#141E30]
            shadow-[inset_3px_3px_6px_#0b111c,inset_-3px_-3px_6px_#35577D]
          "
        >
          ● {mail.status}
        </span>
      </div>

      {/* Message */}
      <p className="text-white/50 text-sm md:text-base mt-6 leading-relaxed">
        {mail.message}
      </p>

      {/* Bottom information */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-5 mt-7 pt-5 border-t border-white/10">
        <div className="flex items-center gap-2 text-white/45 text-sm">
          <HiOutlineUsers className="text-lg text-[#6d9bc7]" />
          <span>
            {mail.recipientCount} recipient
            {mail.recipientCount !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="flex items-center gap-2 text-white/45 text-sm">
          <HiOutlineCalendarDays className="text-lg text-[#6d9bc7]" />
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
