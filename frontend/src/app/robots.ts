import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"]
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"]
      }
    ],
    sitemap: "https://www.guestnexa.com/sitemap.xml",
    host: "https://www.guestnexa.com"
  };
}
