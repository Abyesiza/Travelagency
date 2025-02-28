'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, Calendar, Globe, FileCheck, Palmtree } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: <Plane className="w-12 h-12 mb-4 text-blue-500" />,
    title: 'Travel Management',
    description: 'Comprehensive travel planning and management for individuals and groups.',
    link: '/services/travel'
  },
  {
    icon: <Calendar className="w-12 h-12 mb-4 text-purple-500" />,
    title: 'Event Planning',
    description: 'Full-service event planning and coordination for any occasion.',
    link: '/services/events'
  },
  {
    icon: <Palmtree className="w-12 h-12 mb-4 text-green-500" />,
    title: 'Holiday & Leisure',
    description: 'Curated holiday experiences and leisure activities worldwide.',
    link: '/services/holidays'
  },
  {
    icon: <FileCheck className="w-12 h-12 mb-4 text-red-500" />,
    title: 'Visa Processing',
    description: 'Expert assistance with visa applications and documentation.',
    link: '/services/visa'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">Comprehensive travel solutions for every need</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={service.link}>
                <Button className="w-full">Learn More</Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}