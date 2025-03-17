
import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
    subject: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
    });
    setFormState({
      name: "",
      email: "",
      message: "",
      subject: ""
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions about Project Green Bank? We're here to help you navigate sustainable waste management and financial inclusion.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto mb-20">
        {/* Contact Information */}
        <div className="md:col-span-2 space-y-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-green-600">Contact Information</h2>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-green-50 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+256 790 123456</p>
                    <p className="text-gray-600">+256 770 987654</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-50 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">info@projectgreenbank.org</p>
                    <p className="text-gray-600">support@projectgreenbank.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-50 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">Innovation Hub,</p>
                    <p className="text-gray-600">Plot 123, Kampala Road,</p>
                    <p className="text-gray-600">Kampala, Uganda</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-50 p-3 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8am - 5pm</p>
                    <p className="text-gray-600">Saturday: 9am - 1pm</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium text-gray-900 mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-green-50 p-3 rounded-full hover:bg-green-100 transition-colors">
                    <Facebook className="h-5 w-5 text-green-600" />
                  </a>
                  <a href="#" className="bg-green-50 p-3 rounded-full hover:bg-green-100 transition-colors">
                    <Twitter className="h-5 w-5 text-green-600" />
                  </a>
                  <a href="#" className="bg-green-50 p-3 rounded-full hover:bg-green-100 transition-colors">
                    <Instagram className="h-5 w-5 text-green-600" />
                  </a>
                  <a href="#" className="bg-green-50 p-3 rounded-full hover:bg-green-100 transition-colors">
                    <Linkedin className="h-5 w-5 text-green-600" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Contact Form */}
        <div className="md:col-span-3">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-green-600">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="John Doe" 
                      required 
                      className="w-full p-3 rounded-md" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      required 
                      className="w-full p-3 rounded-md" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formState.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help you?" 
                    required 
                    className="w-full p-3 rounded-md" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..." 
                    required 
                    className="w-full p-3 rounded-md h-32" 
                  />
                </div>
                
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mb-20">
        <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1535813547-99c456a4add4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80" 
            alt="Map of Kampala"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-600">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">How do I qualify for a Green Bank loan?</h3>
              <p className="text-gray-600">To qualify for a loan, you need to register as a wastepreneur, track your waste collection activities using our app, and build your credit score over time. The more consistent your collection records, the higher your loan eligibility.</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">What is ROSCA and how does it work?</h3>
              <p className="text-gray-600">ROSCA (Rotating Savings and Credit Association) is a group savings mechanism where members contribute a set amount regularly, and each member takes turns receiving the full pool. It helps build savings discipline and provides access to larger sums.</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">How do I track my waste collection?</h3>
              <p className="text-gray-600">Use our mobile app's Carbon Calculator to log the type and quantity of waste you collect. This information helps build your environmental impact profile and Green Bank credit score.</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Is my financial data secure?</h3>
              <p className="text-gray-600">Yes, we use industry-standard encryption and security protocols to protect all your data. Your privacy and financial security are our top priorities.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-green-50 rounded-xl p-12 text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 text-green-600">Stay Updated</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-600">
          Subscribe to our newsletter for the latest updates on Green Bank services, waste management tips, and financial literacy resources.
        </p>
        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
          <Input 
            placeholder="Your email address" 
            type="email" 
            className="flex-grow"
          />
          <Button className="bg-green-600 hover:bg-green-700 px-6">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
