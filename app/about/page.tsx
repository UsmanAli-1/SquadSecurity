import WholeAboutSection from "@/components/About/WholeAboutSection";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "About Us | Squad Security ",
  description: "Learn about Squad Security, a trusted security company in Karachi with 6+ years of experience and 2000+ trained guards. We provide professional security guard services committed to safety, discipline, and professionalism.",
  keywords: [
    "Squad Security",
    "Squad International Security Agency",
    "Security company Karachi",
    "Professional security guards",
    "Security services Karachi",
    "Security guards Pakistan",
    "Trusted security company",
  ],
};

export default function About() {
  return (
    <>
    <WholeAboutSection />
    </>
  );
}