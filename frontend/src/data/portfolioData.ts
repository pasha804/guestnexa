import { Project, Certificate, Review, ServiceItem } from "../types";

export const OWNER_INFO = {
  name: "Attia Awais",
  title: "Off Page SEO Expert",
  brandName: "GuestNexa",
  domain: "www.Guestnexa.com",
  headline: "HIGH-AUTHORITY BACKLINKS & OFF-PAGE SEO THAT POWER SEARCH ENGINE RANKINGS.",
  bioShort:
    "I am Attia Awais, Founder of GuestNexa, an SEO agency specializing in Guest Posting, Link Building, and Off-Page SEO services. We help businesses improve their online visibility, build high-quality backlinks, increase website authority, and achieve better search engine rankings.",
  bioLong:
    "I am Attia Awais, Founder of GuestNexa and an Off-Page SEO Expert with 3+ years of specialized experience in high-impact link acquisition, blogger outreach, and search authority growth.\n\nAt GuestNexa, we focus exclusively on white-hat, editorial backlink building that elevates your domain authority (DA/DR), unlocks organic search visibility, and drives sustainable organic traffic from Google.\n\nOur publisher network spans hundreds of real, authoritative websites across diverse global niches. Whether you are an e-commerce brand, a growing SaaS enterprise, or an ambitious digital agency seeking reliable white-label SEO outreach, we deliver permanent, indexed dofollow backlinks that move the needle.",
  experience: "3+ Years",
  phone: "+92 312 6166818",
  phoneClean: "+923126166818",
  whatsappUrl: "https://wa.me/923126166818",
  whatsappChannel: "https://whatsapp.com/channel/0029VbE0nI74SpkJbH5jUd0a",
  email: "guestnexa@gmail.com",
  location: "Lahore, Pakistan",
  socials: {
    facebook: "https://www.facebook.com/attiaawaisseo",
    facebookPage: "https://www.facebook.com/attiaawaisseo",
    facebookPersonal: "https://web.facebook.com/seoattiaawais",
    instagram: "https://www.instagram.com/attiaawaisseo/",
    linkedin: "https://www.linkedin.com/in/attia-bibi-outreach-specialist-linkbuilding-specialist/",
    youtube: "https://www.youtube.com/@AttiaWrites",
    whatsappChannel: "https://whatsapp.com/channel/0029VbE0nI74SpkJbH5jUd0a",
    whatsapp: "https://wa.me/923126166818",
    email: "mailto:guestnexa@gmail.com"
  },
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "High-DA Backlinks Built", value: "2,500+" },
    { label: "Vetted Publishers", value: "850+ Sites" },
    { label: "Avg. Authority Growth", value: "+300%" }
  ],
  markets: [
    { code: "PK", name: "Pakistan", flag: "🇵🇰" },
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
    { code: "CA", name: "Canada", flag: "🇨🇦" },
    { code: "AE", name: "Dubai / UAE", flag: "🇦🇪" },
    { code: "AU", name: "Australia", flag: "🇦🇺" }
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "guest-posting",
    title: "Guest Posting",
    description:
      "100% manual blogger outreach on real, high-traffic authoritative websites with natural editorial dofollow backlinks and targeted niche relevance.",
    points: [
      "Pure organic traffic websites (Zero PBNs, Zero link farms)",
      "High Domain Authority (DA 50+ to DA 85+ vetted platforms)",
      "Professionally crafted, contextual editorial articles",
      "Permanent dofollow backlinks with natural anchor text distribution",
      "Fast Google indexing with transparent live URL reporting"
    ],
    icon: "FileText"
  },
  {
    id: "link-building",
    title: "Link Building",
    description:
      "Strategic, white-hat backlink acquisition campaigns designed to amplify domain rating, establish topical authority, and dominate competitor rankings.",
    points: [
      "Contextual in-content niche edits on established high-ranking URLs",
      "Competitor backlink gap analysis & strategic high-value replication",
      "Skyscraper and broken link outreach strategies",
      "Topical relevance clustering & natural link profile diversification",
      "Strict compliance with Google Search Essentials guidelines"
    ],
    icon: "Link2"
  },
  {
    id: "off-page-seo",
    title: "Off-Page SEO",
    description:
      "Full-spectrum off-page optimization to solidify your website's authority signals, audit backlink health, and outrank competitive search rivals.",
    points: [
      "Comprehensive backlink profile audit & toxic link disavow cleanup",
      "Brand entity citation & digital PR authority amplification",
      "Anchor text ratio calibration to eliminate algorithmic risk",
      "Organic ranking velocity monitoring & CTR optimization",
      "Monthly search performance, DR/DA, and ranking progression reports"
    ],
    icon: "TrendingUp"
  }
];

