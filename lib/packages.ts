export const packages = {
  'europe-explorer': {
    name: 'Europe Explorer',
    duration: '14 days',
    price: 2499,
  },
  'asia-adventure': {
    name: 'Asia Adventure',
    duration: '12 days',
    price: 1999,
  },
  'luxury-maldives': {
    name: 'Luxury Maldives',
    duration: '7 days',
    price: 3499,
  },
} as const;

export type PackageId = keyof typeof packages; 