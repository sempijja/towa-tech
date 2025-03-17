
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CheckCircle, Leaf, Recycle, BookOpen, BarChart, Users, Smartphone, Shield, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Define a type for the product/service cards
interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  primary?: boolean;
}

const ServiceCard = ({ 
  title, 
  description, 
  features, 
  icon, 
  imageUrl, 
  ctaText, 
  ctaLink, 
  primary = false 
}: ServiceCardProps) => {
  const navigate = useNavigate();
  
  return (
    <Card className={`overflow-hidden h-full flex flex-col border-0 shadow-lg ${primary ? 'ring-2 ring-green-600' : ''}`}>
      <div className="h-60 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="relative">
        {primary && (
          <div className="absolute -top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Popular Choice
          </div>
        )}
        <div className="p-2 bg-green-100 text-green-700 rounded-full w-12 h-12 flex items-center justify-center mb-2">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${primary ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-800 hover:bg-gray-900'}`}
          onClick={() => navigate(ctaLink)}
        >
          {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const Products = () => {
  const navigate = useNavigate();

  // Corporate services
  const corporateServices = [
    {
      title: "Waste Management Training",
      description: "Comprehensive training programs for corporate staff on proper waste handling and segregation.",
      features: [
        "Customized training modules",
        "Interactive workshops",
        "Certification programs",
        "Regular follow-ups"
      ],
      icon: <BookOpen className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
      ctaText: "Learn More",
      ctaLink: "/contact",
      primary: true
    },
    {
      title: "Waste Collection & Recycling",
      description: "Professional collection services with proper segregation and recycling of corporate waste.",
      features: [
        "Scheduled pickups",
        "Segregated waste bins",
        "Recycling reports",
        "Compliance certificates"
      ],
      icon: <Recycle className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80",
      ctaText: "Get Started",
      ctaLink: "/contact"
    },
    {
      title: "Environmental Compliance",
      description: "Ensure your business meets all local and international environmental standards and regulations.",
      features: [
        "Regulatory guidance",
        "Compliance audits",
        "Documentation support",
        "Ongoing monitoring"
      ],
      icon: <Shield className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
      ctaText: "Check Compliance",
      ctaLink: "/contact"
    }
  ];

  // Green bank services
  const greenBankServices = [
    {
      title: "Loans for Wastepreneurs",
      description: "Micro-loans for waste collectors to expand their operations and invest in equipment.",
      features: [
        "Flexible repayment options",
        "Low interest rates",
        "No collateral required",
        "Quick approval process"
      ],
      icon: <Smartphone className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80",
      ctaText: "Apply Now",
      ctaLink: "/green-bank",
      primary: true
    },
    {
      title: "ROSCA Savings Groups",
      description: "Join rotating savings groups with other wastepreneurs to pool resources and access funds.",
      features: [
        "Community-based savings",
        "Regular distribution cycles",
        "Mobile money integration",
        "Transparent management"
      ],
      icon: <Users className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
      ctaText: "Join a Group",
      ctaLink: "/green-bank"
    },
    {
      title: "Credit Scoring System",
      description: "Build your financial profile through our custom credit scoring system for the informal sector.",
      features: [
        "Activity-based scoring",
        "Regular score updates",
        "Loan eligibility tracking",
        "Financial advice"
      ],
      icon: <BarChart className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
      ctaText: "Check Eligibility",
      ctaLink: "/green-bank"
    }
  ];

  // Sustainability services
  const sustainabilityServices = [
    {
      title: "Carbon Footprint Calculation",
      description: "Measure and track your organization's environmental impact with our detailed carbon assessment.",
      features: [
        "Comprehensive analysis",
        "Industry benchmarking",
        "Reduction strategies",
        "Ongoing monitoring"
      ],
      icon: <Leaf className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1498925008800-019c6bae5cfa?auto=format&fit=crop&q=80",
      ctaText: "Calculate Now",
      ctaLink: "/calculator",
      primary: true
    },
    {
      title: "Sustainability Reporting",
      description: "Professional ESG and sustainability reports for your stakeholders and regulatory compliance.",
      features: [
        "GRI standards compliance",
        "Data visualization",
        "Impact assessment",
        "Improvement recommendations"
      ],
      icon: <FileText className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
      ctaText: "Request Report",
      ctaLink: "/contact"
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero section */}
      <section className="mb-16 text-center">
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img 
            src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80" 
            alt="Sustainable Solutions Banner" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-600/40 flex flex-col items-center justify-center text-white p-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services & Solutions</h1>
            <p className="text-xl max-w-3xl">Comprehensive waste management and sustainability solutions for businesses and communities across Uganda.</p>
          </div>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Corporate Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help your organization implement sustainable waste management practices while meeting regulatory requirements.
          </p>
          <Separator className="mt-6 mx-auto w-24 bg-green-600 h-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corporateServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Green Bank Services */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Green Bank Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Financial solutions designed specifically for wastepreneurs and recycling businesses.
          </p>
          <Separator className="mt-6 mx-auto w-24 bg-green-600 h-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {greenBankServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Sustainability Services */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Sustainability Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measure, report, and improve your environmental impact with our expert sustainability solutions.
          </p>
          <Separator className="mt-6 mx-auto w-24 bg-green-600 h-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sustainabilityServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-2xl bg-gradient-to-r from-green-800 to-green-600 p-8 md:p-12 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your waste management approach?</h2>
          <p className="text-xl mb-8">
            Our team of experts is ready to help you implement sustainable solutions that benefit your organization and the environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              variant="default"
              className="bg-white text-green-800 hover:bg-gray-100"
              onClick={() => navigate("/contact")}
            >
              Contact Us Today
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate("/about")}
            >
              Learn About Our Approach
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
