"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { BrandIcon } from "./BrandIcon";
import { CountryFlag } from "./CountryFlag";
import { OWNER_INFO } from "../data/portfolioData";
import { ScrollReveal } from "./ScrollReveal";

// Authentic Blue Verified Badge (Exact Meta / Instagram / Twitter rosette with crisp checkmark)
const AuthenticVerifiedBadge: React.FC<{ size?: number; className?: string }> = ({
  size = 22,
  className = ""
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 drop-shadow-[0_0_8px_rgba(37,135,196,0.7)] ${className}`}
    aria-label="Verified Authentic Profile"
  >
    <path
      d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6s-2.95.875-3.6 2.148c-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5s.875 2.95 2.148 3.6c-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238.65 1.273 2.02 2.148 3.6 2.148s2.95-.875 3.6-2.148c.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6z"
      fill="#2587C4"
    />
    <path
      d="M10.2 16.2l-3.5-3.5 1.4-1.4 2.1 2.1 5.3-5.3 1.4 1.4-6.7 6.7z"
      fill="#FFFFFF"
    />
  </svg>
);

type OrbitPlatformConfig = {
  id: string;
  name: "whatsapp" | "meta" | "instagram" | "youtube" | "tiktok" | "google" | "linkedin";
  label: string;
  badgeText: string;
  href: string;
  borderColor: string;
  glowColor: string;
  sizeClass: string;
  iconSize: number;
};

// 10 Evenly-spaced platforms around 360° to eliminate empty gaps
const CONTINUOUS_ORBIT_PLATFORMS: OrbitPlatformConfig[] = [
  {
    id: "wa-1",
    name: "whatsapp",
    label: "WhatsApp",
    badgeText: "Direct WhatsApp Line",
    href: OWNER_INFO.whatsappUrl,
    borderColor: "#25D366",
    glowColor: "rgba(37, 211, 102, 0.9)",
    sizeClass: "w-12 h-12 sm:w-14 sm:h-14",
    iconSize: 26
  },
  {
    id: "meta-1",
    name: "meta",
    label: "Facebook Page",
    badgeText: "Official Facebook Agency Page",
    href: OWNER_INFO.socials.facebook,
    borderColor: "#1877F2",
    glowColor: "rgba(24, 119, 242, 0.85)",
    sizeClass: "w-11 h-11 sm:w-13 sm:h-13",
    iconSize: 22
  },
  {
    id: "ig-1",
    name: "instagram",
    label: "Instagram",
    badgeText: "Instagram SEO Content & Updates",
    href: OWNER_INFO.socials.instagram,
    borderColor: "#E1306C",
    glowColor: "rgba(225, 48, 108, 0.85)",
    sizeClass: "w-11 h-11 sm:w-13 sm:h-13",
    iconSize: 22
  },
  {
    id: "yt-1",
    name: "youtube",
    label: "YouTube",
    badgeText: "YouTube Channel @AttiaWrites",
    href: OWNER_INFO.socials.youtube,
    borderColor: "#FF0000",
    glowColor: "rgba(255, 0, 0, 0.85)",
    sizeClass: "w-11 h-11 sm:w-13 sm:h-13",
    iconSize: 22
  },
  {
    id: "linkedin-1",
    name: "linkedin",
    label: "LinkedIn",
    badgeText: "Attia Bibi - Outreach & Link Building",
    href: OWNER_INFO.socials.linkedin,
    borderColor: "#0A66C2",
    glowColor: "rgba(10, 102, 194, 0.85)",
    sizeClass: "w-11 h-11 sm:w-13 sm:h-13",
    iconSize: 22
  },
  {
    id: "google-1",
    name: "google",
    label: "SEO Services",
    badgeText: "Guest Posting & Link Building",
    href: "#services",
    borderColor: "#2587C4",
    glowColor: "rgba(37, 135, 196, 0.85)",
    sizeClass: "w-11 h-11 sm:w-13 sm:h-13",
    iconSize: 22
  },
  {
    id: "wa-2",
    name: "whatsapp",
    label: "WhatsApp Channel",
    badgeText: "Official WhatsApp Channel Updates",
    href: OWNER_INFO.socials.whatsappChannel,
    borderColor: "#22C55E",
    glowColor: "rgba(34, 197, 94, 0.9)",
    sizeClass: "w-12 h-12 sm:w-14 sm:h-14",
    iconSize: 26
  },
  {
    id: "meta-2",
    name: "meta",
    label: "Facebook ID",
    badgeText: "Attia Awais SEO Profile",
    href: OWNER_INFO.socials.facebookPersonal,
    borderColor: "#182A52",
    glowColor: "rgba(24, 42, 82, 0.85)",
    sizeClass: "w-11 h-11 sm:w-13 sm:h-13",
    iconSize: 22
  },
  {
    id: "ig-2",
    name: "instagram",
    label: "Instagram Growth",
    badgeText: "Follow @attiaawaisseo",
    href: OWNER_INFO.socials.instagram,
    borderColor: "#E1306C",
    glowColor: "rgba(225, 48, 108, 0.85)",
    sizeClass: "w-11 h-11 sm:w-13 sm:h-13",
    iconSize: 22
  },
  {
    id: "linkedin-2",
    name: "linkedin",
    label: "B2B Outreach",
    badgeText: "Link Building Specialist",
    href: OWNER_INFO.socials.linkedin,
    borderColor: "#FFB719",
    glowColor: "rgba(255, 183, 25, 0.85)",
    sizeClass: "w-11 h-11 sm:w-13 sm:h-13",
    iconSize: 22
  }
];

// 10 Energy Light Beads placed midway between each icon (every 36°)
const CONTINUOUS_ORBIT_BEADS = [18, 54, 90, 126, 162, 198, 234, 270, 306, 342];

// Ambient Particles floating around card & orbit
const STARDUST_PARTICLES = [
  { top: "14%", left: "10%", size: "3px", delay: "0s", duration: "3.2s", opacity: 0.8, color: "#2587C4" },
  { top: "22%", left: "22%", size: "2px", delay: "1.2s", duration: "4.1s", opacity: 0.6, color: "#FFB719" },
  { top: "10%", left: "76%", size: "3.5px", delay: "0.5s", duration: "3.8s", opacity: 0.9, color: "#182A52" },
  { top: "26%", left: "84%", size: "2px", delay: "2.1s", duration: "4.5s", opacity: 0.7, color: "#2587C4" },
  { top: "42%", left: "6%", size: "2.5px", delay: "1.7s", duration: "3.5s", opacity: 0.85, color: "#FFB719" },
  { top: "60%", left: "12%", size: "3px", delay: "0.8s", duration: "4.2s", opacity: 0.75, color: "#2587C4" },
  { top: "74%", left: "20%", size: "2px", delay: "2.5s", duration: "3.9s", opacity: 0.65, color: "#FFB719" },
  { top: "86%", left: "16%", size: "3.5px", delay: "1.1s", duration: "4.8s", opacity: 0.9, color: "#182A52" },
  { top: "88%", left: "80%", size: "2.5px", delay: "0.3s", duration: "3.6s", opacity: 0.7, color: "#2587C4" },
  { top: "66%", left: "88%", size: "3px", delay: "1.9s", duration: "4.4s", opacity: 0.8, color: "#FFB719" }
];

const STAT_PLATFORMS = [
  { name: "facebook" as const, label: "Facebook", href: OWNER_INFO.socials.facebook },
  { name: "instagram" as const, label: "Instagram", href: OWNER_INFO.socials.instagram },
  { name: "linkedin" as const, label: "LinkedIn", href: OWNER_INFO.socials.linkedin },
  { name: "youtube" as const, label: "YouTube", href: OWNER_INFO.socials.youtube },
  { name: "google" as const, label: "Google Search", href: "#services" },
  { name: "whatsapp" as const, label: "WhatsApp", href: OWNER_INFO.whatsappUrl }
];

export const HeroSection: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [activeFlagTooltip, setActiveFlagTooltip] = useState<string | null>(null);
  const [activePlatformTooltip, setActivePlatformTooltip] = useState<string | null>(null);

  // Responsive radii: EXACTLY PRESERVED MATH AS REQUESTED
  const [radii, setRadii] = useState({ rx: 275, ry: 74 });
  const angleRef = useRef(0);
  const isHoveredRef = useRef(false);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const beadRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updateRadii = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        setRadii({ rx: 175, ry: 50 });
      } else if (window.innerWidth < 1024) {
        setRadii({ rx: 230, ry: 64 });
      } else {
        setRadii({ rx: 275, ry: 74 });
      }
    };

    updateRadii();
    window.addEventListener("resize", updateRadii);
    return () => window.removeEventListener("resize", updateRadii);
  }, []);

  // Continuous 60fps auto-rotation of all 10 icons and 10 beads (STRICTLY PRESERVED)
  useEffect(() => {
    let animId: number;
    const tiltRad = (-18 * Math.PI) / 180;
    const cosTilt = Math.cos(tiltRad);
    const sinTilt = Math.sin(tiltRad);
    const total = CONTINUOUS_ORBIT_PLATFORMS.length;
    const yShift = -30;

    const updatePositions = () => {
      const baseAngle = angleRef.current;
      const { rx, ry } = radii;

      // 1. Auto-rotate all 10 Platform Icons along the orbit around the picture
      CONTINUOUS_ORBIT_PLATFORMS.forEach((_, index) => {
        const el = iconRefs.current[index];
        if (!el) return;

        const currentDeg = (index * (360 / total) + baseAngle) % 360;
        const rad = (currentDeg * Math.PI) / 180;
        const rawX = rx * Math.cos(rad);
        const rawY = ry * Math.sin(rad);
        const x = rawX * cosTilt - rawY * sinTilt;
        const y = rawX * sinTilt + rawY * cosTilt + yShift;

        const isFront = rawY >= 0;
        const depthFactor = (rawY / ry + 1) / 2;
        const scale = 0.85 + 0.25 * depthFactor;
        const opacity = 0.75 + 0.25 * depthFactor;

        el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
        el.style.zIndex = isFront ? "30" : "6";
        el.style.opacity = `${opacity}`;
      });

      // 2. Auto-rotate all 10 Golden Energy Beads along the orbit
      CONTINUOUS_ORBIT_BEADS.forEach((baseDeg, index) => {
        const el = beadRefs.current[index];
        if (!el) return;

        const currentDeg = (baseDeg + baseAngle) % 360;
        const rad = (currentDeg * Math.PI) / 180;
        const rawX = rx * Math.cos(rad);
        const rawY = ry * Math.sin(rad);
        const x = rawX * cosTilt - rawY * sinTilt;
        const y = rawX * sinTilt + rawY * cosTilt + yShift;
        const isFront = rawY >= 0;
        const depthFactor = (rawY / ry + 1) / 2;

        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        el.style.zIndex = isFront ? "26" : "6";
        el.style.opacity = `${0.35 + 0.65 * depthFactor}`;
      });
    };

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    let isHeroInView = true;
    const heroEl = document.getElementById("hero");
    const observer = new IntersectionObserver(
      ([entry]) => {
        isHeroInView = entry ? entry.isIntersecting : true;
      },
      { threshold: 0.05 }
    );
    if (heroEl) observer.observe(heroEl);

    const animate = () => {
      if (isVisible && isHeroInView) {
        const speed = isHoveredRef.current ? 0.03 : 0.2;
        angleRef.current = (angleRef.current + speed) % 360;
        updatePositions();
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (heroEl) observer.unobserve(heroEl);
    };
  }, [radii]);

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[84vh] lg:min-h-[88vh] flex flex-col justify-center pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-8 sm:pb-12 lg:pb-14 overflow-x-clip w-full scroll-mt-28"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 w-full">
        {/* MAIN HERO GRID: Left Content / Right Portrait Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT COLUMN: Clean Identity, Heading, Client Paragraph, CTAs */}
          <ScrollReveal
            initialVisible={true}
            delay={0}
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* GuestNexa Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB719] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2587C4]"></span>
              </span>
              <span className="text-xs font-extrabold tracking-widest text-[#182A52] uppercase">
                GUESTNEXA
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs text-[#2587C4] font-bold">Off Page SEO Expert • 3+ Years Exp.</span>
            </div>

            {/* Main H1 Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-extrabold tracking-tight text-[#182A52] leading-[1.14] mb-4 sm:mb-5">
              HIGH-AUTHORITY{" "}
              <span className="brand-heading-gradient">
                BACKLINKS
              </span>{" "}
              THAT POWER{" "}
              <span className="brand-yellow-text">
                SEARCH RANKINGS.
              </span>
            </h1>

            {/* Supporting Pitch: EXACT CLIENT SPECIFIED PARAGRAPH */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mb-6 font-normal">
              I am <strong className="text-[#182A52] font-bold">Attia Awais</strong>, Founder of{" "}
              <strong className="text-[#2587C4] font-bold">GuestNexa</strong>, an SEO agency specializing in{" "}
              <strong className="text-[#182A52] font-semibold">Guest Posting, Link Building, and Off-Page SEO services</strong>.
              We help businesses improve their online visibility, build high-quality backlinks, increase website authority, and achieve better search engine rankings.
            </p>

            {/* Prominent CTA Buttons Group */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              {/* Explore Services */}
              <Link
                href="/services"
                className="brand-primary-button px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-extrabold flex items-center justify-center gap-2 shadow-lg group/btn cursor-pointer"
              >
                <span>Explore Services</span>
                <Sparkles className="w-4 h-4 text-[#FFB719]" />
              </Link>

              {/* View Case Studies */}
              <Link
                href="#projects"
                className="brand-outline-button px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-sm sm:text-base font-bold flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <span>View Results</span>
                <ArrowUpRight className="w-4 h-4 text-[#2587C4] transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
              </Link>

              {/* WhatsApp Me */}
              <a
                href={OWNER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Attia Awais"
                className="px-5 py-3.5 sm:px-6 sm:py-4 rounded-full border border-emerald-400 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 hover:border-emerald-500 transition-all text-sm sm:text-base font-bold flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm cursor-pointer"
              >
                <BrandIcon name="whatsapp" size={19} />
                <span>WhatsApp: 03126166818</span>
              </a>
            </div>
          </ScrollReveal>

          {/* RIGHT COLUMN: Portrait INSIDE Horizontal Ring with Synchronized Rotating Ring & Attached Clickable Icons (RING 100% PRESERVED) */}
          <ScrollReveal
            initialVisible={true}
            delay={120}
            className="lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0 select-none"
          >
            {/* Soft Radiant Ambient Backglow */}
            <div className="absolute w-[440px] h-[440px] sm:w-[520px] sm:h-[520px] rounded-full bg-[radial-gradient(circle,rgba(37,135,196,0.18)_0%,rgba(255,183,25,0.12)_45%,transparent_70%)] blur-3xl pointer-events-none -z-10" />

            {/* STAGE CONTAINER: Picture sits inside horizontal ring */}
            <div
              suppressHydrationWarning
              className="relative w-full max-w-[580px] h-[450px] sm:h-[490px] lg:h-[530px] flex items-center justify-center"
            >
              {/* LAYER 1: BACK ARC OF INCLINED ORBIT (z-index: 5, passes BEHIND picture, tilted -18°, lifted up) */}
              <svg
                suppressHydrationWarning
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[520px] pointer-events-none overflow-visible"
                viewBox="0 0 600 500"
                fill="none"
                style={{ zIndex: 5 }}
              >
                <defs>
                  <linearGradient id="backGoldRail" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2587C4" stopOpacity="0.55" />
                    <stop offset="50%" stopColor="#FFB719" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#182A52" stopOpacity="0.65" />
                  </linearGradient>
                </defs>

                {/* Soft ambient bloom halo behind track */}
                <path
                  d={`M ${300 + radii.rx} 220 A ${radii.rx} ${radii.ry} 0 0 0 ${300 - radii.rx} 220`}
                  transform="rotate(-18 300 220)"
                  stroke="#FFB719"
                  strokeWidth="8"
                  strokeOpacity="0.22"
                  className="filter blur-[4px]"
                />

                {/* Solid outer guide rail */}
                <path
                  d={`M ${300 + radii.rx} 220 A ${radii.rx} ${radii.ry} 0 0 0 ${300 - radii.rx} 220`}
                  transform="rotate(-18 300 220)"
                  stroke="url(#backGoldRail)"
                  strokeWidth="2.4"
                  strokeOpacity="0.8"
                  className="filter drop-shadow-[0_0_12px_rgba(37,135,196,0.4)]"
                />
              </svg>

              {/* LAYER 2: AMBIENT STARDUST PARTICLES */}
              <div className="absolute inset-0 pointer-events-none overflow-visible" style={{ zIndex: 10 }}>
                {STARDUST_PARTICLES.map((p, idx) => (
                  <div
                    key={`stardust-${idx}`}
                    className="absolute rounded-full animate-pulse"
                    style={{
                      top: p.top,
                      left: p.left,
                      width: p.size,
                      height: p.size,
                      opacity: p.opacity,
                      backgroundColor: p.color,
                      boxShadow: `0 0 8px ${p.color}`,
                      animationDuration: p.duration,
                      animationDelay: p.delay
                    }}
                  />
                ))}
              </div>

              {/* LAYER 3: CENTRAL PORTRAIT CARD OF ATTIA AWAIS */}
              <div
                className="relative w-[270px] h-[370px] sm:w-[310px] sm:h-[430px] lg:w-[330px] lg:h-[460px] rounded-[32px] p-[2.5px] transition-all duration-500 group/card cursor-pointer"
                style={{
                  transform: "none",
                  zIndex: 15
                }}
              >
                {/* Dynamic backlight shade */}
                <div className="absolute -inset-4 sm:-inset-6 rounded-[44px] bg-[radial-gradient(circle_at_50%_50%,rgba(37,135,196,0.35)_0%,rgba(255,183,25,0.25)_40%,transparent_70%)] blur-2xl opacity-50 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all duration-500 pointer-events-none -z-10" />

                {/* Outer Border Frame */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-[#182A52] via-[#2587C4] to-[#FFB719] shadow-[0_20px_50px_rgba(24,42,82,0.25)] group-hover/card:shadow-[0_25px_65px_rgba(37,135,196,0.45)] transition-all duration-500 pointer-events-none" />

                {/* Inner Card Container */}
                <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-white border border-white/40">
                  {/* Subtle Glint Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/20 pointer-events-none z-10" />

                  {/* ATTIA AWAIS ACTUAL AUTHENTIC PHOTO */}
                  <Image
                    src="/images/profile/attia-portrait.png"
                    alt="Attia Awais — Founder of GuestNexa & Off Page SEO Expert"
                    fill
                    priority
                    sizes="(max-width: 640px) 270px, (max-width: 1024px) 310px, 330px"
                    className="object-cover object-[50%_15%] transition-transform duration-700 group-hover/card:scale-105"
                  />

                  {/* Vignette gradient at bottom for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#182A52]/95 via-[#182A52]/30 to-transparent z-10" />

                  {/* ATTACHED PORTRAIT DETAILS CARD (ATTIA AWAIS + Verified + Off Page SEO Expert + FOUNDER GUESTNEXA) */}
                  <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 p-3 sm:p-3.5 rounded-2xl bg-gradient-to-b from-[#182A52]/95 via-[#132242]/98 to-[#0F1C38] backdrop-blur-xl border border-[#FFB719]/60 shadow-[0_12px_35px_rgba(0,0,0,0.4)] text-center transition-all duration-300 group-hover/card:border-[#FFB719] z-20">
                    {/* Line 1: ATTIA AWAIS + Authentic Blue Verified Badge */}
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg sm:text-2xl font-black tracking-wider text-white uppercase drop-shadow-sm">
                        ATTIA AWAIS
                      </span>
                      <AuthenticVerifiedBadge size={22} />
                    </div>

                    {/* Line 2: Off Page SEO Expert */}
                    <p className="text-[11px] sm:text-xs font-extrabold tracking-[0.16em] text-[#FFB719] uppercase mt-1 drop-shadow-sm">
                      Off Page SEO Expert
                    </p>

                    {/* Line 3: FOUNDER • GUESTNEXA */}
                    <p className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#2587C4] uppercase mt-0.5">
                      FOUNDER • GUESTNEXA
                    </p>
                  </div>
                </div>
              </div>

              {/* LAYER 4: FRONT ARC OF INCLINED ORBIT (z-index: 25, passes IN FRONT of picture, tilted -18°, lifted up) */}
              <svg
                suppressHydrationWarning
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[520px] pointer-events-none overflow-visible"
                viewBox="0 0 600 500"
                fill="none"
                style={{ zIndex: 25 }}
              >
                <defs>
                  <linearGradient id="frontGoldRail" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#182A52" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#2587C4" stopOpacity="1" />
                    <stop offset="100%" stopColor="#FFB719" stopOpacity="0.95" />
                  </linearGradient>
                </defs>

                {/* Soft bloom halo */}
                <path
                  d={`M ${300 - radii.rx} 220 A ${radii.rx} ${radii.ry} 0 0 0 ${300 + radii.rx} 220`}
                  transform="rotate(-18 300 220)"
                  stroke="#2587C4"
                  strokeWidth="9"
                  strokeOpacity="0.25"
                  className="filter blur-[4px]"
                />

                {/* Solid outer rail */}
                <path
                  d={`M ${300 - radii.rx} 220 A ${radii.rx} ${radii.ry} 0 0 0 ${300 + radii.rx} 220`}
                  transform="rotate(-18 300 220)"
                  stroke="url(#frontGoldRail)"
                  strokeWidth="3.2"
                  strokeOpacity="0.95"
                  className="filter drop-shadow-[0_0_15px_rgba(37,135,196,0.6)]"
                />
              </svg>

              {/* LAYER 5: 10 CONTINUOUS AUTO-ROTATING LIGHT BEADS */}
              {CONTINUOUS_ORBIT_BEADS.map((baseDeg, idx) => {
                const rad = (baseDeg * Math.PI) / 180;
                const tiltRad = (-18 * Math.PI) / 180;
                const rawX = radii.rx * Math.cos(rad);
                const rawY = radii.ry * Math.sin(rad);
                const x = Number((rawX * Math.cos(tiltRad) - rawY * Math.sin(tiltRad)).toFixed(2));
                const y = Number((rawX * Math.sin(tiltRad) + rawY * Math.cos(tiltRad) - 30).toFixed(2));
                const isFront = rawY >= 0;

                return (
                  <div
                    key={`bead-${idx}`}
                    suppressHydrationWarning
                    ref={(el) => {
                      beadRefs.current[idx] = el;
                    }}
                    className="absolute top-1/2 left-1/2 pointer-events-none will-change-transform"
                    style={{
                      zIndex: isFront ? 26 : 6,
                      transform: `translate3d(${x}px, ${y}px, 0)`
                    }}
                  >
                    <div className="-translate-x-1/2 -translate-y-1/2 relative flex items-center justify-center">
                      <div className="absolute w-5 h-5 rounded-full bg-[#2587C4]/30 blur-[4px]" />
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFB719] shadow-[0_0_12px_#FFB719] animate-pulse" />
                    </div>
                  </div>
                );
              })}

              {/* LAYER 6: 10 CONTINUOUS AUTO-ROTATING PLATFORM ICONS */}
              {CONTINUOUS_ORBIT_PLATFORMS.map((platform, idx) => {
                const currentDeg = idx * (360 / CONTINUOUS_ORBIT_PLATFORMS.length);
                const rad = (currentDeg * Math.PI) / 180;
                const tiltRad = (-18 * Math.PI) / 180;
                const rawX = radii.rx * Math.cos(rad);
                const rawY = radii.ry * Math.sin(rad);
                const x = Number((rawX * Math.cos(tiltRad) - rawY * Math.sin(tiltRad)).toFixed(2));
                const y = Number((rawX * Math.sin(tiltRad) + rawY * Math.cos(tiltRad) - 30).toFixed(2));
                const isFront = rawY >= 0;

                return (
                  <div
                    key={platform.id}
                    suppressHydrationWarning
                    ref={(el) => {
                      iconRefs.current[idx] = el;
                    }}
                    className="absolute top-1/2 left-1/2 pointer-events-auto will-change-transform group/icon"
                    style={{
                      zIndex: isFront ? 30 : 6,
                      transform: `translate3d(${x}px, ${y}px, 0)`
                    }}
                  >
                    <a
                      href={platform.href}
                      target={platform.href.startsWith("http") ? "_blank" : undefined}
                      rel={platform.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={`Open ${platform.label} (${OWNER_INFO.name})`}
                      className="-translate-x-1/2 -translate-y-1/2 relative flex items-center justify-center cursor-pointer block"
                      onMouseEnter={() => {
                        setActiveTooltip(platform.label);
                        isHoveredRef.current = true;
                      }}
                      onMouseLeave={() => {
                        setActiveTooltip(null);
                        isHoveredRef.current = false;
                      }}
                    >
                      <div
                        className={`relative ${platform.sizeClass} rounded-full bg-white backdrop-blur-md border-[2.2px] group-hover/icon:scale-115 transition-all duration-300 flex items-center justify-center p-2 sm:p-2.5 z-10 shadow-md`}
                        style={{
                          borderColor: platform.borderColor,
                          boxShadow: `0 0 15px ${platform.glowColor}, 0 4px 15px rgba(24,42,82,0.15)`
                        }}
                      >
                        <BrandIcon name={platform.name} size={platform.iconSize} mode="authentic" />
                      </div>

                      {activeTooltip === platform.label && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-xl bg-[#182A52] border border-[#FFB719] text-[11px] font-extrabold text-white whitespace-nowrap shadow-2xl z-50 pointer-events-none backdrop-blur-md flex flex-col items-center gap-0.5">
                          <div className="flex items-center gap-1">
                            <span>{platform.label}</span>
                            <span className="text-[#FFB719]">↗</span>
                          </div>
                          <span className="text-[9px] font-normal text-slate-300">{platform.badgeText}</span>
                        </div>
                      )}
                    </a>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>

        {/* FULL-WIDTH STATS & MARKETS BAR */}
        <ScrollReveal
          initialVisible={true}
          delay={180}
          className="w-full mt-8 sm:mt-10 lg:mt-12"
        >
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-[0_10px_35px_rgba(24,42,82,0.06)]">
            {/* Box 1: 3+ Years SEO Experience */}
            <div className="flex flex-col items-center sm:items-start justify-center p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#2587C4]/50 transition-all duration-300 group min-h-[108px]">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#182A52] tracking-tight group-hover:scale-105 transition-transform origin-left">
                3+
              </span>
              <span className="text-xs sm:text-sm text-slate-600 font-semibold mt-1 text-center sm:text-left">
                Years in Off-Page SEO
              </span>
            </div>

            {/* Box 2: 2,500+ Backlinks Built */}
            <div className="flex flex-col items-center sm:items-start justify-center p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#2587C4]/50 transition-all duration-300 group min-h-[108px]">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2587C4] tracking-tight group-hover:scale-105 transition-transform origin-left">
                2,500+
              </span>
              <span className="text-xs sm:text-sm text-slate-600 font-semibold mt-1 text-center sm:text-left">
                High-DA Backlinks Built
              </span>
            </div>

            {/* Box 3: International Markets */}
            <div className="flex flex-col items-center sm:items-start justify-center p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#2587C4]/50 transition-all duration-300 group min-h-[108px]">
              <span className="text-[11px] sm:text-xs font-bold text-[#182A52] tracking-wide uppercase mb-2 text-center sm:text-left">
                Global Client Reach
              </span>
              <div className="flex items-center justify-center gap-2">
                {[
                  { code: "PK" as const, name: "Pakistan" },
                  { code: "US" as const, name: "United States" },
                  { code: "GB" as const, name: "United Kingdom" },
                  { code: "CA" as const, name: "Canada" },
                  { code: "AE" as const, name: "UAE" }
                ].map((market) => (
                  <div
                    key={market.code}
                    className="relative group/flag cursor-pointer"
                    onMouseEnter={() => setActiveFlagTooltip(market.name)}
                    onMouseLeave={() => setActiveFlagTooltip(null)}
                  >
                    <div className="transition-transform group-hover/flag:scale-125 group-hover/flag:-translate-y-1 duration-200 shadow-sm">
                      <CountryFlag code={market.code} name={market.name} size={18} />
                    </div>
                    {activeFlagTooltip === market.name && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded bg-[#182A52] border border-[#FFB719] text-[10px] font-bold text-white whitespace-nowrap z-30 shadow-xl pointer-events-none">
                        {market.name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Box 4: Multiple Channels */}
            <div className="flex flex-col items-center sm:items-start justify-center p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#2587C4]/50 transition-all duration-300 group min-h-[108px]">
              <span className="text-[11px] sm:text-xs font-bold text-[#182A52] tracking-wide uppercase mb-2 text-center sm:text-left">
                Connect on Channels
              </span>
              <div className="flex items-center justify-center gap-2">
                {STAT_PLATFORMS.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target={platform.href.startsWith("http") ? "_blank" : undefined}
                    rel={platform.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="relative group/platform cursor-pointer block"
                    onMouseEnter={() => setActivePlatformTooltip(platform.label)}
                    onMouseLeave={() => setActivePlatformTooltip(null)}
                    aria-label={`Open ${platform.label} (${OWNER_INFO.name})`}
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border border-slate-200 group-hover/platform:border-[#2587C4] group-hover/platform:scale-125 group-hover/platform:-translate-y-1 transition-all duration-200 flex items-center justify-center p-1 shadow-sm">
                      <BrandIcon name={platform.name} size={14} mode="authentic" />
                    </div>
                    {activePlatformTooltip === platform.label && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded bg-[#182A52] border border-[#2587C4] text-[10px] font-bold text-white whitespace-nowrap z-30 shadow-xl pointer-events-none flex items-center gap-1">
                        <span>{platform.label}</span>
                        <span className="text-[#FFB719]">↗</span>
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
