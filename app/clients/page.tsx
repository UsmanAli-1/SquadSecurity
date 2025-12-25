import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Hammer, Calendar, Home } from "lucide-react";
import Image from "next/image";
import ClientsSection from "@/components/Clients/ClientsSection";


export const metadata: Metadata = {
  title: "Our Clients | Squad Security",
  description: "Squad Security serves trusted clients across Karachi including corporate, construction, events, and residential sectors. Discover why leading businesses choose our professional security guard services.",
  keywords: [
    "Security Companies in Karachi",
    "Squad Security",
    "Corporate security clients",
    "Security service in Karachi",
    "Trusted security company",
    "Security companies",
  ],
};

export default function Clients() {
  const clientCategories = [
    {
      category: "Corporate",
      icon: Building2,
      clients: [
        { name: "Tech Solutions Ltd", logo: null },
        { name: "Karachi Financial Group", logo: null },
        { name: "Global Manufacturing Co", logo: null },
        { name: "Healthcare Systems Inc", logo: null },
        { name: "Retail Chain Pakistan", logo: null },
        { name: "IT Services Karachi", logo: null },
        { name: "Banking Corporation", logo: null },
        { name: "Trading Company", logo: null },
      ],
    },
    {
      category: "Construction",
      icon: Hammer,
      clients: [
        { name: "Builders & Developers", logo: null },
        { name: "Construction Group", logo: null },
        { name: "Infrastructure Projects", logo: null },
        { name: "Real Estate Developers", logo: null },
        { name: "Engineering Firm", logo: null },
        { name: "Project Management Co", logo: null },
      ],
    },
    {
      category: "Events",
      icon: Calendar,
      clients: [
        { name: "Event Management Co", logo: null },
        { name: "Wedding Planners", logo: null },
        { name: "Conference Organizers", logo: null },
        { name: "Cultural Events", logo: null },
        { name: "Sports Events", logo: null },
        { name: "Exhibition Centers", logo: null },
      ],
    },
    {
      category: "Residential",
      icon: Home,
      clients: [
        { name: "Residential Complex A", logo: null },
        { name: "Gated Community B", logo: null },
        { name: "Apartment Complex C", logo: null },
        { name: "Private Estates", logo: null },
        { name: "Residential Society", logo: null },
        { name: "Housing Scheme", logo: null },
      ],
    },
  ];

  const testimonials = [
    {
      quote: "Squad Security has been providing excellent security services for our office for over 3 years. Their guards are professional, reliable, and always on time.",
      author: "Corporate Client",
      location: "Karachi",
    },
    {
      quote: "The security team provided exceptional service during our corporate event. They handled everything professionally and ensured the safety of all attendees.",
      author: "Event Organizer",
      location: "Karachi",
    },
    {
      quote: "We trust Squad Security with our residential security needs. Their guards are well-trained and we feel safe knowing they're protecting our property.",
      author: "Private Client",
      location: "Karachi",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative pt-30 pb-10 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/cl.jpg" // use any landscape image
            alt="Security Services Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 lg:bg-black/90 bg-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Trusted Clients
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Trusted security clients in Karachi across various industries. We're proud to serve
            leading businesses, construction sites, event organizers, and residential communities.
          </p>
        </div>
      </section>


      <ClientsSection 
      />

      {/* Client Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {clientCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="mb-16 last:mb-0">
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 bg-[#1F3D2B] rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1E1E1E]">
                    {category.category} Clients
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.clients.map((client, clientIndex) => (
                    <div
                      key={clientIndex}
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center min-h-[120px]"
                    >
                      {client.logo ? (
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-h-16 max-w-full object-contain mb-2"
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                          <span className="text-2xl font-bold text-gray-400">
                            {client.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <p className="text-sm font-medium text-[#1E1E1E] text-center">
                        {client.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#1F3D2B] mb-2">100+</div>
              <div className="text-gray-700 font-medium">Active Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1F3D2B] mb-2">2000+</div>
              <div className="text-gray-700 font-medium">Trained Guards</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1F3D2B] mb-2">6+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1F3D2B] mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1E1E1E] text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-[#1E1E1E]">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/m44.jpg" // <-- landscape image
            alt="Squad Security Background"
            fill
            className="object-cover"
            priority={false}
          />
          {/* Overlay */}
          <div className="absolute inset-0 lg:bg-black/90 bg-black/80 " />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Growing List of Trusted Clients
          </h2>
          <p className="text-xl text-gray-400/50 mb-8 max-w-2xl mx-auto">
            Experience the Squad Security difference. Trusted security clients in Karachi
            rely on us for professional, reliable security solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1F3D2B] px-8 py-3 rounded-md font-semibold hover:scale-105 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}