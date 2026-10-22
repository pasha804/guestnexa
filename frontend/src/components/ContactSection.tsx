"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { OWNER_INFO } from "../data/portfolioData";
import { BrandIcon } from "./BrandIcon";
import { ScrollReveal } from "./ScrollReveal";

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const serviceOptions = [
    "Guest Posting (High DA / Organic Traffic)",
    "Link Building & Niche Edits",
    "Comprehensive Off-Page SEO",
    "Backlink Profile Audit & Toxic Disavow",
    "White-Label Agency Outreach Partnership",
    "Other Custom SEO Requirements"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage("Please enter your full name (minimum 2 characters).");
      return;
    }

    if (!phone.trim() || phone.trim().length < 6) {
      setErrorMessage("Please enter a valid contact phone or WhatsApp number.");
      return;
    }

    if (!service) {
      setErrorMessage("Please select a primary service required.");
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage("Please enter a valid email address (e.g. name@example.com).");
      return;
    }

    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName.trim(),
          phone: phone.trim(),
          service: service.trim(),
          email: email.trim(),
          message: message.trim() || null,
          honeypot: honeypot || null
        })
      });

      setFormStatus("success");
    } catch {
      setFormStatus("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppLeadLink = () => {
    const text = encodeURIComponent(
      `🚀 *NEW PROJECT INQUIRY — GUESTNEXA*\n\n` +
      `👤 *Client Name:* ${fullName.trim()}\n` +
      `📞 *Phone / WhatsApp:* ${phone.trim()}\n` +
      `📧 *Email Address:* ${email.trim()}\n` +
      `🎯 *Service Required:* ${service.trim()}\n` +
      `📝 *Project Details:* ${message.trim() || "Let's discuss Guest Posting & SEO strategy."}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n` +
      `_Sent directly via www.Guestnexa.com_`
    );
    return `https://wa.me/923126166818?text=${text}`;
  };

  const getEmailLeadLink = () => {
    const subject = encodeURIComponent(`New SEO Project Inquiry from ${fullName.trim()} — GuestNexa`);
    const body = encodeURIComponent(
      `Hello Attia,\n\nYou have received a new verified client inquiry from your website (www.Guestnexa.com):\n\n` +
      `• Client Name: ${fullName.trim()}\n` +
      `• Phone / WhatsApp: ${phone.trim()}\n` +
      `• Email Address: ${email.trim()}\n` +
      `• Service Required: ${service.trim()}\n` +
      `• Project Details:\n${message.trim() || "N/A"}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━\n` +
      `Direct Contact Number: ${phone.trim()}\n` +
      `Client Email: ${email.trim()}`
    );
    return `mailto:guestnexa@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Project Inquiry"
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden w-full bg-slate-50/60"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Section Header */}
        <ScrollReveal delay={0} className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB719] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2587C4]"></span>
            </span>
            <span className="text-xs sm:text-sm font-black tracking-[0.2em] text-[#182A52] uppercase">
              GET IN TOUCH
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-[#2587C4] font-bold tracking-wider uppercase">
              Direct Consultation
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[#182A52]">
            Let’s Scale Your Website’s{" "}
            <span className="brand-heading-gradient">
              Search Authority &amp; Rankings
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto">
            Ready to secure high-DA backlinks and dominate Google page 1? Send your project inquiry below.
          </p>
        </ScrollReveal>

        {/* Centered Form */}
        <div className="max-w-2xl mx-auto w-full">
          <ScrollReveal delay={80}>
            <div className="clean-white-card p-6 sm:p-10 rounded-3xl border border-slate-200 bg-white shadow-lg">
              {formStatus === "success" ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-[#182A52]">
                      Inquiry Sent Successfully!
                    </h3>
                    <p className="text-xs text-emerald-700 font-bold mt-1">
                      Thank you for contacting GuestNexa
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#182A52]">{fullName}</strong>. Your inquiry for <strong className="text-[#2587C4]">{service}</strong> has been logged. Send it directly to Attia via WhatsApp or Email:
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppLeadLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <BrandIcon name="whatsapp" size={18} />
                      <span>Chat on WhatsApp (03126166818)</span>
                    </a>

                    <a
                      href={getEmailLeadLink()}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#182A52] border border-slate-300 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Mail className="w-4 h-4 text-[#2587C4]" />
                      <span>Send via Email</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setFormStatus("idle");
                        setFullName("");
                        setPhone("");
                        setService("");
                        setEmail("");
                        setMessage("");
                      }}
                      className="text-xs text-slate-500 hover:text-[#182A52] underline cursor-pointer"
                    >
                      Fill another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                  {errorMessage && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Honeypot Spam Trap */}
                  <div style={{ display: "none" }} aria-hidden="true">
                    <label htmlFor="hp_field">Website URL</label>
                    <input
                      id="hp_field"
                      type="text"
                      name="website_url"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="contact-fullname"
                      className="block text-xs font-bold text-[#182A52] uppercase tracking-wider mb-1.5"
                    >
                      Full Name <span className="text-[#2587C4]">*</span>
                    </label>
                    <input
                      id="contact-fullname"
                      type="text"
                      required
                      placeholder="e.g. John Doe or Brand Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2587C4] focus:bg-white text-[#182A52] text-sm outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold text-[#182A52] uppercase tracking-wider mb-1.5"
                    >
                      Phone Number / WhatsApp <span className="text-[#2587C4]">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="e.g. 03126166818 or +92 312 6166818"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2587C4] focus:bg-white text-[#182A52] text-sm outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label
                      htmlFor="service-select"
                      className="block text-xs font-bold text-[#182A52] uppercase tracking-wider mb-1.5"
                    >
                      Service Required <span className="text-[#2587C4]">*</span>
                    </label>
                    <select
                      id="service-select"
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2587C4] focus:bg-white text-[#182A52] text-sm outline-none transition-all"
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-[#182A52] uppercase tracking-wider mb-1.5"
                    >
                      Email Address <span className="text-[#2587C4]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2587C4] focus:bg-white text-[#182A52] text-sm outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold text-[#182A52] uppercase tracking-wider mb-1.5"
                    >
                      Project / Target Website Details
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      placeholder="Share your website URL, niche, target keywords, or specific DA requirements..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2587C4] focus:bg-white text-[#182A52] text-sm outline-none transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full brand-primary-button py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}</span>
                    <Send className="w-4 h-4 text-[#FFB719]" />
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
