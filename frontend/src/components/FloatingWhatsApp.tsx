"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { BrandIcon } from "./BrandIcon";
import { OWNER_INFO } from "../data/portfolioData";
import { AiAssistantModal } from "./AiAssistantModal";

export const FloatingWhatsApp: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [showWaTooltip, setShowWaTooltip] = useState(false);
  const [showAiTooltip, setShowAiTooltip] = useState(false);
  const [hasAnimatedEntry, setHasAnimatedEntry] = useState(false);

  useEffect(() => {
    // Show gentle attention badge after 2.5 seconds
    const timer = setTimeout(() => {
      setHasAnimatedEntry(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Action Dock: Fixed in bottom-right corner */}
      <div className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end gap-3.5 select-none">
        
        {/* ===================================================================
            BUTTON 1: AI MARKETING ASSISTANT (MH Marketing AI)
            =================================================================== */}
        <div className="relative flex items-center group/ai">
          {/* Tooltip on Hover / Indicator */}
          <div
            className={`hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#03091B]/95 text-white text-xs font-bold border border-[#D4AF37]/50 shadow-[0_4px_25px_rgba(2,6,18,0.9)] whitespace-nowrap transition-all duration-300 pointer-events-none backdrop-blur-md ${
              showAiTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F3CF7A]" />
              <span className="metallic-gold-text font-black">Ask AI Assistant</span>
              <span className="text-[10px] text-emerald-400 font-semibold">• Online</span>
            </div>
          </div>

          {/* AI Circular Floating Launcher Button */}
          <button
            type="button"
            onClick={() => setIsAiOpen(true)}
            onMouseEnter={() => setShowAiTooltip(true)}
            onMouseLeave={() => setShowAiTooltip(false)}
            aria-label="Open GuestNexa AI Assistant"
            className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#182A52] via-[#2587C4] to-[#182A52] border-2 border-[#FFB719] hover:border-white flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
          >
            {/* Subtle Pulse */}
            <span className="absolute inset-0 rounded-full border border-[#FFB719]/40 animate-ping opacity-30 pointer-events-none" />

            {/* AI Icon */}
            <div className="relative z-10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#FFB719] group-hover:rotate-12 transition-transform duration-300 drop-shadow-sm" />
            </div>

            {/* AI Pill Badge */}
            <span className="absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full bg-[#FFB719] text-[#182A52] text-[9px] font-black tracking-wider uppercase shadow-sm">
              AI
            </span>
          </button>
        </div>

        {/* ===================================================================
            BUTTON 2: REAL WHATSAPP BUTTON WITH GESTURE HAND & ANIMATED PILL
            =================================================================== */}
        <div className="relative flex items-center group/wa">
          
          {/* Animated Professional "Chat on WhatsApp" Pill (Nudges & Shimmers) */}
          <a
            href={OWNER_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Attia Awais"
            className="relative overflow-hidden flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#182A52] hover:bg-[#0F1C38] border border-emerald-400 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer animate-wa-pill-nudge group/pill"
          >
            {/* Subtle light beam sweep across pill */}
            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent -skew-x-12 animate-wa-shimmer pointer-events-none" />

            {/* Glowing Live Green Dot Indicator */}
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366] shadow-[0_0_8px_#25D366]" />
            </span>

            {/* Clean, Bold Professional Typography */}
            <span className="text-white text-xs sm:text-[13px] font-bold tracking-wide select-none whitespace-nowrap">
              Chat on WhatsApp
            </span>
          </a>

          {/* Animated Hand Icon */}
          <div
            className="relative mx-1.5 sm:mx-2 text-2xl sm:text-[28px] leading-none select-none pointer-events-none z-20 animate-wa-hand-gesture flex items-center justify-center filter drop-shadow-sm"
            aria-hidden="true"
          >
            👉
          </div>

          {/* REAL Official WhatsApp Floating Button (Solid Green + Pure White Icon) */}
          <a
            href={OWNER_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Attia Awais (03126166818)"
            className="relative w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center text-white shadow-lg animate-wa-button-zoom active:scale-95 transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-emerald-300 cursor-pointer"
          >
            {/* Multi-tier Pulsing Ripple Waves */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-35 pointer-events-none [animation-duration:2.6s]" />

            {/* REAL Pure White Official WhatsApp Brand Icon */}
            <div className="relative z-10 transition-transform group-hover/wa:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
              <BrandIcon name="whatsapp" size={32} mode="monochrome" className="text-white" />
            </div>

            {/* Online Green Beacon Badge with Crisp White Border */}
            <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-white shadow-md animate-pulse" />
          </a>
        </div>
      </div>

      {/* AI Assistant Chat Modal Window */}
      <AiAssistantModal isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
    </>
  );
};
