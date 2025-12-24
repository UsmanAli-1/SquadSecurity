import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServicesSection from "@/components/Services/ServicesSection";
import AdvancedServicesSection from "@/components/Services/AdvancedServicesSection";


export const metadata: Metadata = {
  title: "Our Services | Squad Security",
  description:
    "Comprehensive security services in Karachi including armed guards, unarmed guards, CCTV surveillance, event security, and more.",
  keywords:
    "security services in Karachi, security guards Karachi, armed guards, CCTV surveillance, event security",
};


export default function Services() {
  return (
    <div className="bg-white">
      {/* ================= HEADER WITH BACKGROUND IMAGE ================= */}
      <section className="relative pt-30 pb-10 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/m444.jpg" // use any landscape image
            alt="Security Services Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Security Services in Karachi
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive security guard services in Karachi tailored to meet
            your specific protection needs. Professional, reliable, and trusted
            security solutions.
          </p>
        </div>
      </section>

      {/* ================= SERVICES (MAIN) ================= */}
      <ServicesSection
        title="Our Core Security Services"
        description="Professional security solutions designed to protect businesses, residences, and events across Karachi."
      />

      {/* ================= MORE SERVICES (REUSE SAME COMPONENT) ================= */}
      <AdvancedServicesSection />

      {/* ================= CTA ================= */}

      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/multiple-police.jpg" // <-- landscape image
            alt="Squad Security Background"
            fill
            className="object-cover"
            priority={false}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Custom Security Solutions?
          </h2>
          <p className="text-xl text-gray-400/50 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific security requirements. We
            provide tailored security services in Karachi.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1F3D2B] px-8 py-3 rounded-md font-semibold hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
