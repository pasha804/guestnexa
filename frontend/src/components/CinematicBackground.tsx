"use client";

import React, { useEffect, useState } from "react";

export const CinematicBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-white"
    >
      {/* Crisp White Base with very light subtle background mesh */}
      <div className="absolute inset-0 bg-white" />

      {/* Subtle modern engineering dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(24, 42, 82, 0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />

      {/* Soft Luminous Ambient Accents: Blue #2587C4 & Yellow #FFB719 */}
      <div className="absolute -top-[10%] -left-[5%] w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] rounded-full bg-[radial-gradient(circle,rgba(37,135,196,0.12)_0%,transparent_70%)] blur-[80px] sm:blur-[120px]" />
      <div className="absolute top-[20%] -right-[5%] w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] rounded-full bg-[radial-gradient(circle,rgba(255,183,25,0.12)_0%,transparent_70%)] blur-[75px] sm:blur-[110px]" />
      <div className="hidden sm:block absolute top-[60%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(24,42,82,0.06)_0%,transparent_70%)] blur-[100px]" />
      <div className="hidden sm:block absolute -bottom-[10%] right-[10%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(37,135,196,0.10)_0%,transparent_70%)] blur-[120px]" />

      {/* Delicate floating shimmer beads */}
      {mounted && (
        <div className="absolute inset-0 opacity-40">
          {[
            { top: "14%", left: "15%", delay: "0s", duration: "4.5s", size: "3px", color: "#2587C4" },
            { top: "25%", left: "82%", delay: "1.2s", duration: "5.2s", size: "3.5px", color: "#FFB719" },
            { top: "42%", left: "22%", delay: "2.1s", duration: "6s", size: "2.5px", color: "#182A52" },
            { top: "55%", left: "88%", delay: "0.8s", duration: "4.8s", size: "3px", color: "#2587C4" },
            { top: "72%", left: "12%", delay: "1.8s", duration: "5.5s", size: "3.5px", color: "#FFB719" },
            { top: "85%", left: "70%", delay: "2.5s", duration: "5s", size: "3px", color: "#2587C4" }
          ].map((bead, idx) => (
            <div
              key={idx}
              className="absolute rounded-full animate-pulse"
              style={{
                top: bead.top,
                left: bead.left,
                width: bead.size,
                height: bead.size,
                backgroundColor: bead.color,
                boxShadow: `0 0 8px ${bead.color}`,
                animationDelay: bead.delay,
                animationDuration: bead.duration
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
