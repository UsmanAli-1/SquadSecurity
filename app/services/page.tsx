import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  User,
  Calendar,
  UserX,
  Video,
  Users,
  Award,
  MapPin,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Squad Security  ",
  description: "Comprehensive security services in Karachi including armed guards, unarmed guards, CCTV surveillance, event security, and more. Professional protection solutions.",
  keywords: "security services in Karachi, security guards Karachi, armed guards, CCTV surveillance, event security, bodyguards Karachi",
};

export default function Services() {
  const services = [
    {
      title: "Security Officers",
      description: "Professional security officers trained to handle various security scenarios with expertise and professionalism. Ideal for corporate and commercial facilities.",
      icon: Shield,
    },
    {
      title: "Armed Guards",
      description: "Licensed armed security guards for high-risk environments requiring enhanced protection measures. Fully trained and certified personnel.",
      icon: ShieldAlert,
    },
    {
      title: "Unarmed Guards (with batons)",
      description: "Trained unarmed security personnel equipped with batons for effective security coverage. Perfect for retail, residential, and low-risk commercial areas.",
      icon: ShieldCheck,
    },
    {
      title: "Personal Bodyguards",
      description: "Dedicated personal protection services for individuals requiring close protection. Discreet, professional, and highly trained security personnel.",
      icon: User,
    },
    {
      title: "Event Guards",
      description: "Specialized security services for events, conferences, weddings, and special occasions. Professional crowd management and access control.",
      icon: Calendar,
    },
    {
      title: "Bouncers",
      description: "Professional bouncer services for nightclubs, bars, and entertainment venues. Trained in conflict resolution and crowd control.",
      icon: UserX,
    },
    {
      title: "CCTV Surveillance",
      description: "Professional monitoring and surveillance services to keep your premises under constant watch. 24/7 monitoring with advanced security systems.",
      icon: Video,
    },
    {
      title: "Lady Guards",
      description: "Professional female security guards for environments requiring gender-specific security personnel. Ideal for schools, hospitals, and private residences.",
      icon: Users,
    },
    {
      title: "Protocol Guards",
      description: "Specialized protocol security guards trained in VIP protection, diplomatic security, and ceremonial events. Professional and discreet service.",
      icon: Award,
    },
    {
      title: "City to Rural Area Site Guards",
      description: "Comprehensive security coverage for sites located in both urban and rural areas. Flexible deployment and reliable protection across all locations.",
      icon: MapPin,
    },
    {
      title: "Security Consultancy",
      description: "Expert security consultation services to assess your security needs and develop customized protection strategies. Risk assessment and security planning.",
      icon: Briefcase,
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4">
            Security Services in Karachi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive security guard services in Karachi tailored to meet your specific protection needs. 
            Professional, reliable, and trusted security solutions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon || Shield;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#1F3D2B] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-[#1E1E1E]">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1F3D2B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Custom Security Solutions?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific security requirements. We provide tailored security services 
            in Karachi to meet your unique needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1F3D2B] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}