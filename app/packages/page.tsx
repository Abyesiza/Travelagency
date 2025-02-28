'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import Link from 'next/link';

const packages = [
  {
    id: 'europe-explorer',
    name: 'Europe Explorer',
    price: 2499,
    duration: '14 days',
    type: 'Holiday Package',
    image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89',
    features: [
      '7 countries',
      'Luxury accommodations',
      'Guided tours',
      'All transfers included',
      'Breakfast and dinner'
    ]
  },
  {
    id: 'asia-adventure',
    name: 'Asia Adventure',
    price: 1999,
    duration: '12 days',
    type: 'Adventure Package',
    image: 'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1',
    features: [
      '4 countries',
      'Mixed accommodations',
      'Adventure activities',
      'Local experiences',
      'Some meals included'
    ]
  },
  {
    id: 'luxury-maldives',
    name: 'Luxury Maldives',
    price: 3499,
    duration: '7 days',
    type: 'Luxury Package',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
    features: [
      'Overwater villa',
      'All-inclusive meals',
      'Spa treatments',
      'Water activities',
      'Private transfers'
    ]
  }
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Travel Packages</h1>
          <p className="text-lg text-gray-600">Choose your perfect travel experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4">
                  {pkg.type}
                </Badge>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{pkg.name}</h3>
                    <p className="text-gray-500">{pkg.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">${pkg.price}</p>
                    <p className="text-sm text-gray-500">per person</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/booking/package/${pkg.id}`}>
                  <Button className="w-full">Book Now</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}