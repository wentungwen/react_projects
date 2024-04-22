import { Place } from "./Place";

interface SearchResponse {
  features: {
    geometry: {
      coordinates: number[];
    };
    properties: {
      place_id: number;
      display_name: string;
    };
  }[];
}

// const sampleResponse: SearchResponse = [
//   {
//     features: [
//       {
//         geometry: {
//           coordinates: [40.7128, -74.006],
//         },
//         properties: {
//           place_id: 1,
//           display_name: "New York City, USA",
//         },
//       },
//       {
//         geometry: {
//           coordinates: [34.0522, -118.2437],
//         },
//         properties: {
//           place_id: 2,
//           display_name: "Los Angeles, USA",
//         },
//       },
//     ],
//   },
// ];

export const search = async (term: string) => {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`
  );
  //   (method 1) const data = (await res.json()) as SearchResponse;
  const data: SearchResponse = await res.json();

  const places: Place[] = data.features.map((feature) => {
    return {
      id: feature.properties.place_id,
      name: feature.properties.display_name,
      longitude: feature.geometry.coordinates[0],
      latitude: feature.geometry.coordinates[1],
    };
  });
  return places
};
