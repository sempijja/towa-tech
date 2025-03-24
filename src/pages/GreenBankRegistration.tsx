import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Leaf } from "lucide-react";
import { supabase } from "@/supabaseClient";

interface RegistrationFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  latitude: number | null;
  longitude: number | null;
  wastePerDay: number;
  storageCapacity: number;
  division: string;
  parish: string;
  wasteType: string;
  otherWasteType?: string;
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
    division: "",
    parish: "",
    wasteType: "",
    otherWasteType: "",
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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone number before submission
    if (!validateUgandanPhone(formData.phoneNumber)) {
      setPhoneError("Please enter a valid Ugandan phone number before submitting");
      return;
    }

    // Validate "Other" waste type if selected
    if (formData.wasteType === "Other" && !formData.otherWasteType) {
      toast({
        title: "Validation error",
        description: "Please specify the type of waste for 'Other'.",
        variant: "destructive",
      });
      return;
    }

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phoneNumber ||
      !formData.latitude ||
      !formData.longitude ||
      !formData.wastePerDay ||
      !formData.storageCapacity ||
      !formData.division ||
      !formData.parish ||
      !formData.wasteType
    ) {
      toast({
        title: "Validation error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Saving data to Supabase
    const { data, error } = await supabase.from("green_bank_registrations").insert([
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone_number: formData.phoneNumber,
        latitude: formData.latitude,
        longitude: formData.longitude,
        waste_per_day: formData.wastePerDay,
        storage_capacity: formData.storageCapacity,
        division: formData.division,
        parish: formData.parish,
        waste_type: formData.wasteType,
        other_waste_type: formData.otherWasteType || null,
      },
    ]);

    if (error) {
      console.error("Error saving data:", error);
      toast({
        title: "Error",
        description: "Failed to submit your data. Please try again.",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Registration successful!",
      description: "Your registration has been submitted.",
    });

    // Optionally, navigate back to the Green Bank page
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 mb-2 sm:mb-0"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
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

          {/* Division Dropdown */}
          <div className="space-y-2">
            <Label htmlFor="division">Division</Label>
            <select
              id="division"
              name="division"
              aria-label="Division"
              value={formData.division || ""}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
            >
              <option value="" disabled>
                Select Division
              </option>
              <option value="Central Division">Central Division</option>
              <option value="Kawempe Division">Kawempe Division</option>
              <option value="Makindye Division">Makindye Division</option>
              <option value="Nakawa Division">Nakawa Division</option>
              <option value="Rubaga Division">Rubaga Division</option>
              <option value="Outside Kampala">Outside Kampala</option>
            </select>
          </div>

          {/* Parish Input */}
          <div className="space-y-2">
            <Label htmlFor="parish">Parish</Label>
            <Input
              id="parish"
              name="parish"
              value={formData.parish || ""}
              onChange={handleInputChange}
              placeholder="Enter your parish"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
            />
          </div>

          {/* Type of Waste Collected */}
          <div className="space-y-2">
            <Label htmlFor="wasteType">Type of Waste Collected</Label>
            <select
              id="wasteType"
              name="wasteType"
              title="Type of Waste Collected"
              value={formData.wasteType || ""}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
            >
              <option value="" disabled>
                Select Waste Type
              </option>
              <option value="Plastic">Plastic</option>
              <option value="Paper/Cardboard">Paper/Cardboard</option>
              <option value="Metal">Metal</option>
              <option value="Glass">Glass</option>
              <option value="Organic Waste">Organic Waste</option>
              <option value="Electronic Waste">Electronic Waste</option>
              <option value="Other">Other (please specify)</option>
            </select>
            {formData.wasteType === "Other" && (
              <Input
                id="otherWasteType"
                name="otherWasteType"
                value={formData.otherWasteType || ""}
                onChange={handleInputChange}
                placeholder="Please specify the type of waste"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
              />
            )}
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
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
