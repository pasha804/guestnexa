"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Eye, ArrowUpRight, ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react";
import { PROJECTS_LIST } from "../data/portfolioData";
import { Project } from "../types";
import { ProjectModal } from "./ProjectModal";
import { BrandIcon } from "./BrandIcon";
import { ScrollReveal } from "./ScrollReveal";

export const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive items-per-page calculation
  useEffect(() => {
    const updateVisibleCount = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const total = PROJECTS_LIST.length;
  const maxIndex = Math.max(0, total - visibleCount);

  // Auto-play animation every 3.5 seconds
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section
      id="projects"
      aria-label="Selected Case Studies and Results"
      className="py-14 sm:py-20 lg:py-24 relative overflow-hidden w-full scroll-mt-24 bg-slate-50/50"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 relative z-10 w-full">
        {/* Section Header */}
        <ScrollReveal delay={0} className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB719] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2587C4]"></span>
            </span>
            <span className="text-xs sm:text-sm font-black tracking-[0.2em] text-[#182A52] uppercase">
              CASE STUDIES
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-[#2587C4] font-bold tracking-wider uppercase">
              Verified SEO Results
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[2.85rem] font-extrabold tracking-tight leading-tight text-[#182A52]">
            Proven Case Studies &amp;{" "}
            <span className="brand-heading-gradient">
              Search Authority Growth
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Real data-driven ranking surges, DR/DA acceleration, and high-impact guest post placements delivered by GuestNexa.
          </p>
        </ScrollReveal>

        {/* Carousel Container */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-slate-500">
              Showing Case Studies ({currentIndex + 1} - {Math.min(currentIndex + visibleCount, total)} of {total})
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Case Study"
                className="p-2 rounded-full bg-white border border-slate-200 text-[#182A52] hover:bg-slate-100 shadow-sm transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Case Study"
                className="p-2 rounded-full bg-white border border-slate-200 text-[#182A52] hover:bg-slate-100 shadow-sm transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel Track */}
          <div className="overflow-hidden py-2">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`
              }}
            >
              {PROJECTS_LIST.map((project) => (
                <div
                  key={project.id}
                  className="shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex"
                >
                  <div className="clean-white-card w-full rounded-3xl p-6 border border-slate-200 bg-white hover:border-[#2587C4] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md">
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-bold text-[#2587C4] bg-[#2587C4]/10 px-2.5 py-0.5 rounded-full border border-[#2587C4]/20 uppercase">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-1 text-[#FFB719]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-[#FFB719] text-[#FFB719]" />
                          ))}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-[#182A52] mb-2 leading-snug">
                        {project.title}
                      </h3>

                      {project.highlightTag && (
                        <div className="inline-block px-2.5 py-1 rounded-lg bg-[#FFB719]/15 text-[#B45309] text-xs font-bold mb-3 border border-[#FFB719]/30">
                          {project.highlightTag}
                        </div>
                      )}

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Key Metrics Chips */}
                      {project.keyMetrics && (
                        <div className="grid grid-cols-2 gap-2 mb-4 pt-3 border-t border-slate-100">
                          {project.keyMetrics.slice(0, 2).map((km, kmIdx) => (
                            <div key={kmIdx} className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                              <span className="text-[10px] text-slate-500 uppercase block font-semibold">
                                {km.label}
                              </span>
                              <span className="text-xs font-black text-[#182A52]">
                                {km.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="w-full py-2.5 px-4 rounded-xl brand-primary-button text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <span>View Full Breakdown</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#FFB719]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
