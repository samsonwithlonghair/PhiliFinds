export async function POST(req: Request) {
  const body = await req.json();

  const itinerary = `
  Trip Plan for ${body.destination}

  Day 1:
  - Arrival and city tour
  - Local food trip

  Day 2:
  - Nature exploration
  - Beach or mountain visit

  Estimated Budget: ${body.budget}
  `;

  return Response.json({ itinerary });
}