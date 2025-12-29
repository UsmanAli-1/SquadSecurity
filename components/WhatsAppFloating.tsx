"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloating() {
    const whatsappNumber = "923042775661";
    const message = "Hello Squad Security, I need security services.";

    return (
        <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                message
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="
        fixed bottom-5 right-5 z-50
        bg-[#25D366] text-white
        w-13 h-13 rounded-full
        flex items-center justify-center
        shadow-lg 
        hover:scale-110 hover:shadow-xl
        transition-all duration-300
        animate-pulse
      "
        >
            <FaWhatsapp className="w-8 h-8" />
        </a>
    );
}
