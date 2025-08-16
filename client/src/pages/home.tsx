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

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-wealth-amber font-semibold text-lg">About Wealth Empires</p>
                <h2 className="text-4xl lg:text-5xl font-bold text-wealth-blue">
                  We Help You To Grow Your Business
                </h2>
              </div>
              <p className="text-xl text-wealth-slate leading-relaxed">
                Elevate your business with customized financial strategies designed for growth. Discover unparalleled success through the expert guidance and innovative solutions at Wealth Empires.
              </p>
              <div className="space-y-4">
                <p className="text-wealth-slate">
                  Our journey is defined by our commitment to delivering exceptional value and transformative results for businesses. By focusing on tailored solutions, we guide our clients toward achieving their most ambitious goals.
                </p>
                <p className="text-wealth-slate">
                  We envision Wealth Empires as a leader in reshaping the future of financial services, setting new benchmarks for excellence and innovation.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-wealth-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-wealth-gold" />
                  </div>
                  <h4 className="font-bold text-wealth-blue mb-2">24/7 Available</h4>
                  <p className="text-sm text-wealth-slate">Anytime assistance for your business needs</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-wealth-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-wealth-gold" />
                  </div>
                  <h4 className="font-bold text-wealth-blue mb-2">No Hidden Charges</h4>
                  <p className="text-sm text-wealth-slate">Transparent pricing, just transparent</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-wealth-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-wealth-gold" />
                  </div>
                  <h4 className="font-bold text-wealth-blue mb-2">Dedicated Team</h4>
                  <p className="text-sm text-wealth-slate">A team devoted to your success</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                alt="Modern office Chennai"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-wealth-light-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <p className="text-wealth-amber font-semibold text-lg">Why Choosing Us!</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-wealth-blue">
              Few Reasons Why People Are Choosing Us!
            </h2>
            <p className="text-xl text-wealth-slate max-w-4xl mx-auto">
              At Wealth Empires, we stand out for our innovative approach to financial solutions and our unwavering dedication to client success. Our expert team delivers customized strategies that drive meaningful growth and achieve exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-wealth-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-wealth-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-wealth-blue mb-4">Fast Executions</h3>
              <p className="text-wealth-slate mb-6">Fast and precise execution to accelerate your financial success and business growth.</p>
              <a href="https://api.whatsapp.com/send?phone=919884521264" className="text-wealth-gold font-semibold hover:text-wealth-amber">Contact Us →</a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-wealth-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-wealth-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-wealth-blue mb-4">Personalized Services</h3>
              <p className="text-wealth-slate mb-6">Targeted financial solutions designed specifically for your company's unique growth needs.</p>
              <a href="https://api.whatsapp.com/send?phone=919884521264" className="text-wealth-gold font-semibold hover:text-wealth-amber">Connect Us →</a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-wealth-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-wealth-gold" />
              </div>
              <h3 className="text-xl font-bold text-wealth-blue mb-4">Data Security</h3>
              <p className="text-wealth-slate mb-6">Secure data handling practices for the protection of your sensitive business information.</p>
              <a href="https://api.whatsapp.com/send?phone=919884521264" className="text-wealth-gold font-semibold hover:text-wealth-amber">Reach Us →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-wealth-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Less hassle, More Growth.
          </h2>
          <p className="text-xl text-wealth-yellow mb-8">
            Join Wealth Empires and start building your business empire today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-wealth-gold text-wealth-gold hover:bg-wealth-gold hover:text-wealth-blue px-8 py-4 text-lg"
            >
              <a href="tel:+919884521264">Call us: +91 9884521264</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
