"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, PREMIUM_EASE } from "../ui/AnimatedSection";
import { Phone, MapPin } from "lucide-react";

export function ContactSection({ data }: { data?: any }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: data?.inquiryTypes?.[0] || "Research Collaboration",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = data?.inquiryTypes || [
    "Research Collaboration",
    "Speaking Engagement",
    "Academic Partnership",
    "Strategic/Policy Advisory",
    "Partnership",
    "Other",
  ];

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
          subject: inquiryTypes[0] || "Research Collaboration",
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
    <AnimatedSection id="contact" className="section-padding bg-executive-darkBg relative overflow-hidden text-white border-t-4 border-executive-gold">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-executive-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: PREMIUM_EASE }}
            className="lg:col-span-5"
          >
            <span className="section-label section-label-on-dark after-label block">Get in Touch</span>
            <h2 className="font-playfair type-subsection text-white after-title">
              {data?.title || <><span className="text-gradient-gold">Let's Connect</span></>}
            </h2>
            <p className="text-gray-400 mb-12 max-w-md leading-relaxed text-lg">
              {data?.description || "For research collaboration, speaking engagements, or strategic and policy advisory, please reach out to Prof. Saidou's office."}
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mr-5 group-hover:bg-executive-gold/10 group-hover:border-executive-gold/30 transition-colors">
                    <Phone className="w-5 h-5 text-executive-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-xs">Phone</h4>
                  <p className="text-gray-300 font-medium">{data?.phone || "+41 22 123 4567"}</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mr-5 group-hover:bg-executive-gold/10 group-hover:border-executive-gold/30 transition-colors">
                    <MapPin className="w-5 h-5 text-executive-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-xs">Office</h4>
                  <p className="text-gray-300 font-medium leading-relaxed whitespace-pre-wrap">{data?.address || "African Union Commission\nAddis Ababa, Ethiopia"}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: PREMIUM_EASE, delay: 0.15 }}
            className="lg:col-span-7"
          >
             <div className="border-t border-white/20 pt-8 relative">
                <h3 className="font-playfair text-2xl font-bold mb-6 text-white">Send a Message</h3>
                
                {status.type && (
                <div className={`p-4 mb-6 rounded-sm text-sm border font-medium ${
                    status.type === "success" 
                    ? "bg-green-900/30 text-green-200 border-green-800" 
                    : "bg-red-900/30 text-red-200 border-red-800"
                }`}>
                    {status.message}
                </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">First Name</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-sm focus:ring-1 focus:ring-executive-gold focus:border-executive-gold text-white text-sm placeholder-gray-500 transition-all disabled:opacity-50" 
                    />
                    </div>
                    <div>
                    <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">Last Name</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-sm focus:ring-1 focus:ring-executive-gold focus:border-executive-gold text-white text-sm placeholder-gray-500 transition-all disabled:opacity-50" 
                    />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-sm focus:ring-1 focus:ring-executive-gold focus:border-executive-gold text-white text-sm placeholder-gray-500 transition-all disabled:opacity-50" 
                    />
                    </div>
                    <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">Inquiry Type</label>
                    <select 
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-sm focus:ring-1 focus:ring-executive-gold focus:border-executive-gold text-white text-sm transition-all disabled:opacity-50"
                    >
                        {inquiryTypes.map((type: string) => (
                          <option key={type} value={type} className="bg-executive-darkBg text-white">{type}</option>
                        ))}
                    </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">Message</label>
                    <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-sm focus:ring-1 focus:ring-executive-gold focus:border-executive-gold text-white text-sm placeholder-gray-500 transition-all disabled:opacity-50 resize-none"
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3.5 px-6 rounded-sm text-xs font-bold uppercase tracking-wider text-executive-darkBg bg-executive-gold hover:bg-[#dbb84a] focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                </button>
                </form>
            </div>
          </motion.div>

        </div>
      </div>
    </AnimatedSection>
  );
}