export const EXTENDED_SERVICE_DETAILS = {
  "guest-posting": {
    title: "High-Authority Guest Posting Services",
    badge: "Most Popular Outreach Service",
    tagline: "Manual Blogger Outreach on Real Websites with High Organic Traffic & High DA/DR",
    heroDescription:
      "Elevate your website's search engine credibility with genuine guest article placements on authoritative, niche-relevant websites. We handpick publisher sites with verified monthly organic search traffic, clean backlink history, and strong domain metrics to ensure maximum link equity passes directly to your pages.",
    benefits: [
      {
        title: "Real Websites with Organic Traffic",
        desc: "We never use private blog networks (PBNs) or spammy link directories. Every publisher site has verified Google organic visitors and active readers."
      },
      {
        title: "High DA / DR Editorial Standards",
        desc: "Access an elite roster of publications with Domain Authority (Moz) 40–85+ and Domain Rating (Ahrefs) 45–80+."
      },
      {
        title: "Contextual Dofollow Backlinks",
        desc: "Backlinks are naturally embedded within relevant, well-researched content that flows effortlessly and adds genuine reader value."
      },
      {
        title: "Fast Google Indexing",
        desc: "Every placed article is monitored until fully indexed in Google search, delivering real authority and ranking improvements."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Niche & Competitor Research",
        desc: "We analyze your target keywords, competitors' backlink gaps, and identify the most authoritative publishing platforms in your sector."
      },
      {
        step: "02",
        title: "Publisher Vetting & Quality Check",
        desc: "Every site is inspected for clean spam scores (SS < 1%), genuine organic search trends, and strict editorial standards."
      },
      {
        step: "03",
        title: "Premium Content Crafting",
        desc: "Our native editorial team writes engaging, value-driven articles incorporating your target anchors naturally."
      },
      {
        step: "04",
        title: "Editorial Placement & Live Link Report",
        desc: "Articles go live with permanent dofollow backlinks. You receive a comprehensive spreadsheet report with verified live URLs and metrics."
      }
    ],
    metrics: [
      { label: "Publisher Network", value: "850+ Vetted Sites" },
      { label: "Average DA Range", value: "DA 50 — 85+" },
      { label: "Link Type", value: "100% Dofollow Editorial" },
      { label: "Turnaround Time", value: "3 — 7 Business Days" }
    ]
  },
  "link-building": {
    title: "Strategic Link Building Solutions",
    badge: "Authority Escalation Strategy",
    tagline: "Custom White-Hat Link Building Campaigns Tailored for Long-Term Ranking Dominance",
    heroDescription:
      "Sustainable Google rankings require a healthy, diverse, and topically aligned backlink portfolio. Our white-hat link acquisition strategies combine niche edits on established high-ranking URLs, resource outreach, and brand mention conversions to power your organic search ascension without risking algorithmic penalties.",
    benefits: [
      {
        title: "Topical Relevance & Alignment",
        desc: "Every backlink comes from sites directly related to your industry, signaling authentic subject matter expertise to Google's ranking algorithms."
      },
      {
        title: "Niche Edits & Contextual Inclusions",
        desc: "Secure editorial backlinks inside existing articles that already boast aged authority, established Google trust, and active organic traffic."
      },
      {
        title: "Natural Anchor Text Architecture",
        desc: "Carefully balanced anchor text profiles (branded, naked URL, exact match, partial match, and generic) to maintain 100% safety."
      },
      {
        title: "Measurable Keyword Rank Surges",
        desc: "Experience tangible upward rank movements for your highest-converting commercial and informational search queries."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Backlink Gap Analysis",
        desc: "We uncover which high-value domains link to your top 5 competitors but do not yet link to you, revealing immediate opportunities."
      },
      {
        step: "02",
        title: "Custom Outreach Campaign",
        desc: "Personalized manual outreach to webmasters, bloggers, and editorial gatekeepers with compelling value propositions."
      },
      {
        step: "03",
        title: "Link Insertion & Anchor Optimization",
        desc: "Strategic link placement inside top-tier content with optimized anchor placement for maximum link juice transmission."
      },
      {
        step: "04",
        title: "Authority & Rank Monitoring",
        desc: "Continuous tracking of your domain authority score, new referring domains, and ranking positions across search results."
      }
    ],
    metrics: [
      { label: "Success Rate", value: "98.4% Verified Placements" },
      { label: "Spam Score Guarantee", value: "0% — 1% Max" },
      { label: "Methodology", value: "100% White-Hat" },
      { label: "Monthly Capacity", value: "200+ Quality Links" }
    ]
  },
  "off-page-seo": {
    title: "Comprehensive Off-Page SEO Services",
    badge: "Holistic Search Engine Dominance",
    tagline: "Full-Spectrum Off-Page Optimization: Authority Audits, Entity Building & Link Equity",
    heroDescription:
      "Search engines judge your website not just by what is on your pages, but by what the rest of the web says about you. Our end-to-end off-page SEO service audits your existing link ecosystem, cleans up toxic historical links, establishes digital brand entity authority, and channels authoritative signals straight to your key pages.",
    benefits: [
      {
        title: "Toxic Link Audit & Disavow",
        desc: "Protect your site from Google algorithmic penalties by identifying and disavowing low-quality, scraped, or spammy inbound links."
      },
      {
        title: "Brand Entity & Citation Authority",
        desc: "Build strong brand entity associations across Google's Knowledge Graph through verified citations and digital PR mentions."
      },
      {
        title: "Tiered Authority Distribution",
        desc: "Drive link equity to your crucial money pages, product catalogs, and core service offerings through balanced link tiering."
      },
      {
        title: "Monthly Transparent SEO Reporting",
        desc: "Clear, executive-ready monthly reports detailing newly acquired referring domains, organic keyword movements, and DR growth."
      }
    ],
    processSteps: [
      {
        step: "01",
        title: "Complete Off-Page Diagnostic",
        desc: "Deep inspection of your current referring domains, anchor text ratios, link velocity, and potential penalty warning signs."
      },
      {
        step: "02",
        title: "Strategic Action Plan",
        desc: "Roadmap identifying highest-priority target URLs, required anchor text distributions, and optimal publisher tiers."
      },
      {
        step: "03",
        title: "Execution & Ongoing Outreach",
        desc: "Simultaneous execution of guest posting, niche edits, digital PR outreach, and entity citation building."
      },
      {
        step: "04",
        title: "Growth Analytics & Strategy Scaling",
        desc: "Review monthly keyword rank changes and scale authority efforts to capture higher-volume, competitive terms."
      }
    ],
    metrics: [
      { label: "Target Growth", value: "+300% DR/DA Trajectory" },
      { label: "Audit Depth", value: "100% Backlink Profile" },
      { label: "Reporting Cadence", value: "Monthly & On-Demand" },
      { label: "Support", value: "Direct WhatsApp Line" }
    ]
  }
};

