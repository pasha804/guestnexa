"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, CheckCircle2, TrendingUp, Sparkles, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";
import { BrandIcon } from "./BrandIcon";
import { OWNER_INFO } from "../data/portfolioData";

export interface ServiceDetailData {
  id: string;
  pillarBadge: string;
  metricBadge: string;
  metricColor?: string;
  categoryTag: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  imageSrc: string;
  brandIcon: "meta" | "google-ads" | "instagram" | "facebook" | "whatsapp" | "photoshop" | "google" | "google-analytics";
  featureTags: string[];
  // Full details for Modal
  fullOverview: string;
  businessGrowthImpact: {
    heading: string;
    points: string[];
  };
  deliverablesList: string[];
  toolsStack: Array<{
    name: any;
    label: string;
  }>;
  whatsappMessage: string;
}

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetailData | null;
  onSelectServiceForContact?: (title: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  isOpen,
  onClose,
  service,
  onSelectServiceForContact
}) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-xl animate-fade-in overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-[#03091E]/95 border-2 border-[#D4AF37]/40 shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(212,175,55,0.25)] text-white overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Metallic Border Glow */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFF4C2] to-transparent" />

        {/* Modal Header with Image & Badges */}
        <div className="relative w-full h-48 sm:h-64 shrink-0 overflow-hidden bg-slate-950">
          <Image
            src={service.imageSrc}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#03091E] via-[#03091E]/70 to-transparent pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close details"
            className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#020614]/80 border-2 border-[#D4AF37]/70 text-white hover:text-[#FFF4C2] hover:bg-[#D4AF37]/30 flex items-center justify-center transition-all duration-200 shadow-xl cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Badges */}
          <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10 flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-black tracking-wider uppercase px-3 py-1 rounded-full bg-[#03091E]/90 border border-[#D4AF37]/70 text-[#FFF4C2] shadow-md backdrop-blur-md">
              {service.pillarBadge}
            </span>
            <span
              className="text-[11px] sm:text-xs font-black tracking-wider uppercase px-3 py-1 rounded-full bg-[#03091E]/90 border border-white/25 shadow-md backdrop-blur-md"
              style={{ color: service.metricColor || "#38BDF8" }}
            >
              {service.metricBadge}
            </span>
          </div>

          {/* Title & Subtitle on Image Overlay */}
          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 z-10">
            <div className="flex items-center gap-2 text-xs font-bold text-[#38BDF8] tracking-widest uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#F3CF7A]" />
              <span>{service.categoryTag}</span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl md:text-3xl font-black metallic-gold-heading leading-tight">
              {service.title}
            </h2>
            <p className="text-xs sm:text-sm font-bold metallic-gold-subtle mt-0.5">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 md:p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1">
          {/* Overview Section */}
          <div>
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#FFF4C2] flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-[#D4AF37]" />
              <span>Service Comprehensive Overview</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-[#050D24]/80 p-3.5 sm:p-4 rounded-2xl border border-white/10 shadow-inner">
              {service.fullOverview}
            </p>
          </div>

          {/* Business Growth & ROI Impact */}
          <div>
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#38BDF8] flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-[#38BDF8]" />
              <span>How This Service Directly Grows Your Business</span>
            </h3>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#061838]/70 to-[#040C22]/90 border border-[#38BDF8]/30 space-y-2.5">
              <h4 className="text-xs sm:text-sm font-bold text-white">
                {service.businessGrowthImpact.heading}
              </h4>
              <ul className="space-y-2">
                {service.businessGrowthImpact.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Deliverables Checklist */}
          <div>
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider metallic-gold-text flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>What is Included (Deliverables Checklist)</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverablesList.map((del, dIdx) => (
                <div
                  key={dIdx}
                  className="flex items-start gap-2 p-2.5 rounded-xl bg-[#040C20] border border-white/10 text-xs text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-1.5" />
                  <span className="leading-tight">{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Tech Stack / Tools Used */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Platforms &amp; Technologies Used:
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.toolsStack.map((tool, tIdx) => (
                <div
                  key={tIdx}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#050D24] border border-[#D4AF37]/30 text-xs font-semibold text-slate-200 shadow-sm"
                >
                  <BrandIcon name={tool.name} size={15} mode="authentic" />
                  <span>{tool.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Sticky Action Bar */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50/95 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-center sm:text-left">
            <span className="text-[11px] text-slate-500 block font-medium">Ready to rank #1 on Google?</span>
            <span className="text-xs font-bold text-[#182A52]">Direct communication with Attia Awais, Founder</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <Link
              href="#contact"
              onClick={() => {
                onClose();
                if (onSelectServiceForContact) onSelectServiceForContact(service.title);
              }}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-xs font-bold text-[#182A52] text-center transition-all shadow-sm"
            >
              Book Consultation
            </Link>

            <a
              href={`https://wa.me/${OWNER_INFO.phoneClean}?text=${encodeURIComponent(service.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-black text-xs flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-all cursor-pointer"
            >
              <BrandIcon name="whatsapp" size={17} mode="monochrome" className="text-white fill-white shrink-0" />
              <span className="text-white font-black tracking-wide">Inquire on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
