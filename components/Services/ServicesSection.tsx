"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "./servicesData";
import { motion } from "framer-motion";

type Props = {
    limit?: number;
    showCTA?: boolean;
    title?: string;
    description?: string;
};

export default function ServicesSection({
    limit,
    showCTA = false,
    title = "Our Security Services",
    description,
}: Props) {
    const visibleServices = limit ? services.slice(0, limit) : services;

    return (
        <section className="py-20 bg-white ">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E]">
                        {title}
                    </h2>
                    <div className="w-16 h-[2px] bg-[#1F3D2B] mx-auto mt-4 mb-4" />

                    {description && (
                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                            {description}
                        </p>
                    )}
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {visibleServices.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 40 }}
                                transition={{
                                    duration: 0.7,
                                    ease: "easeOut",
                                }}
                                viewport={{
                                    once: false,
                                    amount: 0.25,
                                }}
                                className="bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 group"
                            >
                                {/* Image */}
                                <div className="relative h-65 w-full ">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30" />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center mb-3">
                                        <div className="w-10 h-10 bg-[#1F3D2B] rounded-md flex items-center justify-center mr-3">
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-[#1E1E1E]">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                {showCTA && (
                    <div className="text-center mt-12">
                        <Link
                            href="/services"
                            className="inline-block bg-[#1F3D2B] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#1a3225] hover:scale-105 duration-300 transition-all "
                        >
                            View All Services
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
