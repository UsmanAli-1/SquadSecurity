"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/clients", label: "Clients" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  const phoneNumber = "+92 304 2775661";

  return (
    <div className="sticky top-[3px] z-50">
      <nav
        className="absolute top-3 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div className="w-full max-w-[90%] lg:max-w-[80%] bg-white rounded-2xl shadow-md px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between lg:h-20 h-17">
            {/* Logo - Left */}
            <Link href="/" className="flex items-center flex-shrink-0">
              {logoError ? (
                <span className="text-2xl font-bold text-[#1F3D2B]">
                  Squad Security
                </span>
              ) : (
                <Image
                  src="/images/logo3.png"
                  alt="Squad Security Logo"
                  width={120}
                  height={48}
                  className="lg:h-17 h-13 w-auto"
                  onError={() => setLogoError(true)}
                  priority
                />
              )}
            </Link>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative group py-2"
                  >
                    <span
                      className={`font-medium transition-colors ${isActive
                        ? "text-[#1F3D2B]"
                        : "text-[#1E1E1E] group-hover:text-[#1F3D2B]"
                        }`}
                    >
                      {link.label}
                    </span>
                    {/* Animated Underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#1F3D2B] transition-all duration-300 ease-out ${isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                        }`}
                      style={{
                        transformOrigin: "left",
                      }}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA Button - Right */}
            <div className="hidden lg:block">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="bg-[#1F3D2B] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#1a3225] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1F3D2B] focus:ring-offset-2"
                aria-label="Call now"
              >
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#1E1E1E] p-2 hover:text-[#1F3D2B] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden pb-3 border-t border-gray-200 mt-0 pt-2">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-medium transition-all py-1.5  px-3 rounded-md ${isActive
                        ? "bg-[#1F3D2B]/40 text-[#1F3D2B]"
                        : "text-[#1E1E1E] hover:text-[#1F3D2B] hover:bg-gray-50"
                        }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                {/* Mobile CTA Button */}
                <a
                  href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                  className="bg-[#1F3D2B] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1a3225] transition-colors text-center mt-2 focus:outline-none focus:ring-2 focus:ring-[#1F3D2B] focus:ring-offset-2"
                  onClick={() => setIsOpen(false)}
                  aria-label="Call now"
                >
                  Call Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}