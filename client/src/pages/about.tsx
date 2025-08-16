import { Button } from "@/components/ui/button";
import { Clock, DollarSign, Users, Target, Eye, Heart, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-wealth-blue">
              About <span className="text-wealth-gold">Wealth Empires</span>
            </h1>
            <p className="text-xl text-wealth-slate max-w-3xl mx-auto">
              We're on a mission to empower businesses across India with comprehensive financial solutions and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-wealth-blue">
                We Help You To Grow Your Business
              </h2>
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
                <p className="text-wealth-slate">
                  Our goal is to be the foremost partner in business growth, driving success through strategic insight and unparalleled service.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                alt="Modern Chennai office"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-wealth-light-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-wealth-blue mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-wealth-slate">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-wealth-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-wealth-gold" />
              </div>
              <h3 className="text-2xl font-bold text-wealth-blue mb-4">Our Mission</h3>
              <p className="text-wealth-slate">
                Our mission at Wealth Empires is to provide personalized financial solutions that address each client's unique challenges. We are dedicated to delivering outstanding results through strategic expertise and unwavering commitment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-wealth-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-wealth-gold" />
              </div>
              <h3 className="text-2xl font-bold text-wealth-blue mb-4">Our Vision</h3>
              <p className="text-wealth-slate">
                We envision Wealth Empires as a leader in reshaping the future of financial services, setting new benchmarks for excellence and innovation in the Indian business landscape.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-wealth-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-wealth-gold" />
              </div>
              <h3 className="text-2xl font-bold text-wealth-blue mb-4">Our Values</h3>
              <p className="text-wealth-slate">
                Integrity, excellence, and client success are at the heart of everything we do. We believe in building lasting relationships through transparent communication and exceptional service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-wealth-blue">
              Why Choose Wealth Empires?
            </h2>
            <p className="text-xl text-wealth-slate max-w-3xl mx-auto">
              We stand out for our innovative approach and unwavering dedication to client success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-wealth-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-wealth-gold" />
              </div>
              <h3 className="text-xl font-bold text-wealth-blue mb-4">24/7 Available</h3>
              <p className="text-wealth-slate">
                Anytime assistance for your business needs. Our support team is always ready to help you navigate any challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-wealth-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-10 h-10 text-wealth-gold" />
              </div>
              <h3 className="text-xl font-bold text-wealth-blue mb-4">No Hidden Charges</h3>
              <p className="text-wealth-slate">
                Transparent pricing with no surprises. What you see is what you pay, with complete cost clarity from day one.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-wealth-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-wealth-gold" />
              </div>
              <h3 className="text-xl font-bold text-wealth-blue mb-4">Dedicated Team</h3>
              <p className="text-wealth-slate">
                A team of 25 dedicated professionals devoted to your success, bringing years of expertise to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 bg-wealth-light-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-wealth-blue mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-wealth-slate">
              The numbers that showcase our commitment to client success
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-wealth-gold mb-2">940,085</div>
              <p className="text-wealth-slate font-medium">Wealth Created (INR)</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-wealth-gold mb-2">290,900</div>
              <p className="text-wealth-slate font-medium">Tax Saved (INR)</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-wealth-gold mb-2">16</div>
              <p className="text-wealth-slate font-medium">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-wealth-gold mb-2">25</div>
              <p className="text-wealth-slate font-medium">Dedicated Professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-wealth-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-wealth-yellow mb-8">
            Let's discuss how we can help grow your business together.
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

export default About;