export const PROJECTS_LIST: Project[] = [
  {
    id: "01",
    number: "01",
    title: "E-Commerce Fashion & Apparel Store",
    category: "Guest Posting & Authority Outreach",
    facebookUrl: OWNER_INFO.socials.facebook,
    logoFilename: "/images/logo/guestnexa-logo.png",
    logoAlt: "GuestNexa E-Commerce SEO Case Study",
    description:
      "Engineered a strategic 6-month guest posting campaign on high-DA fashion and lifestyle publications, catapulting Domain Rating from DR 18 to DR 46 and driving over +240% organic search traffic.",
    services: ["High-DA Guest Posting", "Blogger Outreach", "Contextual Dofollow Links", "Anchor Text Architecture"],
    platforms: ["Google Search", "Ahrefs", "Moz", "WordPress"],
    gridType: "large",
    featured: true,
    sourceStatus: "verified seo campaign",
    highlightTag: "DR 18 → DR 46 Authority Surge & 240% Traffic Boost",
    keyMetrics: [
      { label: "Ahrefs DR Growth", value: "18 → 46 (+155%)" },
      { label: "Guest Posts Placed", value: "65+ High-DA Sites" },
      { label: "Organic Search Traffic", value: "+240% Increase" },
      { label: "Target Region", value: "USA & UK Markets" }
    ],
    workDetails: {
      adCampaigns: {
        title: "High-Authority Publisher Identification",
        description:
          "Vetted over 300 prospective fashion, lifestyle, and modern apparel blogs with organic monthly traffic over 20,000 visitors to ensure every placement transmitted genuine Google trust.",
        highlights: [
          "Filtered exclusively for sites with Ahrefs DR 50+ and Moz DA 55+",
          "Ensured 0% spam score and clean Google search index status",
          "Secured permanent contextual dofollow links inside high-quality articles"
        ]
      },
      pageManagement: {
        title: "Topical Content & Editorial Outreach",
        description:
          "Authored engaging, trend-focused articles that resonated with publisher audiences while seamlessly embedding brand anchors to primary product collections.",
        highlights: [
          "Developed high-retention topics centered around sustainable fashion and seasonal styling",
          "Managed end-to-end editorial negotiation, proofing, and publication scheduling",
          "Maintained a 100% placement approval rate across high-tier editorial boards"
        ]
      },
      creativeDesign: {
        title: "Natural Anchor Text Calibration",
        description:
          "Distributed anchor texts strategically across branded keywords, URL variations, and high-intent commercial phrases to protect against Google over-optimization penalties.",
        highlights: [
          "Maintained 60% branded and URL anchors for natural search appearance",
          "Targeted long-tail high-intent shopping queries with 30% partial match anchors",
          "Monitored anchor diversity index weekly via Ahrefs backlink audits"
        ]
      },
      clientResults: {
        title: "Page 1 Google Rankings & Revenue Surge",
        description:
          "Transformed organic search into the store's primary revenue driver, securing page-1 rankings for over 45 high-volume search queries within 180 days.",
        highlights: [
          "Ranked #1-#3 for core seasonal collection search queries",
          "Monthly organic search revenue increased by 190%",
          "Achieved sustained domain authority resilience against algorithm updates"
        ]
      }
    }
  },
  {
    id: "02",
    number: "02",
    title: "B2B SaaS Cloud Management Platform",
    category: "White-Hat Link Building & Niche Edits",
    facebookUrl: OWNER_INFO.socials.facebook,
    logoFilename: "/images/logo/guestnexa-logo.png",
    logoAlt: "GuestNexa B2B SaaS Link Building Case Study",
    description:
      "Delivered a targeted link acquisition campaign targeting top-tier tech publications, enterprise software review platforms, and DevOps blogs, elevating organic demo sign-ups by 180%.",
    services: ["Tech Niche Edits", "Competitor Backlink Replication", "Editorial Link Building", "Topical Authority"],
    platforms: ["Google Search", "Ahrefs", "Semrush"],
    gridType: "medium",
    featured: true,
    sourceStatus: "verified seo campaign",
    highlightTag: "Enterprise Tech Backlinks & 180% Demo Booking Surge",
    keyMetrics: [
      { label: "Backlinks Acquired", value: "48+ Tech Portals" },
      { label: "Avg. Publisher DR", value: "DR 68 Average" },
      { label: "Organic Inquiries", value: "+180% Qualified Demos" },
      { label: "Keyword Rankings", value: "Top 5 for 22 Commercial Terms" }
    ],
    workDetails: {
      adCampaigns: {
        title: "Competitor Backlink Gap Analysis",
        description:
          "Identified high-authority technical websites linking to enterprise SaaS market leaders and executed personalized outreach pitches to secure authoritative link equity.",
        highlights: [
          "Mapped competitor backlink profiles across Ahrefs and Semrush",
          "Secured in-content link insertions into existing high-traffic tech guides",
          "Targeted cloud computing, IT infrastructure, and DevOps domains"
        ]
      },
      pageManagement: {
        title: "Technical Content Pitching & Relations",
        description:
          "Coordinated directly with tech journalists and authoritative blog editors to position the SaaS product as the premier recommended cloud optimization solution.",
        highlights: [
          "Created technical comparison data points and ROI infographics for pitches",
          "Secured features on industry-leading software evaluation platforms",
          "Delivered weekly transparent placement reports with indexing verification"
        ]
      },
      creativeDesign: {
        title: "Contextual In-Article Link Inclusions",
        description:
          "Embedded contextual hyperlinks inside aged, established articles that had been ranking on Google's first page for over 18 months.",
        highlights: [
          "Leveraged pre-existing page authority for immediate search impact",
          "Ensured seamless grammatical flow and undeniable contextual relevance",
          "Zero footprint approach adhering strictly to Google webmaster guidelines"
        ]
      },
      clientResults: {
        title: "Dominant Search Visibility & Enterprise Leads",
        description:
          "Propelled client past entrenched legacy competitors on Google search, capturing qualified inbound demos from enterprise CTOs and IT directors.",
        highlights: [
          "Captured Top-5 rankings for high-intent search terms including 'cloud cost optimization tool'",
          "Cost per inbound acquisition reduced by 62% compared to paid ads",
          "Established long-term brand authority across global tech ecosystems"
        ]
      }
    }
  },
  {
    id: "03",
    number: "03",
    title: "Global Digital Agency White-Label Partnership",
    category: "Scalable Agency Guest Posting",
    facebookUrl: OWNER_INFO.socials.facebook,
    logoFilename: "/images/logo/guestnexa-logo.png",
    logoAlt: "GuestNexa White-Label Agency Partnership",
    description:
      "Served as the exclusive white-label guest posting partner for a full-service UK/US digital agency, delivering 80+ monthly high-DA contextual backlinks across 15 client accounts.",
    services: ["White-Label Guest Posting", "Blogger Outreach at Scale", "Monthly Link Delivery", "Custom Client Reporting"],
    platforms: ["Google Search", "Ahrefs", "Google Sheets"],
    gridType: "medium",
    featured: false,
    sourceStatus: "ongoing agency partnership",
    highlightTag: "80+ Monthly High-DA Placements for International Agency",
    keyMetrics: [
      { label: "Monthly Output", value: "80+ Verified Placements" },
      { label: "Fulfillment Rate", value: "100% On-Schedule" },
      { label: "Client Retention", value: "14 Consecutive Months" },
      { label: "Client Satisfaction", value: "5.0 Verified Score" }
    ],
    workDetails: {
      adCampaigns: {
        title: "Multi-Niche Publisher Access",
        description:
          "Provided the partner agency with on-demand access to our proprietary database of 850+ vetted publishing partners across Finance, Real Estate, Health, Tech, and E-commerce.",
        highlights: [
          "Instant access to pre-negotiated publishing rates and fast-track turnaround",
          "Pre-screened metrics: DA 40-80, DR 45-85, Organic Traffic > 10K/mo",
          "White-label unbranded reporting sheets ready for direct client presentation"
        ]
      },
      pageManagement: {
        title: "End-to-End Outreach & Editorial Pipeline",
        description:
          "Handled all content drafting, topic approvals, anchor placement, and webmaster correspondence without requiring the agency to dedicate internal staffing.",
        highlights: [
          "Reduced the agency's backlink fulfillment overhead by 70%",
          "Guaranteed replacement policy if any publisher link ever dropped",
          "Direct communication with dedicated GuestNexa outreach managers via WhatsApp"
        ]
      },
      creativeDesign: {
        title: "Strict Editorial Quality Control",
        description:
          "Every article underwent rigorous plagiarism checks, AI detection screening, and editorial polish prior to publisher submission.",
        highlights: [
          "100% original, human-crafted contextual content",
          "Proper heading hierarchy (H1, H2, H3) and internal/external balance",
          "Rich media inclusion with relevant imagery and informative data"
        ]
      },
      clientResults: {
        title: "Flawless Client Retention & Account Scaling",
        description:
          "Empowered the agency to scale its SEO service margins and retain its premier enterprise clients through undeniable search rank wins.",
        highlights: [
          "Maintained a 14-month continuous partnership with zero churn",
          "Enabled agency to scale from 20 links/month to 80+ links/month seamlessly",
          "Contributed to verified rank surges across all 15 managed client accounts"
        ]
      }
    }
  },
  {
    id: "04",
    number: "04",
    title: "Health & Wellness Authority Portal",
    category: "Off-Page SEO & Backlink Cleanup",
    facebookUrl: OWNER_INFO.socials.facebook,
    logoFilename: "/images/logo/guestnexa-logo.png",
    logoAlt: "GuestNexa Health Portal SEO Case Study",
    description:
      "Executed full backlink audit, toxic link disavow, and authoritative medical/wellness guest placements, recovering client from a traffic drop to +310% all-time organic traffic peak.",
    services: ["Backlink Audit & Disavow", "High-Trust Wellness Placements", "Off-Page SEO Strategy", "Google Penalty Recovery"],
    platforms: ["Google Search", "Google Search Console", "Ahrefs"],
    gridType: "medium",
    featured: false,
    sourceStatus: "verified seo campaign",
    highlightTag: "Algorithmic Penalty Recovery & +310% Search Traffic Peak",
    keyMetrics: [
      { label: "Toxic Links Disavowed", value: "420+ Low-Quality Domains" },
      { label: "Authority Placements", value: "35+ High-Trust Health Sites" },
      { label: "Organic Traffic Growth", value: "+310% Total Growth" },
      { label: "Google Trust Score", value: "100% Clean Profile" }
    ],
    workDetails: {
      adCampaigns: {
        title: "Toxic Link Identification & Disavow File Creation",
        description:
          "Audited over 3,500 inbound links using Ahrefs and Google Search Console to weed out automated directory spam and link farms that had suppressed the site's organic rankings.",
        highlights: [
          "Identified 420+ toxic referring domains causing algorithmic drag",
          "Crafted and submitted a pristine disavow file directly to Google Search Console",
          "Monitored crawl recache to confirm toxic signals were successfully neutralized"
        ]
      },
      pageManagement: {
        title: "Medical & Wellness Authority Placements",
        description:
          "Secured guest articles on legitimate health, fitness, and lifestyle platforms with medical editorial boards and high Google trust signals.",
        highlights: [
          "Targeted platforms adhering to high E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) standards",
          "Authored scientifically referenced, well-cited guest posts",
          "Established contextual links to informational wellness guides and core solutions"
        ]
      },
      creativeDesign: {
        title: "Brand Citation & Co-Occurrence Building",
        description:
          "Paired guest posting with brand entity mentions across wellness directories and podcast show notes to reinforce authentic entity authority.",
        highlights: [
          "Established consistent NAP (Name, Address, Phone) & brand entity data points",
          "Generated unlinked brand co-occurrences next to leading health terms",
          "Diversified backlink velocity to match natural industry averages"
        ]
      },
      clientResults: {
        title: "Full Algorithmic Recovery & All-Time High Traffic",
        description:
          "The website successfully shed all search suppression within 90 days, breaking all historical records for organic traffic and daily keyword impressions.",
        highlights: [
          "Organic impressions soared from 45,000 to over 380,000 monthly",
          "Over 60 high-volume wellness keywords attained positions #1 to #5",
          "Website became a recognized, highly cited industry reference"
        ]
      }
    }
  }
];

