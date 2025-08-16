import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="gradient-bg min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <p className="text-wealth-amber font-semibold text-lg">#WE</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-wealth-blue leading-tight">
                Wealth Empires is for{" "}
                <span className="text-wealth-gold">Growth</span>.
              </h1>
            </div>
            <p className="text-xl text-wealth-slate leading-relaxed">
              Incorporation, Accounting, GST Compliance, and Trademark Services—one platform, one point of contact, zero stress for your business growth in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-wealth-blue hover:bg-wealth-slate text-white px-8 py-4 text-lg"
              >
  
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-wealth-blue text-wealth-blue hover:bg-wealth-blue hover:text-white px-8 py-4 text-lg"
              >
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-2 sm:space-y-0 text-sm text-wealth-slate">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-wealth-gold fill-current" />
                <span>4.9/5 Client Rating</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-wealth-slate"></div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-wealth-gold" />
                <span>1000090+ INR Wealth Created</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <img
              src="/images/landing2.jpg"
              alt="Professional financial consultant"
              className="rounded-2xl  w-full h-auto max-w-lg mx-auto"
              style={{ maxHeight: '500px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
