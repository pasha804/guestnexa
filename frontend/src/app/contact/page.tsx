import React from "react";
import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Attia Awais | GuestNexa SEO Agency & Inquiries",
  description:
    "Get in touch directly with Attia Awais, Founder of GuestNexa. Submit your inquiry for high-DA guest posting, strategic link building, and comprehensive off-page SEO.",
  keywords: [
    "Contact Attia Awais",
    "GuestNexa Contact",
    "Hire SEO Expert",
    "Guest Posting Inquiries",
    "Link Building Agency Contact",
    "Lahore SEO Agency"
  ]
};

export default function ContactPage() {
  return (
    <div className="w-full relative min-h-screen pt-24 sm:pt-28 pb-16">
      <ContactSection />
    </div>
  );
}
