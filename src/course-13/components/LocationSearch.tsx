import React, {  useState } from "react";
import type { Place } from "../api/Place.ts";
import { search } from "../api/search.ts";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [term, setTerm] = useState("");
  const [places, setPlaces] = useState<Place[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const results = await search(term);
    setPlaces(results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="font-bold" htmlFor="term">
          Search
        </label>
        <input
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
          id="term"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
      <div>
        <h1 className="font-bold mt-6">Found Locations</h1>
        {places.map((place, idx) => {
          return (
            <div key={idx} className="border border-grey-400 p-2 my-2 rounded">
              <p>{place.name}</p>
              <small>
                ({place.longitude}, {place.latitude})
              </small>
              <button
                className="bg-blue-500 text-white p-1 w-full"
                onClick={() => onPlaceClick(place)}
              >
                Go
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
