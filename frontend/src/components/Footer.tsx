"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Mail, Phone, MapPin, Globe } from "lucide-react";
import { OWNER_INFO } from "../data/portfolioData";
import { BrandIcon } from "./BrandIcon";
import { ScrollReveal } from "./ScrollReveal";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "Facebook", href: OWNER_INFO.socials.facebook, icon: "facebook" as const },
    { name: "Instagram", href: OWNER_INFO.socials.instagram, icon: "instagram" as const },
    { name: "LinkedIn", href: OWNER_INFO.socials.linkedin, icon: "linkedin" as const },
    { name: "YouTube", href: OWNER_INFO.socials.youtube, icon: "youtube" as const },
    { name: "WhatsApp", href: OWNER_INFO.socials.whatsapp, icon: "whatsapp" as const }
  ];

  return (
    <footer className="relative bg-[#182A52] text-white pt-16 pb-12 overflow-hidden w-full border-t border-slate-700/50">
      <ScrollReveal delay={0} className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Left: GuestNexa Official Brand */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-13 h-13 rounded-full overflow-hidden border-2 border-[#2587C4] shadow-sm bg-white p-1">
                <Image
                  src="/images/logo/guestnexa-logo.png"
                  alt="GuestNexa Logo"
                  fill
                  sizes="52px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-black text-xl tracking-wider block text-white">
                  GUESTNEXA
                </span>
                <span className="text-xs text-[#FFB719] tracking-widest uppercase font-bold">
                  Off-Page SEO &amp; Link Building Agency
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              We help businesses improve their online visibility, build high-quality backlinks, increase website authority, and achieve better search engine rankings.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Globe className="w-3.5 h-3.5 text-[#2587C4]" />
              <span className="text-white font-medium">{OWNER_INFO.domain}</span>
            </div>
          </div>

          {/* Center: Attia Awais Identity with circular portrait */}
          <div className="md:col-span-4 flex flex-col items-start md:items-center text-left md:text-center space-y-3">
            <div className="relative w-16 h-16 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#2587C4] to-[#FFB719] shadow-md">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
                <Image
                  src="/images/profile/attia-portrait.png"
                  alt="Attia Awais — Founder of GuestNexa"
                  fill
                  sizes="64px"
                  className="object-cover object-[50%_15%]"
                />
              </div>
            </div>

            <div>
              <h4 className="text-base font-bold text-white tracking-wide">
                Attia Awais
              </h4>
              <p className="text-xs text-[#FFB719] font-bold">
                Founder of GuestNexa • Off Page SEO Expert
              </p>
            </div>

            <p className="text-xs text-slate-300 max-w-xs">
              3+ years experience specializing in manual guest posting, link acquisition, and white-hat search engine authority.
            </p>
          </div>

          {/* Right: Contact & Quick Links */}
          <div className="md:col-span-4 flex flex-col space-y-3 md:items-end">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFB719]">
              Direct Contact
            </h4>

            <div className="space-y-2 text-xs text-slate-300 md:text-right">
              <a
                href={`tel:${OWNER_INFO.phoneClean}`}
                className="flex items-center md:justify-end gap-2 text-slate-200 hover:text-[#FFB719] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#2587C4]" />
                <span>{OWNER_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${OWNER_INFO.email}`}
                className="flex items-center md:justify-end gap-2 text-slate-200 hover:text-[#FFB719] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#2587C4]" />
                <span>{OWNER_INFO.email}</span>
              </a>

              <div className="flex items-center md:justify-end gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#2587C4]" />
                <span>{OWNER_INFO.location}</span>
              </div>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GuestNexa ${s.name}`}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#2587C4] hover:text-white flex items-center justify-center text-slate-200 transition-all shadow-sm"
                >
                  <BrandIcon name={s.icon} size={15} mode="authentic" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 GuestNexa (www.Guestnexa.com). All rights reserved. Founded by Attia Awais.</p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#FFB719] transition-colors cursor-pointer font-bold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
};
