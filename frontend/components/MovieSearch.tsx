"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MovieSearchProps {
  onSearch: (imdbId: string) => void;
  loading: boolean;
}

export default function MovieSearch({ onSearch, loading }: MovieSearchProps) {
  const [imdbId, setImdbId] = useState("");
  const [validationError, setValidationError] = useState("");

  const validateImdbId = (id: string): boolean => {
    const trimmedId = id.trim();
    if (!trimmedId) {
      setValidationError("IMDb ID is required");
      return false;
    }
    if (!/^tt\d{7,8}$/.test(trimmedId)) {
      setValidationError("Invalid format. Use: tt followed by 7-8 digits (e.g., tt0133093)");
      return false;
    }
    setValidationError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateImdbId(imdbId)) {
      onSearch(imdbId.trim());
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImdbId(e.target.value);
    if (validationError) {
      setValidationError("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={imdbId}
            onChange={handleChange}
            placeholder="Search by IMDb ID (e.g., tt0133093)"
            className="flex-1 px-4 py-3 rounded-md bg-[#2a2a2a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f5c518] focus:border-transparent transition-all text-sm font-poppins"
            disabled={loading}
          />
          <Button
            type="submit"
            disabled={loading || !imdbId.trim()}
            size="lg"
            className="whitespace-nowrap"
          >
            {loading ? (
              <span className="flex items-center gap-2 justify-center">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Searching...
              </span>
            ) : (
              "Search"
            )}
          </Button>
        </div>
        {validationError && (
          <div className="text-red-400 text-xs px-2 flex items-center gap-2 bg-red-900/20 py-2 rounded-md border border-red-800">
            <span>⚠️</span>
            {validationError}
          </div>
        )}
      </form>
    </div>
  );
}
