import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const ServiceCard = ({ icon: Icon, title, description, link, linkText }: ServiceCardProps) => {
  return (
    <div className="service-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl">
      <div className="w-16 h-16 bg-wealth-yellow rounded-full flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-wealth-gold" />
      </div>
      <h3 className="text-xl font-bold text-wealth-blue mb-4">{title}</h3>
      <p className="text-wealth-slate mb-6">{description}</p>
      <a
        href={link}
        className="text-wealth-gold font-semibold hover:text-wealth-amber inline-flex items-center space-x-2 transition-colors"
      >
        <span>{linkText}</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default ServiceCard;
