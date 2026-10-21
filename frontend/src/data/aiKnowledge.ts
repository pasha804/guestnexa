import { OWNER_INFO } from "./portfolioData";

export function isEnglishQuery(text: string): boolean {
  const t = text.toLowerCase();
  const englishKeywords = [
    "who", "what", "how", "services", "pricing", "package", "cost", "where",
    "tell", "help", "can you", "need", "start", "charge", "experience", "contact",
    "hire", "details", "portfolio", "guest posting", "backlinks", "seo", "link building"
  ];
  const urduKeywords = [
    "kya", "kaun", "kon", "hain", "chahiye", "karein", "kese", "kaise",
    "bhai", "rabta", "salam", "shukriya", "mujhe", "aapke", "krna", "hoga",
    "kitna", "kitne", "wala", "wali", "wale", "batayein", "batao"
  ];

  let urduScore = 0;
  let engScore = 0;
  urduKeywords.forEach((k) => {
    if (t.includes(k)) urduScore += 2;
  });
  englishKeywords.forEach((k) => {
    if (t.includes(k)) engScore += 1;
  });

  return engScore > urduScore;
}

export function matchInstantAnswer(query: string): string | null {
  if (!query) return null;
  const t = query.toLowerCase().trim();
  const isEng = isEnglishQuery(query);

  // 1. Who is Attia Awais / About GuestNexa
  if (
    /who is attia|attia awais kaun|attia kon|attia bibi|about attia|who are you|aap kaun|kaun hain|owner|founder|guestnexa|background|tajurba/.test(
      t
    )
  ) {
    if (isEng) {
      return `**Attia Awais** is the Founder of **GuestNexa** and an **Off-Page SEO Expert** with **3+ years of specialized experience** in high-authority backlink building.

• **Agency:** Founder of **GuestNexa** (www.Guestnexa.com, based in Lahore, Pakistan).
• **Core Services:** High-DA Guest Posting, Contextual Link Building & Niche Edits, and Comprehensive Off-Page SEO.
• **Publisher Network:** Direct publisher relationships across 850+ real websites with organic Google traffic (Zero PBNs).
• **Qualifications:** Certified in Guest Posting from Skilledinn Institute (Batch No. 11).

👉 **Direct WhatsApp:** [Chat with Attia Awais (${OWNER_INFO.phone})](${OWNER_INFO.whatsappUrl})`;
    } else {
      return `**Attia Awais** **GuestNexa** ki Founder aur **Off-Page SEO Expert** hain jinke paas **3+ saal ka specialized experience** hai.

• **Agency:** **GuestNexa** (www.Guestnexa.com, Lahore, Pakistan).
• **Core Specialization:** High-DA Guest Posting, Link Building & Niche Edits, aur Off-Page SEO services.
• **Publisher Network:** 850+ real organic websites ke sath direct outreach relations (No PBNs).
• **Credentials:** Skilledinn Institute se Guest Posting certified (Batch 11).

👉 **Direct WhatsApp:** [Attia Awais se WhatsApp par rabta karein (${OWNER_INFO.phone})](${OWNER_INFO.whatsappUrl})`;
    }
  }

  // 2. Guest Posting & Backlink Requirements
  if (
    /guest post|guest posting|backlink|backlinks|dofollow|index|kya provide|kya chahiye|requirements|start/.test(
      t
    )
  ) {
    if (isEng) {
      return `To start a **High-DA Guest Posting or Link Building** campaign with GuestNexa, you only need to provide:

1. **Target URL(s):** The pages you want to build authority and ranking for.
2. **Target Anchors & Keywords:** The exact anchor texts or branded keywords you prefer.
3. **Niche & Quality Criteria:** Any specific DA/DR thresholds (e.g. DA 50+, organic traffic > 10K).

GuestNexa handles content drafting, editorial outreach, quality screening, and live index verification!

👉 **Ready to begin?** [Discuss your backlink targets on WhatsApp](${OWNER_INFO.whatsappUrl})`;
    } else {
      return `Guest Posting aur High-DA Link Building shuru karne ke liye sirf **3 details** darkar hoti hain:

1. **Website URL(s):** Jin pages ko rank karwana hai.
2. **Anchor Texts & Keywords:** Jin keywords par backlinks chahiye.
3. **Niche / DA Requirement:** Niche aur pasandeeda DA/DR criteria (e.g. DA 50+).

Article writing, webmaster outreach, aur Google live indexing Attia Awais ki team mukammal deliver karti hai!

👉 **Abhi details WhatsApp par share karein:** [WhatsApp (${OWNER_INFO.phone})](${OWNER_INFO.whatsappUrl})`;
    }
  }

  // 3. Pricing & Packages
  if (
    /price|pricing|package|packages|rate|rates|cost|fees|charges|kitna kharcha|budget|kitne paise|kitne charges/.test(
      t
    )
  ) {
    if (isEng) {
      return `GuestNexa offers transparent, high-ROI SEO packages tailored to your domain goals:

• **Starter Authority ($299):** 5 High-DA Guest Posts (DA 40-60+), dofollow links, native content included, live index report.
• **Growth Scaler ($599):** 12 High-DA Guest Posts (DA 50-75+), competitor gap replication, topical clustering, priority support.
• **Enterprise & Agency ($1,199+):** 25+ Tier-1 Guest Posts (DA 60-85+), niche edits, white-label client reports, dedicated manager.

👉 **Get custom niche list & quote:** [Chat directly on WhatsApp (${OWNER_INFO.phone})](${OWNER_INFO.whatsappUrl})`;
    } else {
      return `GuestNexa ke transparent SEO outreach packages:

• **Starter Authority ($299):** 5 High-DA Guest Posts (DA 40-60+), 100% contextual dofollow, written content included, live report.
• **Growth Scaler ($599):** 12 High-DA Guest Posts (DA 50-75+), competitor gap replication, topical authority growth.
• **Enterprise & Agency Tier ($1,199+):** 25+ High-DA placements, niche edits, white-label reports for agencies.

👉 **Custom quote ke liye WhatsApp karein:** [WhatsApp (${OWNER_INFO.phone})](${OWNER_INFO.whatsappUrl})`;
    }
  }

  // 4. Services Offered
  if (
    /service|services|kya services|kaun kaun si|what services|offer|solutions|kya kaam/.test(
      t
    )
  ) {
    if (isEng) {
      return `**GuestNexa** specializes in 3 core Off-Page SEO services:

• 📝 **Guest Posting:** Manual outreach on real high-DA/DR websites with active organic traffic and permanent dofollow links.
• 🔗 **Link Building & Niche Edits:** In-content insertions on established, aged URLs and competitor backlink gap replication.
• 📈 **Off-Page SEO & Backlink Audits:** Full toxic link audit, Google Search Console disavow cleanup, and brand entity signals.

👉 **Explore full details:** [Discuss on WhatsApp](${OWNER_INFO.whatsappUrl}) or visit our [Services Page](/services)`;
    } else {
      return `**GuestNexa** 3 core Off-Page SEO services provide karta hai:

• 📝 **Guest Posting:** Real organic traffic websites par contextual dofollow article placements (No PBNs).
• 🔗 **Link Building & Niche Edits:** Established high-ranking URLs mein contextual in-content link insertions.
• 📈 **Off-Page SEO & Audits:** Toxic link audit, disavow file preparation, aur search authority growth.

👉 **Services discuss karein:** [WhatsApp (${OWNER_INFO.phone})](${OWNER_INFO.whatsappUrl})`;
    }
  }

  // 5. Greetings
  if (
    /^(salam|assalam|aoa|asalam|hello|hi|hey|kese ho|kaise ho|hie|slaam)/.test(t)
  ) {
    if (isEng) {
      return `Hello! 👋 Welcome to **GuestNexa** (www.Guestnexa.com). I am Attia Awais's AI Assistant.

I can guide you on high-DA guest posting, white-hat link building, publisher lists, and SEO packages.

How can I help you improve your search rankings today?`;
    } else {
      return `Walaikum Assalam! 👋 Welcome to **GuestNexa** (www.Guestnexa.com). Main Attia Awais ka AI Assistant hoon.

Main aapko high-DA guest posting, white-hat link building, niche publisher lists, aur SEO packages ke bare mein instant guide kar sakta hoon.

Aap kis service ke bare mein janna chahte hain?`;
    }
  }

  // 6. Contact & WhatsApp
  if (
    /contact|whatsapp|phone|number|rabta|call|email|office|location|kahan se|address/.test(
      t
    )
  ) {
    if (isEng) {
      return `Connect directly with Attia Awais and GuestNexa:

• 📱 **Direct WhatsApp & Phone:** ${OWNER_INFO.phone}
• 💬 **WhatsApp Direct Link:** [Click to Chat on WhatsApp](${OWNER_INFO.whatsappUrl})
• 📧 **Email:** ${OWNER_INFO.email}
• 🌐 **Website:** www.Guestnexa.com
• 📍 **Location:** Lahore, Pakistan (Serving international clients in USA, UK, Canada, UAE, etc.)`;
    } else {
      return `Attia Awais aur GuestNexa se direct rabta:

• 📱 **WhatsApp & Phone:** ${OWNER_INFO.phone}
• 💬 **Direct WhatsApp Chat:** [WhatsApp Link](${OWNER_INFO.whatsappUrl})
• 📧 **Email:** ${OWNER_INFO.email}
• 🌐 **Website:** www.Guestnexa.com
• 📍 **Location:** Lahore, Pakistan`;
    }
  }

  return null;
}
