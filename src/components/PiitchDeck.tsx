const ServicesPage = () => {
  const services = [
    {
      title: "Startup Incorporation",
      description: "Complete incorporation services including documentation, legal compliance, and registration to help you start your business journey right."
    },
    {
      title: "Trademark & IPR Services",
      description: "Protect your intellectual property with our comprehensive trademark registration and intellectual property rights management services."
    },
    {
      title: "ROC Filing",
      description: "Timely and accurate Registrar of Companies filing services to ensure your business stays compliant with all regulatory requirements."
    },
    {
      title: "GST Filing",
      description: "Hassle-free GST registration and periodic filing services to keep your business tax compliant and avoid penalties."
    },
    {
      title: "Certifications",
      description: "Assistance with obtaining industry-specific certifications and approvals to enhance your business credibility and market access."
    },
    {
      title: "Grants",
      description: "Expert guidance on identifying, applying for, and securing government and private grants to fuel your business growth."
    },
    {
      title: "Business Planning",
      description: "Strategic business planning services to help you map your growth journey and achieve sustainable success."
    },
    {
      title: "Pitch Deck",
      description: "Professional pitch deck creation services that help you effectively communicate your vision to potential investors."
    },
    {
      title: "Valuation Reports",
      description: "Detailed and credible business valuation reports to support your fundraising efforts and strategic decision-making."
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-tl from-[#44106C] via-[#6708A6] to-[#D007AC]">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col items-center">
          {/* Heading with decorative elements */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-200 to-pink-300 text-transparent bg-clip-text">
                Our Services
              </span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-300 to-pink-300 mx-auto rounded-full" />
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-indigo-400/20 hover:border-pink-400/40 transition-all duration-300 group hover:bg-white/15"
              >
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-200 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-200">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
