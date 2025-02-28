'use client';

import { Plane, Globe, Search, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DatePicker } from '@/components/ui/date-picker';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

export default function Home() {
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    departDate: new Date(),
    returnDate: new Date(),
    passengers: '1',
  });

  const popularDestinations = [
    {
      name: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
      price: '$599',
    },
    {
      name: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc',
      price: '$899',
    },
    {
      name: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
      price: '$749',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-cover bg-center" 
           style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-6xl font-bold mb-4 text-center">World Wide Travel</h1>
            <p className="text-xl mb-8 text-center">Discover the world with us</p>
            <Globe className="w-16 h-16 mb-8" />
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <Card className="p-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gray-500" />
              <Input 
                placeholder="From"
                value={searchParams.from}
                onChange={(e) => setSearchParams({...searchParams, from: e.target.value})}
              />
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gray-500" />
              <Input 
                placeholder="To"
                value={searchParams.to}
                onChange={(e) => setSearchParams({...searchParams, to: e.target.value})}
              />
            </div>
            <div>
              <DatePicker 
                date={searchParams.departDate}
                setDate={(date) => setSearchParams({...searchParams, departDate: date})}
              />
            </div>
            <div>
              <DatePicker 
                date={searchParams.returnDate}
                setDate={(date) => setSearchParams({...searchParams, returnDate: date})}
              />
            </div>
            <div>
              <Select 
                value={searchParams.passengers}
                onValueChange={(value) => setSearchParams({...searchParams, passengers: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Passengers" />
                </SelectTrigger>
                <SelectContent>
                  {[1,2,3,4,5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? 'Passenger' : 'Passengers'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button className="w-full" onClick={() => window.location.href = '/search'}>
                <Search className="w-4 h-4 mr-2" />
                Search Flights
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Popular Destinations */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDestinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-64">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-xl font-semibold text-white">{destination.name}</h3>
                  <p className="text-white">Starting from {destination.price}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}