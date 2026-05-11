import { City } from "../data/cities";

export type IslandGroup = 'Luzon' | 'Visayas' | 'Mindanao';

// Map regions to their island groups
const regionToIslandGroup: Record<string, IslandGroup> = {
  // Luzon
  "National Capital Region (NCR)": "Luzon",
  "Cordillera Administrative Region (CAR)": "Luzon",
  "Ilocos Region (Region I)": "Luzon",
  "Cagayan Valley (Region II)": "Luzon",
  "Central Luzon (Region III)": "Luzon",
  "CALABARZON (Region IV-A)": "Luzon",
  "MIMAROPA (Region IV-B)": "Luzon",
  "Bicol Region (Region V)": "Luzon",
  
  // Visayas
  "Western Visayas (Region VI)": "Visayas",
  "Central Visayas (Region VII)": "Visayas",
  "Eastern Visayas (Region VIII)": "Visayas",
  
  // Mindanao
  "Zamboanga Peninsula (Region IX)": "Mindanao",
  "Northern Mindanao (Region X)": "Mindanao",
  "Davao Region (Region XI)": "Mindanao",
  "SOCCSKSARGEN (Region XII)": "Mindanao",
  "Caraga (Region XIII)": "Mindanao",
  "BARMM (Bangsamoro Autonomous Region)": "Mindanao",
};

export function getIslandGroup(region: string): IslandGroup {
  return regionToIslandGroup[region] || "Luzon";
}

export function filterCitiesByIslandGroup(cities: City[], islandGroup: IslandGroup): City[] {
  return cities.filter(city => getIslandGroup(city.region) === islandGroup);
}

export function getCityCountByIslandGroup(cities: City[], islandGroup: IslandGroup): number {
  return filterCitiesByIslandGroup(cities, islandGroup).length;
}
