"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Shield } from "lucide-react";
import Headers from "@/components/Headers";
import toast from "react-hot-toast";
import ContactInfo from "@/components/Contact/ContactInfo";
import TrustIndicators from "@/components/Contact/TrustIndicators";


export default function Contact() {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [feedbackFormData, setFeedbackFormData] = useState({
    name: "",
    phone: "",
    type: "feedback",
    message: "",
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...contactFormData,
        type: "contact",
      }),
    });

    if (res.ok) {
      toast.success("Thank you! Your message has been sent.");
      setContactFormData({
        name: "",
        phone: "",
        service: "",
        message: "",
      });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };


  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feedbackFormData),
    });

    if (res.ok) {
      toast.success("Thank you for your feedback!");
      setFeedbackFormData({
        name: "",
        phone: "",
        type: "feedback",
        message: "",
      });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };


  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFeedbackChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFeedbackFormData({
      ...feedbackFormData,
      [e.target.name]: e.target.value,
    });
  };



  return (
    <div className="bg-white">
      {/* Header */}
      <Headers
        imageLink="/images/m44.jpg"
        title="Contact Us"
        description="Get in touch with Squad Security to discuss your security needs, submit feedback,
            or file a complaint. We're here to help and committed to your satisfaction."
      />


      {/* contact info section  */}
      <ContactInfo />

      {/* Contact Form & Feedback Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:scale-105 duration-300 trasition">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[#1F3D2B] rounded-lg flex items-center justify-center mr-3">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#1E1E1E]">
                  Send Us a Message
                </h2>
              </div>
              <form onSubmit={handleContactSubmit} className="space-y-6" aria-label="Contact form">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={contactFormData.name}
                    onChange={handleContactChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F3D2B] focus:border-transparent outline-none"
                    aria-required="true"
                    aria-describedby="contact-name-description"
                  />
                  <p id="contact-name-description" className="sr-only">Enter your full name</p>
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    required
                    value={contactFormData.phone}
                    onChange={handleContactChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F3D2B] focus:border-transparent outline-none"
                    aria-required="true"
                    aria-describedby="contact-phone-description"
                  />
                  <p id="contact-phone-description" className="sr-only">Enter your phone number</p>
                </div>
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={contactFormData.service}
                    onChange={handleContactChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F3D2B] focus:border-transparent outline-none"
                    aria-describedby="contact-service-description"
                  >
                    <option value="">Select a service</option>
                    <option value="security-officers">Security Officers</option>
                    <option value="armed-guards">Armed Guards</option>
                    <option value="unarmed-guards">Unarmed Guards</option>
                    <option value="bodyguards">Personal Bodyguards</option>
                    <option value="event-guards">Event Guards</option>
                    <option value="bouncers">Bouncers</option>
                    <option value="cctv">CCTV Surveillance</option>
                    <option value="lady-guards">Lady Guards</option>
                    <option value="protocol-guards">Protocol Guards</option>
                    <option value="site-guards">Site Guards</option>
                    <option value="consultancy">Security Consultancy</option>
                    <option value="other">Other</option>
                  </select>
                  <p id="contact-service-description" className="sr-only">Select the service you're interested in</p>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={contactFormData.message}
                    onChange={handleContactChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F3D2B] focus:border-transparent outline-none resize-y"
                    aria-required="true"
                    aria-describedby="contact-message-description"
                  />
                  <p id="contact-message-description" className="sr-only">Enter your message</p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1F3D2B] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#1a3225] transition-colors focus:ring-2 focus:ring-[#1F3D2B] focus:ring-offset-2 outline-none"
                  aria-label="Submit contact form"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Feedback/Complaint Form */}
            <div className="bg-white rounded-lg p-8 border border-gray-200 hover:scale-105 duration-300 trasition">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[#1F3D2B] rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#1E1E1E]">
                  Feedback & Complaints
                </h2>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Your feedback helps us improve. If you have a complaint, we take it seriously
                and will address it promptly.
              </p>
              <form onSubmit={handleFeedbackSubmit} className="space-y-6" aria-label="Feedback and complaint form">
                <div>
                  <label
                    htmlFor="feedback-type"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Type <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <select
                    id="feedback-type"
                    name="type"
                    required
                    value={feedbackFormData.type}
                    onChange={handleFeedbackChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F3D2B] focus:border-transparent outline-none"
                    aria-required="true"
                    aria-describedby="feedback-type-description"
                  >
                    <option value="feedback">Feedback</option>
                    <option value="complaint">Complaint</option>
                    <option value="suggestion">Suggestion</option>
                  </select>
                  <p id="feedback-type-description" className="sr-only">Select feedback type</p>
                </div>
                <div>
                  <label
                    htmlFor="feedback-name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="feedback-name"
                    name="name"
                    required
                    value={feedbackFormData.name}
                    onChange={handleFeedbackChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F3D2B] focus:border-transparent outline-none"
                    aria-required="true"
                    aria-describedby="feedback-name-description"
                  />
                  <p id="feedback-name-description" className="sr-only">Enter your full name</p>
                </div>
                <div>
                  <label
                    htmlFor="feedback-phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="feedback-phone"
                    name="phone"
                    value={feedbackFormData.phone}
                    onChange={handleFeedbackChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F3D2B] focus:border-transparent outline-none"
                    aria-describedby="feedback-phone-description"
                  />
                  <p id="feedback-phone-description" className="sr-only">Enter your phone number (optional)</p>
                </div>
                <div>
                  <label
                    htmlFor="feedback-message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <textarea
                    id="feedback-message"
                    name="message"
                    required
                    rows={5}
                    value={feedbackFormData.message}
                    onChange={handleFeedbackChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F3D2B] focus:border-transparent outline-none resize-y"
                    aria-required="true"
                    aria-describedby="feedback-message-description"
                  />
                  <p id="feedback-message-description" className="sr-only">Enter your feedback or complaint details</p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1F3D2B] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#1a3225] transition-colors focus:ring-2 focus:ring-[#1F3D2B] focus:ring-offset-2 outline-none"
                  aria-label="Submit feedback form"
                >
                  Submit {feedbackFormData.type === "complaint" ? "Complaint" : "Feedback"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}

      <TrustIndicators />


    </div>
  );
}