'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, Clock, DollarSign } from 'lucide-react';

const dummyFlights = [
  {
    id: 1,
    airline: 'World Wide Airways',
    from: 'New York (JFK)',
    to: 'London (LHR)',
    departure: '08:00 AM',
    arrival: '8:00 PM',
    duration: '7h',
    price: 450,
    stops: 0,
  },
  {
    id: 2,
    airline: 'Global Express',
    from: 'New York (JFK)',
    to: 'London (LHR)',
    departure: '10:30 AM',
    arrival: '10:30 PM',
    duration: '7h',
    price: 380,
    stops: 1,
  },
  {
    id: 3,
    airline: 'Sky Connect',
    from: 'New York (JFK)',
    to: 'London (LHR)',
    departure: '2:00 PM',
    arrival: '2:00 AM',
    duration: '7h',
    price: 520,
    stops: 0,
  },
];

export default function SearchResults() {
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Flights</h1>
      
      <div className="grid grid-cols-1 gap-6">
        {dummyFlights.map((flight) => (
          <Card key={flight.id} className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <Plane className="w-6 h-6 mr-2 text-blue-500" />
                  <h3 className="text-xl font-semibold">{flight.airline}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Departure</p>
                    <p className="font-semibold">{flight.departure}</p>
                    <p className="text-sm">{flight.from}</p>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <Clock className="w-4 h-4 mx-auto mb-1 text-gray-400" />
                      <p className="text-sm text-gray-500">{flight.duration}</p>
                      <p className="text-sm text-gray-500">
                        {flight.stops === 0 ? 'Direct' : `${flight.stops} Stop`}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Arrival</p>
                    <p className="font-semibold">{flight.arrival}</p>
                    <p className="text-sm">{flight.to}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-6 text-center">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="w-4 h-4 text-green-500" />
                  <span className="text-2xl font-bold">${flight.price}</span>
                </div>
                <Button 
                  onClick={() => window.location.href = `/booking/${flight.id}`}
                  className="w-full"
                >
                  Select Flight
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}