"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  imageLink?: string;
  title?: string;
  description?: string;
};

export default function Headers({
  imageLink = "/images/m444.jpg",
  title = "Security Services in Karachi",
  description =
  "Comprehensive security guard services in Karachi tailored to meet your specific protection needs. Professional, reliable, and trusted security solutions.",
}: Props) {
  return (
    <section className="relative pt-32 pb-16  overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={imageLink}
          alt="Security Services Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 lg:bg-black/90 bg-black/80" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl">
          {description}
        </p>
      </motion.div>
    </section>
  );
}
