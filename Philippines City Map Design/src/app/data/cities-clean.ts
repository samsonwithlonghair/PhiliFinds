export interface City {
  id: string;
  name: string;
  region: string;
  province: string;
  description: string;
  population?: string;
  knownFor: string[];
  imageUrl?: string;
  touristPhotos?: string[];
  touristActivities?: string[];
}

export const philippineCities: City[] = [
  // --- METRO MANILA ---
  {
    id: "manila",
    name: "Manila",
    region: "National Capital Region (NCR)",
    province: "Metro Manila",
    description: "Capital city with rich history and culture.",
    population: "1.8 million",
    knownFor: ["Historic Intramuros", "Rizal Park", "Manila Bay sunset", "Cultural heritage"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1585725657613-b0030aaabccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBQaGlsaXBwaW5lcyUyMGNpdHklMjBza3lsaW5lfGVufDF8fHx8MTc3NjI2NTM5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbnRyYW11cm9zJTIwTWFuaWxhfGVufDF8fHx8MTc3NjI2NTM5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519730328337-58dccc8b8421?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBCYXklMjBzdW5zZXR8ZW58MXx8fHwxNzc2MjY1Mzk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSaXphbCUyMFBhcmslMjBNYW5pbGF8ZW58MXx8fHwxNzc2MjY1Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBDaXR5JTIwaGFsbCUyMGF0JTIwbmlnaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Heritage walks",
      "Museums",
      "Food trips",
      "Nightlife",
      "Waterfront views"
    ]
  },
  {
    id: "quezon-city",
    name: "Quezon City",
    region: "National Capital Region (NCR)",
    province: "Metro Manila",
    description: "Largest city with entertainment and universities.",
    population: "3.0 million",
    knownFor: ["Entertainment district", "Universities", "Shopping centers", "Quezon Memorial Circle"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxRdWV6b24lMjBNZW1vcmlhbCUyMENpcmNsZSUyMGF0JTIwbmlnaHR8ZW58MXx8fHwxNzc2MjY1NDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUdXJuaW5nJTIwY2l0eSUyMGF0JTIwbmlnaHQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Parks",
      "Food trips",
      "Nightlife",
      "Campus tours"
    ]
  },
  {
    id: "makati",
    name: "Makati",
    region: "National Capital Region (NCR)",
    province: "Metro Manila",
    description: "Financial hub with shopping and nightlife.",
    population: "600,000",
    knownFor: ["Business district", "Shopping malls", "Fine dining", "Ayala Center"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Shopping",
      "Museums",
      "Nightlife",
      "Rooftop bars",
      "Food trips"
    ]
  },
  {
    id: "pasay",
    name: "Pasay",
    region: "National Capital Region (NCR)",
    province: "Metro Manila",
    description: "Airport city with shopping and entertainment.",
    population: "440,000",
    knownFor: ["NAIA Airport", "Entertainment City", "Mall of Asia", "Resorts World"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBzdW5zZXR8ZW58MXx8fHwxNzc2MjY1Mzk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaG9wcGluZyUyMG1hbGwlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Shopping",
      "Entertainment",
      "Cultural shows",
      "Casinos"
    ]
  },
  {
    id: "taguig",
    name: "Taguig",
    region: "National Capital Region (NCR)",
    province: "Metro Manila",
    description: "Modern business district with street art and shopping.",
    population: "900,000",
    knownFor: ["Bonifacio Global City", "Venice Grand Canal Mall", "Fort Bonifacio", "Modern urban planning"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Street art",
      "Museums",
      "Shopping",
      "Food trips",
      "Nightlife"
    ]
  },
  {
    id: "pasig",
    name: "Pasig",
    region: "National Capital Region (NCR)",
    province: "Metro Manila",
    description: "Business district with shopping and dining.",
    population: "800,000",
    knownFor: ["Ortigas Center", "Kapitolyo food hub", "Pasig River", "Modern developments"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Shopping",
      "Food trips",
      "Dining"
    ]
  },
  {
    id: "mandaluyong",
    name: "Mandaluyong",
    region: "National Capital Region (NCR)",
    province: "Metro Manila",
    description: "Shopping hub with commercial districts.",
    population: "425,000",
    knownFor: ["Shopping centers", "MRT stations", "Commercial districts", "Residential areas"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Shopping",
      "Food trips"
    ]
  },
  {
    id: "san-juan",
    name: "San Juan",
    region: "National Capital Region (NCR)",
    province: "Metro Manila",
    description: "Small city with dining and food scenes.",
    population: "130,000",
    knownFor: ["Greenhills Shopping Center", "Food hubs", "Residential areas", "Historical sites"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Food trips",
      "Dining"
    ]
  },

  // --- VISAYAS ---
  {
    id: "cebu",
    name: "Cebu",
    region: "Central Visayas (Region VII)",
    province: "Cebu",
    description: "Queen City of the South with heritage and beaches.",
    population: "1.0 million",
    knownFor: ["Sinulog Festival", "Historical landmarks", "Beach resorts", "Business center"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwUGhpbGlwcGluZXMlMjBvY2VhbiUyMG9jYW5zfGVufDF8fHx8fDE3NzYyNjUzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwQ2l0eSUyMGF0JTIwbmluaHQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTE&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWt0YW4lMjBTaHJpbmUlMjBDZWJ1JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwU2ludWxvZyUyMEZlc3RpdmFsJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwSGlzdG9yaWMlMjBjaHVyY2glMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwYmVhY2glMjByZXNvcnQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Heritage sites",
      "Festivals",
      "Food trips",
      "Beaches",
      "Island hopping",
      "Diving"
    ]
  },
  {
    id: "lapu-lapu",
    name: "Lapu-Lapu",
    region: "Central Visayas (Region VII)",
    province: "Cebu",
    description: "Historical city with beaches and water sports.",
    population: "497,000",
    knownFor: ["Mactan beaches", "Guitar making", "Historical sites", "Beach resorts"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWt0YW4lMjBTaHJpbmUlMjBDZWJ1JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwQ2l0eSUyMGF0JTIwbmluaHQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTE&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwU2ludWxvZyUyMEZlc3RpdmFsJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwSGlzdG9yaWMlMjBjaHVyY2glMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwYmVhY2glMjByZXNvcnQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwUGhpbGlwcGluZXMlMjBvY2VhbiUyMG9jYW5zfGVufDF8fHx8fDE3NzYyNjUzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Historical sites",
      "Beach resorts",
      "Water sports",
      "Seafood dining"
    ]
  },
  {
    id: "bohol",
    name: "Bohol",
    region: "Central Visayas (Region VII)",
    province: "Bohol",
    description: "Nature destination with wildlife and beaches.",
    population: "1.4 million",
    knownFor: ["Chocolate Hills", "Pristine beaches", "Tarsier sanctuary", "Heritage sites"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWt0YW4lMjBTaHJpbmUlMjBDZWJ1JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwQ2l0eSUyMGF0JTIwbmluaHQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTE&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwU2ludWxvZyUyMEZlc3RpdmFsJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwSGlzdG9yaWMlMjBjaHVyY2glMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwYmVhY2glMjByZXNvcnQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwUGhpbGlwcGluZXMlMjBvY2VhbiUyMG9jYW5zfGVufDF8fHx8fDE3NzYyNjUzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Nature trips",
      "Wildlife watching",
      "River cruises",
      "Beaches"
    ]
  },
  {
    id: "bacolod",
    name: "Bacolod",
    region: "Western Visayas (Region VI)",
    province: "Negros Occidental",
    description: "City of Smiles with festivals and heritage.",
    population: "600,000",
    knownFor: ["MassKara Festival", "Chicken inasal", "Sugar industry", "Cultural heritage"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWt0YW4lMjBTaHJpbmUlMjBDZWJ1JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwQ2l0eSUyMGF0JTIwbmluaHQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTE&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwU2ludWxvZyUyMEZlc3RpdmFsJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwSGlzdG9yaWMlMjBjaHVyY2glMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwYmVhY2glMjByZXNvcnQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwUGhpbGlwcGluZXMlMjBvY2VhbiUyMG9jYW5zfGVufDF8fHx8fDE3NzYyNjUzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Festivals",
      "Heritage sites",
      "Food trips",
      "Dining"
    ]
  },

  // --- LUZON ---
  {
    id: "baguio",
    name: "Baguio",
    region: "Cordillera Administrative Region (CAR)",
    province: "Benguet",
    description: "Summer Capital with parks and cool climate.",
    population: "366,000",
    knownFor: ["Cool weather", "Session Road", "Burnham Park", "Strawberry farms"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1677215552516-1f2a2aa46915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWd1aW8lMjBQaGlsaXBwaW5lcyUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzYyNjUzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWd1aW8lMjBCdXJuYW1lJTIwUGFyayUyMGF0JTIwZGF3bnxlbnwxfHx8fDE3NzYyNjU0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWd1aW8lMjBTZXNzaW9uJTIwUm9hZCUyMGF0JTIwbmlnaHR8ZW58MXx8fHwxNzc2MjY1NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWd1aW8lMjBNaW5lJTIwVmlldyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWd1aW8lMjBTdHJhd2JlcnJ5JTIwZmFybXMlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWd1aW8lMjBQaW5lJTIwdHJlZXMlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Parks",
      "Markets",
      "Food trips",
      "Shopping",
      "Farm visits"
    ]
  },
  {
    id: "palawan",
    name: "Palawan",
    region: "MIMAROPA (Region IV-B)",
    province: "Palawan",
    description: "Last frontier with islands and diving.",
    population: "1.1 million",
    knownFor: ["Last frontier", "Underground River", "El Nido", "Coron"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWt0YW4lMjBTaHJpbmUlMjBDZWJ1JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwQ2l0eSUyMGF0JTIwbmluaHQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTE&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwU2ludWxvZyUyMEZlc3RpdmFsJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwSGlzdG9yaWMlMjBjaHVyY2glMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwYmVhY2glMjByZXNvcnQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDZWJ1JTIwUGhpbGlwcGluZXMlMjBvY2VhbiUyMG9jYW5zfGVufDF8fHx8fDE3NzYyNjUzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Island hopping",
      "Underground river",
      "Diving",
      "Beaches"
    ]
  },

  // --- MINDANAO ---
  {
    id: "davao",
    name: "Davao",
    region: "Davao Region (Region XI)",
    province: "Davao del Sur",
    description: "Largest city with wildlife and nature parks.",
    population: "1.8 million",
    knownFor: ["Mount Apo", "Durian", "Philippine Eagle", "Safe and clean"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1752175118780-6a84175356ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYXZhbyUyMFBoaWxpcHBpbmVzJTIwbmF0dXJlfGVufDF8fHx8MTc3NjI2NTM5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYXZhbyUyMENpdHklMjBhdCUyMG5pZ2h0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3VudCUyMEFwbyUyMERhdmFvJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lJTIwRWFnbGUlMjBjZW50ZXIlMjBEYXZhbyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYXZhbyUyMGJlYWNoJTIwcmVzb3J0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYXZhbyUyMGR1cmlhbiUyMGZydWl0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Wildlife watching",
      "Nature parks",
      "Beaches",
      "Food trips",
      "Festivals"
    ]
  },
  {
    id: "cagayan-de-oro",
    name: "Cagayan de Oro",
    region: "Northern Mindanao (Region X)",
    province: "Misamis Oriental",
    description: "City of Golden Friendship with adventure activities.",
    population: "728,000",
    knownFor: ["White water rafting", "Festivals", "Pineapple", "Gateway to Northern Mindanao"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1752175118780-6a84175356ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYXZhbyUyMFBoaWxpcHBpbmVzJTIwbmF0dXJlfGVufDF8fHx8MTc3NjI2NTM5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYXZhbyUyMENpdHklMjBhdCUyMG5pZ2h0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3VudCUyMEFwbyUyMERhdmFvJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lJTIwRWFnbGUlMjBjZW50ZXIlMjBEYXZhbyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYXZhbyUyMGJlYWNoJTIwcmVzb3J0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYXZhbyUyMGR1cmlhbiUyMGZydWl0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "White water rafting",
      "Caving",
      "Parks",
      "Museums"
    ]
  }
];
