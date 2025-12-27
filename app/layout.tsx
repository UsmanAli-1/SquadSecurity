import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import TopInfoBar from "@/components/Layout/TopInfoBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Squad Security",
    template: "%s | Squad Security",
  },
  description: "Squad Security is a professional security guard company in Karachi providing trained armed and unarmed security guards, CCTV surveillance, event security, and corporate protection services.",
  keywords: [
    "Squad Security",
    "Squad International Security",
    "Squad International Security Agency",
    "Squad Security Company",
    "Security companies",
    "Security service in Karachi",
    "Security guard service in Karachi",
    "Security guards in Karachi",
    "Security service",
    "Security guards",
    "Security guard services",
    "Guards",
    "Private security company in Karachi",
    "Armed security guards in Karachi",
    "Unarmed security guards",
    "Event security services",
    "Bodyguard services Karachi",
    "CCTV security services",
    "Professional security guards Pakistan",
  ],
  openGraph: {
    title: "Squad Security ",
    description: "Squad Security is a professional security guard company in Karachi providing trained armed and unarmed security guards, CCTV surveillance, event security, and corporate protection services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopInfoBar />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}