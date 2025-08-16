import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ui/service-card";
import { Building, Calculator, FileText, Copyright, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Business Incorporation",
      description: "Skip the paperwork. We set up your business so you can start selling faster.",
      link: "#",
      linkText: "Start Your Business"
    },
    {
      icon: Calculator,
      title: "Smart Accounting",
      description: "No spreadsheets, no hassle, just real-time financial insights for your business.",
      link: "#",
      linkText: "Track Your Books"
    },
    {
      icon: FileText,
      title: "GST Compliance",
      description: "Stay compliant, save time, and never stress about GST filing again.",
      link: "#",
      linkText: "File Your GST"
    },
    {
      icon: Copyright,
      title: "Copyright Protection",
      description: "Secure your brand's future with comprehensive trademark protection services.",
      link: "#",
      linkText: "Protect Your Brand"
    }
  ];

  return (
    <section id="services" className="py-20 bg-wealth-light-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-wealth-amber font-semibold text-lg">Service Suite</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-wealth-blue">
            Your Business. Simplified.
          </h2>
          <p className="text-xl text-wealth-slate max-w-3xl mx-auto">
            Each service is powerful on its own, but together? Game-changing for your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="bg-wealth-blue rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Get In Touch</h3>
          <p className="text-wealth-yellow text-lg mb-8 max-w-3xl mx-auto">
            Everything you need—Incorporation, Accounting, GST Compliance, and Copyright—bundled to save you time & money.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-wealth-gold hover:bg-wealth-amber text-wealth-blue px-8 py-4 text-lg font-semibold"
          >
            <a
              href="https://api.whatsapp.com/send?phone=919884521264"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
