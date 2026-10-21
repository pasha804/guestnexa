"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  X,
  ExternalLink,
  ShieldCheck,
  Layers,
  Tag,
  Star,
  Target,
  Share2,
  Palette,
  Users,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  TrendingUp,
  Award
} from "lucide-react";
import { Project } from "../types";
import { BrandIcon } from "./BrandIcon";
import { OWNER_INFO } from "../data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // WhatsApp consultation link pre-filled with this specific project context
  const whatsappConsultUrl = `https://wa.me/${OWNER_INFO.phoneClean}?text=${encodeURIComponent(
    `Hello Attia! I was reviewing your GuestNexa case study "${project.title}" (${project.category}). I would like to discuss a similar Guest Posting & Link Building campaign for my business.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6"
    >
      {/* Dark backdrop blur */}
      <div
        className="fixed inset-0 bg-[#020612]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-[28px] shadow-[0_25px_70px_rgba(24,42,82,0.25)] overflow-hidden z-10 max-h-[92vh] flex flex-col">
        {/* Top Accent Line */}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#182A52] via-[#2587C4] to-[#FFB719] z-20" />

        {/* Sticky Header with Close Button */}
        <div className="relative z-10 px-5 sm:px-8 pt-6 pb-5 border-b border-slate-100 flex items-start justify-between gap-4 bg-white/95 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 flex-1 min-w-0">
            {/* Medallion Logo */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-50 border-2 border-[#2587C4] p-2 shrink-0 flex items-center justify-center shadow-sm">
              <Image
                src={project.logoFilename}
                alt={project.logoAlt}
                fill
                sizes="80px"
                className="object-contain p-1.5"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-[11px] font-mono font-bold text-[#182A52] px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 shadow-sm">
                  Case Study {project.number}
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2587C4] bg-[#2587C4]/10 px-2.5 py-0.5 rounded-full border border-[#2587C4]/30">
                  {project.category}
                </span>
                {project.highlightTag && (
                  <span className="hidden md:inline-flex text-[10px] font-bold text-[#B45309] bg-[#FFB719]/15 px-2.5 py-0.5 rounded-full border border-[#FFB719]/30">
                    {project.highlightTag}
                  </span>
                )}
              </div>

              <h2
                id="modal-project-title"
                className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight leading-snug text-[#182A52] truncate"
              >
                {project.title}
              </h2>

              <div className="flex flex-wrap items-center gap-2.5 mt-2">
                <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200">
                  <div className="flex items-center text-[#FFB719]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#FFB719] text-[#FFB719]" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#182A52] ml-1">5.0 Star Rating</span>
                </div>
                <span className="text-[11px] text-[#2587C4] font-bold bg-[#2587C4]/10 px-2.5 py-0.5 rounded-full border border-[#2587C4]/20 inline-flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#FFB719]" />
                  <span>Delivered by Attia Awais • GuestNexa</span>
                </span>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 sm:p-2.5 rounded-full bg-[#081535] text-slate-300 hover:text-white hover:bg-[#D4AF37]/20 border border-[#D4AF37]/40 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF37] shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 space-y-6">
          {/* Key Campaign Metrics Strip */}
          {project.keyMetrics && project.keyMetrics.length > 0 && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {project.keyMetrics.map((metric, mIdx) => (
                <div
                  key={mIdx}
                  className="rounded-xl p-3 bg-gradient-to-b from-[#0B1E48]/80 to-[#05112B]/90 border border-[#D4AF37]/35 flex flex-col justify-between shadow-sm"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-300">
                    {metric.label}
                  </span>
                  <span className="text-xs sm:text-sm font-black text-white mt-1 metallic-gold-text">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Core Feature Section: WHAT I DID FOR THIS BRAND (Audio 2 User Requirement) */}
          <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-b from-[#08173B]/90 to-[#040E24]/90 border-2 border-[#D4AF37]/40 shadow-inner">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
              </span>
              <span className="text-[11px] font-mono font-bold metallic-gold-text uppercase tracking-widest">
                Scope of Work &amp; Execution
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-white mb-4">
              What I Did For This Brand (Services &amp; Deliverables)
            </h3>

            {/* 4 Pillars Grid: Ad Campaigns, Page Management, Creative Design, Client Results */}
            {project.workDetails ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Ad Campaigns Run */}
                <div className="rounded-xl p-4 bg-[#03091B]/90 border border-[#D4AF37]/35 hover:border-[#F3CF7A] transition-all flex flex-col justify-between group shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[#38BDF8]">
                          <Target className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#38BDF8]">
                          Paid Advertising
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20">
                        Meta &amp; Paid Ads
                      </span>
                    </div>

                    <h4 className="text-sm font-black text-white group-hover:text-[#F3CF7A] transition-colors mb-1.5">
                      {project.workDetails.adCampaigns.title}
                    </h4>
                    <p className="text-xs text-slate-200 leading-relaxed mb-3">
                      {project.workDetails.adCampaigns.description}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-2.5 border-t border-white/5">
                    {project.workDetails.adCampaigns.highlights.map((hl, hlIdx) => (
                      <li key={hlIdx} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Facebook Page & Social Management */}
                <div className="rounded-xl p-4 bg-[#03091B]/90 border border-[#D4AF37]/35 hover:border-[#F3CF7A] transition-all flex flex-col justify-between group shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-[#1877F2]/15 border border-[#1877F2]/30 text-[#1877F2]">
                          <Share2 className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#1877F2]">
                          Page Management
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1877F2]/10 text-white border border-[#1877F2]/20">
                        Daily Growth
                      </span>
                    </div>

                    <h4 className="text-sm font-black text-white group-hover:text-[#F3CF7A] transition-colors mb-1.5">
                      {project.workDetails.pageManagement.title}
                    </h4>
                    <p className="text-xs text-slate-200 leading-relaxed mb-3">
                      {project.workDetails.pageManagement.description}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-2.5 border-t border-white/5">
                    {project.workDetails.pageManagement.highlights.map((hl, hlIdx) => (
                      <li key={hlIdx} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Posts & Creatives Designed */}
                <div className="rounded-xl p-4 bg-[#03091B]/90 border border-[#D4AF37]/35 hover:border-[#F3CF7A] transition-all flex flex-col justify-between group shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-[#F3CF7A]/15 border border-[#F3CF7A]/30 text-[#F3CF7A]">
                          <Palette className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#F3CF7A]">
                          Creative Design
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F3CF7A]/10 text-[#F3CF7A] border border-[#F3CF7A]/20">
                        Posts &amp; Reels
                      </span>
                    </div>

                    <h4 className="text-sm font-black text-white group-hover:text-[#F3CF7A] transition-colors mb-1.5">
                      {project.workDetails.creativeDesign.title}
                    </h4>
                    <p className="text-xs text-slate-200 leading-relaxed mb-3">
                      {project.workDetails.creativeDesign.description}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-2.5 border-t border-white/5">
                    {project.workDetails.creativeDesign.highlights.map((hl, hlIdx) => (
                      <li key={hlIdx} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Clients Brought & Measurable Results */}
                <div className="rounded-xl p-4 bg-[#03091B]/90 border border-[#D4AF37]/35 hover:border-[#F3CF7A] transition-all flex flex-col justify-between group shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366]">
                          <Users className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#25D366]">
                          Client Results
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20">
                        Leads &amp; Growth
                      </span>
                    </div>

                    <h4 className="text-sm font-black text-white group-hover:text-[#F3CF7A] transition-colors mb-1.5">
                      {project.workDetails.clientResults.title}
                    </h4>
                    <p className="text-xs text-slate-200 leading-relaxed mb-3">
                      {project.workDetails.clientResults.description}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-2.5 border-t border-white/5">
                    {project.workDetails.clientResults.highlights.map((hl, hlIdx) => (
                      <li key={hlIdx} className="flex items-start gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              // Fallback if workDetails isn't present
              <p className="text-sm text-slate-200 leading-relaxed bg-[#03091B] p-4 rounded-xl border border-white/5">
                {project.description}
              </p>
            )}
          </div>

          {/* Overall Project Scope & Connected Channels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Services & Role Tags */}
            <div className="rounded-xl p-4 bg-[#050D24]/80 border border-[#D4AF37]/30">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#D4AF37]" />
                <span>Managed Capabilities</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.services.map((srv, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-[#08173B] text-[11px] font-semibold text-slate-200 border border-[#D4AF37]/25"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            {/* Connected Platforms */}
            <div className="rounded-xl p-4 bg-[#050D24]/80 border border-[#D4AF37]/30">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
                <Tag className="w-4 h-4 text-[#D4AF37]" />
                <span>Connected Channels &amp; Platforms</span>
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                {project.platforms.map((plat, idx) => {
                  const iconName = plat.toLowerCase().includes("meta")
                    ? "meta"
                    : plat.toLowerCase().includes("instagram")
                    ? "instagram"
                    : plat.toLowerCase().includes("whatsapp")
                    ? "whatsapp"
                    : plat.toLowerCase().includes("shopify")
                    ? "shopify"
                    : "facebook";

                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08173B] border border-[#D4AF37]/30 text-xs font-semibold text-slate-200"
                    >
                      <BrandIcon name={iconName} size={14} />
                      <span>{plat}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real Brand Notice */}
          <div className="text-[11px] text-slate-300 bg-[#03091A] p-3 rounded-xl border border-white/5 flex items-center justify-between gap-3">
            <div>
              <span className="metallic-gold-text font-bold">Client Verification:</span> Verified SEO &amp; backlink campaign delivered by Attia Awais (GuestNexa).
            </div>
            <div className="text-right text-[10px] text-slate-400 hidden sm:block">
              Portfolio Reference #{project.number}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="relative z-10 px-5 sm:px-8 py-4 border-t border-[#D4AF37]/25 bg-[#050D24]/95 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-colors cursor-pointer text-center"
          >
            Close Preview
          </button>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2.5">
            {/* Direct WhatsApp Consultation CTA for this niche */}
            <a
              href={whatsappConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Discuss campaign like ${project.title} on WhatsApp`}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(37,211,102,0.35)] cursor-pointer"
            >
              <BrandIcon name="whatsapp" size={15} mode="monochrome" className="text-white fill-white shrink-0" />
              <span>Discuss Similar Campaign</span>
            </a>

            {/* Visit Verified Facebook Page */}
            <a
              href={project.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} on Facebook`}
              className="w-full sm:w-auto metallic-gold-button px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 group cursor-pointer"
            >
              <BrandIcon name="facebook" size={15} mode="monochrome" className="text-[#050D24] fill-[#050D24] shrink-0" />
              <span>Visit Facebook Page</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#050D24]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
