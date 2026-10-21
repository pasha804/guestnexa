"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, Calendar, Hash, ZoomIn, CheckCircle, ExternalLink, Sparkles } from "lucide-react";
import { CERTIFICATES_LIST } from "../data/portfolioData";
import { CertificateLightbox } from "./CertificateLightbox";
import { Certificate } from "../types";
import { ScrollReveal } from "./ScrollReveal";

export const CertificatesSection: React.FC = () => {
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);

  const activeCert = selectedCertIndex !== null ? CERTIFICATES_LIST[selectedCertIndex] : null;

  const handleNext = () => {
    if (selectedCertIndex !== null) {
      setSelectedCertIndex((selectedCertIndex + 1) % CERTIFICATES_LIST.length);
    }
  };

  const handlePrev = () => {
    if (selectedCertIndex !== null) {
      setSelectedCertIndex(
        (selectedCertIndex - 1 + CERTIFICATES_LIST.length) % CERTIFICATES_LIST.length
      );
    }
  };

  return (
    <section
      id="certificates"
      aria-label="Professional Credentials and Certificates"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden w-full bg-slate-50/60"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Section Header */}
        <ScrollReveal delay={0} className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 mb-3 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB719] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2587C4]"></span>
            </span>
            <span className="text-xs sm:text-sm font-black tracking-[0.2em] text-[#182A52] uppercase">
              CREDENTIALS
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-[#2587C4] font-semibold tracking-wider uppercase">
              Verified Industry Certification
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight leading-tight text-[#182A52]">
            Officially Certified in{" "}
            <span className="brand-heading-gradient">
              Guest Posting &amp; SEO Outreach
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Accredited certification in professional guest posting, publisher screening, contextual anchor text strategy, and search engine authority growth.
          </p>
        </ScrollReveal>

        {/* Featured Certificate Card: Skilledinn Guest Posting */}
        <div className="space-y-10 w-full">
          <ScrollReveal delay={40} className="w-full">
            <div className="clean-white-card rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white hover:border-[#2587C4] transition-all duration-300 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Certificate Visual Preview */}
                <div
                  className="lg:col-span-7 relative group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 shadow-lg"
                  onClick={() => setSelectedCertIndex(0)}
                >
                  <div className="relative aspect-[16/11] w-full bg-slate-100">
                    <Image
                      src={CERTIFICATES_LIST[0].imageFilename}
                      alt={CERTIFICATES_LIST[0].imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 650px"
                      className="object-contain transition-transform duration-500 group-hover:scale-102"
                      priority
                    />
                  </div>

                  <div className="absolute inset-0 bg-[#182A52]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm backdrop-blur-[2px]">
                    <ZoomIn className="w-5 h-5 text-[#FFB719]" />
                    <span>Click to View Full Certificate</span>
                  </div>
                </div>

                {/* Certificate Meta Details */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#2587C4]/10 text-[#2587C4] border border-[#2587C4]/20 uppercase tracking-wider inline-block mb-3">
                      {CERTIFICATES_LIST[0].category}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-black text-[#182A52] leading-snug">
                      {CERTIFICATES_LIST[0].title}
                    </h3>

                    <p className="text-sm font-semibold text-[#2587C4] mt-1">
                      Awarded to {CERTIFICATES_LIST[0].recipient} • {CERTIFICATES_LIST[0].issuer}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                      {CERTIFICATES_LIST[0].description}
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-xs font-bold text-[#182A52] uppercase tracking-wider block mb-2">
                      Verified Competencies:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {CERTIFICATES_LIST[0].skills?.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedCertIndex(0)}
                      className="px-5 py-2.5 rounded-xl brand-primary-button text-xs sm:text-sm font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <ZoomIn className="w-4 h-4 text-[#FFB719]" />
                      <span>Zoom High-Resolution</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Supporting Credentials (2 Side-by-Side Cards) */}
          {CERTIFICATES_LIST.length > 1 && (
            <ScrollReveal delay={80} className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              {CERTIFICATES_LIST.slice(1).map((cert, idx) => (
                <div
                  key={cert.id}
                  className="clean-white-card rounded-2xl p-6 border border-slate-200 bg-white hover:border-[#2587C4] transition-all duration-300 flex flex-col justify-between shadow-sm cursor-pointer group"
                  onClick={() => setSelectedCertIndex(idx + 1)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FFB719]/15 text-[#B45309] border border-[#FFB719]/30 uppercase">
                        {cert.category}
                      </span>
                      <ZoomIn className="w-4 h-4 text-slate-400 group-hover:text-[#2587C4] transition-colors" />
                    </div>

                    <h4 className="text-lg font-bold text-[#182A52] group-hover:text-[#2587C4] transition-colors mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-semibold text-slate-500 mb-2">
                      {cert.issuer} ({cert.issueDate})
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {cert.skills?.map((sk, skIdx) => (
                      <span
                        key={skIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </ScrollReveal>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificateLightbox
        certificate={activeCert}
        onClose={() => setSelectedCertIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
