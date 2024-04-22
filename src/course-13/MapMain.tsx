import React from "react";
import type { Place } from "./api/Place.ts";
import Map from "./components/Map.tsx";
import LocationSearch from "./components/LocationSearch.tsx";
import { useState } from "react";

export default function MapMain() {
  const [place, setPlace] = useState<Place | null>(null);
  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <div className="col-span-3 p-2">
        <LocationSearch onPlaceClick={(p) => setPlace(p)} />
      </div>
      <div className="col-span-9">
        <Map place={place} />
      </div>
    </div>
  );
}
