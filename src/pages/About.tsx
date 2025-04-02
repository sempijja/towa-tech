import React from "react";
import { Users, Award, Leaf, Building, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCloudinaryUrl } from "@/lib/cloudinary";

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">Our Mission</h1>
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
            src={getCloudinaryUrl("pexels-fauxels-3184418_b6np03", {
              width: 1350,
              height: 900,
              crop: "fit",
              format: "webp",
              quality: "auto",
            })} 
            alt="Team working on waste management" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">Our Story</h1>
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
                  image: getCloudinaryUrl("hamza-headshot_cuyqll.jpg", {
                    width: 400,
                    height: 400,
                    crop: "fill",
                    format: "webp",
                    quality: "auto",
                    gravity: "face",
                  }),
                  bio: "With 15+ years in environmental management, Fahad leads our vision for sustainable waste solutions across Uganda.",
                },
                {
                  name: "Hamza Dauda",
                  role: "Operations Director",
                  image: getCloudinaryUrl("hamza-headshot_cuyqll.jpg", {
                    width: 400,
                    height: 400,
                    crop: "fill",
                    format: "webp",
                    quality: "auto",
                    gravity: "face",
                  }),
                  bio: "Hamza oversees our day-to-day operations, ensuring efficient service delivery and customer satisfaction.",
                },
                {
                  name: "Ssempijja Charles",
                  role: "CTO",
                  image: getCloudinaryUrl("hamza-headshot_cuyqll.jpg", {
                    width: 400,
                    height: 400,
                    crop: "fill",
                    format: "webp",
                    quality: "auto",
                    gravity: "face",
                  }),
                  bio: "Charles leads the technology teams at Towa and is in charge of software development and deployment for all our products.",
                },
                {
                  name: "New Member",
                  role: "Chief Financial Officer",
                  image: getCloudinaryUrl("hamza-headshot_cuyqll.jpg", {
                    width: 400,
                    height: 400,
                    crop: "fill",
                    format: "webp",
                    quality: "auto",
                    gravity: "face",
                  }),
                  bio: "Responsible for overseeing the financial operations and ensuring the economic stability of the organization.",
                },
                {
                  name: "New Member",
                  role: "Head of People",
                  image: getCloudinaryUrl("hamza-headshot_cuyqll.jpg", {
                    width: 400,
                    height: 400,
                    crop: "fill",
                    format: "webp",
                    quality: "auto",
                    gravity: "face",
                  }),
                  bio: "Leads the human resources team, focusing on employee engagement, recruitment, and organizational culture.",
                },
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
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">Join Our Mission</h1>
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
