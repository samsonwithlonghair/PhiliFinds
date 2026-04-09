"use client";

import { useEffect, useState } from "react";

export default function Results() {
  const [itinerary, setItinerary] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("itinerary");

    if (stored) {
      setItinerary(stored);
    }
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Itinerary</h1>

      {itinerary ? (
        <div className="bg-black-100 p-4 rounded-lg whitespace-pre-wrap">
          {itinerary}
        </div>
      ) : (
        <p>No itinerary found.</p>
      )}
    </div>
  );
}