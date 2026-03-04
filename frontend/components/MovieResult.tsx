"use client";

import Image from "next/image";

interface MovieResultProps {
  movie: any;
}

export default function MovieResult({ movie }: MovieResultProps) {
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment?.toUpperCase()) {
      case "POSITIVE":
        return "bg-green-600 text-white";
      case "NEGATIVE":
        return "bg-red-600 text-white";
      case "MIXED":
        return "bg-yellow-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  return (
    <div className="max-w-7xl mx-auto animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 p-6">
          {/* Poster */}
          <div className="relative">
            <div className="relative aspect-[2/3] w-full max-w-[300px] mx-auto lg:mx-0 rounded overflow-hidden">
              {movie.poster && movie.poster !== "N/A" ? (
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-[#2a2a2a] flex items-center justify-center">
                  <span className="text-gray-600 text-5xl">🎬</span>
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            {/* Title and Year */}
            <div className="mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {movie.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                {movie.year && <span>{movie.year}</span>}
                {movie.year && movie.rating && <span>•</span>}
                {movie.rating && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-[#f5c518] text-black px-2 py-1 rounded font-semibold">
                      <span>⭐</span>
                      <span>{movie.rating}</span>
                    </div>
                    <span className="text-gray-500">/10</span>
                  </div>
                )}
              </div>
            </div>

            {/* Plot */}
            {movie.plot && (
              <div className="mb-6">
                <p className="text-gray-300 text-base leading-relaxed">
                  {movie.plot}
                </p>
              </div>
            )}

            {/* Cast */}
            {movie.cast && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Stars</h3>
                <p className="text-white text-sm">{movie.cast}</p>
              </div>
            )}

            {/* AI Insights */}
            {movie.aiInsight && (
              <div className="mt-auto">
                <div className="bg-[#2a2a2a] rounded-lg p-5 border border-gray-700">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🤖</span>
                      <h3 className="text-lg font-semibold text-white">AI Analysis</h3>
                    </div>
                    <span
                      className={`px-3 py-1 rounded text-xs font-bold uppercase ${getSentimentColor(
                        movie.aiInsight.sentiment
                      )}`}
                    >
                      {movie.aiInsight.sentiment}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {movie.aiInsight.summary}
                  </p>
                  
                  {movie.reviews && movie.reviews.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-700 text-gray-400 text-xs flex items-center gap-2">
                      <span>💬</span>
                      <span>Based on {movie.reviews.length} review{movie.reviews.length !== 1 ? "s" : ""}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Additional Info Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Movie Details */}
        <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-800">
          <h2 className="text-xl font-semibold text-white mb-4">Details</h2>
          <div className="space-y-3">
            {movie.year && (
              <div className="flex">
                <span className="text-gray-400 w-24 text-sm">Year</span>
                <span className="text-white text-sm">{movie.year}</span>
              </div>
            )}
            {movie.rating && (
              <div className="flex">
                <span className="text-gray-400 w-24 text-sm">Rating</span>
                <span className="text-white text-sm">{movie.rating}/10</span>
              </div>
            )}
            {movie.cast && (
              <div className="flex">
                <span className="text-gray-400 w-24 text-sm">Cast</span>
                <span className="text-white text-sm">{movie.cast}</span>
              </div>
            )}
          </div>
        </div>

        {/* Sentiment Analysis */}
        {movie.aiInsight && (
          <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-4">Sentiment</h2>
            <div className="flex items-center gap-4">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl ${getSentimentColor(movie.aiInsight.sentiment)}`}>
                {movie.aiInsight.sentiment === "POSITIVE" && "😊"}
                {movie.aiInsight.sentiment === "NEGATIVE" && "😞"}
                {movie.aiInsight.sentiment === "MIXED" && "😐"}
              </div>
              <div>
                <p className="text-2xl font-bold text-white capitalize">
                  {movie.aiInsight.sentiment.toLowerCase()}
                </p>
                <p className="text-sm text-gray-400">Overall audience sentiment</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
