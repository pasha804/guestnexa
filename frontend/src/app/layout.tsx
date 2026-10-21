
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/SkipLink";
import { StructuredData } from "@/components/StructuredData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { CinematicBackground } from "@/components/CinematicBackground";
import { LogoAnimationIntro } from "@/components/LogoAnimationIntro";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover"
};

export const metadata: Metadata = {
  title: {
    default: "GuestNexa | Guest Posting, Link Building & Off-Page SEO Agency",
    template: "%s | GuestNexa"
  },
  description:
    "Attia Awais is an Off-Page SEO Expert and Founder of GuestNexa. We specialize in high-authority Guest Posting, Link Building, and Off-Page SEO services to skyrocket your search rankings and domain authority.",
  keywords: [
    "Guest Posting Services",
    "Link Building Expert",
    "Off-Page SEO Specialist",
    "Attia Awais",
    "GuestNexa",
    "High DA Backlinks",
    "Editorial Backlinks",
    "White Hat Link Building",
    "SEO Outreach Specialist",
    "Guest Posting Agency Pakistan",
    "Guest Posting Lahore",
    "Dofollow Guest Posts",
    "Domain Authority Increase",
    "Search Engine Rankings",
    "Off-Page SEO Expert Pakistan"
  ],
  authors: [{ name: "Attia Awais", url: "https://www.guestnexa.com" }],
  creator: "Attia Awais",
  publisher: "GuestNexa",
  applicationName: "GuestNexa Agency",
  generator: "Next.js",
  category: "Search Engine Optimization",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL("https://www.guestnexa.com"),
  alternates: {
    canonical: "https://www.guestnexa.com",
    languages: {
      "en-US": "https://www.guestnexa.com",
      "ur-PK": "https://www.guestnexa.com"
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title: "GuestNexa — Guest Posting, Link Building & Off-Page SEO Agency",
    description:
      "Attia Awais, Founder of GuestNexa. Helping businesses build high-quality backlinks, increase website authority, and achieve #1 Google rankings.",
    url: "https://www.guestnexa.com",
    siteName: "GuestNexa",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.guestnexa.com/images/og-logo.png?v=logo-gn1",
        secureUrl: "https://www.guestnexa.com/images/og-logo.png?v=logo-gn1",
        width: 1200,
        height: 630,
        alt: "GuestNexa — Attia Awais Off-Page SEO Agency",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "GuestNexa | Attia Awais — Off-Page SEO Expert",
    description:
      "Specialized in Guest Posting, Link Building, and Off-Page SEO. High-DA backlinks that drive sustainable organic traffic.",
    images: ["https://www.guestnexa.com/images/og-logo.png?v=logo-gn1"],
    creator: "@GuestNexa"
  },
  icons: {
    icon: [
      { url: "/images/logo/guestnexa-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo/guestnexa-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo/guestnexa-512.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/images/logo/guestnexa-192.png",
    apple: "/images/logo/guestnexa-192.png"
  },
  other: {
    "geo.region": "PK-PB",
    "geo.placename": "Lahore",
    "geo.position": "31.5204;74.3587",
    "ICBM": "31.5204, 74.3587"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <head>
        <StructuredData />
        <meta property="og:image" content="https://www.guestnexa.com/images/og-logo.png?v=logo-gn1" />
        <meta property="og:image:secure_url" content="https://www.guestnexa.com/images/og-logo.png?v=logo-gn1" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="image_src" href="https://www.guestnexa.com/images/og-logo.png?v=logo-gn1" />
        <link rel="icon" href="/images/logo/guestnexa-32.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo/guestnexa-192.png" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="font-sans bg-white text-[#182A52] selection:bg-[#FFB719]/30 selection:text-[#182A52] min-h-screen flex flex-col antialiased relative"
        suppressHydrationWarning
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
      >
        <CinematicBackground />
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1 w-full relative z-10">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <LogoAnimationIntro />
      </body>
    </html>
  );
}
