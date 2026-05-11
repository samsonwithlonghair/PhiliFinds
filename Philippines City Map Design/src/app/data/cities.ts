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
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSaW50byUyMFRob21hcyUyMEJhc2lsaWNhJTIwTWFuaWxhfGVufDF8fHx8MTc3NjI2NTQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBmb29kJTIyMHN0cmVldCUyMGZvb2QlMjBzdGFsbHMlMjBQaGlsaXBwaW5lcyUyMGN1aXNpbmV8ZW58MXx8fHwxNzYyNjY1NDAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBmb3J0JTIwU2FudGklzYWdvJTIwTWFuaWxhfGVufDF8fHx8fDE3NzYyNjY1NDAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
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
  {
    id: "paranaque",
    name: "Parañaque",
    region: "National Capital Region (NCR)",
    province: "Metro Manila",
    description: "Known for its entertainment districts and residential communities.",
    population: "689,000",
    knownFor: ["Entertainment districts", "Casinos", "Residential areas", "Shopping centers"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Entertainment",
      "Shopping",
      "Dining",
      "Casinos"
    ]
  },
    {
    id: "muntinlupa",
    name: "Muntinlupa",
    region: "National Capital Region (NCR)",
    province: "Metro Manila",
    description: "The Emerald City of the Philippines, known for its progressive development.",
    population: "543,000",
    knownFor: ["Progressive development", "Commercial centers", "Residential areas", "Historical sites"],
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
      "Dining",
      "Parks"
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
  {
    id: "iloilo",
    name: "Iloilo",
    region: "Western Visayas (Region VI)",
    province: "Iloilo",
    description: "City of Heritage with Spanish colonial architecture.",
    population: "450,000",
    knownFor: ["Spanish heritage", "Churches", "Food heritage", "River esplanade"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Heritage tours",
      "Church visits",
      "Food trips",
      "River walks"
    ]
  },
  {
    id: "tacloban",
    name: "Tacloban",
    region: "Eastern Visayas (Region VIII)",
    province: "Leyte",
    description: "Historical city known for WWII significance.",
    population: "250,000",
    knownFor: ["WWII history", "San Juanico Bridge", "Historical sites", "Gateway to Eastern Visayas"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Historical tours",
      "Bridge visits",
      "Museums",
      "Cultural sites"
    ]
  },
  {
    id: "dumaguete",
    name: "Dumaguete",
    region: "Central Visayas (Region VII)",
    province: "Negros Oriental",
    description: "City of Gentle People with universities and diving.",
    population: "130,000",
    knownFor: ["Universities", "Diving spots", "Rizal Boulevard", "Gentle people"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Diving",
      "University tours",
      "Boulevard walks",
      "Island hopping"
    ]
  },

  // Additional Central/Eastern Visayas Cities
  {
    id: "siquijor",
    name: "Siquijor",
    region: "Central Visayas (Region VII)",
    province: "Siquijor",
    description: "Mystical island known for healing traditions and pristine beaches.",
    population: "100,000",
    knownFor: ["Healing traditions", "Pristine beaches", "Waterfalls", "Mystical reputation"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaXF1aWpvcmlzJTIwaXNsYW5kJTIwYmVhY2glMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaXF1aWpvcmlzJTIwd2F0ZXJmYWxscyUyMFBoaWxpcHBpbmVzJTIwbmF0dXJlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NDg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaXF1aWpvcmlzJTIwbXlzdGljYWwlMjBpc2xhbmQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaXF1aWpvcmlzJTIwaGVhbGluZyUyMHRyYWRpdGlvbnMlMjBQaGlsaXBwaW5lcyUyIGN1bHR1cmUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaXF1aWpvcmlzJTIwY29hc3RsaW5lJTIwUGhpbGlwcGluZXMlMjBzY2VuaWMlMjB2aWV3fGVufDF8fHx8fDE3NzYyNjY1NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaXF1aWpvcmlzJTIwbmlnaHQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NDkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Beach activities",
      "Waterfall visits",
      "Cultural tours",
      "Island hopping",
      "Healing experiences"
    ]
  },
  {
    id: "bais-city",
    name: "Bais City",
    region: "Central Visayas (Region VII)",
    province: "Negros Oriental",
    description: "City famous for dolphin and whale watching tours.",
    population: "80,000",
    knownFor: ["Dolphin watching", "Whale watching", "Marine tours", "Coastal activities"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWlzJTIwQ2l0eSUyMGRvbHBoaW4lMjB3YXRjaGluZyUyMFBoaWxpcHBpbmVzJTIwbWFyaW5lJTIwbGlmZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWlzJTIwQ2l0eSUyMHdoYWxlJTIwd2F0Y2hpbmclMjBQaGlsaXBwaW5lcyUyMG1hcmluZSUyMGxpZmV8ZW58MXx8fHwxNzYyNjY1NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWlzJTIwQ2l0eSUyMG1hcmluZSUyMHRvdXJzJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWlzJTIwQ2l0eSUyMGNvYXN0YWwlMjBhcmVhJTIwUGhpbGlwcGluZXMlMjBzY2VuaWMlMjB2aWV3fGVufDF8fHx8fDE3NzYyNjY1NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWlzJTIwQ2l0eSUyMGZpc2hpbmclMjBwb3J0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHx8fDE3NzYyNjY1NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWlzJTIwQ2l0eSUyMG5pZ2h0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Dolphin watching",
      "Whale watching",
      "Marine tours",
      "Coastal activities",
      "Photography"
    ]
  },

  // --- LUZON ---
  {
    id: "vigan",
    name: "Vigan",
    region: "Ilocos Region (Region I)",
    province: "Ilocos Sur",
    description: "UNESCO World Heritage Site with Spanish colonial architecture.",
    population: "54,000",
    knownFor: ["Spanish colonial houses", "Calle Crisologo", "Kalesa rides", "Historical heritage"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWdhbiUyMHNwYW5pc2glMjBjb2xvbmlhbCUyMGFyY2hpdGVjdHVyZSUyMFBoaWxpcHBpbmVzfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYWxsZSUyMENyaXNvbG9nbyUyMFZpZ2FuJTIwUGhpbGlwcGluZXMlMjBoZXJpdGFnZXxlbnwxfHx8fDE3NzYyNjU0MTE&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWdhbiUyMGhpc3RvcmljJTIwY2l0eSUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NjI2NTQxMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWdhbiUyMGthbGVzYSUyMHJpZGUlMjBQaGlsaXBwaW5lcyUyMGN1bHR1cmV8ZW58MXx8fHwxNzc2MjY1NDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWdhbiUyMGhlcml0YWdlJTIwc2l0ZXMlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWdhbiUyMGhlcml0YWdlJTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBuaWdodHxlbnwxfHx8fDE3NzYyNjU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Heritage walks",
      "Kalesa rides",
      "Cultural tours",
      "Photography",
      "Food trips"
    ]
  },
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
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYWd1aW8lMjBTZXNzaW9uJTIwUm9hZCUyMGF0JTIwbmlnaHQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
    id: "subic",
    name: "Subic",
    region: "Central Luzon (Region III)",
    province: "Zambales",
    description: "Former US naval base turned into a freeport zone.",
    population: "100,000",
    knownFor: ["Freeport zone", "Beach resorts", "Water sports", "Adventure parks"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdWJpYyUyMGJlYWNoJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdWJpYyUyMGZyZWVwb3J0JTIwUGhpbGlwcGluZXMlMjBiYXklMjB2aWV3fGVufDF8fHx8fDE3NzYyNjU0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdWJpYyUyMHdhdGVyJTIwc3BvcnRzJTIwUGhpbGlwcGluZXMlMjBhZHZlbnR1cmUlMjBwYXJrfGVufDF8fHx8fDE3NzYyNjU0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdWJpYyUyMGFkdmVudHVyZSUyMHBhcmslMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdWJpYyUyMG1hcmluYSUyMHJlc2VydCUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjU0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdWJpYyUyMGNpdHklMjBuaWdodCUyMGFyY2hpdGVjdHVyZSUyMFBoaWxpcHBpbmVzfGVufDF8fHx8fDE3NzYyNjU0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Beach activities",
      "Water sports",
      "Adventure parks",
      "Shopping",
      "Dining"
    ]
  },
  {
    id: "tagaytay",
    name: "Tagaytay",
    region: "CALABARZON (Region IV-A)",
    province: "Cavite",
    description: "City with scenic views of Taal Volcano and cool climate.",
    population: "85,000",
    knownFor: ["Taal Volcano view", "Cool weather", "Picnic Grove", "Sky Ranch"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYWdheXRheSUyMFRhYWwlMjBWb2xjYW5vJTIwdmlldyUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjU0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYWdheXRheSUyMGNvb2wlMjB3ZWF0aGVyJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDExfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYWdheXRheSUyMHNreSUyMHJhbmNoJTIwUGhpbGlwcGluZXMlMjB0aGVtZSUyMHBhcmslMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYWdheXRheSUyMGJlYWNoJTIwcmVzb3J0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYWdheXRheSUyMGNpdHklMjBuaWdodCUyMGFyY2hpdGVjdHVyZSUyMFBoaWxpcHBpbmVzfGVufDF8fHx8fDE3NzYyNjU0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYWdheXRheSUyMGNpdHklMjB2aWV3JTIwUGhpbGlwcGluZXMlMjBsYW5kc2NhcGUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Sightseeing",
      "Picnicking",
      "Theme parks",
      "Food trips",
      "Photography"
    ]
  },
  {
    id: "batanes",
    name: "Batanes",
    region: "Cagayan Valley (Region II)",
    province: "Batanes",
    description: "Northernmost province with rolling hills and stone houses.",
    population: "17,000",
    knownFor: ["Rolling hills", "Stone houses", "Lighthouses", "Windy climate"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYXRhbmVzJTIwcm9sbGluZyUyMGhpbGxzJTIwUGhpbGlwcGluZXMlMjBsYW5kc2NhcGUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYXRhbmVzJTIwc3RvbmUlMjBob3VzZXMlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYXRhbmVzJTIwbGlnaHRob3VzZSUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjU0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYXRhbmVzJTIwY29hc3RsaW5lJTIwUGhpbGlwcGluZXMlMjBzY2VuaWMlMjB2aWV3fGVufDF8fHx8fDE3NzYyNjU0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYXRhbmVzJTIwYmVhY2hlcyUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjU0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYXRhbmVzJTIwY2xpbWF0ZSUyMGFuZCUyMHdpbmQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Nature walks",
      "Photography",
      "Cultural tours",
      "Beach visits",
      "Hiking"
    ]
  },
  {
    id: "basco",
    name: "Basco",
    region: "Cagayan Valley (Region II)",
    province: "Batanes",
    description: "Capital of Batanes with traditional Ivatan culture.",
    population: "8,000",
    knownFor: ["Ivatan culture", "Rolling hills", "Lighthouse", "Traditional architecture"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYXNjbyUyMGJhdGFuZXMlMjBsaWdodGhvdXNlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYXNjbyUyMGNhcGl0YWwlMjBjaXR5JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYXNjbyUyMHRyYWRpdGlvbmFsJTIwaG91c2VzJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYXNjbyUyMGNvYXN0YWwlMjB2aWV3JTIwUGhpbGlwcGluZXMlMjBzY2VuaWMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYXNjbyUyMGN1bHR1cmUlMjBzaXRlcyUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjU0MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYXNjbyUyMGJlYWNoJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Cultural tours",
      "Lighthouse visits",
      "Nature photography",
      "Beach activities",
      "Heritage walks"
    ]
  },
  {
    id: "legazpi-city",
    name: "Legazpi City",
    region: "Bicol Region (Region V)",
    province: "Albay",
    description: "City with the perfect cone-shaped Mayon Volcano.",
    population: "200,000",
    knownFor: ["Mayon Volcano", "Cagsawa Ruins", "Adventure activities", "Bicol cuisine"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXlvbiUyMFZvbGNhbm8lMjBMZWdhemBpJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjU0Mjg&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYWdzYXdhJTIwUnVpbnMlMjBMZWdhemBpJTIwUGhpbGlwcGluZXMlMjBoZXJpdGFnZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0Mjk&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXlvbiUyMFZvbGNhbm8lMjBhdCUyMGRhd24lMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MzA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMZWF6YXBpJTIwQ2l0eSUyMGF0JTIwbmlnaHQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MzE&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMZWF6YXBpJTIwYWR2ZW50dXJlJTIwYWN0aXZpdGllcyUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjU0MzI&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCaWNvbCUyMGN1aXNpbmUlMjBMZWdhemBpJTIwUGhpbGlwcGluZXMlMjBmb29kJTIyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MzM&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Volcano viewing",
      "Adventure activities",
      "Heritage tours",
      "Food trips",
      "Photography"
    ]
  },
  {
    id: "san-juan-la-union",
    name: "San Juan La Union",
    region: "Ilocos Region (Region I)",
    province: "La Union",
    description: "Surfing capital of the north with beautiful beaches.",
    population: "35,000",
    knownFor: ["Surfing", "Beaches", "Sunset views", "Beach resorts"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW4lMjBKdWFuJTIwTGElMjBVbmlvbiUyMHN1cmZpbmclMjBQaGlsaXBwaW5lcyUyMGJlYWNoJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjU0MzQ&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW4lMjBKdWFuJTIwTGElMjBVbmlvbiUyMGJlYWNoJTIwcmVzb3J0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjU0MzU&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW4lMjBKdWFuJTIwTGElMjBVbmlvbiUyMHN1bnNldCUyMHZpZXclMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MzY&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW4lMjBKdWFuJTIwTGElMjBVbmlvbiUyMGNvYXN0YWwlMjB2aWV3JTIwUGhpbGlwcGluZXMlMjBzY2VuaWMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjU0Mzc&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW4lMjBKdWFuJTIwTGElMjBVbmlvbiUyMHN1cmYlMjBjYW1wJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHx8fDE3NzYyNjU0Mzg&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW4lMjBKdWFuJTIwTGElMjBVbmlvbiUyMHRvdXJpc20lMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0Mzk&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Surfing",
      "Beach activities",
      "Sunset watching",
      "Food trips",
      "Beach hopping"
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
    id: "sagada",
    name: "Sagada",
    region: "Cordillera Administrative Region (CAR)",
    province: "Mountain Province",
    description: "Mountain town famous for hanging coffins and caves.",
    population: "15,000",
    knownFor: ["Hanging coffins", "Cave exploration", "Mountain views", "Coffee farms"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjCDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Hanging coffins viewing",
      "Caving",
      "Trekking",
      "Coffee farm tours"
    ]
  },
  {
    id: "banaue",
    name: "Banaue",
    region: "Cordillera Administrative Region (CAR)",
    province: "Ifugao",
    description: "Home of the ancient rice terraces.",
    population: "22,000",
    knownFor: ["Rice terraces", "Mountain views", "Indigenous culture", "Trekking"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjCDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Rice terrace tours",
      "Cultural tours",
      "Trekking",
      "Photography"
    ]
  },

  // Luzon - Palawan & Mindoro
  {
    id: "puerto-galera",
    name: "Puerto Galera",
    region: "MIMAROPA (Region IV-B)",
    province: "Mindoro Oriental",
    description: "Pearl of Mindoro with beautiful beaches and diving spots.",
    population: "35,000",
    knownFor: ["White sand beaches", "Diving spots", "Water sports", "Beach resorts"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdWVydG8lMjBHYWxlcmElMjBiZWFjaCUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdWVydG8lMjBHYWxlcmElMjBkaXZpbmclMjBQaGlsaXBwaW5lcyUyMG1hcmluZSUyMGxpZmV8ZW58MXx8fHwxNzc2MjY1NDEx&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdWVydG8lMjBHYWxlcmElMjB3YXRlciUyMHNwb3J0cyUyMFBoaWxpcHBpbmVzJTIwYmVhY2hlcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdWVydG8lMjBHYWxlcmElMjBpc2xhbmQlMjBob3BwaW5nJTIwUGhpbGlwcGluZXMlMjB0b3VyaXNtJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjU0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdWVydG8lMjBHYWxlcmElMjBiZWFjaCUyMHJlc29ydCUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjU0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdWVydG8lMjBHYWxlcmElMjBzdW5zZXQlMjBQaGlsaXBwaW5lcyUyMG9jZWFuJTIwdmlldyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Beach activities",
      "Diving",
      "Snorkeling",
      "Island hopping",
      "Water sports"
    ]
  },
  {
    id: "puerto-princesa",
    name: "Puerto Princesa",
    region: "MIMAROPA (Region IV-B)",
    province: "Palawan",
    description: "Gateway to Palawan with underground river.",
    population: "260,000",
    knownFor: ["Underground river", "Honda Bay", "City tours", "Firefly watching"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOdWVydG8lMjBQcmluY2VzYSUyMHVuZGVyZ3JvdW5kJTIwcml2ZXIlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIb25kYSUyMEJheSUyMFB1ZXJ0byUyMFByaW5jZXNhJTIwUGhpbGlwcGluZXMlMjBpc2xhbmQlMjBob3BwaW5nfGVufDF8fHx8fDE3NzYyNjU0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdWVydG8lMjBQcmluY2VzYSUyMGNpdHklMjB0b3VyJTIwUGhpbGlwcGluZXMlMjB0cmF2ZWwlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaXJlZmx5JTIwd2F0Y2hpbmclMjBQdWVydG8lMjBQcmluY2VzYSUyMFBoaWxpcHBpbmVzJTIwZWNvdG91cmlzbSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdWVydG8lMjBQcmluY2VzYSUyMGJlYWNoJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdWVydG8lMjBQcmluY2VzYSUyMHVuZGVyZ3JvdW5kJTIwcml2ZXIlMjBQaGlsaXBwaW5lcyUyMG5hdHVyZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjU0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Underground river tour",
      "Nature tours",
      "Firefly watching",
      "Island hopping"
    ]
  },
  {
    id: "el-nido",
    name: "El Nido",
    region: "MIMAROPA (Region IV-B)",
    province: "Palawan",
    description: "Stunning lagoons and island paradise.",
    population: "65,000",
    knownFor: ["Lagoons", "Island hopping", "Diving", "Cliff formations"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjCDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Lagoon kayaking",
      "Snorkeling",
      "Beaches",
      "Island hopping"
    ]
  },
  {
    id: "coron",
    name: "Coron",
    region: "MIMAROPA (Region IV-B)",
    province: "Palawan",
    description: "Famous for lakes and wreck diving.",
    population: "65,000",
    knownFor: ["Lake diving", "Wreck diving", "Hot springs", "Island hopping"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjCDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Lake diving",
      "Wreck diving",
      "Hot springs",
      "Island hopping"
    ]
  },

  // Cebu Region & Municipalities
  {
    id: "cebu-city",
    name: "Cebu City",
    region: "Central Visayas (Region VII)",
    province: "Cebu",
    description: "Queen City of the South with rich heritage.",
    population: "980,000",
    knownFor: ["Sinulog Festival", "Historical sites", "Business hub", "Tourism gateway"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjCDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
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
    id: "mactan",
    name: "Mactan",
    region: "Central Visayas (Region VII)",
    province: "Cebu",
    description: "Island known for Lapu-Lapu shrine and resorts.",
    population: "500,000",
    knownFor: ["Lapu-Lapu shrine", "Beach resorts", "Water sports", "Seafood"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjCDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Historical sites",
      "Beach resorts",
      "Water sports",
      "Seafood dining"
    ]
  },

  // Bohol
  {
    id: "tagbilaran-city",
    name: "Tagbilaran City",
    region: "Central Visayas (Region VII)",
    province: "Bohol",
    description: "Gateway to Bohol's tourist attractions.",
    population: "105,000",
    knownFor: ["Blood Compact site", "Chocolate Hills access", "Historical sites", "Tourism hub"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjCDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Historical tours",
      "Shopping",
      "Food trips",
      "Island tours"
    ]
  },
  {
    id: "panglao",
    name: "Panglao",
    region: "Central Visayas (Region VII)",
    province: "Bohol",
    description: "Famous beach destination with diving spots.",
    population: "35,000",
    knownFor: ["White beaches", "Diving spots", "Alona Beach", "Marine sanctuary"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjCDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Beaches",
      "Diving",
      "Island hopping",
      "Snorkeling"
    ]
  },

  // Additional Cebu Region Cities
  {
    id: "moalboal",
    name: "Moalboal",
    region: "Central Visayas (Region VII)",
    province: "Cebu",
    description: "Famous diving destination with sardine runs and coral reefs.",
    population: "35,000",
    knownFor: ["Sardine runs", "Diving spots", "Coral reefs", "Beach resorts"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2FsaGJvYWwlMjBkaXZpbmclMjBQaGlsaXBwaW5lcyUyMG1hcmluZSUyMGxpZmV8ZW58MXx8fHwxNzc2MjY1NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2FsaGJvYWwlMjBzYXJkaW5lJTIwcnVucyUyMFBoaWxpcHBpbmVzJTIwZmFubmElMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDQx&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2FsaGJvYWwlMjBjb3JhbCUyIHJlZWZzJTIwUGhpbGlwcGluZXMlMjB1bmRlcndhdGVyJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjU0NDI&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2FsaGJvYWwlMjBiZWFjaCUyIHJlc2VydCUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjU0NDM&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2FsaGJvYWwlMjBpc2xhbmQlMjBob3BwaW5nJTIwUGhpbGlwcGluZXMlMjB0b3VyaXNtJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjU0NDQ&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2FsaGJvYWwlMjB0b3duJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Diving",
      "Snorkeling",
      "Island hopping",
      "Beach activities",
      "Photography"
    ]
  },
  {
    id: "oslob",
    name: "Oslob",
    region: "Central Visayas (Region VII)",
    province: "Cebu",
    description: "Famous for whale shark watching and waterfalls.",
    population: "30,000",
    knownFor: ["Whale shark watching", "Tumalog Falls", "Beach resorts", "Marine life"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPc2xvYiUyMHdoYWxlJTIwc2hhcmslMjBQaGlsaXBwaW5lcyUyMG1hcmluZSUyMGxpZmV8ZW58MXx8fHwxNzYyNjY1NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPc2xvYiUyMFR1bWFsb2clMjBGYWxscyUyMFBoaWxpcHBpbmVzJTIwbmF0dXJlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPc2xvYiUyMGJlYWNoJTIwcmVzb3J0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPc2xvYiUyMGNvYXN0YWwlMjB2aWV3JTIwUGhpbGlwcGluZXMlMjBzY2VuaWMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPc2xvYiUyMHN1bnNldCUyMGJlYWNoJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPc2xvYiUyMHRvdXJpc20lMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Whale shark watching",
      "Waterfall visits",
      "Beach activities",
      "Snorkeling",
      "Nature tours"
    ]
  },
  {
    id: "bantayan",
    name: "Bantayan",
    region: "Central Visayas (Region VII)",
    province: "Cebu",
    description: "Island paradise with white sand beaches and crystal clear waters.",
    population: "20,000",
    knownFor: ["White sand beaches", "Island paradise", "Crystal clear waters", "Beach resorts"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYW50YXlhbiUyMGlzbGFuZCUyMGJlYWNoJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYW50YXlhbiUyMGlzbGFuZCUyMHJlc29ydCUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYW50YXlhbiUyMGlzbGFuZCUyMHZpZXclMjBQaGlsaXBwaW5lcyUyMHN1bnNldCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYW50YXlhbiUyMGlzbGFuZCUyMHN1bnJpc2UlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYW50YXlhbiUyMGlzbGFuZCUyMHRvdXJpc20lMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCYW50YXlhbiUyMGlzbGFuZCUyMG5pZ2h0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Beach activities",
      "Island hopping",
      "Snorkeling",
      "Photography",
      "Relaxation"
    ]
  },
  {
    id: "malapascua",
    name: "Malapascua",
    region: "Central Visayas (Region VII)",
    province: "Cebu",
    description: "Diving paradise famous for thresher shark encounters.",
    population: "5,000",
    knownFor: ["Thresher sharks", "Diving", "White sand beaches", "Island paradise"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxhcGFzY3VhJTIwaXNsYW5kJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxhcGFzY3VhJTIwdGhyZXNoZXIlMjBzaGFya3MlMjBQaGlsaXBwaW5lcyUyMG1hcmluZSUyMGxpZmV8ZW58MXx8fHwxNzYyNjY1NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxhcGFzY3VhJTIwZGl2aW5nJTIwUGhpbGlwcGluZXMlMjB1bmRlcndhdGVyJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxhcGFzY3VhJTIwYmVhY2glMjByZXNvcnQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NDYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxhcGFzY3VhJTIwaXNsYW5kJTIwaG9wcGluZyUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NDYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxhcGFzY3VhJTIwc3VucmlzZSUyMGJlYWNoJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Diving",
      "Thresher shark watching",
      "Beach activities",
      "Island tours",
      "Photography"
    ]
  },
  {
    id: "carcar",
    name: "Carcar",
    region: "Central Visayas (Region VII)",
    province: "Cebu",
    description: "Heritage city known for its Spanish colonial architecture and local cuisine.",
    population: "120,000",
    knownFor: ["Heritage houses", "Spanish colonial architecture", "Local cuisine", "Chicharon"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXJjYXIlMjBoZXJpdGFnZSUyMGhvdXNlcyUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXJjYXIlMjBTcGFuaXNoJTIwY29sb25pYWwlMjBhcmNoaXRlY3R1cmUlMjBQaGlsaXBwaW5lcyUyMGhlcml0YWdlfGVufDF8fHx8fDE3NzYyNjY1NDY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXJjYXIlMjBjaHVyY2glMjBhcmNoaXRlY3R1cmUlMjBQaGlsaXBwaW5lcyUyMGhpc3RvcmljJTIwc2l0ZXN8ZW58MXx8fHwxNzYyNjY1NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXJjYXIlMjBmb29kJTIwY3Vpc2luZSUyMFBoaWxpcHBpbmVzJTIwY2hpbmElMjBmb29kJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXJjYXIlMjBjaGlja2Fyb24lMjBQaGlsaXBwaW5lcyUyMGxvY2FsJTIwZGVsaWNhY3klMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXJjYXIlMjBjaXR5JTIwbmlnaHQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Heritage tours",
      "Food trips",
      "Cultural visits",
      "Photography",
      "Shopping"
    ]
  },
  {
    id: "naga",
    name: "Naga",
    region: "Central Visayas (Region VII)",
    province: "Cebu",
    description: "Progressive city with industrial zones and natural attractions.",
    population: "130,000",
    knownFor: ["Industrial zones", "Natural attractions", "Progressive city", "Business center"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYWdhJTIwQ2l0eSUyMGNlYnUlMjBQaGlsaXBwaW5lcyUyMGJ1c2luZXNzJTIwZGlzdHJpY3QlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYWdhJTIwQ2l0eSUyMG5hdHVyYWwlMjBhdHRyYWN0aW9ucyUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYWdhJTIwQ2l0eSUyMGJ1c2luZXNzJTIwY2VudGVyJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYWdhJTIwQ2l0eSUyMGhlcml0YWdlJTIwc2l0ZSUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NDczfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYWdhJTIwQ2l0eSUyMG5pZ2h0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYWdhJTIwQ2l0eSUyMGRvd250b3duJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Business tours",
      "Nature visits",
      "Shopping",
      "Food trips",
      "Cultural visits"
    ]
  },

  // Western Visayas
  {
    id: "malay-aklan",
    name: "Malay Aklan",
    region: "Western Visayas (Region VI)",
    province: "Aklan",
    description: "Gateway to Boracay with pristine beaches and eco-tourism.",
    population: "35,000",
    knownFor: ["Boracay gateway", "Pristine beaches", "Eco-tourism", "Beach resorts"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheSUyMEFrbGFuJTIwYmVhY2glMjByZXNvcnQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NDc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheSUyMEFrbGFuJTIwZWNvJTIwdG91cmlzbSUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheSUyMEFrbGFuJTIwY29hc3RsaW5lJTIwUGhpbGlwcGluZXMlMjBzY2VuaWMlMjB2aWV3fGVufDF8fHx8fDE3NzYyNjY1NDc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheSUyMEFrbGFuJTIwcHJpc3RpbmUlMjBiZWFjaGVzJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NDc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheSUyMEFrbGFuJTIwYm9yYWNheSUyMGdhdGV3YXklMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheSUyMEFrbGFuJTIwbmlnaHQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Beach activities",
      "Eco-tours",
      "Island hopping",
      "Photography",
      "Relaxation"
    ]
  },
  {
    id: "kalibo",
    name: "Kalibo",
    region: "Western Visayas (Region VI)",
    province: "Aklan",
    description: "Gateway to Boracay famous for Ati-Atihan Festival.",
    population: "80,000",
    knownFor: ["Ati-Atihan Festival", "Boracay gateway", "Historical sites", "Local cuisine"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYWxpYm8lMjBBdGktQXRpaGFuJTIwRmVzdGl2YWwlMjBQaGlsaXBwaW5lcyUyMGZlc3RpdmFsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYWxpYm8lMjBjaXR5JTIwaGlzdG9yaWNhbCUyIHNpdGVzJTIwUGhpbGlwcGluZXMlMjBoZXJpdGFnZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYWxpYm8lMjBjaXR5JTIwYm9yYWNheSUyMGdhdGV3YXklMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NDg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYWxpYm8lMjBjaXR5JTIwbG9jYWwlMjBjdWlzaW5lJTIwUGhpbGlwcGluZXMlMjBmb29kJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYWxpYm8lMjBjaXR5JTIwZG93bnRvd24lMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYWxpYm8lMjBjaXR5JTIwbmlnaHQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NDg3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Festival participation",
      "Cultural tours",
      "Food trips",
      "Shopping",
      "Beach visits"
    ]
  },
  {
    id: "boracay",
    name: "Boracay",
    region: "Western Visayas (Region VI)",
    province: "Aklan",
    description: "World-famous white sand beach island.",
    population: "32,000",
    knownFor: ["White Beach", "Nightlife", "Water sports", "Sunset views"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjCDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Beaches",
      "Water sports",
      "Festivals",
      "Island hopping"
    ]
  },
  {
    id: "iloilo-city",
    name: "Iloilo City",
    region: "Western Visayas (Region VI)",
    province: "Iloilo",
    description: "City of Heritage with Spanish colonial architecture.",
    population: "450,000",
    knownFor: ["Spanish heritage", "Churches", "Food heritage", "River esplanade"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjCDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Festivals",
      "Heritage churches",
      "Heritage houses",
      "Food trips",
      "Seafood dining"
    ]
  },

  // Mindanao Major Destinations
  {
    id: "siargao",
    name: "Siargao",
    region: "Caraga (Region XIII)",
    province: "Surigao del Norte",
    description: "Surfing capital of the Philippines.",
    population: "100,000",
    knownFor: ["Surfing", "Island hopping", "Rock pools", "Nightlife"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjCDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Surfing",
      "Island hopping",
      "Rock pools",
      "Nightlife"
    ]
  },
  {
    id: "zamboanga-city",
    name: "Zamboanga City",
    region: "Zamboanga Peninsula (Region IX)",
    province: "Zamboanga del Norte",
    description: "City of Flowers with pink sand beaches.",
    population: "900,000",
    knownFor: ["Pink sand beaches", "Historical forts", "Festivals", "Parks"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjCDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Historical forts",
      "Festivals",
      "Parks",
      "Pink sand beaches"
    ]
  },
  {
    id: "general-santos-city",
    name: "General Santos City",
    region: "SOCCSKSARGEN (Region XII)",
    province: "South Cotabato",
    description: "Tuna Capital of the Philippines.",
    population: "650,000",
    knownFor: ["Tuna industry", "Festivals", "Snorkeling", "Lake trips"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb2Rlcm4lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwUGhpbGlwcGluZXMlMjBza3lzY3JhcGVyfGVufDF8fHx8MTc3NjI2NTQwMnw&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577720643272-265f09367456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb251bWVudCUyMG9yJTIwc3RhdHVlJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1514215965604-05c5a93b9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJrJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjCDaXR5JTIwaGFsbCUyMGF0JTIwbmluaHR8ZW58MXx8fHwxNzc2MjY1Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1518684079-3db6a1e4c6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5pbGElMjBjaHVyY2glMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc2MjY1Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Festivals",
      "Snorkeling",
      "Lake trips",
      "Trekking"
    ]
  },
  // Additional Mindanao Cities
  {
    id: "davao-city",
    name: "Davao City",
    region: "Davao Region (Region XI)",
    province: "Davao del Sur",
    description: "Largest city in the Philippines with Mount Apo and durian.",
    population: "1.8 million",
    knownFor: ["Mount Apo", "Durian fruit", "Clean city", "Philippine Eagle"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYXZhbyUyMENpdHklMjBNb3VudCUyMEFwbyUyMGFyY2hpdGVjdHVyZSUyMFBoaWxpcHBpbmVzJTIwbmF0dXJlJTIwbGFuZHNjYXBlfGVufDF8fHx8fDE3NzYyNjY1NTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYXZhbyUyMENpdHklMjBkdXJpYW4lMjBmcnVpdCUyMFBoaWxpcHBpbmVzJTIwZm9vZCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYXZhbyUyMENpdHklMjBQaGlsaXBwaW5lJTIwRWFnbGUlMjBjZW50ZXIlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYXZhbyUyMENpdHklMjBkb3dudG93biUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NTAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYXZhbyUyMENpdHklMjBuaWdodCUyMGFyY2hpdGVjdHVyZSUyMFBoaWxpcHBpbmVzfGVufDF8fHx8fDE3NzYyNjY1NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEYXZhbyUyMENpdHklMjBjbGVhbiUyMGNpdHklMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Mountain climbing",
      "Eagle watching",
      "Food trips",
      "City tours",
      "Nature activities"
    ]
  },
  {
    id: "cagayan-de-oro",
    name: "Cagayan de Oro",
    region: "Northern Mindanao (Region X)",
    province: "Misamis Oriental",
    description: "Gateway to Northern Mindanao with adventure activities.",
    population: "700,000",
    knownFor: ["White water rafting", "Adventure activities", "Gateway to Northern Mindanao", "Nightlife"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYWdheWFuJTIwZGUlMjBPcm8lMjB3aGl0ZSUyMHdhdGVyJTIwcmFmdGluZyUyMFBoaWxpcHBpbmVzJTIwYWR2ZW50dXJlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYWdheWFuJTIwZGUlMjBPcm8lMjBjaXR5JTIwbmlnaHQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYWdheWFuJTIwZGUlMjBPcm8lMjBhZHZlbnR1cmUlMjBwYXJrcyUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NTA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYWdheWFuJTIwZGUlMjBPcm8lMjB0b3VyaXNtJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYWdheWFuJTIwZGUlMjBPcm8lMjBjb2FzdGFsJTIwYXJlYSUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NTEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYWdheWFuJTIwZGUlMjBPcm8lMjBuaWdodGxpZmUlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTExfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "White water rafting",
      "Adventure activities",
      "City tours",
      "Shopping",
      "Nightlife"
    ]
  },
  {
    id: "butuan",
    name: "Butuan",
    region: "Caraga (Region XIII)",
    province: "Agusan del Norte",
    description: "Historical city known for ancient Balangay boats.",
    population: "350,000",
    knownFor: ["Balangay boats", "Historical significance", "Agusan River", "Mining heritage"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdXR1YW4lMjBCYWxhbmdheSUyMGJvYXRzJTIwUGhpbGlwcGluZXMlMjBoaXN0b3J5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdXR1YW4lMjBBZ3VzYW4lMjBSaXZlciUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdXR1YW4lMjBjaXR5JTIwaGlzdG9yaWNhbCUyIHNpdGVzJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdXR1YW4lMjBtaW5pbmclMjBoZXJpdGFnZSUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdXR1YW4lMjBjaXR5JTIwbmlnaHQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdXR1YW4lMjBjaXR5JTIwZG93bnRvd24lMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Historical tours",
      "River cruises",
      "Museum visits",
      "Cultural activities",
      "Nature tours"
    ]
  },
  {
    id: "surigao-city",
    name: "Surigao City",
    region: "Caraga (Region XIII)",
    province: "Surigao del Norte",
    description: "Gateway to Siargao with island hopping destinations.",
    population: "180,000",
    knownFor: ["Island hopping", "Siargao gateway", "Rock formations", "Beach resorts"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdXJpZ2FvJTIwQ2l0eSUyMGlzbGFuZCUyMGhvcHBpbmclMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdXJpZ2FvJTIwQ2l0eSUyMFNpYXJnYW8lMjBnYXRld2F5JTIwUGhpbGlwcGluZXMlMjB0b3VyaXNtJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NTE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdXJpZ2FvJTIwQ2l0eSUyMHJvY2slMjBmb3JtYXRpb25zJTIwUGhpbGlwcGluZXMlMjBuYXR1cmUlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdXJpZ2FvJTIwQ2l0eSUyMGJlYWNoJTIwcmVzb3J0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdXJpZ2FvJTIwQ2l0eSUyMGNvYXN0YWwlMjB2aWV3JTIwUGhpbGlwcGluZXMlMjBzY2VuaWMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdXJpZ2FvJTIwQ2l0eSUyMG5pZ2h0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTIzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Island hopping",
      "Beach activities",
      "Rock formation tours",
      "Snorkeling",
      "Photography"
    ]
  },
  {
    id: "dipolog",
    name: "Dipolog",
    region: "Zamboanga Peninsula (Region IX)",
    province: "Zamboanga del Norte",
    description: "Gateway to Zamboanga Peninsula with Buddhist temple.",
    population: "130,000",
    knownFor: ["Buddhist temple", "Gateway to Zamboanga", "Sardines industry", "Cultural sites"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaXBvbGclMjBCdWRkaGlzdCUyMHRlbXBsZSUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NTI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaXBvbGclMjBjaXR5JTIwbmlnaHQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaXBvbGclMjBzYXJkaW5lcyUyMGludHVzdHJ5JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaXBvbGclMjBjaXR5JTIwY3VsdHVyYWwlMjBzaXRlcyUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaXBvbGclMjBjaXR5JTIwZG93bnRvd24lMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaXBvbGclMjBjaXR5JTIwY29hc3RsaW5lJTIwUGhpbGlwcGluZXMlMjBzY2VuaWMlMjB2aWV3fGVufDF8fHx8fDE3NzYyNjY1NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Temple visits",
      "Cultural tours",
      "Food trips",
      "Beach visits",
      "Photography"
    ]
  },
  {
    id: "tandag",
    name: "Tandag",
    region: "Caraga (Region XIII)",
    province: "Surigao del Sur",
    description: "Coastal city with pristine beaches and marine sanctuaries.",
    population: "60,000",
    knownFor: ["Pristine beaches", "Marine sanctuaries", "Coastal activities", "Fishing industry"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYW5kYWclMjBjaXR5JTIwYmVhY2glMjByZXNvcnQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYW5kYWclMjBjaXR5JTIwbWFyaW5lJTIwc2FuY3R1YXJ5JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYW5kYWclMjBjaXR5JTIwY29hc3RhbCUyMGFyZWElMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYW5kYWclMjBjaXR5JTIwZmlzaGluZyUyMGludHVzdHJ5JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYW5kYWclMjBjaXR5JTIwbmlnaHQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYW5kYWclMjBjaXR5JTIwZG93bnRvd24lMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Beach activities",
      "Marine tours",
      "Fishing experiences",
      "Island hopping",
      "Photography"
    ]
  },
  {
    id: "malaybalay",
    name: "Malaybalay",
    region: "Northern Mindanao (Region X)",
    province: "Bukidnon",
    description: "City of Pine Trees and mountain retreats.",
    population: "180,000",
    knownFor: ["Pine trees", "Mountain retreats", "Cool climate", "Agricultural center"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheWJhbGF5JTIwY2l0eSUyMHBpbmUlMjB0cmVlcyUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheWJhbGF5JTIwY2l0eSUyGNvb2wlMjB3ZWF0aGVyJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheWJhbGF5JTIwY2l0eSUyMG1vdW50YWluJTIwcmV0cmVhdHMlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheWJhbGF5JTIwY2l0eSUyMGFncmljdWx0dXJhbCUyIGNlbnRlciUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheWJhbGF5JTIwY2l0eSUyMG5pZ2h0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheWJhbGF5JTIwY2l0eSUyMGRvd250b3duJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Mountain trekking",
      "Nature walks",
      "Agricultural tours",
      "Photography",
      "Relaxation"
    ]
  },
  {
    id: "ipil",
    name: "Ipil",
    region: "Zamboanga Peninsula (Region IX)",
    province: "Zamboanga Sibugay",
    description: "Agricultural center with rice fields and cultural sites.",
    population: "75,000",
    knownFor: ["Agricultural center", "Rice fields", "Cultural sites", "Gateway to Sibugay"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJcGlsJTIwY2l0eSUyMHJpY2UlMjBmaWVsZHMlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJcGlsJTIwY2l0eSUyMGFncmljdWx0dXJhbCUyMGxhbmRzY2FwZSUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJcGlsJTIwY2l0eSUyMGN1bHR1cmFsJTIwc2l0ZXMlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJcGlsJTIwY2l0eSUyMG5pZ2h0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJcGlsJTIwY2l0eSUyMGRvd250b3duJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJcGlsJTIwY2l0eSUyMGNvYXN0YWwlMjB2aWV3JTIwUGhpbGlwcGluZXMlMjBzY2VuaWMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Agricultural tours",
      "Cultural visits",
      "Nature photography",
      "Food trips",
      "Local markets"
    ]
  },
  {
    id: "koronadal",
    name: "Koronadal",
    region: "SOCCSKSARGEN (Region XII)",
    province: "South Cotabato",
    description: "City of festivals and agricultural products.",
    population: "200,000",
    knownFor: ["Festivals", "Agricultural products", "Business center", "Cultural diversity"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JvbmFkYWwlMjBjaXR5JTIwZmVzdGl2YWxzJTIwUGhpbGlwcGluZXMlMjBjdWx0dXJlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JvbmFkYWwlMjBjaXR5JTIwYWdyaWN1bHR1cmFsJTIwcHJvZHVjdHMlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JvbmFkYWwlMjBjaXR5JTIwYnVzaW5lc3MlMjBjZW50ZXIlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JvbmFkYWwlMjBjaXR5JTIwY3VsdHVyYWwlMjBkaXZlcnNpdHklMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JvbmFkYWwlMjBjaXR5JTIwbmlnaHQlMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JvbmFkYWwlMjBjaXR5JTIwZG93bnRvd24lMjBQaGlsaXBwaW5lcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Festival participation",
      "Agricultural tours",
      "Shopping",
      "Cultural experiences",
      "Food trips"
    ]
  },
  {
    id: "pagadian",
    name: "Pagadian",
    region: "Zamboanga Peninsula (Region IX)",
    province: "Zamboanga del Sur",
    description: "City of festivals with rolling hills and coastal areas.",
    population: "100,000",
    knownFor: ["Festivals", "Rolling hills", "Coastal areas", "Agricultural center"],
    touristPhotos: [
      "https://images.unsplash.com/photo-1580947789899-563d60b07d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYWdkaWFuJTIwY2l0eSUyMHJvbGxpbmclMjBoaWxscyUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NTUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1512451557135-4b5424d3a9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYWdkaWFuJTIwY2l0eSUyMGZlc3RpdmFscyUyMFBoaWxpcHBpbmVzJTIwY3VsdHVyZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzYyNjY1NTUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYWdkaWFuJTIwY2l0eSUyMGNvYXN0YWwlMjBhcmVhJTIwUGhpbGlwcGluZXMlMjBzY2VuaWMlMjB2aWV3fGVufDF8fHx8fDE3NzYyNjY1NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYWdkaWFuJTIwY2l0eSUyMGFncmljdWx0dXJhbCUyIGNlbnRlciUyMFBoaWxpcHBpbmVzJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8fDE3NzYyNjY1NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYWdkaWFuJTIwY2l0eSUyMG5pZ2h0JTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1715884487912-27ec236680e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYWdkaWFuJTIwY2l0eSUyMGRvd250b3duJTIwUGhpbGlwcGluZXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyNjY1NTU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    touristActivities: [
      "Festival participation",
      "Hill trekking",
      "Beach activities",
      "Agricultural tours",
      "Photography"
    ]
  }
];
