"use client";

import React from "react";
import { OWNER_INFO } from "../data/portfolioData";
import { Globe, Sparkles, CheckCircle, Award, ShieldCheck, TrendingUp } from "lucide-react";
import { CountryFlag } from "./CountryFlag";
import { ScrollReveal } from "./ScrollReveal";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Attia Awais and GuestNexa"
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden w-full bg-slate-50/70"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Section Header */}
        <ScrollReveal delay={0} className="max-w-3xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-3.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB719] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2587C4]"></span>
            </span>
            <span className="text-xs sm:text-sm font-black tracking-[0.2em] text-[#182A52] uppercase">
              ABOUT
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-[#2587C4] font-bold tracking-wider uppercase">
              The Strategic Mind Behind GuestNexa
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#182A52] tracking-tight leading-[1.18] mb-3">
            Search Authority, Real Outreach &amp; Organic Rankings —{" "}
            <span className="brand-heading-gradient">
              Engineered For Modern Brands.
            </span>
          </h2>
        </ScrollReveal>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Narrative Story */}
          <ScrollReveal delay={100} className="lg:col-span-7 space-y-4 sm:space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm">
              <p>
                I am <strong className="text-[#182A52] font-bold">Attia Awais</strong>, Founder of{" "}
                <strong className="text-[#2587C4] font-bold">GuestNexa</strong>, an SEO agency specializing in{" "}
                <strong className="text-[#182A52] font-semibold">Guest Posting, Link Building, and Off-Page SEO services</strong>.
                We help businesses improve their online visibility, build high-quality backlinks, increase website authority, and achieve better search engine rankings.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 space-y-3.5 shadow-sm">
              <p>
                With over <strong className="text-[#182A52] font-bold">3+ years of focused experience</strong> in the off-page SEO field,
                I have developed direct relationships with editorial desks and webmasters across{" "}
                <strong className="text-[#2587C4] font-bold">850+ real, high-traffic websites</strong> globally.
              </p>

              <p className="text-slate-600 text-base">
                Unlike automated link schemes or private blog networks (PBNs), GuestNexa guarantees 100% manual, white-hat outreach. Every guest post is contextually relevant, written to editorial standards, and carries a permanent dofollow backlink that delivers lasting link equity.
              </p>

              {/* 3 Value Pillars */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-[#182A52]">
                  <CheckCircle className="w-4 h-4 text-[#2587C4] shrink-0" />
                  <span>Zero PBNs or Link Farms</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#182A52]">
                  <CheckCircle className="w-4 h-4 text-[#FFB719] shrink-0" />
                  <span>DA 50+ to 85+ Authority</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#182A52]">
                  <CheckCircle className="w-4 h-4 text-[#2587C4] shrink-0" />
                  <span>Guaranteed Google Index</span>
                </div>
              </div>
            </div>

            {/* Geographic Markets & Campaign Reach */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#182A52] mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#2587C4]" />
                <span>Global Client Coverage &amp; Outreach Reach</span>
              </h3>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {OWNER_INFO.markets.map((market) => (
                  <div
                    key={market.code}
                    className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-bold hover:border-[#2587C4] hover:shadow-sm transition-all duration-300 group cursor-default"
                  >
                    <div className="transition-transform group-hover:scale-115 shrink-0">
                      <CountryFlag code={market.code as any} name={market.name} size={18} />
                    </div>
                    <span className="group-hover:text-[#182A52] transition-colors">{market.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Key Metrics & Credibility Cards */}
          <ScrollReveal delay={180} className="lg:col-span-5 grid grid-cols-1 gap-4 sm:gap-4.5">
            {/* Stat 1: 3+ Years Specialized Experience */}
            <div className="p-5 sm:p-5.5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 hover:border-[#2587C4] hover:shadow-md transition-all duration-300 group flex items-start gap-4">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#2587C4] to-[#182A52] p-[2px] shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-white">
                <Award className="w-7 h-7 text-[#FFB719]" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#182A52]">
                  3+ Years
                </p>
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2587C4] mt-0.5">
                  Off-Page SEO Specialization
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                  Manual blogger outreach, high-DA publisher vetting, and contextual dofollow link acquisition.
                </p>
              </div>
            </div>

            {/* Stat 2: 850+ Vetted Publishing Portals */}
            <div className="p-5 sm:p-5.5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 hover:border-[#2587C4] hover:shadow-md transition-all duration-300 group flex items-start gap-4">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#FFB719] to-[#2587C4] p-[2px] shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-white">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#182A52]">
                  850+ Sites
                </p>
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#FFB719] mt-0.5">
                  Vetted Publisher Network
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                  Established direct publisher connections in Tech, E-commerce, Real Estate, Health, and B2B.
                </p>
              </div>
            </div>

            {/* Stat 3: Guaranteed Search Authority Growth */}
            <div className="p-5 sm:p-5.5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 hover:border-[#2587C4] hover:shadow-md transition-all duration-300 group flex items-start gap-4">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#182A52] to-[#2587C4] p-[2px] shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-white">
                <TrendingUp className="w-7 h-7 text-[#2587C4]" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#182A52]">
                  +300% Avg.
                </p>
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#2587C4] mt-0.5">
                  Authority &amp; Traffic Velocity
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                  Proven track record of taking websites from low DR to commanding positions in Google Search.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
