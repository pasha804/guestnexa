"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { OWNER_INFO } from "../data/portfolioData";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = ["hero", "about", "services", "projects", "certificates", "reviews", "contact"];
      let currentActive = "hero";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260 && rect.bottom > 100) {
            currentActive = sectionId;
          }
        }
      }
      setActiveSection(currentActive);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock background body scroll when mobile navigation drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_25px_rgba(24,42,82,0.08)] py-2 sm:py-2.5"
          : "bg-white/85 backdrop-blur-md border-b border-slate-200/50 py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <Link
            href="/#hero"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2587C4] rounded-xl p-1"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#2587C4]/40 shadow-sm group-hover:border-[#FFB719] transition-all duration-300 bg-white">
              <Image
                src="/images/logo/guestnexa-logo.png"
                alt="GuestNexa Logo"
                fill
                sizes="44px"
                priority
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-wider text-[#182A52] leading-none group-hover:text-[#2587C4] transition-colors">
                GUESTNEXA
              </span>
              <span className="text-[10px] font-bold text-[#FFB719] tracking-widest uppercase mt-0.5">
                SEO AGENCY
              </span>
            </div>
          </Link>

          {/* Navigation in Center (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 bg-slate-50/90 backdrop-blur-xl px-3.5 py-1 rounded-full border border-slate-200 shadow-sm">
            <Link
              href="/#hero"
              onClick={() => setActiveSection("hero")}
              className={`px-3 py-1 text-xs xl:text-sm font-semibold rounded-full transition-all duration-200 ${
                activeSection === "hero"
                  ? "text-white bg-[#182A52] shadow-sm"
                  : "text-slate-600 hover:text-[#182A52] hover:bg-slate-200/60"
              }`}
            >
              Home
            </Link>

            <Link
              href="/#about"
              onClick={() => setActiveSection("about")}
              className={`px-3 py-1 text-xs xl:text-sm font-semibold rounded-full transition-all duration-200 ${
                activeSection === "about"
                  ? "text-white bg-[#182A52] shadow-sm"
                  : "text-slate-600 hover:text-[#182A52] hover:bg-slate-200/60"
              }`}
            >
              About
            </Link>

            {/* SERVICES WITH INTERACTIVE DROPDOWN */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`px-3 py-1 text-xs xl:text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                  activeSection === "services" || servicesDropdownOpen
                    ? "text-white bg-[#2587C4] shadow-sm"
                    : "text-slate-600 hover:text-[#182A52] hover:bg-slate-200/60"
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu Box — Clean & Minimal */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[240px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_15px_40px_rgba(24,42,82,0.12)] p-2 overflow-hidden">
                    {/* 3 Core Services — Clean Links Only */}
                    <div className="space-y-0.5">
                      <Link
                        href="/services/guest-posting"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="block px-3 py-2 rounded-xl text-xs font-bold text-[#182A52] hover:text-[#2587C4] hover:bg-slate-50 transition-colors"
                      >
                        Guest Posting
                      </Link>
                      <Link
                        href="/services/link-building"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="block px-3 py-2 rounded-xl text-xs font-bold text-[#182A52] hover:text-[#2587C4] hover:bg-slate-50 transition-colors"
                      >
                        Link Building
                      </Link>
                      <Link
                        href="/services/off-page-seo"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="block px-3 py-2 rounded-xl text-xs font-bold text-[#182A52] hover:text-[#2587C4] hover:bg-slate-50 transition-colors"
                      >
                        Off-Page SEO
                      </Link>
                    </div>

                    {/* Bottom Link to Quick Quote */}
                    <div className="mt-1.5 pt-2 border-t border-slate-100 px-2 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500">Need direct consultation?</span>
                      <a
                        href={OWNER_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#2587C4] hover:text-[#182A52] flex items-center gap-1"
                      >
                        <span>WhatsApp Me</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setActiveSection("contact")}
              className={`px-3.5 py-1 text-xs xl:text-sm font-semibold rounded-full transition-all duration-200 ${
                activeSection === "contact"
                  ? "text-white bg-[#182A52] shadow-sm"
                  : "text-slate-600 hover:text-[#182A52] hover:bg-slate-200/60"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile & Tablet Header Controls (Visible < 1024px) */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Custom Styled Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              className={`w-10 h-10 rounded-2xl border flex flex-col items-center justify-center gap-1.5 transition-all duration-200 shadow-sm cursor-pointer ${
                mobileMenuOpen
                  ? "bg-[#182A52] border-[#182A52] text-white"
                  : "bg-slate-100 hover:bg-slate-200 border-slate-300 text-[#182A52]"
              }`}
            >
              <span
                className={`w-5 h-0.5 rounded-full transition-all duration-200 ${
                  mobileMenuOpen
                    ? "rotate-45 translate-y-2 bg-[#FFB719]"
                    : "bg-[#182A52]"
                }`}
              />
              <span
                className={`w-5 h-0.5 rounded-full transition-all duration-200 ${
                  mobileMenuOpen ? "opacity-0" : "bg-[#182A52]"
                }`}
              />
              <span
                className={`w-5 h-0.5 rounded-full transition-all duration-200 ${
                  mobileMenuOpen
                    ? "-rotate-45 -translate-y-2 bg-[#FFB719]"
                    : "bg-[#182A52]"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer (Visible < 1024px when open) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-5 sm:px-8 py-5 shadow-2xl transition-all overflow-y-auto overscroll-contain z-50 pb-20 touch-pan-y">
          <div className="flex flex-col space-y-2 max-w-lg mx-auto">
            <Link
              href="/#hero"
              onClick={() => {
                setActiveSection("hero");
                setMobileMenuOpen(false);
              }}
              className="text-sm font-bold py-2.5 px-4 rounded-xl text-[#182A52] hover:bg-slate-100 flex items-center justify-between"
            >
              <span>Home</span>
              <span className="text-[10px] text-[#2587C4] font-semibold">01</span>
            </Link>

            <Link
              href="/#about"
              onClick={() => {
                setActiveSection("about");
                setMobileMenuOpen(false);
              }}
              className="text-sm font-bold py-2.5 px-4 rounded-xl text-[#182A52] hover:bg-slate-100 flex items-center justify-between"
            >
              <span>About Attia Awais</span>
              <span className="text-[10px] text-[#2587C4] font-semibold">02</span>
            </Link>

            {/* Mobile Services Accordion */}
            <div className="rounded-2xl border border-slate-200/90 p-3 bg-slate-50/70">
              <div
                className="flex items-center justify-between text-sm font-extrabold text-[#182A52] cursor-pointer py-1"
                onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#2587C4] transition-transform duration-200 ${
                    mobileServicesExpanded ? "rotate-180" : ""
                  }`}
                />
              </div>

              {mobileServicesExpanded && (
                <div className="mt-2 space-y-1 pt-2 border-t border-slate-200">
                  <Link
                    href="/services/guest-posting"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-xl text-xs font-bold text-[#182A52] hover:text-[#2587C4] hover:bg-slate-200/50 transition-colors"
                  >
                    Guest Posting
                  </Link>
                  <Link
                    href="/services/link-building"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-xl text-xs font-bold text-[#182A52] hover:text-[#2587C4] hover:bg-slate-200/50 transition-colors"
                  >
                    Link Building
                  </Link>
                  <Link
                    href="/services/off-page-seo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-xl text-xs font-bold text-[#182A52] hover:text-[#2587C4] hover:bg-slate-200/50 transition-colors"
                  >
                    Off-Page SEO
                  </Link>

                  <div className="mt-2 pt-2 border-t border-slate-200 px-3 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Need direct consultation?</span>
                    <a
                      href={OWNER_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#2587C4] hover:text-[#182A52] flex items-center gap-1"
                    >
                      <span>WhatsApp Me</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => {
                setActiveSection("contact");
                setMobileMenuOpen(false);
              }}
              className="text-sm font-bold py-2.5 px-4 rounded-xl text-[#182A52] hover:bg-slate-100 flex items-center justify-between"
            >
              <span>Contact</span>
              <span className="text-[10px] text-[#2587C4] font-semibold">03</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
