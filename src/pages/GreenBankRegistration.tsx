
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Leaf } from "lucide-react";

interface RegistrationFormData {
  name: string;
  latitude: number | null;
  longitude: number | null;
  wastePerDay: number;
  storageCapacity: number;
}

const GreenBankRegistration = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLocating, setIsLocating] = useState(false);
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    latitude: null,
    longitude: null,
    wastePerDay: 0,
    storageCapacity: 0,
  });

  // Function to get user's current location
  const getCurrentLocation = () => {
    setIsLocating(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData({
            ...formData,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setIsLocating(false);
          toast({
            title: "Location detected",
            description: "Your current location has been added to the form.",
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLocating(false);
          toast({
            title: "Location error",
            description: "Could not detect your location. Please try again or enter manually.",
            variant: "destructive",
          });
        }
      );
    } else {
      toast({
        title: "Geolocation not supported",
        description: "Your browser doesn't support geolocation.",
        variant: "destructive",
      });
      setIsLocating(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "name" ? value : parseFloat(value),
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save the registration data to localStorage as JSON
    const registrations = JSON.parse(localStorage.getItem("greenBankRegistrations") || "[]");
    const newRegistration = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    };
    
    registrations.push(newRegistration);
    localStorage.setItem("greenBankRegistrations", JSON.stringify(registrations));
    
    // Show success message
    toast({
      title: "Registration successful!",
      description: "Your Green Bank registration has been submitted.",
    });
    
    // Navigate back to Green Bank page
    navigate("/green-bank");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-green-50 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
            <Leaf size={24} />
          </div>
          <h1 className="text-3xl font-bold text-green-600">Green Bank Registration</h1>
        </div>
        
        <p className="text-gray-600 mb-8 text-center">
          Join our Green Bank initiative to earn rewards for your sustainable waste management practices.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>Location</Label>
            <div className="flex gap-4 flex-col sm:flex-row">
              <div className="flex-1">
                <Input 
                  name="latitude" 
                  value={formData.latitude !== null ? formData.latitude : ""} 
                  onChange={handleInputChange} 
                  placeholder="Latitude"
                  required
                  readOnly
                  className="mb-2 sm:mb-0"
                />
              </div>
              <div className="flex-1">
                <Input 
                  name="longitude"
                  value={formData.longitude !== null ? formData.longitude : ""} 
                  onChange={handleInputChange} 
                  placeholder="Longitude"
                  required
                  readOnly
                />
              </div>
            </div>
            <Button 
              type="button" 
              variant="outline" 
              className="mt-2 w-full border-green-600 text-green-600 hover:bg-green-50"
              onClick={getCurrentLocation}
              disabled={isLocating}
            >
              {isLocating ? "Detecting Location..." : "Detect My Current Location"}
            </Button>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="wastePerDay">Waste Collected Per Day (kg)</Label>
            <Input 
              id="wastePerDay" 
              name="wastePerDay" 
              type="number"
              min="0"
              step="0.1"
              value={formData.wastePerDay} 
              onChange={handleInputChange} 
              placeholder="Enter amount in kilograms"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="storageCapacity">Storage Capacity (tonnes)</Label>
            <Input 
              id="storageCapacity" 
              name="storageCapacity" 
              type="number"
              min="0"
              step="0.1"
              value={formData.storageCapacity} 
              onChange={handleInputChange} 
              placeholder="Enter capacity in tonnes"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            Submit Registration
          </Button>
        </form>
      </div>
    </div>
  );
};

export default GreenBankRegistration;
