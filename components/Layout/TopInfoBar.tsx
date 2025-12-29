"use client";

import { useState, useEffect } from "react";
import { Phone, MapPin, Shield, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function TopInfoBar() {
  const [rotatingTextIndex, setRotatingTextIndex] = useState(0);

  const rotatingTexts = [
    "We Provide Trained Security Guards",
    "Best Security Service in Karachi",
    "We Provide All Security Accessories",
  ];

  const phoneNumber = "+92 304 2775661";
  const whatsappNumber = "923042775661";

  // Auto-rotate text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingTextIndex(
        (prevIndex) => (prevIndex + 1) % rotatingTexts.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#1E1E1E] text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-between text-sm">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-gray-300"
              aria-label={`Call us at ${phoneNumber}`}
            >
              <Phone className="h-4 w-4" />
              <span className="whitespace-nowrap">{phoneNumber}</span>
            </a>

            <div className="hidden sm:flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Karachi, Pakistan</span>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 transition-colors hover:text-gray-300"
              aria-label="Chat with us on WhatsApp"
            >
              <FaWhatsapp className="h-4 w-4" />
              <span>Chat with Us</span>
            </a>
          </div>

          {/* RIGHT SIDE – ROTATING TEXT (Desktop) / WHATSAPP (Mobile) */}
          <div className="flex items-center gap-2">
            {/* Mobile WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden flex items-center gap-2 transition-colors hover:text-gray-300"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat with Us</span>
            </a>

            {/* Desktop Rotating Text */}
            <div className="hidden md:flex items-center gap-2">
              <Shield className="h-4 w-4 flex-shrink-0" />

              <div className="relative h-[20px] min-w-[280px] overflow-hidden">
                {rotatingTexts.map((text, index) => (
                  <span
                    key={index}
                    className={`absolute inset-0 flex items-center transition-all duration-500 ease-in-out ${index === rotatingTextIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                      }`}
                  >
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
