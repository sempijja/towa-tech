
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Registration {
  id: number;
  timestamp: string;
  name: string;
  latitude: number;
  longitude: number;
  wastePerDay: number;
  storageCapacity: number;
}

const GreenBankAdmin = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);

  useEffect(() => {
    // Load registrations from localStorage
    const storedRegistrations = localStorage.getItem("greenBankRegistrations");
    if (storedRegistrations) {
      setRegistrations(JSON.parse(storedRegistrations));
    }
  }, []);

  const downloadRegistrationsJSON = () => {
    // Create a blob with the JSON data
    const jsonData = JSON.stringify(registrations, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    
    // Create a download link and trigger it
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `green-bank-registrations-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-50 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
            <Shield size={24} />
          </div>
          <h1 className="text-3xl font-bold text-blue-600">Green Bank Admin</h1>
        </div>

        <div className="mb-8">
          <Link to="/green-bank">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <ArrowLeft size={16} className="mr-2" />
              Back to Green Bank
            </Button>
          </Link>
        </div>
        
        <Card className="border-0 shadow-lg mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Registrations Overview</h2>
              <Button 
                onClick={downloadRegistrationsJSON}
                className="bg-blue-600 hover:bg-blue-700"
                disabled={registrations.length === 0}
              >
                <Download size={16} className="mr-2" />
                Download JSON
              </Button>
            </div>
            
            {registrations.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500 text-lg">No registrations found</p>
                <p className="text-gray-400">Registrations will appear here once users submit the form</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-4 py-3 text-left text-gray-600">Name</th>
                      <th className="px-4 py-3 text-left text-gray-600">Location</th>
                      <th className="px-4 py-3 text-left text-gray-600">Waste/Day (kg)</th>
                      <th className="px-4 py-3 text-left text-gray-600">Storage (tonnes)</th>
                      <th className="px-4 py-3 text-left text-gray-600">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((reg) => (
                      <tr key={reg.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-4 text-gray-800">{reg.name}</td>
                        <td className="px-4 py-4 text-gray-600">
                          {reg.latitude}, {reg.longitude}
                        </td>
                        <td className="px-4 py-4 text-gray-600">{reg.wastePerDay}</td>
                        <td className="px-4 py-4 text-gray-600">{reg.storageCapacity}</td>
                        <td className="px-4 py-4 text-gray-600">
                          {new Date(reg.timestamp).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
        
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-700 mb-3">Admin Information</h3>
          <p className="text-gray-700 mb-4">
            This admin panel allows repository administrators to view and download all Green Bank registrations.
            The data is currently stored in the browser's localStorage and can be exported as a JSON file.
          </p>
          <p className="text-gray-700">
            In a production environment, this would be connected to a secure database with proper authentication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GreenBankAdmin;
