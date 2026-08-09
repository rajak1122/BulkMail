const Footer = () => {
  return (
    <footer className="mt-16 px-6 pb-6">
      <div
        className="
           mx-auto
          rounded-2xl
          px-6 py-5
          flex flex-col md:flex-row
          items-center justify-between
          gap-3
          bg-[#141E30]
          border border-[#35577D]/40
          shadow-[8px_8px_18px_rgba(5,12,25,0.6),-6px_-6px_16px_rgba(53,87,125,0.18)]
        "
      >
        <p className="text-sm text-[#A8B8CC]">
          © 2026 <span className="font-semibold text-[#E8EEF5]">BulkMail</span>.
          All rights reserved.
        </p>

        <p className="text-sm text-[#7FA8D0]">Simple. Fast. Reliable.</p>
      </div>
    </footer>
  );
};

export default Footer;
