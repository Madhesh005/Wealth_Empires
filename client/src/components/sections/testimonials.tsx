const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Founder of TechStart Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
      testimonial: "Wealth Empires handled our complete business setup and GST compliance so we could focus on growth and delivering great customer experience."
    },
    {
      name: "Priya Sharma",
      role: "CEO at Digital Innovations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
      testimonial: "The ease of setup, combined with their expertise in Indian regulations, helped me get my business running efficiently within weeks."
    },
    {
      name: "Arjun Patel",
      role: "Founder of E-Commerce Venture",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150",
      testimonial: "I thought it was very smooth, it was done within 24 hours and all I needed was to provide basic information. Highly recommended!"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <p className="text-wealth-amber font-semibold text-lg">16+ Clients</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-wealth-blue">
            Built for Business. Loved by Founders.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-wealth-light-cream rounded-xl p-8">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-6 object-cover"
              />
              <p className="text-wealth-slate mb-6 italic">"{testimonial.testimonial}"</p>
              <div>
                <h4 className="font-bold text-wealth-blue">{testimonial.name}</h4>
                <p className="text-sm text-wealth-slate">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
