"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How quickly can you deploy security guards?",
        answer:
            "We can deploy trained security guards within 24 hours depending on location and requirements. Emergency deployments can be arranged faster.",
    },
    {
        question: "Do you provide armed and unarmed guards?",
        answer:
            "Yes. We offer both armed and unarmed security guards, fully trained and licensed according to local regulations.",
    },
    {
        question: "Are your guards trained and verified?",
        answer:
            "All our guards undergo background checks, physical training, and professional security instruction before deployment.",
    },
    {
        question: "Do you offer short-term or one-day security services?",
        answer:
            "Yes, we provide one-day guards, event security, and short-term deployments for weddings, corporate events, and special occasions.",
    },
    {
        question: "Do you operate outside Karachi?",
        answer:
            "Yes. We provide security services in Karachi and surrounding areas, including rural sites and special projects.",
    },
];

export default function Faqs() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div
                    className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0, y: 40 }}
                        className="text-3xl md:text-4xl font-bold text-[#1E1E1E]">
                        Frequently Asked Questions
                    </motion.h2>
                    <div className="w-16 h-[2px] bg-[#1F3D2B] mx-auto mt-4" />
                </div>

                {/* FAQ Items */}
                <motion.div
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    exit={{ opacity: 0, y: 80 }}
                    className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:scale-105 duration-300 transition shadow-md"
                            >
                                {/* Question */}
                                <button
                                    onClick={() =>
                                        setActiveIndex(isOpen ? null : index)
                                    }
                                    className="w-full flex items-center justify-between p-5 text-left"
                                >
                                    <span className="font-semibold text-[#1E1E1E]">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Answer */}
                                    {isOpen && (
                                        <div
                                            className="px-5 pb-5 text-gray-600 text-sm leading-relaxed  "
                                        >
                                            {faq.answer}
                                        </div>
                                    )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
