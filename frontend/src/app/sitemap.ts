import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.guestnexa.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${baseUrl}/images/og-logo.png`,
        `${baseUrl}/images/profile/attia-portrait.png`,
        `${baseUrl}/images/logo/guestnexa-logo.png`
      ]
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/services/guest-posting`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/services/link-building`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/services/off-page-seo`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];
}
