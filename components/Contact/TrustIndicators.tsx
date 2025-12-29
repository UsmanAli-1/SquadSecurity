import Image from "next/image"
import { MessageCircle, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";


export default function () {
    return (
        <>
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-lg border border-gray-200 overflow-hidden hover:scale-105 duration-300 trasition shadow-md">

                        {/* Background */}
                        <div className="absolute inset-0">
                            <Image
                                src="/images/slid.jpeg"
                                alt="Squad Security Background"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/90" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-8">
                            <motion.h2
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 40 }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                                className="text-2xl font-bold text-white text-center mb-8">
                                Why Trust Squad Security?
                                <div className="w-16 h-[2px] bg-[#1F3D2B] mx-auto mt-4 mb-4" />

                            </motion.h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 40 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut",
                                    }}
                                    className="text-center">
                                    <div className="w-12 h-12 bg-[#1F3D2B] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-semibold text-white mb-2">
                                        6+ Years Experience
                                    </h3>
                                    <p className="text-gray-300 text-sm">
                                        Proven track record in security services
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 40 }}
                                    transition={{
                                        duration: 0.7,
                                        ease: "easeOut",
                                    }}
                                    className="text-center">
                                    <div className="w-12 h-12 bg-[#1F3D2B] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-semibold text-white mb-2">
                                        24/7 Support
                                    </h3>
                                    <p className="text-gray-300 text-sm">
                                        Always available when you need us
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 40 }}
                                    transition={{
                                        duration: 0.9,
                                        ease: "easeOut",
                                    }}
                                    className="text-center">
                                    <div className="w-12 h-12 bg-[#1F3D2B] rounded-full flex items-center justify-center mx-auto mb-3">
                                        <MessageCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-semibold text-white mb-2">
                                        Quick Response
                                    </h3>
                                    <p className="text-gray-300 text-sm">
                                        We respond to all inquiries promptly
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >

            {/* Business Hours */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-lg p-8 border border-gray-200 max-w-2xl mx-auto hover:scale-105 duration-300 trasition shadow-md">
                        <div className="flex items-center justify-center mb-6">
                            <Clock className="w-8 h-8 text-[#1F3D2B] mr-3" />
                            <h2 className="text-2xl font-bold text-[#1E1E1E]">
                                Business Hours
                            </h2>
                        </div>
                        <div className="space-y-3 text-center">
                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                <span className="font-medium text-gray-700">Monday - Friday</span>
                                <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                <span className="font-medium text-gray-700">Saturday</span>
                                <span className="text-gray-600">9:00 AM - 2:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="font-medium text-gray-700">Sunday</span>
                                <span className="text-gray-600">Closed</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-4 pt-4 border-t border-gray-200">
                                Emergency security services available 24/7
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}