import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  FileText,
  Link2,
  TrendingUp,
  CheckCircle,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Zap,
  MessageSquare
} from "lucide-react";
import { EXTENDED_SERVICE_DETAILS, OWNER_INFO } from "@/data/portfolioData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = EXTENDED_SERVICE_DETAILS[slug as keyof typeof EXTENDED_SERVICE_DETAILS];
  if (!service) {
    return { title: "Service Not Found | GuestNexa" };
  }
  return {
    title: `${service.title} | GuestNexa SEO Agency`,
    description: service.heroDescription.substring(0, 160)
  };
}

export function generateStaticParams() {
  return [
    { slug: "guest-posting" },
    { slug: "link-building" },
    { slug: "off-page-seo" }
  ];
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = EXTENDED_SERVICE_DETAILS[slug as keyof typeof EXTENDED_SERVICE_DETAILS];

  if (!service) {
    notFound();
  }

  const isGuestPosting = slug === "guest-posting";
  const isLinkBuilding = slug === "link-building";
  const isOffPage = slug === "off-page-seo";

  return (
    <div className="w-full relative min-h-screen pt-28 sm:pt-32 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2587C4] hover:text-[#182A52] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Card */}
        <div className="clean-white-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-md mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2587C4]/10 text-[#2587C4] text-xs font-extrabold uppercase tracking-wider">
                {isGuestPosting && <FileText className="w-3.5 h-3.5" />}
                {isLinkBuilding && <Link2 className="w-3.5 h-3.5" />}
                {isOffPage && <TrendingUp className="w-3.5 h-3.5" />}
                <span>{service.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-[#182A52] tracking-tight">
                {service.title}
              </h1>

              <p className="text-sm sm:text-lg font-semibold text-[#2587C4]">
                {service.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/923126166818?text=${encodeURIComponent(
                  `Hello Attia Awais, I want to discuss and order: ${service.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full brand-primary-button text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-[#FFB719]" />
                <span>Order On WhatsApp</span>
              </a>
            </div>
          </div>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed my-8 max-w-4xl">
            {service.heroDescription}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {service.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
                  {m.label}
                </span>
                <span className="text-lg sm:text-xl font-black text-[#182A52] mt-1 block">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-[#182A52] mb-5 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2587C4]" />
              <span>Core Benefits &amp; Ranking Impact</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((b, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <h3 className="text-sm font-bold text-[#182A52] flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2587C4] shrink-0" />
                    <span>{b.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div>
            <h2 className="text-xl font-bold text-[#182A52] mb-5 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#FFB719]" />
              <span>Execution Process &amp; Deliverables</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.processSteps.map((s, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-2xl font-black text-[#2587C4]/30 block mb-2">
                    {s.step}
                  </span>
                  <h3 className="text-sm font-bold text-[#182A52] mb-1">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#182A52] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-2xl font-black">
              Ready to Order {service.title}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Direct consultation with Attia Awais on WhatsApp. 100% permanent, dofollow backlinks.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/923126166818?text=${encodeURIComponent(
                `Hello Attia, I want to discuss and order ${service.title} for my website.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md hover:bg-[#20bd5a] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: 03126166818</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