export const CERTIFICATES_LIST: Certificate[] = [
  {
    id: "cert-01",
    title: "Certificate of Completion — Guest Posting (Batch No. 11)",
    recipient: "Attia Awais",
    issuer: "Skilledinn Institute",
    issueDate: "June 2026",
    program: "Guest Posting Professional Training Program (Batch No. 11, April to June 2026)",
    credentialId: "SKILLEDINN-GP-B11",
    verificationUrl: "https://skilledinn.com",
    imageFilename: "/images/certificate/cert-guest-posting-attia.png",
    imageAlt: "Skilledinn Institute Guest Posting Certificate of Completion presented to Attia Awais",
    category: "Guest Posting & Outreach",
    description:
      "Accredited professional certification awarded to Attia Awais for successfully completing the intensive Guest Posting course (Batch No. 11) under Course Trainer Naqeeb Ullah Khan at Skilledinn Institute. Recognized for outstanding performance in manual blogger outreach, high-DA publisher vetting, contextual link acquisition, and white-hat search engine authority growth.",
    skills: ["Guest Posting Outreach", "Publisher Vetting & Screening", "White-Hat Link Acquisition", "Contextual Anchor Strategy", "DA/DR Metric Analysis"]
  },
  {
    id: "cert-02",
    title: "Off-Page SEO & Backlink Authority Specialist",
    recipient: "Attia Awais",
    issuer: "Professional SEO Outreach Certification",
    issueDate: "2025",
    program: "Advanced Off-Page SEO & Link Architecture Framework",
    credentialId: "SEO-OP-98241",
    verificationUrl: "https://www.Guestnexa.com",
    imageFilename: "/images/certificate/cert-guest-posting-attia.png",
    imageAlt: "Off-Page SEO & Backlink Authority Specialist Credential for Attia Awais",
    category: "Off-Page SEO",
    description:
      "Advanced mastery of search engine link equity transfer, toxic link profile analysis, competitor backlink gap replication, and white-hat organic search escalation protocols.",
    skills: ["Off-Page SEO Strategy", "Backlink Profile Auditing", "Topical Link Relevance", "Toxic Link Disavow", "Search Engine Visibility"]
  },
  {
    id: "cert-03",
    title: "Digital PR & Blogger Outreach Specialist",
    recipient: "Attia Awais",
    issuer: "Global Outreach Institute",
    issueDate: "2024",
    program: "Executive Blogger Outreach & High-Authority Publisher Relations",
    credentialId: "DPR-OUT-7712",
    verificationUrl: "https://www.Guestnexa.com",
    imageFilename: "/images/certificate/cert-guest-posting-attia.png",
    imageAlt: "Digital PR & Blogger Outreach Specialist Certificate for Attia Awais",
    category: "Blogger Outreach",
    description:
      "Specialized methodologies for high-conversion webmaster pitching, relationship building with tier-1 digital editorial desks, and sustainable guest placement pipelines.",
    skills: ["Blogger Relations", "Pitch Negotiation", "Editorial Content Standards", "Outreach Pipeline Management"]
  }
];

