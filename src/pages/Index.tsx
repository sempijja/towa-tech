
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
      {/* Hero Section - Airbnb Style */}
      <section className="relative px-4 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-gray-900">
                Transforming Waste Management
                <span className="block mt-2 text-airbnb-red">Across Uganda</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                We partner with corporations to promote sustainable waste practices and purchase segregated waste to create a cleaner, greener future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="rounded-lg bg-airbnb-red hover:bg-rose-700 text-white"
                  onClick={() => navigate("/products")}
                >
                  Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="rounded-lg border-2 border-gray-300 text-gray-700 hover:border-gray-400"
                  onClick={() => navigate("/calculator")}
                >
                  Calculate Your Footprint
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Sustainable waste management" 
                  className="w-full h-auto object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Companies Carousel - Airbnb Style */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900">Trusted By Leading Companies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We've collaborated with organizations across Uganda to promote sustainable waste management practices.</p>
        </div>
        <PartnerCarousel />
      </section>

      {/* Features Section - Airbnb Style */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900">Our Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive services designed to transform waste management practices and promote sustainability.</p>
        </div>
        
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="hover-lift">
            <FeatureCard 
              title="Corporate Training Programs" 
              description="We educate your team on best waste management practices, tailored to your industry's specific needs."
              icon="BookOpen"
              color="rose"
            />
          </div>
          <div className="hover-lift">
            <FeatureCard 
              title="Waste Purchase & Recycling" 
              description="We buy properly segregated waste from companies and ensure it's recycled or disposed of responsibly."
              icon="Recycle"
              color="blue"
            />
          </div>
          <div className="hover-lift">
            <FeatureCard 
              title="Green Bank Project" 
              description="Providing wastepreneurs with access to loans, credit scoring, and group savings through our mobile application."
              icon="Smartphone"
              color="teal"
            />
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="rounded-lg border-2 border-gray-300 text-gray-700 hover:border-gray-400"
            onClick={() => navigate("/products")}
          >
            View All Services <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Impact Stats Section - Airbnb Style */}
      <section className="py-24 bg-rose-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-medium text-center mb-16">Our Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="airbnb-card border-none shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-4xl font-bold mb-3 text-airbnb-red">50+</p>
                <p className="text-gray-600">Corporate Partners</p>
              </CardContent>
            </Card>
            
            <Card className="airbnb-card border-none shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-4xl font-bold mb-3 text-airbnb-red">500</p>
                <p className="text-gray-600">Tons of Waste Recycled</p>
              </CardContent>
            </Card>
            
            <Card className="airbnb-card border-none shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-4xl font-bold mb-3 text-airbnb-red">5,000+</p>
                <p className="text-gray-600">Individuals Trained</p>
              </CardContent>
            </Card>
            
            <Card className="airbnb-card border-none shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-4xl font-bold mb-3 text-airbnb-red">200+</p>
                <p className="text-gray-600">Wastepreneurs Supported</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Airbnb Style */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">Ready to Make a Difference?</h2>
          <p className="text-lg text-gray-600 mb-10">Join us in our mission to create a cleaner Uganda through responsible waste management practices.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="rounded-lg bg-airbnb-red hover:bg-rose-700 text-white"
              onClick={() => navigate("/contact")}
            >
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-lg border-2 border-gray-300 text-gray-700 hover:border-gray-400"
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
