"use client";

import { useState } from "react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { Mail, Phone, MapPin } from "lucide-react";

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
    <AnimatedSection id="contact" className="section-padding bg-executive-darkBg relative overflow-hidden text-white border-t-4 border-executive-gold">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-executive-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Contact Info */}
          <div className="lg:col-span-5">
            <span className="section-label mb-3 block">Get in Touch</span>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Contact the <br/><span className="text-gradient-gold">Executive Office</span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-md leading-relaxed text-lg">
              For speaking inquiries, media requests, or policy consultations, please reach out to Prof. Saidou's office.
            </p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mr-5 group-hover:bg-executive-gold/10 group-hover:border-executive-gold/30 transition-colors">
                    <Mail className="w-5 h-5 text-executive-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-xs">Email</h4>
                  <p className="text-gray-300 font-medium">office@amarasaido.com</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mr-5 group-hover:bg-executive-gold/10 group-hover:border-executive-gold/30 transition-colors">
                    <Phone className="w-5 h-5 text-executive-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-xs">Phone</h4>
                  <p className="text-gray-300 font-medium">+41 22 123 4567</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mr-5 group-hover:bg-executive-gold/10 group-hover:border-executive-gold/30 transition-colors">
                    <MapPin className="w-5 h-5 text-executive-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase tracking-wider text-xs">Office</h4>
                  <p className="text-gray-300 font-medium leading-relaxed">African Union Commission<br/>Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
             <div className="glass-card-dark rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative">
                {/* Subtle top border glow */}
                <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-executive-gold/40 to-transparent" />

                <h3 className="text-2xl font-playfair font-bold mb-8 text-white">Send a Message</h3>
                
                {status.type && (
                <div className={`p-4 mb-8 rounded-xl text-sm border font-medium ${
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
                    <label htmlFor="firstName" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">First Name</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-5 py-3.5 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-executive-gold focus:border-transparent text-white placeholder-gray-600 transition-all disabled:opacity-50" 
                    />
                    </div>
                    <div>
                    <label htmlFor="lastName" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Last Name</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-5 py-3.5 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-executive-gold focus:border-transparent text-white placeholder-gray-600 transition-all disabled:opacity-50" 
                    />
                    </div>
                </div>
                
                <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
                    <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-5 py-3.5 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-executive-gold focus:border-transparent text-white placeholder-gray-600 transition-all disabled:opacity-50" 
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Subject</label>
                    <select 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-5 py-3.5 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-executive-gold focus:border-transparent text-white transition-all disabled:opacity-50 appearance-none"
                    >
                    <option className="bg-executive-darkBg">Speaking Engagement</option>
                    <option className="bg-executive-darkBg">Media Inquiry</option>
                    <option className="bg-executive-darkBg">Policy Consultation</option>
                    <option className="bg-executive-darkBg">General Message</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Message</label>
                    <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-5 py-3.5 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-executive-gold focus:border-transparent text-white placeholder-gray-600 transition-all disabled:opacity-50 resize-none"
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-4 px-6 rounded-xl text-sm font-bold text-executive-darkBg bg-executive-gold hover:bg-[#dbb84a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-executive-darkBg focus:ring-executive-gold transition-all hover:shadow-[0_0_20px_rgba(201,162,39,0.3)] disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                </button>
                </form>
            </div>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