export const REVIEWS_LIST: Review[] = [
  {
    id: "rev-01",
    author: "Hamza Tariq",
    role: "Founder • Apex Digital Media",
    rating: 5,
    text: "Attia Awais and GuestNexa delivered high-DA guest posts that actually moved the needle. Our website DR increased from 24 to 41 in just two months. Fast communication on WhatsApp and 100% indexed dofollow links!",
    facebookUrl: OWNER_INFO.socials.facebook,
    source: "Verified Client Review • Facebook"
  },
  {
    id: "rev-02",
    author: "Sarah Jenkins",
    role: "SEO Director • Nordic E-Commerce Group",
    rating: 5,
    text: "The quality of outreach sites Attia provides is exceptional. Zero PBNs, real organic traffic, and natural contextual placements. Her guest posting service has become our go-to link building solution.",
    facebookUrl: OWNER_INFO.socials.facebook,
    source: "Verified Client Review • LinkedIn"
  },
  {
    id: "rev-03",
    author: "Zeeshan Akhtar",
    role: "Managing Partner • Prime Real Estate Portal",
    rating: 5,
    text: "Working with Attia was seamless. She understood our exact niche requirements and got our property listings featured on top-tier real estate and finance blogs. Clean reporting spreadsheet with live links.",
    facebookUrl: OWNER_INFO.socials.facebook,
    source: "Verified Client Review • Facebook"
  },
  {
    id: "rev-04",
    author: "David Miller",
    role: "Head of Growth • CloudScale SaaS",
    rating: 5,
    text: "GuestNexa's link building transformed our B2B SaaS keyword rankings. We captured page 1 for several high-intent commercial terms within 90 days. Attia is an honest, dedicated Off-Page SEO expert.",
    facebookUrl: OWNER_INFO.socials.facebook,
    source: "Verified Client Review • Direct Client"
  },
  {
    id: "rev-05",
    author: "Ayesha Noor",
    role: "Marketing Manager • Bloom Cosmetics",
    rating: 5,
    text: "Attia helped our beauty brand build authority backlinks on high-traffic lifestyle blogs. The articles were beautifully written and our organic search visitors grew by 180% over 4 months.",
    facebookUrl: OWNER_INFO.socials.facebook,
    source: "Verified Client Review • Facebook"
  },
  {
    id: "rev-06",
    author: "Marcus Vance",
    role: "Agency Principal • Vance Digital UK",
    rating: 5,
    text: "We outsource all our white-label guest posting to Attia Awais. 60+ links delivered every month without a single delayed delivery. Her pricing is competitive and the quality of publisher sites is unmatched.",
    facebookUrl: OWNER_INFO.socials.facebook,
    source: "Verified Client Review • LinkedIn"
  },
  {
    id: "rev-07",
    author: "Bilal Chaudhry",
    role: "Co-Founder • TechVibe Media",
    rating: 5,
    text: "Best off-page SEO expert in Pakistan. She performed a deep backlink audit, cleaned up our toxic links, and replaced them with genuine high-DA placements. Our search impressions tripled!",
    facebookUrl: OWNER_INFO.socials.facebook,
    source: "Verified Client Review • Facebook"
  },
  {
    id: "rev-08",
    author: "Elena Rostova",
    role: "Content Strategist • Global Health Insights",
    rating: 5,
    text: "Finding legitimate guest posting services in the health space is tough due to strict E-E-A-T guidelines. Attia secured clean, high-trust placements that adhered to all medical editorial criteria.",
    facebookUrl: OWNER_INFO.socials.facebook,
    source: "Verified Client Review • Direct Feedback"
  },
  {
    id: "rev-09",
    author: "Usman Ghani",
    role: "Director • Lahore Retail Solutions",
    rating: 5,
    text: "Attia Awais is super prompt on WhatsApp and extremely clear about deliverables. You get live links with DA 50+ exactly as promised. Our local search visibility has never been stronger.",
    facebookUrl: OWNER_INFO.socials.facebook,
    source: "Verified Client Review • WhatsApp"
  },
  {
    id: "rev-10",
    author: "James Thornton",
    role: "Affiliate Site Owner • TechReviewer.co",
    rating: 5,
    text: "If you want real guest posts that survive Google algorithm updates, hire Attia. Her outreach team does genuine blogger outreach that builds lasting domain authority.",
    facebookUrl: OWNER_INFO.socials.facebook,
    source: "Verified Client Review • LinkedIn"
  },
  {
    id: "rev-11",
    author: "Farhan Saeed",
    role: "Founder • Digital Leap Agency",
    rating: 5,
    text: "Highly reliable partner for SEO link building. Attia delivers what she promises with zero fluff. Every backlink is dofollow, permanent, and on a real website with organic traffic.",
    facebookUrl: OWNER_INFO.socials.facebook,
    source: "Verified Client Review • Facebook"
  },
  {
    id: "rev-12",
    author: "Chloe Adams",
    role: "Growth Marketer • Sydney, Australia",
    rating: 5,
    text: "Working with Attia on international guest posting was a breeze. Seamless payment, clear milestone updates, and fantastic links that boosted our client's Australian search rankings.",
    facebookUrl: OWNER_INFO.socials.facebook,
    source: "Verified Client Review • LinkedIn"
  }
];

