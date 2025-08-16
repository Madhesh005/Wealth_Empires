import Hero from "@/components/sections/hero";
import Statistics from "@/components/sections/statistics";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign, Users, Shield } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Statistics Section */}
      <Statistics />

      {/* Careers/Hiring Section */}
      <section className="py-20 bg-wealth-light-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-wealth-blue">
                  Excited to join our team?
                </h2>
                <p className="text-xl text-wealth-slate leading-relaxed">
                  You might be the candidate we're looking for.<br />
                  Many of our teams are actively hiring.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-wealth-blue hover:bg-wealth-slate text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  <a href="/careers" className="inline-flex items-center space-x-2">
                    <span>See open roles</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>

              {/* Right Side - Illustration */}
              <div className="relative flex justify-center">
                <div className="relative">
                  {/* Business professionals illustration */}
                  <img
                    src="/images/hero.webp"
                    alt="Two business professionals shaking hands - man in gray suit with yellow tie and woman in yellow blazer"
                    className="w-full h-auto max-w-md mx-auto"
                    style={{ maxHeight: '400px', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />
    </div>
  );
};

export default Home;
