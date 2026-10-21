import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="w-full relative flex flex-col">
      {/* 01 — HERO: Meet Attia Awais & Rotating Ring */}
      <HeroSection />

      {/* 02 — ABOUT: Story, Expertise & High-Authority Network */}
      <AboutSection />

      {/* 03 — SERVICES: Guest Posting, Link Building, Off-Page SEO */}
      <ServicesSection />

      {/* 04 — SELECTED WORK: SEO Case Studies & Rankings */}
      <ProjectShowcase />

      {/* 05 — CERTIFICATES: Skilledinn Guest Posting Credential */}
      <CertificatesSection />

      {/* 06 — SOCIAL PROOF: 12 Real SEO Reviews & Results */}
      <ReviewsSection />

      {/* 07 — CONTACT: Direct WhatsApp & Instant SEO Consultation */}
      <ContactSection />
    </div>
  );
}
