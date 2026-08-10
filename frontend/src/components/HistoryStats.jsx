import {
  HiOutlinePaperAirplane,
  HiOutlineUsers,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

function HistoryStats({ history }) {
  const totalMails = history.length;

  const totalRecipients = history.reduce(
    (total, item) => total + (item.recipientCount || 0),
    0,
  );

  const lastStatus = history.length > 0 ? history[0].status : "—";

  const stats = [
    {
      title: "TOTAL MAILS",
      value: totalMails,
      icon: <HiOutlinePaperAirplane />,
    },
    {
      title: "RECIPIENTS",
      value: totalRecipients,
      icon: <HiOutlineUsers />,
    },
    {
      title: "LAST STATUS",
      value: lastStatus,
      icon: <HiOutlineCheckCircle />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="
            rounded-3xl
            px-6 py-7
            flex items-center justify-between
            bg-[#141E30] shadow-[6px_6px_12px_#0D1625,-6px_-6px_12px_#1D2B43] hover:shadow-[4px_4px_14px_#0A111D,-4px_-4px_14px_#2A4263] transition-all duration-300
          "
        >
          <div>
            <p className="text-xs tracking-[0.2em] text-white/40 font-medium">
              {stat.title}
            </p>

            <p className="text-3xl font-semibold text-white/90 mt-2 capitalize">
              {stat.value}
            </p>
          </div>

          <div
            className="
              w-12 h-12
              rounded-2xl
              bg-[#141E30]
              flex items-center justify-center
              text-2xl text-[#6d9bc7]
              shadow-[-4px_-4px_8px_#35577D,4px_4px_8px_#0b111c]
            "
          >
            {stat.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HistoryStats;
