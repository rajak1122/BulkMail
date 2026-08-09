function HistoryHeader() {
  return (
    <div className="text-center mb-10">
      <p className="text-[#6d9bc7] text-sm md:text-base uppercase tracking-[0.3em] font-medium mb-3">
        Dashboard
      </p>

      <h1 className="text-4xl md:text-6xl font-semibold text-white/90 tracking-wide">
        Mail History
      </h1>

      <p className="text-white/45 mt-3 text-sm md:text-lg">
        Track and manage your previously sent campaigns
      </p>
    </div>
  );
}

export default HistoryHeader;
