import React from "react";
import { OWNER_INFO } from "../data/portfolioData";

export const StructuredData: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.guestnexa.com/#person",
        "name": OWNER_INFO.name,
        "jobTitle": OWNER_INFO.title,
        "description": OWNER_INFO.bioShort,
        "telephone": OWNER_INFO.phoneClean,
        "email": OWNER_INFO.email,
        "url": "https://www.guestnexa.com",
        "image": "https://www.guestnexa.com/images/profile/attia-portrait.png",
        "sameAs": [
          OWNER_INFO.socials.facebookPage,
          OWNER_INFO.socials.facebook,
          OWNER_INFO.socials.instagram,
          OWNER_INFO.socials.linkedin,
          OWNER_INFO.socials.youtube,
          OWNER_INFO.socials.whatsappChannel
        ],
        "knowsAbout": [
          "Guest Posting",
          "Link Building",
          "Off-Page SEO",
          "High DA Dofollow Backlinks",
          "Blogger Outreach",
          "Editorial Backlinks",
          "Search Engine Optimization (SEO)",
          "Domain Authority Growth",
          "Anchor Text Strategy"
        ],
        "worksFor": {
          "@id": "https://www.guestnexa.com/#organization"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lahore",
          "addressRegion": "Punjab",
          "addressCountry": "PK"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.guestnexa.com/#organization",
        "name": OWNER_INFO.brandName,
        "url": "https://www.guestnexa.com",
        "logo": "https://www.guestnexa.com/images/logo/guestnexa-logo.png",
        "image": "https://www.guestnexa.com/images/og-logo.png?v=logo-gn1",
        "description": "GuestNexa is an elite SEO agency specializing in high-authority Guest Posting, Link Building, and Off-Page SEO services.",
        "telephone": OWNER_INFO.phoneClean,
        "email": OWNER_INFO.email,
        "priceRange": "$$",
        "openingHours": "Mo-Sa 09:00-21:00",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lahore",
          "addressRegion": "Punjab",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "31.5204",
          "longitude": "74.3587"
        },
        "areaServed": [
          { "@type": "Country", "name": "Pakistan" },
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "United Arab Emirates" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "48",
          "bestRating": "5",
          "worstRating": "1"
        },
        "founder": {
          "@id": "https://www.guestnexa.com/#person"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "GuestNexa SEO Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Guest Posting Services",
                "description": "High DA editorial guest post placements on real websites with natural organic traffic."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Link Building Services",
                "description": "Strategic contextual white-hat dofollow backlink campaigns to boost domain authority."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Off-Page SEO Services",
                "description": "Complete backlink profile auditing, toxic link disavow, tier-2 backlink boosting, and SERP domination."
              }
            }
          ]
        },
        "sameAs": [
          OWNER_INFO.socials.facebookPage,
          OWNER_INFO.socials.facebook,
          OWNER_INFO.socials.instagram,
          OWNER_INFO.socials.linkedin,
          OWNER_INFO.socials.youtube,
          OWNER_INFO.socials.whatsappChannel
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.guestnexa.com/#website",
        "url": "https://www.guestnexa.com",
        "name": "GuestNexa — Guest Posting & Link Building Agency",
        "description": "Explore premium Guest Posting, Link Building, and Off-Page SEO case studies and services by Attia Awais.",
        "publisher": {
          "@id": "https://www.guestnexa.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.guestnexa.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does GuestNexa specialize in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GuestNexa specializes in Guest Posting on high-DA real traffic websites, custom Link Building campaigns, and comprehensive Off-Page SEO optimization."
            }
          },
          {
            "@type": "Question",
            "name": "Who is the founder of GuestNexa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Attia Awais is the Founder of GuestNexa and an Off-Page SEO Expert with 3+ years of professional experience."
            }
          },
          {
            "@type": "Question",
            "name": "Are the backlinks provided by GuestNexa permanent and dofollow?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 100% of our editorial guest post links are permanent, contextual, dofollow, and placed on real niche-relevant websites with clean backlink profiles."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact Attia Awais for an instant SEO consultation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can reach Attia Awais directly on WhatsApp at 03126166818 (+923126166818) or via email at guestnexa@gmail.com."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
