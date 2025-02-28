'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePicker } from '@/components/ui/date-picker';
import { packages, PackageId } from '@/lib/packages';

export default function BookingForm() {
  const params = useParams();
  const packageId = params.id as PackageId;
  const packageDetails = packages[packageId];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelDate: new Date(),
    adults: '2',
    children: '0',
    specialRequests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Package booking confirmed! Check your email for details.');
    window.location.href = '/';
  };

  if (!packageDetails) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="p-6">
          <h1 className="text-2xl font-bold text-red-600">Package Not Found</h1>
          <p className="mt-2">The requested package does not exist.</p>
          <Button className="mt-4" onClick={() => window.location.href = '/packages'}>
            Return to Packages
          </Button>
        </Card>
      </div>
    );
  }

  const totalPrice = packageDetails.price * (parseInt(formData.adults) + parseInt(formData.children));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Book Your Package</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Booking Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label>Preferred Travel Date</Label>
              <DatePicker
                date={formData.travelDate}
                setDate={(date: Date | undefined) => setFormData({...formData, travelDate: date || new Date()})}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Adults</Label>
                <Select
                  value={formData.adults}
                  onValueChange={(value) => setFormData({...formData, adults: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Adult' : 'Adults'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Children</Label>
                <Select
                  value={formData.children}
                  onValueChange={(value) => setFormData({...formData, children: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[0,1,2,3,4].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Child' : 'Children'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialRequests">Special Requests</Label>
              <Input
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                placeholder="Any special requirements or requests?"
              />
            </div>

            <Button type="submit" className="w-full">
              Confirm Booking
            </Button>
          </form>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Package Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Package</span>
              <span>{packageDetails.name}</span>
            </div>
            <div className="flex justify-between">
              <span>Duration</span>
              <span>{packageDetails.duration}</span>
            </div>
            <div className="flex justify-between">
              <span>Price per person</span>
              <span>${packageDetails.price}</span>
            </div>
            <div className="flex justify-between">
              <span>Number of travelers</span>
              <span>{parseInt(formData.adults) + parseInt(formData.children)}</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold">
                <span>Total Price</span>
                <span>${totalPrice}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 