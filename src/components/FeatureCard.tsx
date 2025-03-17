
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
  Home,
  Globe,
  CreditCard,
  TrendingUp,
  LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Props for the FeatureCard component
 * 
 * @property {string} title - The title of the feature
 * @property {string} description - The description text explaining the feature
 * @property {string} icon - Name of the Lucide icon to display
 * @property {string} color - Color theme for the card (from predefined set)
 */
interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color?: "rose" | "green" | "blue" | "orange" | "teal";
}

/**
 * FeatureCard Component
 * 
 * A card displaying a feature with an icon, title, and description
 * following Airbnb-inspired design principles.
 */
const FeatureCard = ({ title, description, icon, color = "rose" }: FeatureCardProps) => {
  // Define color variants based on Airbnb-style palette
  const colorVariants = {
    rose: "bg-rose-50 text-rose-600 border-rose-100",
    green: "bg-emerald-50 text-emerald-600 border-emerald-100",
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    orange: "bg-orange-50 text-orange-600 border-orange-100",
    teal: "bg-teal-50 text-teal-600 border-teal-100"
  };

  // Map icon names to Lucide components
  const iconMap: Record<string, LucideIcon> = {
    BookOpen,
    Recycle,
    Smartphone,
    BarChart,
    Users,
    Shield,
    Leaf,
    FileText,
    Home,
    Globe,
    CreditCard,
    TrendingUp
  };

  const IconComponent = iconMap[icon as keyof typeof iconMap] || BookOpen;
  const colorClass = colorVariants[color];

  return (
    <Card className={cn(
      "border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      `${color === "rose" ? "hover:shadow-rose-100" : ""}`,
      `${color === "green" ? "hover:shadow-emerald-100" : ""}`,
      `${color === "blue" ? "hover:shadow-blue-100" : ""}`,
      `${color === "orange" ? "hover:shadow-orange-100" : ""}`,
      `${color === "teal" ? "hover:shadow-teal-100" : ""}`
    )}>
      <CardContent className="pt-6">
        <div className={`p-3 rounded-full inline-flex items-center justify-center mb-4 ${colorClass}`}>
          <IconComponent size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
