
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Recycle, 
  Smartphone, 
  BarChart, 
  Users, 
  Shield,
  Leaf,
  FileText,
  LucideIcon
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color?: "blue" | "green" | "purple" | "orange" | "teal";
}

const FeatureCard = ({ title, description, icon, color = "green" }: FeatureCardProps) => {
  // Define color variants
  const colorVariants = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    teal: "bg-teal-100 text-teal-600"
  };

  // Map icon names to components
  const iconMap: Record<string, LucideIcon> = {
    BookOpen,
    Recycle,
    Smartphone,
    BarChart,
    Users,
    Shield,
    Leaf,
    FileText
  };

  const IconComponent = iconMap[icon as keyof typeof iconMap] || BookOpen;
  const colorClass = colorVariants[color];

  return (
    <Card className="border hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className={`p-3 rounded-full inline-block mb-4 ${colorClass}`}>
          <IconComponent size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
