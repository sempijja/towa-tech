
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Leaf } from "lucide-react";

interface RegistrationFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  latitude: number | null;
  longitude: number | null;
  wastePerDay: number;
  storageCapacity: number;
}

const GreenBankRegistration = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLocating, setIsLocating] = useState(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    latitude: null,
    longitude: null,
    wastePerDay: 0,
    storageCapacity: 0,
  });

  // Validate Ugandan phone number
  const validateUgandanPhone = (phone: string): boolean => {
    // Ugandan phone numbers can be:
    // +256 7xx xxxxxx or +256 3xx xxxxxx
    // 07xx xxxxxx or 03xx xxxxxx
    const ugandaPhoneRegex = /^(?:\+256|0)(?:7|3)\d{8}$/;
    return ugandaPhoneRegex.test(phone.replace(/\s/g, ''));
  };

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
    
    // For numerical fields, apply limits
    if (name === "wastePerDay" || name === "storageCapacity") {
      const numValue = parseFloat(value);
      
      // Only process if it's a valid number
      if (!isNaN(numValue)) {
        // Limit waste per day to 1000 kg and storage capacity to 100 tonnes
        const maxValue = name === "wastePerDay" ? 1000 : 100;
        const limitedValue = Math.min(numValue, maxValue);
        
        setFormData({
          ...formData,
          [name]: limitedValue,
        });
        return;
      }
    }
    
    // Handle phone number validation
    if (name === "phoneNumber") {
      if (value && !validateUgandanPhone(value)) {
        setPhoneError("Please enter a valid Ugandan phone number (starting with +256 or 0, followed by 7 or 3, and 8 more digits)");
      } else {
        setPhoneError(null);
      }
    }
    
    // For other fields or invalid numbers, just set the value
    setFormData({
      ...formData,
      [name]: name === "firstName" || name === "lastName" || name === "phoneNumber" ? value : parseFloat(value),
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number before submission
    if (!validateUgandanPhone(formData.phoneNumber)) {
      setPhoneError("Please enter a valid Ugandan phone number before submitting");
      return;
    }
    
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input 
                id="firstName" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleInputChange} 
                placeholder="Enter your first name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input 
                id="lastName" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleInputChange} 
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input 
              id="phoneNumber" 
              name="phoneNumber" 
              type="tel"
              value={formData.phoneNumber} 
              onChange={handleInputChange} 
              placeholder="e.g., +256712345678 or 0712345678"
              required
            />
            {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
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
              max="1000"
              step="0.1"
              value={formData.wastePerDay} 
              onChange={handleInputChange} 
              placeholder="Enter amount in kilograms (max 1000)"
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
              max="100"
              step="0.1"
              value={formData.storageCapacity} 
              onChange={handleInputChange} 
              placeholder="Enter capacity in tonnes (max 100)"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            disabled={!!phoneError}
          >
            Submit Registration
          </Button>
        </form>
      </div>
    </div>
  );
};

export default GreenBankRegistration;
