"use client";

import { useState } from "react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "Speaking Engagement",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      setStatus({
        type: "error",
        message: "Web3Forms access key is not configured. Please add it to your .env.local file.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          subject: `Contact Form Submission: ${formData.subject}`,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "Speaking Engagement",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please check your internet connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <AnimatedSection id="contact" className="section-padding bg-executive-blue dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-executive-gold uppercase mb-2">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">Contact the Executive Office</h3>
            <p className="text-gray-300 mb-10 max-w-md leading-relaxed text-lg">
              For speaking inquiries, media requests, or policy consultations, please reach out to Dr. Saido's office.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-executive-gold mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">office@amarasaido.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-executive-gold mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-300">+41 22 123 4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-executive-gold mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Office</h4>
                  <p className="text-gray-300">Palais des Nations<br/>1211 Geneva, Switzerland</p>
                </div>
              </div>
            </div>


          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-executive-darkSurface rounded-sm shadow-xl p-8 md:p-10 text-gray-900 dark:text-white">
            <h4 className="text-2xl font-playfair font-bold mb-6">Send a Message</h4>
            
            {status.type && (
              <div className={`p-4 mb-6 rounded-sm text-sm border ${
                status.type === "success" 
                  ? "bg-green-50 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-200 dark:border-green-800" 
                  : "bg-red-50 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-200 dark:border-red-800"
              }`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-sm focus:ring-executive-gold focus:border-executive-gold bg-transparent disabled:opacity-50" 
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-sm focus:ring-executive-gold focus:border-executive-gold bg-transparent disabled:opacity-50" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-sm focus:ring-executive-gold focus:border-executive-gold bg-transparent disabled:opacity-50" 
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <select 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-sm focus:ring-executive-gold focus:border-executive-gold bg-transparent dark:bg-executive-darkSurface disabled:opacity-50"
                >
                  <option>Speaking Engagement</option>
                  <option>Media Inquiry</option>
                  <option>Policy Consultation</option>
                  <option>General Message</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-sm focus:ring-executive-gold focus:border-executive-gold bg-transparent disabled:opacity-50"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-executive-blue hover:bg-executive-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-executive-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
