"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Shield,
    ShieldAlert,
    Award,
    MapPin,
    Calendar,
    Car,
    Briefcase,
} from "lucide-react";

/* ================= SERVICES DATA (SAME FILE) ================= */

const advancedServices = [
    {
        title: "Army Retired Guards",
        description:
            "Highly disciplined and experienced security personnel retired from the Pakistan Army, ideal for sensitive locations and high-value assets.",
        image: "/images/services/army-retired.jpg",
        icon: "award",
    },
    {
        title: "Rural Area Security Guards",
        description:
            "Reliable security guards deployed for rural and remote areas, ensuring protection of farms, factories, and isolated sites.",
        image: "/images/protocol-guards.jpg",
        icon: "map",
    },
    {
        title: "Body Guards",
        description:
            "Expert risk assessment and Body Guards services.",
        image: "/images/IMG-20221207-WA0023.jpg",
        icon: "shield",
    },
    {
        title: "Gwadar Project Guards",
        description:
            "Specialized security services for Gwadar and CPEC-related projects, trained for high-security and long-term deployments.",
        image: "/images/services/gwadar.jpg",
        icon: "alert",
    },
    {
        title: "One-Day / Temporary Guards",
        description:
            "Short-term guard services for events, VIP visits, emergencies, or temporary security needs.",
        image: "/images/IMG-20221207-WA0023.jpg",
        icon: "calendar",
    },
    {
        title: "Rental Cars with Guards",
        description:
            "Secure transportation with rental vehicles accompanied by trained security guards for VIP and executive movement.",
        image: "/images/cars.jpg",
        icon: "car",
    },
    {
        title: "Site & Construction Guards",
        description:
            "Dedicated guards for construction sites, warehouses, and industrial locations to prevent theft and unauthorized access.",
        image: "/images/services/site-guards.jpg",
        icon: "shield",
    },
    {
        title: "Security Consultancy",
        description:
            "Expert risk assessment and customized security planning services.",
        image: "/images/slid.jpeg",
        icon: "Briefcase",
    },


];

/* ================= ICON MAPPER ================= */

const iconMap: Record<string, any> = {
    shield: Shield,
    alert: ShieldAlert,
    award: Award,
    map: MapPin,
    calendar: Calendar,
    car: Car,
    Briefcase:Briefcase,
};

/* ================= COMPONENT ================= */

export default function AdvancedServicesSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E]">
                        Specialized & Advanced Security Services
                    </h2>
                    <div className="w-16 h-[2px] bg-[#1F3D2B] mx-auto mt-4 mb-4" />
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Advanced protection solutions designed for high-risk environments,
                        infrastructure projects, and specialized security needs.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advancedServices.map((service, index) => {
                        const Icon = iconMap[service.icon];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.25 }}
                                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="relative h-44 w-full">
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
            </div>
        </section>
    );
}
