import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CheckCircle, Leaf, Recycle, BookOpen, BarChart, Users, Smartphone, Shield, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getCloudinaryUrl } from "@/lib/cloudinary";

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
      imageUrl: getCloudinaryUrl("Is_Your_Safety_Management_System_Effective__w1qe49", {
        width: 800,
        height: 600,
        crop: "fill",
        format: "webp",
        quality: "auto",
      }),
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
      imageUrl: getCloudinaryUrl("Hazardous_Waste_Disposal_Companies_In_Dubai_zc7yhw", {
        width: 800,
        height: 600,
        crop: "fill",
        format: "webp",
        quality: "auto",
      }),
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
      imageUrl: getCloudinaryUrl("ahmed-shabana-6qvB6SLjHHI-unsplash_xqkrtp", {
        width: 800,
        height: 600,
        crop: "fill",
        format: "webp",
        quality: "auto",
      }),
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
      imageUrl: getCloudinaryUrl("pexels-messina-12492225-1920x1476_hpcyxr", {
        width: 800,
        height: 600,
        crop: "fill",
        format: "webp",
        quality: "auto",
      }),
      ctaText: "Apply Now",
      ctaLink: "/green-bank",
      primary: true
    },
    {
      title: "ROSCA Savings Groups",
      description: "Join rotating savings groups with other wastepreneurs to pool resources and access funds to grow your business.",
      features: [
        "Community-based savings",
        "Regular distribution cycles",
        "Mobile money integration",
        "Transparent management"
      ],
      icon: <Users className="h-6 w-6" />,
      imageUrl: getCloudinaryUrl("crs-supported_savings_group_meets_in_guinea-bissau_gnb2021069084_1_z7ns11", {
        width: 800,
        height: 600,
        crop: "fill",
        format: "webp",
        quality: "auto",
      }),
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
      imageUrl: getCloudinaryUrl("credit-score-financial-banking-economy-concept_nr1igc", {
        width: 800,
        height: 600,
        crop: "fill",
        format: "webp",
        quality: "auto",
      }),
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
      imageUrl: getCloudinaryUrl("2150196626_drnx9h", {
        width: 800,
        height: 600,
        crop: "fill",
        format: "webp",
        quality: "auto",
      }),
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
      imageUrl: getCloudinaryUrl("2147626521_vk1oeo", {
        width: 800,
        height: 600,
        crop: "fill",
        format: "webp",
        quality: "auto",
      }),
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
            src={getCloudinaryUrl("Triumph_at_Sunset_on_the_Mountaintop_ihgyvq", {
              width: 1350,
              height: 400,
              crop: "fill",
              format: "webp",
              quality: "auto", 
            })} 
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
