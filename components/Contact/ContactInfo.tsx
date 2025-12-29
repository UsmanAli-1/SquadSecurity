import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const phoneNumber = "+92-304-2775661";
const emailAddress = "mj162332@gmail.com";
const officeAddress = "123 Main Street, Karachi, Pakistan";
const whatsappNumber = "+923042775661";

export default function ContactInfo() {
    return (
        <>
            {/* Contact Information Cards */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 ">
                        {/* Phone */}
                        <motion.a
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all flex items-start space-x-4 group hover:scale-105 duration-300 trasition"
                            aria-label={`Call us at ${phoneNumber}`}
                        >
                            <div className="w-12 h-12 bg-[#1F3D2B] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a3225] transition-colors">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#1E1E1E] mb-1">
                                    Phone
                                </h3>
                                <p className="text-gray-600 text-sm">{phoneNumber}</p>
                                <p className="text-gray-500 text-xs mt-1">Click to Call Now</p>
                            </div>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            href={`mailto:${emailAddress}`}
                            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all flex items-start space-x-4 group hover:scale-105 duration-300 trasition"
                            aria-label={`Email us at ${emailAddress}`}
                        >
                            <div className="w-12 h-12 bg-[#1F3D2B] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1a3225] transition-colors">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#1E1E1E] mb-1">
                                    Email
                                </h3>
                                <p className="text-gray-600 text-sm break-all">{emailAddress}</p>
                                <p className="text-gray-500 text-xs mt-1">Click to Email</p>
                            </div>
                        </motion.a>

                        {/* Address */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className="bg-white border border-gray-200 rounded-lg p-6 flex items-start space-x-4 hover:scale-105 duration-300 trasition">
                            <div className="w-12 h-12 bg-[#1F3D2B] rounded-lg flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#1E1E1E] mb-1">
                                    Office Address
                                </h3>
                                <p className="text-gray-600 text-sm">{officeAddress}</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* WhatsApp Button */}
                    <div className="text-center mb-12">
                        <motion.a
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                            href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-3 bg-[#25D366] text-white px-14 py-4 rounded-lg font-semibold hover:bg-[#20BA5A]  shadow-md hover:scale-105 duration-300 trasition"
                            aria-label="Contact us on WhatsApp"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>Contact Us on WhatsApp</span>
                        </motion.a>
                    </div>
                </div>
            </section>
        </>
    )
}