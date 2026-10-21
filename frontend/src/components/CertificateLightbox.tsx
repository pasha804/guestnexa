"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ExternalLink, Award, ArrowLeft, ArrowRight, Sparkles, ZoomIn } from "lucide-react";
import { Certificate } from "../types";

interface CertificateLightboxProps {
  certificate: Certificate | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const CertificateLightbox: React.FC<CertificateLightboxProps> = ({
  certificate,
  onClose,
  onNext,
  onPrev
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Strict body scroll locking when certificate modal is open
  useEffect(() => {
    if (certificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [certificate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };

    if (certificate) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose, onNext, onPrev]);

  if (!certificate || !mounted) return null;

  // Mount directly to document.body to break out of all parent stacking contexts & overflow-hidden constraints
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-lightbox-title"
      className="fixed inset-0 z-[99999] overflow-y-auto overscroll-contain bg-[#182A52]/85 backdrop-blur-md p-3 sm:p-5 md:p-6"
      onClick={onClose}
    >
      <div className="min-h-full flex items-center justify-center py-4 sm:py-8">
        {/* Lightbox Modal Card */}
        <div
          className="relative w-full max-w-4xl bg-white border-2 border-slate-200 rounded-3xl p-4 sm:p-6 md:p-8 shadow-[0_25px_80px_rgba(24,42,82,0.45)] flex flex-col z-10 my-auto animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#2587C4]/15 text-[#2587C4]">
                  {certificate.category}
                </span>
                <span className="text-[10px] font-bold text-slate-500">
                  Verified Industry Credential
                </span>
              </div>
              <h3 id="certificate-lightbox-title" className="text-base sm:text-xl font-black text-[#182A52]">
                {certificate.title}
              </h3>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {onPrev && (
                <button
                  type="button"
                  onClick={onPrev}
                  aria-label="Previous certificate"
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              {onNext && (
                <button
                  type="button"
                  onClick={onNext}
                  aria-label="Next certificate"
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close certificate lightbox"
                className="p-2 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* High-Resolution Certificate Image Display */}
          <div className="relative w-full my-4 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center p-2 shadow-inner group">
            <div className="relative w-full aspect-[1600/1131] max-h-[60vh]">
              <Image
                src={certificate.imageFilename}
                alt={certificate.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
                priority
              />
            </div>
            <a
              href={certificate.imageFilename}
              target="_blank"
              rel="noopener noreferrer"
              title="Open certificate in full resolution"
              className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-[#182A52]/90 hover:bg-[#182A52] text-white text-xs font-bold flex items-center gap-1.5 shadow-md backdrop-blur-sm transition-all cursor-pointer"
            >
              <ZoomIn className="w-3.5 h-3.5 text-[#FFB719]" />
              <span>Full View</span>
            </a>
          </div>

          {/* Certificate Details & Competencies */}
          <div className="space-y-3 pt-2">
            {certificate.description && (
              <div className="p-3.5 sm:p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                <p>{certificate.description}</p>
              </div>
            )}

            {certificate.skills && certificate.skills.length > 0 && (
              <div>
                <span className="text-xs font-bold text-[#182A52] uppercase tracking-wider block mb-2">
                  Verified Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {certificate.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-semibold text-[#182A52] bg-slate-100 px-3 py-1 rounded-lg border border-slate-200"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Certificate Metadata Row */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#2587C4]" />
                <span>Recipient: <strong className="text-[#182A52]">{certificate.recipient}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FFB719]" />
                <span>Issuer: <strong className="text-[#182A52]">{certificate.issuer}</strong></span>
              </div>
            </div>
          </div>

          {/* Bottom Interactive Actions */}
          <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-500 font-medium">
              Accredited by Skilledinn Institute
            </span>

            <div className="flex items-center gap-2.5">
              <a
                href={certificate.imageFilename}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#2587C4]" />
                <span>Open Full Image</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl brand-primary-button font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>Done / Close</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
