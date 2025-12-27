import type { Metadata } from "next";
import HeroCarousel from "@/components/Home/HeroCarousel";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ServicesSection from "@/components/Services/ServicesSection";
import ClientsSection from "@/components/Clients/ClientsSection";
import CtaSection from "@/components/CtaSection";
import Faqs from "@/components/Home/Faqs";

export const metadata: Metadata = {
  title: {
    default: "Squad Security | Security Guard Services in Karachi",
    template: "%s | Squad Security",
  },
  description: "Squad Security is a professional security guard company in Karachi providing trained armed and unarmed security guards, CCTV surveillance, event security, and corporate protection services.",
  keywords: [
    "Security guard service in Karachi",
    "Squad Security",
    "Squad International Security",
    "Security guards in Karachi",
    "Armed security guards in Karachi",
    "Unarmed security guards",
    "Event security services",
    "CCTV security services",
    "Professional security guards Pakistan",
  ],
};

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}

      <HeroCarousel />

      {/* 2. Why Choose Squad Security */}
      <WhyChooseUs />

      {/* 3. Services Preview */}

      <ServicesSection
        limit={6}
        showCTA
      />

      {/* 4. Company Stats */}
      <section className="bg-[#1F3D2B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2000+</div>
              <div className="text-gray-200 font-medium">Guards</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">6+</div>
              <div className="text-gray-200 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">Multiple</div>
              <div className="text-gray-200 font-medium">Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-gray-200 font-medium">Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Clients Preview */}

      <ClientsSection
        showCTA
      />

      {/* FAQs */}
      <Faqs />

      {/* CTA Section */}

      <CtaSection
        imageLink="/images/m444.jpg"
        title="Ready to Secure Your Business?"
        description="Contact us today for a consultation and discover how Squad Security can protect what matters most to you."
      />

    </>
  );
}