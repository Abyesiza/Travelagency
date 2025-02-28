import BookingForm from './BookingForm';

// Add static params for all available flight IDs
export function generateStaticParams() {
  // These IDs match the ones in the dummyFlights array from search/page.tsx
  const flightIds = [1, 2, 3];
  return flightIds.map((id) => ({
    id: id.toString(),
  }));
}

export default function BookingPage() {
  return <BookingForm />;
}