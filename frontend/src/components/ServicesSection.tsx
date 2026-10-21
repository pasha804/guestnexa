"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, FileText, Link2, TrendingUp, Sparkles, MessageSquare } from "lucide-react";
import { OWNER_INFO, SERVICES_LIST } from "../data/portfolioData";
import { ScrollReveal } from "./ScrollReveal";
import { ServiceDetailModal, ServiceDetailData } from "./ServiceDetailModal";

const DETAILED_SERVICES_DATA: ServiceDetailData[] = [
  {
    id: "guest-posting",
    pillarBadge: "TOP-TIER OUTREACH",
    metricBadge: "DA 50 — 85+",
    metricColor: "#2587C4",
    categoryTag: "EDITORIAL PLACEMENTS",
    title: "High-Authority Guest Posting",
    subtitle: "Real Organic Traffic Websites & Contextual Dofollow Links",
    shortDescription:
      "100% manual blogger outreach on real, high-traffic authoritative websites with natural editorial dofollow backlinks and targeted niche relevance.",
    imageSrc: "/images/og-logo.png",
    brandIcon: "google",
    featureTags: ["Zero PBNs", "High DA 50-85+", "Indexed in Google", "Permanent Dofollow"],
    fullOverview:
      "At GuestNexa, our guest posting service connects your brand with genuine, authoritative websites that already command Google's trust and thousands of organic search visitors. We strictly avoid private blog networks (PBNs), link farms, and automated directory spam. Every article is written by professional copywriters, reviewed for editorial excellence, and published with permanent, indexed dofollow backlinks pointing to your target URLs.",
    businessGrowthImpact: {
      heading: "How Our Guest Posting Directly Scales Search Rankings:",
      points: [
        "Transfers real link equity (PageRank) from authoritative domains to elevate your Moz DA and Ahrefs DR.",
        "Drives referral traffic from active, engaged readers in your specific market vertical.",
        "Safeguards your site against Google core algorithm updates with 100% white-hat editorial outreach.",
        "Accelerates the ranking velocity of your primary money pages and competitive keyword targets."
      ]
    },
    deliverablesList: [
      "Manual outreach on vetted websites with real organic traffic",
      "High Domain Authority (DA 50+ to 85+) platform options",
      "500-1000+ words well-researched, native contextual content included",
      "Permanent dofollow backlink with custom natural anchor text",
      "Google indexing guarantee with active live link monitoring",
      "Transparent spreadsheet report with live URLs, DA, and traffic stats"
    ],
    toolsStack: [
      { name: "google", label: "Google Search" },
      { name: "meta", label: "Ahrefs DR" },
      { name: "google-ads", label: "Moz DA" }
    ],
    whatsappMessage:
      "Hello Attia Awais, I saw GuestNexa (www.Guestnexa.com).\n\nI am interested in your service:\n📌 *High-Authority Guest Posting*\n\nPlease share your publisher lists, niche options, and pricing packages."
  },
  {
    id: "link-building",
    pillarBadge: "AUTHORITY SCALING",
    metricBadge: "TOPICAL RELEVANCE",
    metricColor: "#FFB719",
    categoryTag: "LINK ACQUISITION",
    title: "Strategic Link Building & Niche Edits",
    subtitle: "Contextual In-Content Link Inclusions on Established Pages",
    shortDescription:
      "White-hat backlink acquisition campaigns engineered to expand your referring domain portfolio, diversify anchor text, and surpass competitors.",
    imageSrc: "/images/og-logo.png",
    brandIcon: "google",
    featureTags: ["Niche Edits", "Competitor Replication", "Anchor Diversity", "Topical Trust"],
    fullOverview:
      "Acquire contextual links placed directly within aged, high-ranking articles that Google already loves. Our strategic link building services combine niche edits (curated links) on indexed, authority URLs with broken link outreach and competitor gap replication. This delivers immediate authority flow to your website without the longer turnaround times of new article publishing.",
    businessGrowthImpact: {
      heading: "Why Strategic Link Building Outperforms Generic Tactics:",
      points: [
        "Leverages pre-existing page authority and age for faster ranking reactions in search results.",
        "Replicates high-value backlinks that your top-ranking competitors are using to dominate page 1.",
        "Maintains a natural anchor text ratio (branded, exact match, partial, and URL) to avoid penalties.",
        "Scales steadily month over month to establish unmistakable topical authority in your industry."
      ]
    },
    deliverablesList: [
      "Competitor backlink gap analysis identifying quick-win targets",
      "Contextual in-content placement inside established, indexed URLs",
      "Strict niche relevance matching your exact sector and audience",
      "Spam score screening (SS < 1% guaranteed on all placements)",
      "Ongoing link status and indexing verification",
      "Dedicated weekly updates and complete transparency"
    ],
    toolsStack: [
      { name: "google", label: "Google Search Console" },
      { name: "meta", label: "Ahrefs" },
      { name: "google-ads", label: "Semrush" }
    ],
    whatsappMessage:
      "Hello Attia Awais, I saw GuestNexa (www.Guestnexa.com).\n\nI am interested in your service:\n📌 *Strategic Link Building & Niche Edits*\n\nPlease share your strategy, niche availability, and packages."
  },
  {
    id: "off-page-seo",
    pillarBadge: "FULL-SPECTRUM DOMINANCE",
    metricBadge: "TOTAL AUTHORITY",
    metricColor: "#182A52",
    categoryTag: "OFF-PAGE SUITE",
    title: "Comprehensive Off-Page SEO Solutions",
    subtitle: "Backlink Auditing, Toxic Disavow & Entity Authority Growth",
    shortDescription:
      "Full-spectrum off-page optimization to solidify your website's authority signals, audit backlink health, and outrank competitive search rivals.",
    imageSrc: "/images/og-logo.png",
    brandIcon: "google",
    featureTags: ["Toxic Link Disavow", "Brand Entity Citations", "Rank Velocity", "Penalty Recovery"],
    fullOverview:
      "A complete off-page strategy encompasses everything beyond on-page SEO: the health of your existing backlink profile, brand entity signals, digital PR mentions, and authority flow. We conduct rigorous backlink audits to identify toxic or algorithmic-suppressing links, file precision Google Search Console disavows, and orchestrate tiered link equity campaigns to propel your site to page 1 rankings.",
    businessGrowthImpact: {
      heading: "How Comprehensive Off-Page SEO Protects & Elevates Your Brand:",
      points: [
        "Neutralizes algorithmic penalties caused by negative SEO attacks or historical spam links.",
        "Strengthens brand entity co-occurrence in Google's Knowledge Graph across trusted directories.",
        "Optimizes link velocity so backlink acquisition appears entirely organic and sustainable.",
        "Delivers comprehensive monthly analytics demonstrating direct DR, DA, and keyword rank gains."
      ]
    },
    deliverablesList: [
      "Deep backlink audit identifying toxic, spammy, or broken inbound links",
      "Custom Google Search Console disavow file preparation & submission",
      "Anchor text distribution audit and natural balance realignment",
      "High-authority brand entity citations and digital PR outreach",
      "Monthly keyword ranking velocity and organic impression reports",
      "Direct strategic consultation with Attia Awais on WhatsApp"
    ],
    toolsStack: [
      { name: "google", label: "Google Search Console" },
      { name: "meta", label: "Ahrefs Webmaster Tools" },
      { name: "google-ads", label: "Moz Pro" }
    ],
    whatsappMessage:
      "Hello Attia Awais, I saw GuestNexa (www.Guestnexa.com).\n\nI am interested in your service:\n📌 *Comprehensive Off-Page SEO Solutions*\n\nPlease share details for a backlink audit and monthly SEO management."
  }
];

