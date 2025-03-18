
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PartnerCarousel from "@/components/PartnerCarousel";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-24 md:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-green-50/50 to-transparent"></div>
        <div className="container relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 animate-fade-in">
            Transforming Waste Management
            <span className="block mt-2 text-green-600">Across Uganda</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-600 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We partner with corporations to promote sustainable waste practices and purchase segregated waste to create a cleaner, greener future.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-lg"
              onClick={() => navigate("/products")}
            >
              Our Services <ArrowRight className="ml-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg border-green-600 text-green-600 hover:bg-green-50"
              onClick={() => navigate("/calculator")}
            >
              Calculate Your Footprint
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Companies Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Trusted By Leading Companies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We've collaborated with organizations across Uganda to promote sustainable waste management practices.</p>
        </div>
        <PartnerCarousel />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Our Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive services designed to transform waste management practices and promote sustainability.</p>
        </div>
        
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Corporate Training Programs" 
            description="We educate your team on best waste management practices, tailored to your industry's specific needs."
            icon="BookOpen"
            color="green"
          />
          <FeatureCard 
            title="Waste Purchase & Recycling" 
            description="We buy properly segregated waste from companies and ensure it's recycled or disposed of responsibly."
            icon="Recycle"
            color="blue"
          />
          <FeatureCard 
            title="Green Bank Project" 
            description="Providing wastepreneurs with access to loans, credit scoring, and group savings through our mobile application."
            icon="Smartphone"
            color="teal"
          />
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-green-600 text-green-600 hover:bg-green-50"
            onClick={() => navigate("/products")}
          >
            View All Services <ArrowRight className="ml-1" />
          </Button>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <Card className="bg-white/10 border-none shadow-lg backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-lg">Corporate Partners</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-none shadow-lg backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold mb-2">500</p>
                <p className="text-lg">Tons of Waste Recycled</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-none shadow-lg backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold mb-2">5,000+</p>
                <p className="text-lg">Individuals Trained</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-none shadow-lg backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="text-4xl font-bold mb-2">200+</p>
                <p className="text-lg">Wastepreneurs Supported</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-600 mb-8">Join us in our mission to create a cleaner Uganda through responsible waste management practices.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-lg"
              onClick={() => navigate("/contact")}
            >
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg border-green-600 text-green-600 hover:bg-green-50"
              onClick={() => navigate("/about")}
            >
              Learn About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
