"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { clients } from "./clientsData";

type Props = {
  showCTA?: boolean;
};
 
export default function ClientsSection({ showCTA = false }: Props) {

  return (
    <section className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E]">
            Our Clients
          </h2>
          <div className="w-16 h-[2px] bg-[#1F3D2B] mx-auto mt-4 mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading banks and organizations across Karachi
          </p>
        </div>

        {/* Auto Scroll */}
        <div className="client-scroll-wrapper">
          <div className="client-scroll-track gap-8 sm:gap-10 md:gap-14">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="
                  flex items-center justify-center
                  min-w-[80px]
                  sm:min-w-[120px]
                  md:min-w-[150px]
                "
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={100}
                  height={60}
                  className="object-contain opacity-90 hover:opacity-100 hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {showCTA && (
          <div className="text-center mt-18">
            <Link
              href="/clients"
              className="inline-block bg-[#1F3D2B] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#1a3225] hover:scale-105 transition-all duration-300"
            >
              View All Clients
            </Link>
          </div>
        )}
      </motion.div>
    </section>
  );
}
