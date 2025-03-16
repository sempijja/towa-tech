
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
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color?: "blue" | "green" | "purple" | "orange" | "teal";
}

const FeatureCard = ({ title, description, icon, color = "green" }: FeatureCardProps) => {
  // Define color variants
  const colorVariants = {
    blue: "bg-blue-50 text-blue-600 border-blue-200",
    green: "bg-green-50 text-green-600 border-green-200",
    purple: "bg-purple-50 text-purple-600 border-purple-200",
    orange: "bg-orange-50 text-orange-600 border-orange-200",
    teal: "bg-teal-50 text-teal-600 border-teal-200"
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
    <Card className={cn(
      "border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
      `${color === "blue" ? "hover:shadow-blue-100" : ""}`,
      `${color === "green" ? "hover:shadow-green-100" : ""}`,
      `${color === "purple" ? "hover:shadow-purple-100" : ""}`,
      `${color === "orange" ? "hover:shadow-orange-100" : ""}`,
      `${color === "teal" ? "hover:shadow-teal-100" : ""}`
    )}>
      <CardContent className="pt-6">
        <div className={`p-3 rounded-full inline-flex items-center justify-center mb-4 ${colorClass}`}>
          <IconComponent size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
