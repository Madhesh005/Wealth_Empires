import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="gradient-bg min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <p className="text-wealth-amber font-semibold text-lg">Business-in-a-Box™</p>
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
                <a
                  href="https://api.whatsapp.com/send?phone=919884521264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-wealth-blue text-wealth-blue hover:bg-wealth-blue hover:text-white px-8 py-4 text-lg"
              >
                <a href="tel:+919884521264">Call Us Now</a>
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
                <span>940,085+ INR Wealth Created</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
              alt="Professional financial consultant"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-6 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-wealth-gold rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-wealth-blue">Business Registered</p>
                  <p className="text-sm text-wealth-slate">In 24 hours or less</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
