
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, TrendingUp, HandCoins, Info, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GreenBankInfo = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-green-50 text-green-600 w-12 h-12 rounded-full flex items-center justify-center">
            <Info size={24} />
          </div>
          <h1 className="text-3xl font-bold text-green-600">About Green Bank</h1>
        </div>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            Green Bank is an innovative initiative designed to transform waste management 
            practices by creating economic incentives for sustainable behavior. Here's how 
            it works and why it matters.
          </p>
          
          <h2 className="text-2xl font-bold text-green-600 mt-12 mb-6">The Green Bank Concept</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Green Bank operates on a simple principle: rewarding individuals and organizations 
            for responsible waste management. By tracking and incentivizing sustainable practices, 
            we create a system where environmental responsibility directly translates to economic benefits.
          </p>
          
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-8">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To revolutionize waste management by creating a circular economy where waste 
              is viewed as a resource, and sustainable practices are financially rewarded.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-green-600 mt-12 mb-6">How Green Bank Functions</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border border-green-100 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-green-50 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Recycle size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">Waste Collection & Sorting</h3>
                <p className="text-gray-600">
                  Members separate recyclables, compost organic waste, and track their overall waste reduction.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-green-100 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-green-50 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">Point Accumulation</h3>
                <p className="text-gray-600">
                  Green Points are awarded based on the quantity and quality of recycling efforts and waste reduction.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-green-100 shadow-md">
              <CardContent className="pt-6">
                <div className="bg-green-50 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <HandCoins size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-3">Reward Redemption</h3>
                <p className="text-gray-600">
                  Members can redeem their Green Points for various benefits, including service discounts and cash equivalents.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-bold text-green-600 mt-12 mb-6">Benefits for Participants</h2>
          
          <ul className="space-y-4 mb-12">
            {[
              "Economic incentives through direct rewards and discounts",
              "Recognition for environmental leadership in your community",
              "Access to specialized waste management services",
              "Contribution to improved environmental conditions",
              "Participation in community environmental projects",
              "Support for developing sustainable habits"
            ].map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <h2 className="text-2xl font-bold text-green-600 mt-12 mb-6">Joining Green Bank</h2>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            Joining is simple and begins with registering your details. Once registered, 
            you'll receive information on how to start earning points and tracking your 
            waste management progress. Both individuals and organizations are welcome to participate.
          </p>
          
          <div className="flex justify-center mb-12">
            <Link to="/green-bank-registration">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
                Register for Green Bank
              </Button>
            </Link>
          </div>
          
          <h2 className="text-2xl font-bold text-green-600 mt-12 mb-6">For Administration Access</h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Administrators of the Green Bank initiative can access the collected data for analysis and program management.
            All submitted registration information is securely stored and processed in accordance with data protection regulations.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Admin Tools</h3>
            <p className="text-gray-700 mb-4">
              Repository administrators can download the collected registration data for analysis and program management.
            </p>
            <Link to="/green-bank-admin">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Admin Access
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <Link to="/green-bank">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Back to Green Bank
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GreenBankInfo;
