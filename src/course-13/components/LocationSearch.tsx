import React, { useState } from "react";
import type { Place } from "../api/Place.ts";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}

export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [places, setPlaces] = useState<Place[]>([]);
  return (
    <div>
      <h1> Search for a Location!</h1>
    </div>
  );
}
