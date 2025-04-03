
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
      {/* Hero Section - Apple Style */}
      <section className="relative flex flex-col items-center justify-center px-4 py-32 md:py-40 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="container relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-gray-900 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
            Transforming Waste Management
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-500">Across Uganda</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-500 font-light leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We partner with corporations to promote sustainable waste practices and purchase segregated waste to create a cleaner, greener future.
          </p>
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto bg-gray-900 hover:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate("/products")}
            >
              Our Services <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 h-auto border-2 border-gray-300 text-gray-800 hover:bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => navigate("/calculator")}
            >
              Calculate Your Footprint
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Companies Carousel - Apple Style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">Trusted By Leading Companies</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">We've collaborated with organizations across Uganda to promote sustainable waste management practices.</p>
        </div>
        <PartnerCarousel />
      </section>

      {/* Features Section - Apple Style */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">Our Solutions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Comprehensive services designed to transform waste management practices and promote sustainability.</p>
        </div>
        
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group hover:-translate-y-2 transition-all duration-300">
            <FeatureCard 
              title="Corporate Training Programs" 
              description="We educate your team on best waste management practices, tailored to your industry's specific needs."
              icon="BookOpen"
              color="green"
            />
          </div>
          <div className="group hover:-translate-y-2 transition-all duration-300">
            <FeatureCard 
              title="Waste Purchase & Recycling" 
              description="We buy properly segregated waste from companies and ensure it's recycled or disposed of responsibly."
              icon="Recycle"
              color="blue"
            />
          </div>
          <div className="group hover:-translate-y-2 transition-all duration-300">
            <FeatureCard 
              title="Green Bank Project" 
              description="Providing wastepreneurs with access to loans, credit scoring, and group savings through our mobile application."
              icon="Smartphone"
              color="teal"
            />
          </div>
        </div>
        
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            className="text-lg px-8 py-6 h-auto border-2 border-gray-300 text-gray-800 hover:bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() => navigate("/products")}
          >
            View All Services <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Impact Stats Section - Apple Style */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <Card className="bg-white/5 border-none shadow-xl backdrop-blur-sm rounded-2xl py-6">
              <CardContent className="pt-6">
                <p className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">50+</p>
                <p className="text-lg text-white/80">Corporate Partners</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-none shadow-xl backdrop-blur-sm rounded-2xl py-6">
              <CardContent className="pt-6">
                <p className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">500</p>
                <p className="text-lg text-white/80">Tons of Waste Recycled</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-none shadow-xl backdrop-blur-sm rounded-2xl py-6">
              <CardContent className="pt-6">
                <p className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">5,000+</p>
                <p className="text-lg text-white/80">Individuals Trained</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-none shadow-xl backdrop-blur-sm rounded-2xl py-6">
              <CardContent className="pt-6">
                <p className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">200+</p>
                <p className="text-lg text-white/80">Wastepreneurs Supported</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Apple Style */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-gray-900">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-500 mb-12 font-light">Join us in our mission to create a cleaner Uganda through responsible waste management practices.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto bg-gray-900 hover:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 h-auto border-2 border-gray-300 text-gray-800 hover:bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
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