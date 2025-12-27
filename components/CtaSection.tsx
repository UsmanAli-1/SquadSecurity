"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  imageLink?: string;
  title?: string;
  description?: string;
};

export default function CtaSection({
  imageLink = "/images/m444.jpg",
  title = "Ready to Secure Your Business?",
  description = "Contact us to discuss your specific security requirements. We provide tailored security services in Karachi.",
}: Props) {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageLink}
          alt="Squad Security Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 lg:bg-black/90 bg-black/80" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: false }}
          className="text-xl text-gray-400/70 mb-8 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          viewport={{ once: false }}
        >
          <Link
            href="/contact"
            className="inline-block bg-white text-[#1F3D2B] px-8 py-3 rounded-md font-semibold hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
