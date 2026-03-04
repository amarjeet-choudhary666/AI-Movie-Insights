"use client";

import { useState } from "react";
import MovieSearch from "@/components/MovieSearch";
import MovieResult from "@/components/MovieResult";

export default function Home() {
  const [movieData, setMovieData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (imdbId: string) => {
    setLoading(true);
    setError("");
    setMovieData(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/movies/insight`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imdbId }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        // Handle validation errors
        if (Array.isArray(data)) {
          throw new Error(data[0]?.message || "Validation failed");
        }
        throw new Error(data.message || "Failed to fetch movie");
      }

      setMovieData(data.data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header */}
      <header className="bg-[#1a1a1a] border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="bg-[#f5c518] text-black font-bold px-2 py-1 rounded text-sm">
                  IMDb
                </div>
                <span className="text-xl font-semibold">AI Movie Insights</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <div className="bg-[#1a1a1a] border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Discover AI-Powered Movie Insights
          </h1>
          <MovieSearch onSearch={handleSearch} loading={loading} />
          
          {error && (
            <div className="max-w-2xl mx-auto mt-4 p-4 bg-red-900/20 border border-red-800 rounded text-red-200 text-sm">
              <div className="flex items-center gap-2">
                <span>⚠️</span>
                {error}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-8">
        {movieData && <MovieResult movie={movieData} />}
      </div>
    </main>
  );
}
