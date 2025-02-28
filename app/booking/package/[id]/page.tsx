import { packages } from '@/lib/packages';
import BookingForm from './BookingForm';

// This needs to be a server component export for static site generation
export function generateStaticParams() {
  return Object.keys(packages).map((id) => ({
    id,
  }));
}

export default function PackagePage() {
  return <BookingForm />;
}