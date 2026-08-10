import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import HistoryHeader from "../components/HistoryHeader";
import HistoryStats from "../components/HistoryStats";
import HistoryCard from "../components/HistoryCard";
import EmptyHistory from "../components/EmptyHistory";
import Footer from "../components/Footer";

function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch("https://vercel.app");

        if (!response.ok) {
          throw new Error("Failed to fetch history");
        }

        const data = await response.json();
        setHistory(data);
      } catch (error) {
        console.error("History fetch failed:", error);
        setError("Unable to load mail history.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-[#141E30] text-white">
      {/* Navbar */}
      <Navbar isHistory={true} />

      {/* Main */}
      <main className="max-w-6xl mx-auto px-5 md:px-8 py-12">
        <HistoryHeader />

        {/* Loading */}
        {loading && (
          <div className="text-center py-20">
            <div
              className="
                inline-block
                w-10 h-10
                rounded-full
                border-4
                border-[#35577D]
                border-t-[#6d9bc7]
                animate-spin
              "
            />

            <p className="text-white/40 mt-5">Loading your mail history...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div
            className="
              rounded-3xl
              bg-[#141E30]
              p-8
              text-center
              text-red-300
              shadow-[-8px_-8px_16px_#35577D,8px_8px_16px_#0b111c]
            "
          >
            {error}
          </div>
        )}

        {/* Data */}
        {!loading && !error && (
          <>
            <HistoryStats history={history} />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
                    Recent Campaigns
                  </h2>

                  <p className="text-white/40 text-sm mt-1">
                    Your latest sent emails
                  </p>
                </div>
              </div>

              {history.length === 0 ? (
                <EmptyHistory />
              ) : (
                <div className="space-y-6">
                  {history.map((mail) => (
                    <HistoryCard key={mail._id} mail={mail} />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default History;
