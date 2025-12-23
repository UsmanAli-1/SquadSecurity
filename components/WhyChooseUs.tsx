"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

function AnimatedCard({
  title,
  desc,
  className = "",
}: {
  title: string;
  desc: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.05 }}
      className={`bg-white rounded-lg p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-[#1F3D2B] rounded-full flex items-center justify-center">
          <span className="text-white font-bold">✓</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1E1E1E] mb-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const cards = [
    {
      title: "CNIC & Police Verified Guards",
      desc: "All our guards undergo thorough background checks and police verification for your peace of mind.",
    },

    {
      title: "Trained & Self-Motivated Staff",
      desc: "Our guards receive extensive training and are selected for their dedication and professionalism.",
    },
    {
      title: "Monitoring & Checking",
      desc: "Continuous monitoring and site checks ensure consistent quality and performance.",
    },
    {
      title: "Competitive Rates",
      desc: "Quality security services at competitive prices without compromising on standards.",
    },
    {
      title: "Quality Equipment",
      desc: "Our guards are equipped with professional-grade security equipment and uniforms.",
    },
    {
      title: "24/7 Operations",
      desc: "Round-the-clock security services available whenever you need protection.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] text-center mb-12">
          Why Choose Squad Security?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <AnimatedCard
              key={index}
              title={card.title}
              desc={card.desc}
              className={index === 6 ? "md:col-span-2 lg:col-span-1" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
