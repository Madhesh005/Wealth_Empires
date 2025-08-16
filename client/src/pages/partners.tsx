import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Handshake, TrendingUp, Shield } from "lucide-react";

const Partners = () => {
  const partnerTypes = [
    {
      title: "CA Firms & Financial Consultants",
      description: "Partner with us to expand your service offerings and provide comprehensive business solutions to your clients.",
      benefits: ["Revenue sharing opportunities", "Access to our expertise", "Joint marketing initiatives", "Referral commissions"]
    },
    {
      title: "Legal Firms",
      description: "Collaborate with our team to provide end-to-end business incorporation and compliance services.",
      benefits: ["Complementary service portfolio", "Shared client resources", "Professional development", "Cross-referral system"]
    },
    {
      title: "Business Consultants",
      description: "Join our network to offer complete business setup and financial management solutions.",
      benefits: ["White-label services", "Training and support", "Technology platform access", "Marketing co-op programs"]
    },
    {
      title: "Technology Partners",
      description: "Integrate with our platform to provide seamless financial services to your user base.",
      benefits: ["API integration", "Technical support", "Revenue sharing", "Co-branded solutions"]
    }
  ];

  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Expand your business with new revenue streams and market opportunities through our partnership program."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Get access to our team of 25 dedicated professionals and their expertise in Indian business regulations."
    },
    {
      icon: Shield,
      title: "Trusted Brand",
      description: "Associate with a trusted brand that has helped create ₹940,085+ in wealth and served 16+ satisfied clients."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-wealth-blue">
              Partner with <span className="text-wealth-gold">Wealth Empires</span>
            </h1>
            <p className="text-xl text-wealth-slate max-w-3xl mx-auto">
              Join our network of trusted partners and help us deliver exceptional financial services to businesses across India. Together, we can create more value for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-wealth-blue mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-wealth-slate">
              Unlock new opportunities and grow your business with strategic partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-wealth-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-wealth-gold" />
                </div>
                <h3 className="text-xl font-bold text-wealth-blue mb-4">{benefit.title}</h3>
                <p className="text-wealth-slate">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-wealth-light-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-wealth-blue mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-wealth-slate">
              We're looking for strategic partnerships with various types of organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((partner, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-wealth-blue">
                    {partner.title}
                  </CardTitle>
                  <CardDescription className="text-wealth-slate">
                    {partner.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-wealth-blue mb-3">Partnership Benefits:</h4>
                  <ul className="space-y-2">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-wealth-gold flex-shrink-0" />
                        <span className="text-wealth-slate text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-wealth-blue mb-4">
              How Partnership Works
            </h2>
            <p className="text-xl text-wealth-slate">
              A simple process to start our partnership journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-wealth-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-wealth-blue mb-4">Initial Discussion</h3>
              <p className="text-wealth-slate">
                Reach out to us and let's discuss how we can work together to create mutual value and serve clients better.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-wealth-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-wealth-blue mb-4">Partnership Agreement</h3>
              <p className="text-wealth-slate">
                We'll formalize our partnership with clear terms, expectations, and mutual benefits for both parties.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-wealth-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-wealth-blue mb-4">Launch & Support</h3>
              <p className="text-wealth-slate">
                Start working together with full support from our team, including training, marketing, and ongoing assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Success Story */}
      <section className="py-20 bg-wealth-light-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-wealth-blue">
                Success Through Partnership
              </h2>
              <p className="text-xl text-wealth-slate leading-relaxed">
                Our partnerships are built on mutual trust, shared values, and a common goal of delivering exceptional value to businesses across India.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Handshake className="w-6 h-6 text-wealth-gold flex-shrink-0 mt-1" />
                  <p className="text-wealth-slate">
                    <strong>Mutual Growth:</strong> Our partnerships are designed to create value for all parties involved, ensuring sustainable long-term relationships.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-wealth-gold flex-shrink-0 mt-1" />
                  <p className="text-wealth-slate">
                    <strong>Collaborative Support:</strong> We work closely with our partners to ensure success through ongoing support and collaboration.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-wealth-gold flex-shrink-0 mt-1" />
                  <p className="text-wealth-slate">
                    <strong>Proven Results:</strong> Our partnership model has helped create significant value, with ₹940,085+ in wealth created for clients.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                alt="Business partnership"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-wealth-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-wealth-yellow mb-8">
            Let's discuss how we can work together to create exceptional value for businesses across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-wealth-gold hover:bg-wealth-amber text-wealth-blue px-8 py-4 text-lg font-semibold"
            >
              <a
                href="mailto:support@wealthempires.in"
                className="inline-flex items-center space-x-2"
              >
                <span>Contact Partnership Team</span>
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

export default Partners;
