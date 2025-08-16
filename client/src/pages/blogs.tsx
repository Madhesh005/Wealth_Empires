import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

const Blogs = () => {
  const featuredPosts = [
    {
      title: "How to Register Your Business in India: Complete Guide 2024",
      excerpt: "A comprehensive guide to business registration in India, covering all necessary documents, procedures, and legal requirements for 2024.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      author: "Wealth Empires Team",
      date: "March 15, 2024",
      category: "Business Registration",
      readTime: "8 min read"
    },
    {
      title: "GST Compliance 101: Complete Guide for Business Owners",
      excerpt: "Everything you need to know about GST compliance, filing procedures, common mistakes to avoid, and best practices for Indian businesses.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      author: "GST Expert Team",
      date: "March 10, 2024",
      category: "Tax Compliance",
      readTime: "12 min read"
    },
    {
      title: "Maximize Your Profits: Strategic Tax Planning to Save ₹3 Lakhs",
      excerpt: "Strategic tax planning techniques that can help Indian businesses save significant amounts on their annual tax liability through legal methods.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
      author: "Tax Planning Experts",
      date: "March 5, 2024",
      category: "Tax Planning",
      readTime: "10 min read"
    }
  ];

  const recentPosts = [
    {
      title: "Understanding MCA Compliance: Annual Filing Requirements",
      excerpt: "Learn about MCA compliance requirements and how to ensure your company meets all annual filing obligations.",
      author: "Compliance Team",
      date: "February 28, 2024",
      category: "Compliance",
      readTime: "6 min read"
    },
    {
      title: "Trademark Registration Process in India: Step-by-Step Guide",
      excerpt: "Complete guide to trademark registration in India, including documentation, timeline, and legal requirements.",
      author: "IP Law Experts",
      date: "February 25, 2024",
      category: "Intellectual Property",
      readTime: "9 min read"
    },
    {
      title: "Small Business Accounting Best Practices for 2024",
      excerpt: "Essential accounting practices every small business owner should follow to maintain financial health and compliance.",
      author: "Accounting Team",
      date: "February 20, 2024",
      category: "Accounting",
      readTime: "7 min read"
    },
    {
      title: "Digital Signature Certificate: Everything You Need to Know",
      excerpt: "Understanding DSC requirements for business filings and how to obtain and use digital signature certificates.",
      author: "Digital Services Team",
      date: "February 15, 2024",
      category: "Digital Services",
      readTime: "5 min read"
    },
    {
      title: "MSME Registration Benefits and Process",
      excerpt: "Discover the benefits of MSME registration and learn the complete process to register your micro, small, or medium enterprise.",
      author: "MSME Experts",
      date: "February 10, 2024",
      category: "Government Schemes",
      readTime: "8 min read"
    },
    {
      title: "Import Export Code (IEC): Registration and Benefits",
      excerpt: "Learn about IEC registration, its benefits for businesses engaged in international trade, and the application process.",
      author: "Trade Experts",
      date: "February 5, 2024",
      category: "International Trade",
      readTime: "6 min read"
    }
  ];

  const categories = [
    "Business Registration",
    "Tax Compliance", 
    "Tax Planning",
    "Compliance",
    "Intellectual Property",
    "Accounting",
    "Digital Services",
    "Government Schemes",
    "International Trade"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-wealth-blue">
              The Growth Playbook for <span className="text-wealth-gold">Entrepreneurs</span>
            </h1>
            <p className="text-xl text-wealth-slate max-w-3xl mx-auto">
              Powerful resources, expert insights, and practical guides to help you scale your business smarter and faster in the Indian business landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-wealth-blue mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-wealth-slate">
              Our most popular and comprehensive guides for business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-wealth-gold text-wealth-blue px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-wealth-blue group-hover:text-wealth-gold transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-wealth-slate line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-wealth-slate">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span className="text-wealth-gold font-medium">{post.readTime}</span>
                  </div>
                  <div className="mt-4">
                    <button className="text-wealth-gold font-semibold hover:text-wealth-amber inline-flex items-center space-x-2 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts & Categories */}
      <section className="py-20 bg-wealth-light-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Recent Posts */}
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-wealth-blue mb-4">
                  Recent Posts
                </h2>
                <p className="text-xl text-wealth-slate">
                  Stay updated with the latest insights and guides
                </p>
              </div>

              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Tag className="w-4 h-4 text-wealth-gold" />
                            <span className="text-sm text-wealth-gold font-medium">{post.category}</span>
                          </div>
                          <h3 className="text-xl font-bold text-wealth-blue group-hover:text-wealth-gold transition-colors mb-2">
                            {post.title}
                          </h3>
                          <p className="text-wealth-slate mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-wealth-slate">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{post.date}</span>
                            </div>
                            <span className="text-wealth-gold font-medium">{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="text-wealth-gold font-semibold hover:text-wealth-amber inline-flex items-center space-x-2 transition-colors">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-wealth-blue mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="block w-full text-left px-3 py-2 text-wealth-slate hover:text-wealth-gold hover:bg-wealth-light-cream rounded transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-wealth-light-cream rounded-lg">
                  <h4 className="font-bold text-wealth-blue mb-3">Need Business Help?</h4>
                  <p className="text-sm text-wealth-slate mb-4">
                    Get expert guidance for your business setup and compliance needs.
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-wealth-gold hover:bg-wealth-amber text-white"
                  >
                    <a
                      href="https://api.whatsapp.com/send?phone=919884521264"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Free Consultation
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-wealth-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-wealth-yellow mb-8">
            Get the latest business insights and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-wealth-gold"
            />
            <Button
              size="lg"
              className="bg-wealth-gold hover:bg-wealth-amber text-wealth-blue px-8 py-3 font-semibold"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
