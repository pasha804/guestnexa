"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Star,
  MessageSquareQuote,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  X,
  ExternalLink
} from "lucide-react";
import { REVIEWS_LIST, OWNER_INFO } from "../data/portfolioData";
import { BrandIcon } from "./BrandIcon";
import { Review } from "../types";
import { ScrollReveal } from "./ScrollReveal";

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showAllModal, setShowAllModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = ["All", "Guest Posting", "Link Building", "Off-Page SEO", "International"];

  const filteredReviews = useMemo(() => {
    if (selectedCategory === "All") return REVIEWS_LIST;
    if (selectedCategory === "Guest Posting") {
      return REVIEWS_LIST.filter(
        (r) =>
          r.text.toLowerCase().includes("guest") ||
          r.text.toLowerCase().includes("blogger") ||
          r.text.toLowerCase().includes("post")
      );
    }
    if (selectedCategory === "Link Building") {
      return REVIEWS_LIST.filter(
        (r) =>
          r.text.toLowerCase().includes("link") ||
          r.text.toLowerCase().includes("backlink") ||
          r.text.toLowerCase().includes("niche")
      );
    }
    if (selectedCategory === "Off-Page SEO") {
      return REVIEWS_LIST.filter(
        (r) =>
          r.text.toLowerCase().includes("off-page") ||
          r.text.toLowerCase().includes("audit") ||
          r.text.toLowerCase().includes("toxic") ||
          r.text.toLowerCase().includes("ranking")
      );
    }
    if (selectedCategory === "International") {
      return REVIEWS_LIST.filter(
        (r) =>
          r.role?.toLowerCase().includes("uk") ||
          r.role?.toLowerCase().includes("saas") ||
          r.role?.toLowerCase().includes("australia") ||
          r.text.toLowerCase().includes("international") ||
          r.author.includes("Jenkins") ||
          r.author.includes("Miller") ||
          r.author.includes("Vance") ||
          r.author.includes("Adams")
      );
    }
    return REVIEWS_LIST;
  }, [selectedCategory]);

  const maxIndex = Math.max(0, filteredReviews.length - visibleCount);

  useEffect(() => {
    if (isPaused || showAllModal || maxIndex <= 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex, showAllModal]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section
      id="reviews"
      aria-label="Client Reviews and Testimonials"
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden w-full bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 w-full">
        {/* Section Header */}
        <ScrollReveal delay={0} className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-3.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB719] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2587C4]"></span>
            </span>
            <span className="text-xs sm:text-sm font-black tracking-[0.2em] text-[#182A52] uppercase">
              CLIENT TESTIMONIALS
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs text-[#2587C4] font-bold tracking-wider uppercase">
              Verified SEO Results
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-[#182A52] tracking-tight leading-tight">
            Trusted by Businesses for{" "}
            <span className="brand-heading-gradient">
              High-DA Outreach &amp; Real Traffic Growth
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Read direct feedback from e-commerce brands, digital agencies, and business owners who rely on Attia Awais and GuestNexa.
          </p>

          {/* Aggregate Rating Pill */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FFB719] text-[#FFB719]" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#182A52]">
              5.0 Star Verified Rating
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-[#2587C4] font-semibold">
              100% Client Satisfaction
            </span>
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#182A52] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Carousel Slider */}
        <div className="relative overflow-hidden w-full pb-4">
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
            }}
          >
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div className="clean-white-card p-6 sm:p-7 rounded-3xl border border-slate-200 bg-white hover:border-[#2587C4] flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-all duration-300">
                  <div>
                    {/* Stars + Quote Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(rev.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#FFB719] text-[#FFB719]" />
                        ))}
                      </div>
                      <MessageSquareQuote className="w-6 h-6 text-[#2587C4]/30" />
                    </div>

                    <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                      &ldquo;{rev.text}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-[#182A52]">
                        {rev.author}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {rev.role}
                      </p>
                    </div>

                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Reviews"
            className="p-2.5 rounded-full bg-white border border-slate-200 text-[#182A52] hover:bg-slate-100 shadow-sm transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-xs font-bold text-slate-500">
            {currentIndex + 1} / {Math.max(1, maxIndex + 1)}
          </span>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Reviews"
            className="p-2.5 rounded-full bg-white border border-slate-200 text-[#182A52] hover:bg-slate-100 shadow-sm transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
