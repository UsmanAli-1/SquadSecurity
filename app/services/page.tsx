import type { Metadata } from "next";
import ServicesSection from "@/components/Services/ServicesSection";
import AdvancedServicesSection from "@/components/Services/AdvancedServicesSection";
import CtaSection from "@/components/CtaSection";
import Headers from "@/components/Headers";


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

      <Headers
        imageLink="/images/m444.jpg"
        title="Security Services in Karachi"
        description="Comprehensive security guard services in Karachi tailored to meet your specific protection needs. Professional, reliable, and trusted security solutions"
      />

      {/* ================= SERVICES (MAIN) ================= */}
      <ServicesSection
        title="Specialized & Advanced  Security Services"
        description="Professional security solutions designed to protect businesses, residences, and events across Karachi."
      />

      {/* ================= MORE SERVICES  ================= */}
      <AdvancedServicesSection />

      {/* ================= CTA ================= */}
      <CtaSection
        imageLink="/images/multiple-police.jpg"
        title="Need Custom Security Solutions?"
        description="Contact us to discuss your specific security requirements. We
            provide tailored security services in Karachi."
      />
    </div>
  );
}
