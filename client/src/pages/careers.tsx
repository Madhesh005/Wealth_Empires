import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Briefcase, Clock, ArrowRight, Users, Target, Heart } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Financial Consultant",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      experience: "3+ years experience",
      description: "Lead client relationships and provide expert financial guidance for business incorporation and compliance services.",
      requirements: [
        "Bachelor's degree in Finance, Accounting, or related field",
        "3+ years of experience in financial consulting",
        "Strong knowledge of Indian business regulations",
        "Excellent communication and client management skills"
      ]
    },
    {
      title: "GST Compliance Specialist",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      experience: "2+ years experience",
      description: "Ensure seamless GST compliance for our clients and provide expert guidance on tax regulations.",
      requirements: [
        "CA or MBA in Taxation",
        "2+ years of GST compliance experience",
        "Deep understanding of Indian tax laws",
        "Attention to detail and analytical skills"
      ]
    },
    {
      title: "Business Development Manager",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      experience: "4+ years experience",
      description: "Drive business growth by identifying new opportunities and building strategic partnerships.",
      requirements: [
        "Bachelor's degree in Business Administration or related field",
        "4+ years of business development experience",
        "Strong network in the business services industry",
        "Proven track record of achieving sales targets"
      ]
    },
    {
      title: "Junior Accountant",
      location: "Chennai, Tamil Nadu",
      type: "Full-time",
      experience: "1+ years experience",
      description: "Support our accounting team in delivering comprehensive bookkeeping and financial management services.",
      requirements: [
        "Bachelor's degree in Commerce or Accounting",
        "1+ years of accounting experience",
        "Proficiency in accounting software",
        "Strong analytical and problem-solving skills"
      ]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with a team of 25 dedicated professionals in a supportive and collaborative workplace."
    },
    {
      icon: Target,
      title: "Professional Growth",
      description: "Continuous learning opportunities and career advancement paths to help you reach your full potential."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible work arrangements and comprehensive benefits to ensure your well-being."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-wealth-blue">
              Join Our <span className="text-wealth-gold">Growing Team</span>
            </h1>
            <p className="text-xl text-wealth-slate max-w-3xl mx-auto">
              Be part of a team that's reshaping the future of financial services in India. We're looking for passionate professionals to help businesses grow and succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-wealth-blue mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-wealth-slate">
              Join a company that values your growth and contribution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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



      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-wealth-blue">
                Our Company Culture
              </h2>
              <p className="text-xl text-wealth-slate leading-relaxed">
                At Wealth Empires, we believe that our people are our greatest asset. We foster an environment of continuous learning, innovation, and collaboration.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-wealth-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-wealth-slate">
                    <strong>Innovation-Driven:</strong> We encourage creative thinking and innovative solutions to complex business challenges.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-wealth-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-wealth-slate">
                    <strong>Learning-Focused:</strong> Continuous professional development opportunities to keep you at the forefront of your field.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-wealth-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-wealth-slate">
                    <strong>Client-Centric:</strong> Every team member is empowered to contribute to exceptional client experiences.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration"
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
            Don't See Your Role?
          </h2>
          <p className="text-xl text-wealth-yellow mb-8">
            We're always looking for talented individuals to join our team. Send us your resume and let's talk!
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
                <span>Send Your Resume</span>
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

export default Careers;
