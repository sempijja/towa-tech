
import React, { useState } from "react";
import { Calculator, BarChart3, Info, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Create a new component for the results
const ResultsDisplay = ({ results }: { results: any }) => {
  if (!results) return null;
  
  return (
    <Card className="border-0 shadow-lg mt-8">
      <CardHeader>
        <CardTitle className="text-2xl text-green-600">Your Carbon Footprint Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Total Carbon Footprint</p>
            <p className="text-3xl font-bold text-green-600">{results.total} kg CO2</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Compared to Average</p>
            <p className="text-3xl font-bold text-blue-600">{results.comparison}%</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Reduction Potential</p>
            <p className="text-3xl font-bold text-purple-600">{results.potential} kg CO2</p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-4">Carbon Breakdown</h3>
        <div className="space-y-4">
          {Object.entries(results.categories).map(([category, value]: [string, any]) => (
            <div key={category}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{category}</span>
                <span className="text-gray-600">{value} kg CO2</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-green-600 h-2.5 rounded-full" 
                  style={{ width: `${(value / results.total) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const CarbonCalculator = () => {
  const [calculatorType, setCalculatorType] = useState("personal");
  const [results, setResults] = useState<any>(null);
  
  // Mock calculation function
  const calculateFootprint = (type: string) => {
    if (type === "personal") {
      setResults({
        total: 4250,
        comparison: -15,
        potential: 1200,
        categories: {
          "Energy": 1520,
          "Transportation": 1850,
          "Food": 680,
          "Waste": 200
        }
      });
    } else {
      setResults({
        total: 28500,
        comparison: +5,
        potential: 9200,
        categories: {
          "Energy & Operations": 12400,
          "Transportation & Logistics": 8600,
          "Supply Chain": 5800,
          "Waste Management": 1700
        }
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
          Carbon Footprint Calculator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Measure, understand, and reduce your environmental impact with our easy-to-use 
          carbon footprint calculator.
        </p>
      </div>

      {/* Calculator Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        <div className="md:col-span-2">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Calculate Your Carbon Footprint</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs 
                defaultValue="personal" 
                value={calculatorType}
                onValueChange={setCalculatorType}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="business">Business</TabsTrigger>
                </TabsList>
                
                <TabsContent value="personal" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Energy Usage</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="electricity">Monthly Electricity (kWh)</Label>
                        <Input id="electricity" type="number" placeholder="e.g., 300" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gas">Monthly Gas/Fuel (units)</Label>
                        <Input id="gas" type="number" placeholder="e.g., 50" />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Transportation</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="car-distance">Weekly Car/Motorcycle Distance (km)</Label>
                        <Input id="car-distance" type="number" placeholder="e.g., 100" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="flights">Flights per Year</Label>
                        <Input id="flights" type="number" placeholder="e.g., 2" />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Food & Consumption</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="diet">Diet Type</Label>
                        <select 
                          id="diet" 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        >
                          <option value="meat-heavy">Meat Heavy</option>
                          <option value="average">Average/Mixed</option>
                          <option value="vegetarian">Vegetarian</option>
                          <option value="vegan">Vegan</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="shopping">Shopping Habits</Label>
                        <select 
                          id="shopping" 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        >
                          <option value="high">High Consumer</option>
                          <option value="average">Average</option>
                          <option value="minimal">Minimal/Sustainable</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => calculateFootprint("personal")}
                    >
                      Calculate My Footprint
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="business" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Company Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="business-type">Business Type</Label>
                        <select 
                          id="business-type" 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        >
                          <option value="retail">Retail</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="service">Service</option>
                          <option value="office">Office-based</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="employees">Number of Employees</Label>
                        <Input id="employees" type="number" placeholder="e.g., 50" />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Energy & Facilities</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="facility-size">Facility Size (sq m)</Label>
                        <Input id="facility-size" type="number" placeholder="e.g., 500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="energy-usage">Annual Energy Usage (kWh)</Label>
                        <Input id="energy-usage" type="number" placeholder="e.g., 50000" />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Transportation & Supply Chain</h3>
                    <div className="space-y-2">
                      <Label htmlFor="business-travel">Business Travel & Shipping (km/year)</Label>
                      <Input id="business-travel" type="number" placeholder="e.g., 10000" />
                    </div>
                    <div className="space-y-2 mt-4">
                      <Label htmlFor="supply-chain">Supply Chain Description</Label>
                      <Textarea 
                        id="supply-chain" 
                        placeholder="Briefly describe your supply chain, including major materials and distances."
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => calculateFootprint("business")}
                    >
                      Calculate Business Footprint
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
              
              {/* Results Display */}
              <ResultsDisplay results={results} />
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="border-0 shadow-lg h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info size={20} />
                Why Calculate?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600">
                Understanding your carbon footprint is the first step toward making meaningful 
                environmental changes in your life or business.
              </p>
              
              <div>
                <h4 className="font-medium mb-2 flex items-center">
                  <BarChart3 size={18} className="mr-2 text-green-600" />
                  Data-Driven Insights
                </h4>
                <p className="text-sm text-gray-600">
                  Our calculator provides detailed breakdowns of your carbon impact across 
                  different aspects of your life or operations.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 flex items-center">
                  <ArrowRight size={18} className="mr-2 text-green-600" />
                  Actionable Recommendations
                </h4>
                <p className="text-sm text-gray-600">
                  Based on your results, we'll suggest personalized steps to reduce your 
                  environmental impact effectively.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2 flex items-center">
                  <Calculator size={18} className="mr-2 text-green-600" />
                  Track Your Progress
                </h4>
                <p className="text-sm text-gray-600">
                  Save your results and track changes over time to see the impact of your 
                  environmental efforts.
                </p>
              </div>
              
              <Separator />
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Did You Know?</h4>
                <p className="text-sm text-gray-600">
                  The average person in Uganda produces about 5,000 kg of CO2 annually, but 
                  with simple changes, this can be reduced by up to 30%.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-green-600">Carbon Reduction Tips</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps you can take to lower your environmental impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Energy Savings",
              tips: [
                "Use energy-efficient appliances",
                "Install LED lighting throughout your home",
                "Unplug devices when not in use",
                "Consider solar power options"
              ]
            },
            {
              title: "Transportation",
              tips: [
                "Walk or bike for short trips",
                "Use public transportation when possible",
                "Maintain your vehicle properly",
                "Consider carpooling or ride-sharing"
              ]
            },
            {
              title: "Food & Diet",
              tips: [
                "Reduce meat consumption",
                "Buy local, seasonal produce",
                "Limit food waste through meal planning",
                "Compost organic waste"
              ]
            },
            {
              title: "Consumption",
              tips: [
                "Choose quality products that last longer",
                "Repair items rather than replacing them",
                "Buy second-hand when possible",
                "Recycle properly and consistently"
              ]
            }
          ].map((category, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4 text-green-600">{category.title}</h3>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-gray-600 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Take the Next Step</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Ready to reduce your carbon footprint? Connect with our team to learn about our 
          sustainable waste management solutions and the Green Bank program.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            Contact Our Team
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-gray-800 px-8 py-3">
            Download Full Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarbonCalculator;
