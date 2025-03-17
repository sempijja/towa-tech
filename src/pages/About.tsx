
import React from "react";
import { Users, Award, Leaf, Building, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
          About Towa Uchafu na Nusu
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're transforming waste management across Uganda with innovative, 
          sustainable solutions that benefit communities and our planet.
        </p>
      </div>

      {/* Our Mission */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-green-600">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At Towa Uchafu na Nusu, we're committed to revolutionizing waste management 
            in Uganda through sustainable practices, community engagement, and innovative technologies.
          </p>
          <p className="text-gray-600 mb-6">
            Our mission is to create cleaner, healthier communities while promoting environmental 
            sustainability and economic opportunities for local residents.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Leaf className="text-green-500" />, text: "Environmental Impact" },
              { icon: <Users className="text-green-500" />, text: "Community Focus" },
              { icon: <Award className="text-green-500" />, text: "Excellence in Service" },
              { icon: <CheckCircle className="text-green-500" />, text: "Sustainable Solutions" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {item.icon}
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Team working on waste management" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-green-600">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming Uganda's leading waste management solution
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">The Beginning</h3>
              <p className="text-gray-600">
                Founded in 2015 with just three employees and a single truck, we started with a 
                simple mission: make Kampala cleaner, one neighborhood at a time.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Growth & Innovation</h3>
              <p className="text-gray-600">
                By 2018, we expanded to five cities and introduced our revolutionary recycling 
                program, diverting over 10,000 tons of waste from landfills annually.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Today's Impact</h3>
              <p className="text-gray-600">
                Now serving communities across Uganda, our integrated waste management approach 
                combines technology, education, and sustainable practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team & Values Tabs */}
      <div className="mb-24">
        <Tabs defaultValue="team" className="w-full">
          <div className="text-center mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="team">Our Team</TabsTrigger>
              <TabsTrigger value="values">Our Values</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="team" className="mt-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Fahad Sserumpise",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                  bio: "With 15+ years in environmental management, Fahad leads our vision for sustainable waste solutions across Uganda."
                },
                {
                  name: "Hamza Dauda",
                  role: "Operations Director",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                  bio: "Hamza oversees our day-to-day operations, ensuring efficient service delivery and customer satisfaction."
                },
                {
                  name: "Ssempijja Charles",
                  role: "CTO",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                  bio: "Charles leads the technology teams at Towa and is in charge of software development and deployment for all our products."
                }
              ].map((member, index) => (
                <Card key={index} className="border-0 shadow-lg overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-green-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="values">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Sustainability First",
                  description: "We prioritize environmental responsibility in every action we take, from operational choices to strategic planning."
                },
                {
                  title: "Community Empowerment",
                  description: "We believe in creating opportunities for local communities and educating citizens on sustainable waste practices."
                },
                {
                  title: "Innovation",
                  description: "We continuously explore new technologies and approaches to improve waste management efficiency and impact."
                },
                {
                  title: "Transparency",
                  description: "We maintain open communication with our stakeholders and take accountability for our environmental footprint."
                }
              ].map((value, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Call to Action */}
      <div className="bg-green-50 rounded-xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-600">Join Our Mission</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Whether you're a business looking for waste management solutions or an individual wanting to 
          make a difference, we invite you to be part of our journey toward a cleaner Uganda.
        </p>
        <button 
          onClick={() => window.location.href = '/contact'}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default About;
