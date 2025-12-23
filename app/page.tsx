import type { Metadata } from "next";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";

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
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] text-center mb-12">
            Why Choose Squad Security?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1F3D2B] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">
                    CNIC & Police Verified Guards
                  </h3>
                  <p className="text-gray-600 text-sm">
                    All our guards undergo thorough background checks and police verification for your peace of mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1F3D2B] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">
                    Mental Health Screening
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive mental health assessments ensure our guards are fit for duty and reliable.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1F3D2B] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">
                    Trained & Self-Motivated Staff
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our guards receive extensive training and are selected for their dedication and professionalism.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1F3D2B] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">
                    Monitoring & Regular Checking
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Continuous monitoring and regular site checks ensure consistent quality and performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1F3D2B] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">
                    Competitive Rates
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Quality security services at competitive prices without compromising on standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1F3D2B] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">
                    Quality Equipment
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our guards are equipped with professional-grade security equipment and uniforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 md:col-span-2 lg:col-span-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1F3D2B] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">
                    24/7 Operations
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Round-the-clock security services available whenever you need protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] text-center mb-12">
            Our Security Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#1F3D2B] mb-3">
                Security Officers
              </h3>
              <p className="text-gray-600">
                Professional security officers trained to handle various security scenarios with expertise and professionalism.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#1F3D2B] mb-3">
                Armed Guards
              </h3>
              <p className="text-gray-600">
                Licensed armed security guards for high-risk environments requiring enhanced protection measures.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#1F3D2B] mb-3">
                Unarmed Guards (Batons)
              </h3>
              <p className="text-gray-600">
                Trained unarmed security personnel equipped with batons for effective security coverage.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#1F3D2B] mb-3">
                Event Security
              </h3>
              <p className="text-gray-600">
                Specialized security services for events, conferences, weddings, and special occasions.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#1F3D2B] mb-3">
                CCTV Surveillance
              </h3>
              <p className="text-gray-600">
                Professional monitoring and surveillance services to keep your premises under constant watch.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-[#1F3D2B] mb-3">
                Lady Guards
              </h3>
              <p className="text-gray-600">
                Professional female security guards for environments requiring gender-specific security personnel.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-[#1F3D2B] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#1a3225] transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] text-center mb-4">
            Our Clients
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Trusted by corporate, residential, and event clients across Karachi
          </p>
          
          {/* Client Logos Grid - Placeholders */}
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
      </section>

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