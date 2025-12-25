"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Clock, Shield } from "lucide-react";
import Image from "next/image";


export default function Contact() {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [feedbackFormData, setFeedbackFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "feedback",
    subject: "",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Contact form submitted:", contactFormData);
    alert("Thank you for your inquiry. We will contact you soon!");
    setContactFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Feedback form submitted:", feedbackFormData);
    alert("Thank you for your feedback. We appreciate your input and will address your concern promptly.");
    setFeedbackFormData({
      name: "",
      email: "",
      phone: "",
      type: "feedback",
      subject: "",
      message: "",
    });
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

  // Replace with actual contact information
  const phoneNumber = "+92-304-2775661";
  const emailAddress = "mj162332@gmail.com";
  const officeAddress = "123 Main Street, Karachi, Pakistan";
  const whatsappNumber = "+923042775661"; // Replace with actual WhatsApp number

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative pt-30 pb-10 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/m44.jpg" // use any landscape image
            alt="Security Services Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 lg:bg-black/90 bg-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Get in touch with Squad Security to discuss your security needs, submit feedback,
            or file a complaint. We're here to help and committed to your satisfaction.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Phone */}
            <a
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all flex items-start space-x-4 group"
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
                <p className="text-gray-500 text-xs mt-1">Click to call</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${emailAddress}`}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all flex items-start space-x-4 group"
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
                <p className="text-gray-500 text-xs mt-1">Click to email</p>
              </div>
            </a>

            {/* Address */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#1F3D2B] rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1E1E1E] mb-1">
                  Office Address
                </h3>
                <p className="text-gray-600 text-sm">{officeAddress}</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="text-center mb-12">
            <a
              href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors shadow-md"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Feedback Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
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
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={contactFormData.email}
                    onChange={handleContactChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F3D2B] focus:border-transparent outline-none"
                    aria-required="true"
                    aria-describedby="contact-email-description"
                  />
                  <p id="contact-email-description" className="sr-only">Enter your email address</p>
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
            <div className="bg-white rounded-lg p-8 border border-gray-200">
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
                    htmlFor="feedback-email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="feedback-email"
                    name="email"
                    required
                    value={feedbackFormData.email}
                    onChange={handleFeedbackChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F3D2B] focus:border-transparent outline-none"
                    aria-required="true"
                    aria-describedby="feedback-email-description"
                  />
                  <p id="feedback-email-description" className="sr-only">Enter your email address</p>
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
                    htmlFor="feedback-subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="feedback-subject"
                    name="subject"
                    required
                    value={feedbackFormData.subject}
                    onChange={handleFeedbackChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1F3D2B] focus:border-transparent outline-none"
                    aria-required="true"
                    aria-describedby="feedback-subject-description"
                  />
                  <p id="feedback-subject-description" className="sr-only">Enter the subject of your feedback or complaint</p>
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1E1E1E] text-center mb-8">
              Why Trust Squad Security?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#1F3D2B] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-[#1E1E1E] mb-2">6+ Years Experience</h3>
                <p className="text-gray-600 text-sm">Proven track record in security services</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#1F3D2B] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-[#1E1E1E] mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Always available when you need us</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#1F3D2B] rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-[#1E1E1E] mb-2">Quick Response</h3>
                <p className="text-gray-600 text-sm">We respond to all inquiries promptly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 border border-gray-200 max-w-2xl mx-auto">
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
          </div>
        </div>
      </section>
    </div>
  );
}