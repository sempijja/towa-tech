
import React from "react";
import { Leaf, TrendingUp, Award, Recycle, Sprout, HandCoins } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GreenBank = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
            Green Bank Initiative
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Rewarding sustainable waste management practices through our innovative Green Bank program, 
            where environmental responsibility meets economic opportunity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md">
              Join Green Bank
            </Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              Learn More
            </Button>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Green Bank Initiative" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-green-600">How Green Bank Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Earn rewards while contributing to a cleaner environment with our simple three-step process
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="pt-6">
              <div className="bg-green-50 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Recycle & Reduce</h3>
              <p className="text-gray-600">
                Separate recyclables, compost organic waste, and reduce your overall waste generation. 
                We'll track your progress during collection.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="pt-6">
              <div className="bg-green-50 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Earn Green Points</h3>
              <p className="text-gray-600">
                Receive Green Points based on your waste reduction efforts, recyclable separation, 
                and participation in our community initiatives.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg text-center">
            <CardContent className="pt-6">
              <div className="bg-green-50 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandCoins size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Redeem Rewards</h3>
              <p className="text-gray-600">
                Use your Green Points for discounts on waste management services, exchange for eco-friendly 
                products, or convert to cash contributions to community projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-24 bg-gray-50 rounded-2xl p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-green-600">Benefits of Green Bank</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of households and businesses already benefiting from our program
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Leaf size={32} />,
              title: "Environmental Impact",
              description: "Reduce landfill waste and lower your carbon footprint with trackable results."
            },
            {
              icon: <HandCoins size={32} />,
              title: "Economic Benefits",
              description: "Save on waste management costs and earn valuable rewards for sustainable practices."
            },
            {
              icon: <Sprout size={32} />,
              title: "Community Development",
              description: "Support local environmental initiatives and contribute to a cleaner neighborhood."
            },
            {
              icon: <Award size={32} />,
              title: "Recognition",
              description: "Earn certification for your environmental contributions and Green Bank level status."
            }
          ].map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-green-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-green-600">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real impact from real Green Bank members
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Nakawa Community Association",
              image: "https://images.unsplash.com/photo-1531113118045-8f587921a8c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              story: "Reduced neighborhood waste by 60% in just 6 months, earning enough Green Points to fund a local park renovation."
            },
            {
              name: "Kampala Heights Apartments",
              image: "https://images.unsplash.com/photo-1594751684241-7691127190a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              story: "Implemented a comprehensive recycling program for 200+ residents, saving 30% on waste management costs annually."
            },
            {
              name: "Entebbe Business District",
              image: "https://images.unsplash.com/photo-1604754742629-3e0474078e5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              story: "Transformed business waste practices, diverting 15 tons of recyclables monthly and earning Gold Green Bank status."
            }
          ].map((story, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">{story.name}</h3>
                <p className="text-gray-600">{story.story}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-600 rounded-xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Join Green Bank Today</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Start earning rewards for your sustainable waste management efforts and join our 
          growing community of environmentally conscious individuals and organizations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
            Register Now
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-green-700 px-8 py-3">
            Download Brochure
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GreenBank;
