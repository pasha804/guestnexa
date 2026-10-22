import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function Home() {
  return (
    <div className="w-full relative flex flex-col">
      {/* 01 — HERO: Meet Attia Awais & Rotating Ring */}
      <HeroSection />

      {/* 02 — ABOUT: Story, Expertise & High-Authority Network */}
      <AboutSection />

      {/* 03 — CERTIFICATES: Skilledinn Guest Posting Credential */}
      <CertificatesSection />

      {/* 04 — SOCIAL PROOF: 12 Real SEO Reviews & Results */}
      <ReviewsSection />
    </div>
  );
}
