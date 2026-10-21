import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Link2,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Award,
  Zap,
  Globe,
  MessageSquare,
  HelpCircle
} from "lucide-react";
import { OWNER_INFO, EXTENDED_SERVICE_DETAILS, SEO_PACKAGES } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "SEO Services & Packages | Guest Posting & Link Building | GuestNexa",
  description:
    "Explore GuestNexa's high-authority Guest Posting, strategic Link Building, and comprehensive Off-Page SEO services. Vetted DA 50-85+ publisher placements with permanent dofollow backlinks.",
  keywords: [
    "Guest Posting Services",
    "Link Building Services",
    "Off-Page SEO Expert",
    "High DA Backlinks",
    "Dofollow Guest Posts",
    "GuestNexa Services",
    "Attia Awais SEO"
  ]
};

export default function ServicesPage() {
  const gp = EXTENDED_SERVICE_DETAILS["guest-posting"];
  const lb = EXTENDED_SERVICE_DETAILS["link-building"];
  const op = EXTENDED_SERVICE_DETAILS["off-page-seo"];

  return (
    <div className="w-full relative min-h-screen pt-28 sm:pt-32 pb-20">
      {/* Hero Header */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-16 sm:mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB719] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2587C4]"></span>
            </span>
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[#182A52] uppercase">
              GUESTNEXA SERVICES
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-[#2587C4] font-bold tracking-wider uppercase">
              Off-Page SEO Excellence
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#182A52] tracking-tight leading-[1.14] mb-5">
            Engineered For{" "}
            <span className="brand-heading-gradient">Google Authority</span> &amp;{" "}
            <span className="brand-yellow-text">Dominant Rankings</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We deliver manual blogger outreach, high-DA editorial guest placements, and white-hat link acquisition designed to elevate your website&apos;s search engine trust without algorithmic penalties.
          </p>

          {/* Quick Jump Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#guest-posting"
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-[#2587C4]/15 border border-slate-200 text-[#182A52] text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#2587C4]" />
              <span>01. Guest Posting</span>
            </a>
            <a
              href="#link-building"
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-[#FFB719]/25 border border-slate-200 text-[#182A52] text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Link2 className="w-3.5 h-3.5 text-[#B45309]" />
              <span>02. Link Building</span>
            </a>
            <a
              href="#off-page-seo"
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-[#182A52]/15 border border-slate-200 text-[#182A52] text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <TrendingUp className="w-3.5 h-3.5 text-[#182A52]" />
              <span>03. Off-Page SEO</span>
            </a>
            <a
              href="#pricing"
              className="px-4 py-2 rounded-xl bg-[#2587C4] text-white hover:bg-[#1A6B9E] text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFB719]" />
              <span>View SEO Packages</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 01: GUEST POSTING DEEP DIVE
          =================================================================== */}
      <section
        id="guest-posting"
        className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-20 sm:mb-28 scroll-mt-28"
      >
        <div className="clean-white-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-md">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2587C4]/10 text-[#2587C4] text-xs font-extrabold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>Service Pillar 01</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#182A52]">
                {gp.title}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-[#2587C4]">
                {gp.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/services/guest-posting"
                className="px-5 py-2.5 rounded-xl brand-primary-button text-xs font-bold flex items-center gap-1.5"
              >
                <span>Dedicated Page &amp; Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB719]" />
              </Link>
              <a
                href={`https://wa.me/923126166818?text=${encodeURIComponent(
                  "Hello Attia, I want to inquire about High-Authority Guest Posting packages for my website."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed my-8 max-w-4xl">
            {gp.heroDescription}
          </p>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {gp.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
                  {m.label}
                </span>
                <span className="text-lg sm:text-xl font-black text-[#182A52] mt-1 block">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* 4 Benefits Grid */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-[#182A52] mb-5 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2587C4]" />
              <span>Why GuestNexa Guest Posting Delivers Superior Link Equity</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gp.benefits.map((b, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <h4 className="text-sm font-bold text-[#182A52] flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2587C4] shrink-0" />
                    <span>{b.title}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div>
            <h3 className="text-lg font-bold text-[#182A52] mb-5 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#FFB719]" />
              <span>Step-by-Step Guest Posting Workflow</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {gp.processSteps.map((s, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 relative">
                  <span className="text-2xl font-black text-[#2587C4]/30 block mb-2">
                    {s.step}
                  </span>
                  <h4 className="text-sm font-bold text-[#182A52] mb-1">
                    {s.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 02: LINK BUILDING DEEP DIVE
          =================================================================== */}
      <section
        id="link-building"
        className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-20 sm:mb-28 scroll-mt-28"
      >
        <div className="clean-white-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-md">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB719]/15 text-[#B45309] text-xs font-extrabold uppercase tracking-wider">
                <Link2 className="w-3.5 h-3.5" />
                <span>Service Pillar 02</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#182A52]">
                {lb.title}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-[#B45309]">
                {lb.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/services/link-building"
                className="px-5 py-2.5 rounded-xl brand-primary-button text-xs font-bold flex items-center gap-1.5"
              >
                <span>Dedicated Page &amp; Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB719]" />
              </Link>
              <a
                href={`https://wa.me/923126166818?text=${encodeURIComponent(
                  "Hello Attia, I want to inquire about Strategic Link Building & Niche Edits for my business."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed my-8 max-w-4xl">
            {lb.heroDescription}
          </p>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {lb.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
                  {m.label}
                </span>
                <span className="text-lg sm:text-xl font-black text-[#182A52] mt-1 block">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* 4 Benefits Grid */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-[#182A52] mb-5 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FFB719]" />
              <span>Core Advantages of White-Hat Link Building</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {lb.benefits.map((b, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <h4 className="text-sm font-bold text-[#182A52] flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FFB719] shrink-0" />
                    <span>{b.title}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div>
            <h3 className="text-lg font-bold text-[#182A52] mb-5 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#2587C4]" />
              <span>Link Acquisition Process</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {lb.processSteps.map((s, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 relative">
                  <span className="text-2xl font-black text-[#FFB719]/40 block mb-2">
                    {s.step}
                  </span>
                  <h4 className="text-sm font-bold text-[#182A52] mb-1">
                    {s.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SECTION 03: OFF-PAGE SEO DEEP DIVE
          =================================================================== */}
      <section
        id="off-page-seo"
        className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-20 sm:mb-28 scroll-mt-28"
      >
        <div className="clean-white-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-md">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182A52]/10 text-[#182A52] text-xs font-extrabold uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Service Pillar 03</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#182A52]">
                {op.title}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-[#182A52]">
                {op.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/services/off-page-seo"
                className="px-5 py-2.5 rounded-xl brand-primary-button text-xs font-bold flex items-center gap-1.5"
              >
                <span>Dedicated Page &amp; Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB719]" />
              </Link>
              <a
                href={`https://wa.me/923126166818?text=${encodeURIComponent(
                  "Hello Attia, I want to inquire about Comprehensive Off-Page SEO & Backlink Audits."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed my-8 max-w-4xl">
            {op.heroDescription}
          </p>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {op.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
                  {m.label}
                </span>
                <span className="text-lg sm:text-xl font-black text-[#182A52] mt-1 block">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* 4 Benefits Grid */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-[#182A52] mb-5 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2587C4]" />
              <span>Full-Spectrum Off-Page Protection &amp; Equity Flow</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {op.benefits.map((b, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <h4 className="text-sm font-bold text-[#182A52] flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2587C4] shrink-0" />
                    <span>{b.title}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div>
            <h3 className="text-lg font-bold text-[#182A52] mb-5 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#182A52]" />
              <span>Diagnostic &amp; Growth Roadmap</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {op.processSteps.map((s, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 relative">
                  <span className="text-2xl font-black text-[#182A52]/30 block mb-2">
                    {s.step}
                  </span>
                  <h4 className="text-sm font-bold text-[#182A52] mb-1">
                    {s.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SEO PRICING & PACKAGES TABLE
          =================================================================== */}
      <section id="pricing" className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-20 sm:mb-28 scroll-mt-28">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB719]/15 text-[#B45309] text-xs font-extrabold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#182A52]">
            Curated SEO &amp; Outreach Packages
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            No hidden markups. 100% verified live URLs, permanent dofollow links, and guaranteed indexation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {SEO_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`clean-white-card rounded-3xl p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? "border-[#2587C4] shadow-xl ring-2 ring-[#2587C4]/20"
                  : "border-slate-200 shadow-md"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#2587C4] text-white text-xs font-black uppercase tracking-wider shadow-sm">
                  {pkg.badge}
                </span>
              )}

              <div>
                {!pkg.popular && (
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    {pkg.badge}
                  </span>
                )}
                <h3 className="text-2xl font-black text-[#182A52] mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-4xl sm:text-5xl font-black text-[#182A52]">
                    {pkg.price}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    / {pkg.period}
                  </span>
                </div>

                <div className="space-y-2.5 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-[#2587C4] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={`https://wa.me/923126166818?text=${encodeURIComponent(pkg.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm ${
                    pkg.popular
                      ? "brand-primary-button text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-[#182A52] border border-slate-200"
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{pkg.ctaText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================================================================
          FREQUENTLY ASKED QUESTIONS
          =================================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-16">
        <div className="clean-white-card rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-2 text-[#2587C4]">
            <HelpCircle className="w-5 h-5" />
            <span className="text-xs font-extrabold uppercase tracking-widest">
              Common Questions
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#182A52] mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 divide-y divide-slate-100">
            <div className="pt-4 first:pt-0">
              <h3 className="text-base font-bold text-[#182A52] mb-1">
                Are backlinks 100% permanent and dofollow?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Yes. Every guest article or niche edit acquired through GuestNexa carries a permanent, dofollow contextual hyperlink that passes full PageRank and link equity. We offer a 1-year replacement warranty on all placements.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-base font-bold text-[#182A52] mb-1">
                Do you use PBNs or link farms?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Strictly no. We only work with genuine, active websites that receive verifiable organic traffic from Google (verified via Ahrefs and Semrush) and maintain clean spam scores (&lt; 1%).
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-base font-bold text-[#182A52] mb-1">
                How fast will links be indexed in Google?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Because we publish only on active, crawled authority domains, over 90% of our placements index naturally in Google within 3 to 7 business days. We monitor every link until full indexing is verified.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-base font-bold text-[#182A52] mb-1">
                Do you provide white-label fulfillment for SEO agencies?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Yes. Many full-service agencies in the US, UK, and UAE outsource their backlink execution to GuestNexa. We provide unbranded client-ready Google Sheets and transparent turnaround times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#182A52] text-white shadow-xl max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black mb-3">
            Ready to Accelerate Your Search Engine Rankings?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Get in touch with Attia Awais directly on WhatsApp for custom publisher lists, niche recommendations, and bulk outreach discounts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/923126166818?text=Hello%20Attia,%20I%20am%20ready%20to%20start%20an%20SEO%20link%20building%20campaign."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:bg-[#20bd5a] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat with Attia on WhatsApp</span>
            </a>
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
            >
              <span>Submit Website Inquiry</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
