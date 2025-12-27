import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Squad Security",
  description: "Contact Squad Security for professional security guard services in Karachi. Get a free consultation, request a quote, submit feedback, or file a complaint. Phone, email, WhatsApp, and office address available.",
  keywords: [
    "Security services Karachi contact",
    "Squad Security",
    "Contact Squad Security",
    "Security guard services Karachi",
    "Security service in Karachi",
    "Security service in Pakistan",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}