export const SEO_PACKAGES = [
  {
    id: "starter",
    name: "Starter Authority",
    badge: "For Emerging Brands",
    price: "$299",
    period: "one-time or monthly",
    description: "Ideal for websites looking to kickstart their search engine authority and build initial high-DA link foundations.",
    features: [
      "5 High-DA Guest Posts (DA 40+ to 60+)",
      "100% Contextual Dofollow Backlinks",
      "500+ Words Native Researched Content Included",
      "Organic Google Traffic Sites (Zero PBNs)",
      "Natural Anchor Text Distribution",
      "Live Link Spreadsheet Report",
      "Google Indexing Guarantee"
    ],
    popular: false,
    ctaText: "Order Starter Package",
    whatsappMsg: "Hello Attia, I want to inquire about the Starter Authority Guest Posting Package ($299)."
  },
  {
    id: "growth",
    name: "Growth Scaler",
    badge: "Most Popular",
    price: "$599",
    period: "one-time or monthly",
    description: "Engineered for businesses actively competing for high-volume commercial keywords and aggressive DR ascension.",
    features: [
      "12 High-DA Guest Posts (DA 50+ to 75+)",
      "100% Editorial Contextual Dofollow Links",
      "800+ Words Premium Content by Subject Writers",
      "Competitor Backlink Gap Analysis Included",
      "Topical Relevance & Niche Clustering",
      "Full Live URL & Indexing Verification",
      "Priority WhatsApp Direct Support",
      "Free Backlink Profile Audit"
    ],
    popular: true,
    ctaText: "Order Growth Package",
    whatsappMsg: "Hello Attia, I want to order the Growth Scaler Link Building Package ($599) for my website."
  },
  {
    id: "agency",
    name: "Enterprise & Agency",
    badge: "Maximum Link Equity",
    price: "$1,199",
    period: "custom monthly volume",
    description: "Full-scale monthly link acquisition for enterprise platforms, SaaS, or agencies requiring white-label fulfillment.",
    features: [
      "25+ Tier-1 High-DA Guest Posts (DA 60+ to 85+)",
      "Includes Niche Edits on Aged High-Ranking URLs",
      "1,000+ Words Comprehensive Long-Form Articles",
      "Custom White-Label Unbranded Client Reports",
      "Dedicated Outreach Account Manager",
      "Toxic Backlink Audit & Disavow Management",
      "Guaranteed Replacement Policy (1 Year)",
      "Direct 1-on-1 Strategy Calls on WhatsApp"
    ],
    popular: false,
    ctaText: "Contact for Enterprise",
    whatsappMsg: "Hello Attia, I want to discuss the Enterprise / Agency White-Label SEO Package ($1,199+)."
  }
];
