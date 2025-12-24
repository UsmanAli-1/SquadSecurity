import type { Metadata } from "next";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/Services/ServicesSection";
import ClientsSection from "@/components/Clients/ClientsSection";

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
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] text-center mb-4">
            Our Clients
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Trusted by corporate, residential, and event clients across Karachi
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center h-24 hover:shadow-md transition-shadow"
              >
                <div className="text-gray-400 text-sm font-medium">
                  Client {index + 1}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/clients"
              className="inline-block bg-[#1F3D2B] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#1a3225] transition-colors"
            >
              View All Clients
            </Link>
          </div>
        </div>
      </section> */}

      <ClientsSection/>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a consultation and discover how Squad Security can protect what matters most to you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1F3D2B] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#1a3225] transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}