import { HiOutlineEnvelope } from "react-icons/hi2";

function Navbar({ isHistory = false }) {
  const handleNavigation = () => {
    window.location.href = isHistory ? "/" : "/history";
  };

  return (
    <div className="flex items-center justify-between p-3 sticky top-0 z-20 bg-[#141E30]">
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div
          className="
            w-14 h-14 rounded-2xl
            bg-[#141E30]
            flex items-center justify-center
            shadow-[-6px_-6px_12px_#35577D,6px_6px_12px_#0b111c]
          "
        >
          <HiOutlineEnvelope className="text-3xl text-white/80" />
        </div>

        {/* Brand */}
        <div>
          <h1 className="text-2xl md:text-5xl font-medium text-white/90 tracking-wide">
            BulkMail
          </h1>

          <p className="text-sm md:text-xl text-white/50 mt-1">
            {isHistory ? (
              "View your previously sent emails"
            ) : (
              <>
                Send emails using <span className="text-[#6d9bc7]">Excel</span>{" "}
                files
              </>
            )}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={handleNavigation}
        className="
          px-5 py-2
          rounded-2xl
          bg-[#141E30]
          text-white/85
          font-medium
          shadow-[-5px_-5px_10px_#35577D,5px_5px_10px_#0b111c]
          hover:shadow-[inset_4px_4px_8px_#0b111c,inset_-4px_-4px_8px_#35577D]
          transition-all duration-200
          cursor-pointer
          md:text-2xl
        "
      >
        {isHistory ? "Home" : "History"}
      </button>
    </div>
  );
}

export default Navbar;
