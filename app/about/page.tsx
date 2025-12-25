import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Users, Award, Target, CheckCircle2, Clock } from "lucide-react";
import Image from "next/image";


export const metadata: Metadata = {
  title: "About Us | Squad Security ",
  description: "Learn about Squad Security, a trusted security company in Karachi with 6+ years of experience and 2000+ trained guards. We provide professional security guard services committed to safety, discipline, and professionalism.",
  keywords: [
    "Squad Security",
    "Squad International Security Agency",
    "Security company Karachi",
    "Professional security guards",
    "Security services Karachi",
    "Security guards Pakistan",
    "Trusted security company",
  ],
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative pt-30 pb-10 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/m4444.jpg" // use any landscape image
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
            About Squad Security
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Your trusted partner for professional security solutions in Karachi.
            Committed to safety, discipline, and professionalism.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1E1E1E] mb-6">
              Company Overview
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Squad Security has been a leading provider of professional security guard services
                in Karachi for over <strong className="text-[#1F3D2B]">6 years</strong>. Founded with
                a commitment to excellence and reliability, we have grown to become one of the most
                trusted security companies in the region.
              </p>
              <p>
                With a team of over <strong className="text-[#1F3D2B]">2000 trained security guards</strong>,
                we serve a diverse range of clients including corporate businesses, construction sites,
                private residences, and event organizers throughout Karachi and surrounding areas.
              </p>
              <p>
                Our foundation is built on three core principles: <strong className="text-[#1F3D2B]">safety</strong>,
                <strong className="text-[#1F3D2B]"> discipline</strong>, and <strong className="text-[#1F3D2B]">professionalism</strong>.
                These values guide every aspect of our operations, from guard selection and training
                to client service and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#1F3D2B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-12 h-12" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">6+</div>
              <div className="text-gray-200 font-medium text-lg">Years of Experience</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Users className="w-12 h-12" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2000+</div>
              <div className="text-gray-200 font-medium text-lg">Trained Guards</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-12 h-12" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-gray-200 font-medium text-lg">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#1F3D2B] rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#1E1E1E]">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide security you can trust and protection you can rely on. We are committed
                to delivering professional security services that exceed expectations through our
                dedication to safety, discipline, and unwavering professionalism. Our mission is
                to ensure the safety and security of our clients' assets, personnel, and operations
                while maintaining the highest standards of service excellence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#1F3D2B] rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#1E1E1E]">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the most trusted and respected security services provider in Karachi,
                recognized for our commitment to excellence, innovation, and client satisfaction.
                We envision a future where businesses and individuals feel secure knowing they
                have partnered with a company that prioritizes their safety above all else,
                backed by a team of disciplined and professional security personnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1E1E1E] text-center mb-12">
            Our Commitment
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1F3D2B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1E1E1E] mb-3">
                  Safety First
                </h3>
                <p className="text-gray-600">
                  The safety and security of our clients is our top priority. We implement
                  rigorous safety protocols and ensure all guards are trained to handle
                  emergencies effectively.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1F3D2B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1E1E1E] mb-3">
                  Discipline
                </h3>
                <p className="text-gray-600">
                  We maintain strict discipline standards across all operations. Our guards
                  follow established protocols and maintain professional conduct at all times.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1F3D2B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1E1E1E] mb-3">
                  Professionalism
                </h3>
                <p className="text-gray-600">
                  Professionalism is at the core of everything we do. From initial contact
                  to ongoing service delivery, we maintain the highest standards of
                  professional conduct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1E1E1E] text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">
                Integrity
              </h3>
              <p className="text-gray-600 text-sm">
                We operate with honesty and transparency in all our business dealings,
                building trust through ethical practices.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">
                Reliability
              </h3>
              <p className="text-gray-600 text-sm">
                Our clients can count on us to be there when they need us, every time,
                with consistent and dependable service.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">
                Excellence
              </h3>
              <p className="text-gray-600 text-sm">
                We continuously strive to exceed expectations and improve our services
                through innovation and dedication.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">
                Trust
              </h3>
              <p className="text-gray-600 text-sm">
                Trust is the foundation of our relationships. We earn and maintain trust
                through consistent, professional service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1E1E1E] text-center mb-12">
            Why Choose Squad Security?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1F3D2B] rounded-full flex items-center justify-center mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E1E1E] mb-2">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-600">
                    With over 6 years of experience in the security industry, we have the
                    knowledge and expertise to handle any security challenge. Our track record
                    speaks to our commitment to excellence.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1F3D2B] rounded-full flex items-center justify-center mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E1E1E] mb-2">
                    Highly Trained Personnel
                  </h3>
                  <p className="text-gray-600">
                    Our 2000+ guards undergo comprehensive training programs covering safety
                    protocols, emergency response, and professional conduct. We ensure every
                    guard meets our high standards before deployment.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1F3D2B] rounded-full flex items-center justify-center mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E1E1E] mb-2">
                    Commitment to Safety & Discipline
                  </h3>
                  <p className="text-gray-600">
                    Safety, discipline, and professionalism are not just words to us—they are
                    the principles that guide every decision and action. We maintain strict
                    standards to ensure reliable protection.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1F3D2B] rounded-full flex items-center justify-center mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E1E1E] mb-2">
                    Comprehensive Coverage
                  </h3>
                  <p className="text-gray-600">
                    We serve clients throughout Karachi, providing flexible security solutions
                    that can be customized to your specific needs, whether corporate, residential,
                    or event-based.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/m444.jpg" // <-- landscape image
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
            Partner With Squad Security
          </h2>
          <p className="text-xl text-gray-400/50 mb-8 max-w-2xl mx-auto">
            Experience the difference that 6+ years of experience, 2000+ trained guards,
            and our commitment to safety, discipline, and professionalism can make for your security needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1F3D2B] px-8 py-3 rounded-md font-semibold hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}