export const ServicesSection: React.FC = () => {
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const selectedService = DETAILED_SERVICES_DATA.find((s) => s.id === activeModalId) || null;

  return (
    <section
      id="services"
      aria-label="GuestNexa SEO Services"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden w-full bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Section Header */}
        <ScrollReveal delay={0} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-3.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB719] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2587C4]"></span>
            </span>
            <span className="text-xs sm:text-sm font-black tracking-[0.2em] text-[#182A52] uppercase">
              OUR CORE SERVICES
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-[#2587C4] font-bold tracking-wider uppercase">
              Proven Search Authority
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-[#182A52] tracking-tight leading-tight">
            High-Impact SEO Services That{" "}
            <span className="brand-heading-gradient">
              Build Lasting Google Authority
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            GuestNexa specializes exclusively in off-page search engine growth: manual guest posting, strategic link building, and comprehensive backlink authority.
          </p>
        </ScrollReveal>

        {/* 3 Core Services Grid: Clean, Elegant, Unmessy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {DETAILED_SERVICES_DATA.map((service, index) => {
            const isGuestPosting = service.id === "guest-posting";
            const isLinkBuilding = service.id === "link-building";
            const isOffPage = service.id === "off-page-seo";

            return (
              <ScrollReveal
                key={service.id}
                delay={index * 80}
                className="flex flex-col h-full"
              >
                <div className="clean-white-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between h-full border border-slate-200 bg-white hover:border-[#2587C4] transition-all duration-300 relative group">
                  {/* Top Badges */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm"
                        style={{ backgroundColor: service.metricColor }}
                      >
                        {isGuestPosting && <FileText className="w-6 h-6" />}
                        {isLinkBuilding && <Link2 className="w-6 h-6" />}
                        {isOffPage && <TrendingUp className="w-6 h-6" />}
                      </div>

                      <span
                        className="px-3 py-1 rounded-full text-xs font-extrabold tracking-wide uppercase border"
                        style={{
                          backgroundColor: `${service.metricColor}15`,
                          borderColor: `${service.metricColor}40`,
                          color: service.metricColor === "#FFB719" ? "#B45309" : service.metricColor
                        }}
                      >
                        {service.metricBadge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#182A52] mb-1 group-hover:text-[#2587C4] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#2587C4] mb-3">
                      {service.subtitle}
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {service.shortDescription}
                    </p>

                    {/* Key Checklist Points */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      {service.deliverablesList.slice(0, 4).map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle className="w-4 h-4 text-[#2587C4] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                    <button
                      type="button"
                      onClick={() => setActiveModalId(service.id)}
                      className="w-full py-2.5 px-4 rounded-xl brand-outline-button text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>View Full Service Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#2587C4]" />
                    </button>

                    <a
                      href={`https://wa.me/923126166818?text=${encodeURIComponent(service.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Order On WhatsApp</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Dedicated Services Page Banner */}
        <ScrollReveal delay={240} className="mt-12 sm:mt-16 w-full">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#182A52] via-[#1c356b] to-[#2587C4] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFB719] text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Custom Outreach Packages &amp; White-Label Plans</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                Need a Tailored Link Building Campaign or High-Volume Agency Order?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
                Explore our full services catalog, transparent SEO packages ($299 / $599 / $1,199), and publisher criteria on our dedicated services page.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/services"
                className="px-6 py-3 rounded-full bg-white text-[#182A52] hover:bg-slate-100 font-extrabold text-sm flex items-center gap-1.5 shadow-md transition-all"
              >
                <span>View All Services &amp; Pricing</span>
                <ArrowUpRight className="w-4 h-4 text-[#2587C4]" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          isOpen={!!selectedService}
          onClose={() => setActiveModalId(null)}
        />
      )}
    </section>
  );
};
