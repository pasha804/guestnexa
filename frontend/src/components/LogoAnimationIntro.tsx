"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, FastForward, CheckCircle2 } from "lucide-react";

export const LogoAnimationIntro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only show once per browser session
    try {
      const alreadyShown = window.sessionStorage.getItem("guestnexa_intro_viewed");
      if (alreadyShown) {
        setIsVisible(false);
        return;
      }
      setIsVisible(true);
      window.sessionStorage.setItem("guestnexa_intro_viewed", "true");
    } catch {
      // In case sessionStorage is restricted
      setIsVisible(true);
    }

    // Smooth progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    // Auto complete after 1.25 seconds
    const completeTimer = setTimeout(() => {
      handleComplete();
    }, 1250);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, []);

  const handleComplete = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 450);
  };

  if (!isVisible) return null;

  return (
    <div
      aria-label="GuestNexa Cinematic Intro"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0C172E]/98 select-none transition-all duration-500 ease-out backdrop-blur-2xl ${
        isFading ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100 pointer-events-auto"
      }`}
    >
      {/* Background Animated Energy Field */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial brand gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(37,135,196,0.35)_0%,rgba(255,183,25,0.18)_40%,transparent_70%)] blur-3xl animate-pulse" />
        
        {/* Subtle Tech Grid overlay */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Top Skip Button */}
      <div className="absolute top-5 sm:top-7 right-5 sm:right-8 z-30">
        <button
          type="button"
          onClick={handleComplete}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold tracking-wide transition-all shadow-lg hover:border-[#FFB719] cursor-pointer backdrop-blur-md"
          aria-label="Skip intro"
        >
          <span>Skip</span>
          <FastForward className="w-3.5 h-3.5 text-[#FFB719]" />
        </button>
      </div>

      {/* Centered High-End Emblem & Typography */}
      <div className="relative flex flex-col items-center justify-center px-4 max-w-lg mx-auto text-center z-10">
        
        {/* Glowing Orbit Ring Medallion */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mb-6">
          {/* Outer rotating dash ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#FFB719]/60 animate-spin [animation-duration:12s]" />
          
          {/* Inner counter-rotating solid glow ring */}
          <div className="absolute -inset-2 rounded-full border border-[#2587C4]/50 animate-ping opacity-40 [animation-duration:3s]" />
          
          {/* Logo container disk */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white p-3.5 shadow-[0_0_50px_rgba(37,135,196,0.5),0_0_25px_rgba(255,183,25,0.4)] flex items-center justify-center border-2 border-white">
            <Image
              src="/images/logo/guestnexa-logo.png"
              alt="GuestNexa Logo"
              width={140}
              height={140}
              priority
              className="w-full h-full object-contain filter drop-shadow-md"
            />
          </div>
        </div>

        {/* Brand Name with Shimmering Gradient */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#FFB719]/40 mb-1">
            <Sparkles className="w-3 h-3 text-[#FFB719] animate-spin [animation-duration:4s]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FFB719]">
              PREMIUM SEO AGENCY
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-wider uppercase font-sans">
            GUEST<span className="text-[#FFB719]">NEXA</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#93C5FD] font-semibold tracking-widest uppercase">
            High-Authority Guest Posting &amp; Link Building
          </p>

          <p className="text-[11px] text-slate-300 font-medium">
            Attia Awais • Founder &amp; Off-Page SEO Expert
          </p>
        </div>

        {/* Progress Loading Bar */}
        <div className="w-56 sm:w-72 mt-8 space-y-2">
          <div className="h-1.5 w-full bg-white/15 rounded-full overflow-hidden p-0.5 border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#2587C4] via-[#FFB719] to-white rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_#FFB719]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>INITIALIZING PLATFORM</span>
            <span className="text-[#FFB719] font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
