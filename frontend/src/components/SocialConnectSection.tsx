"use client";

import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { BrandIcon } from "./BrandIcon";
import { OWNER_INFO } from "../data/portfolioData";

export const SocialConnectSection: React.FC = () => {
  const socialChannels = [
    {
      name: "Facebook Page",
      handle: "@attiaawaisseo",
      url: OWNER_INFO.socials.facebook,
      icon: "facebook" as const,
      desc: "Official GuestNexa agency updates & SEO tips"
    },
    {
      name: "Facebook Profile",
      handle: "seoattiaawais",
      url: OWNER_INFO.socials.facebookPersonal,
      icon: "facebook" as const,
      desc: "Personal insights from Founder Attia Awais"
    },
    {
      name: "Instagram",
      handle: "@attiaawaisseo",
      url: OWNER_INFO.socials.instagram,
      icon: "instagram" as const,
      desc: "SEO reels, ranking case studies & outreach wins"
    },
    {
      name: "LinkedIn",
      handle: "Attia Bibi (Awais)",
      url: OWNER_INFO.socials.linkedin,
      icon: "linkedin" as const,
      desc: "Outreach & Link Building Specialist network"
    },
    {
      name: "WhatsApp Channel",
      handle: "GuestNexa Community",
      url: OWNER_INFO.socials.whatsappChannel,
      icon: "whatsapp" as const,
      desc: "Daily high-DA site lists and backlink opportunities"
    },
    {
      name: "YouTube",
      handle: "@AttiaWrites",
      url: OWNER_INFO.socials.youtube,
      icon: "youtube" as const,
      desc: "In-depth Off-Page SEO tutorials & outreach guides"
    },
    {
      name: "Direct WhatsApp",
      handle: OWNER_INFO.phone,
      url: OWNER_INFO.socials.whatsapp,
      icon: "whatsapp" as const,
      desc: "Direct 1-on-1 instant inquiry and live support"
    },
    {
      name: "Official Email",
      handle: OWNER_INFO.email,
      url: OWNER_INFO.socials.email,
      icon: "email" as const,
      desc: "Formal enterprise RFPs & guest post inventory"
    }
  ];

  return (
    <section
      id="social"
      aria-label="Social Media Connections"
      className="py-24 relative overflow-hidden w-full bg-slate-50/50"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#182A52]/5 border border-[#182A52]/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FFB719] animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest text-[#182A52]">
              OFFICIAL CHANNELS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#182A52] tracking-tight">
            Connect With GuestNexa &amp;{" "}
            <span className="bg-gradient-to-r from-[#2587C4] to-[#182A52] bg-clip-text text-transparent">
              Attia Awais
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Follow our verified social channels for daily outreach insights, new high-DA guest posting opportunities, and direct collaboration.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {socialChannels.map((ch) => (
            <a
              key={ch.name}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open GuestNexa on ${ch.name}`}
              className="rounded-3xl p-6 bg-white border border-slate-200/80 hover:border-[#2587C4] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-sm cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 group-hover:bg-[#2587C4]/10 border border-slate-200 group-hover:border-[#2587C4]/30 group-hover:scale-110 transition-all duration-300 flex items-center justify-center p-2.5">
                    <BrandIcon name={ch.icon} size={22} mode="authentic" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#2587C4] transition-colors" />
                </div>

                <h3 className="text-base font-bold text-[#182A52] group-hover:text-[#2587C4] transition-colors">
                  {ch.name}
                </h3>
                <p className="text-xs font-semibold text-[#FFB719] mt-0.5 truncate">
                  {ch.handle}
                </p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {ch.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600 group-hover:text-[#182A52]">
                <span>Connect Now</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#2587C4] transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
