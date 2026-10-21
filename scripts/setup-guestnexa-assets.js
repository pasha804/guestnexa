const sharp = require('../frontend/node_modules/sharp');
const fs = require('fs');
const path = require('path');

async function processAssets() {
  const logoPng = path.join(__dirname, '../frontend/public/images/logo/guestnexa-logo.png');
  
  // 1. Logo sizes
  await sharp(logoPng).resize(32, 32).png().toFile(path.join(__dirname, '../frontend/public/images/logo/guestnexa-32.png'));
  await sharp(logoPng).resize(192, 192).png().toFile(path.join(__dirname, '../frontend/public/images/logo/guestnexa-192.png'));
  await sharp(logoPng).resize(512, 512).png().toFile(path.join(__dirname, '../frontend/public/images/logo/guestnexa-512.png'));
  await sharp(logoPng).webp({ quality: 95 }).toFile(path.join(__dirname, '../frontend/public/images/logo/guestnexa-logo.webp'));

  // Also replace old MH marketing logo references or create fallbacks
  fs.copyFileSync(
    path.join(__dirname, '../frontend/public/images/logo/guestnexa-logo.png'),
    path.join(__dirname, '../frontend/public/images/logo/mh-marketing.png')
  );
  fs.copyFileSync(
    path.join(__dirname, '../frontend/public/images/logo/guestnexa-logo.webp'),
    path.join(__dirname, '../frontend/public/images/logo/mh-marketing.webp')
  );
  fs.copyFileSync(
    path.join(__dirname, '../frontend/public/images/logo/guestnexa-192.png'),
    path.join(__dirname, '../frontend/public/images/logo/mh-marketing-192.png')
  );
  fs.copyFileSync(
    path.join(__dirname, '../frontend/public/images/logo/guestnexa-32.png'),
    path.join(__dirname, '../frontend/public/images/logo/mh-marketing-32.png')
  );
  fs.copyFileSync(
    path.join(__dirname, '../frontend/public/images/logo/guestnexa-512.png'),
    path.join(__dirname, '../frontend/public/images/logo/mh-marketing-512.png')
  );

  // Favicon copies
  fs.copyFileSync(
    path.join(__dirname, '../frontend/public/images/logo/guestnexa-32.png'),
    path.join(__dirname, '../frontend/public/favicon.ico')
  );
  fs.copyFileSync(
    path.join(__dirname, '../frontend/public/images/logo/guestnexa-32.png'),
    path.join(__dirname, '../frontend/src/app/favicon.ico')
  );

  // 2. Profile Portrait
  const profileSrc = path.join(__dirname, '../new-asset/image.png');
  const profileDestPng = path.join(__dirname, '../frontend/public/images/profile/attia-portrait.png');
  const profileDestJpg = path.join(__dirname, '../frontend/public/images/profile/attia-portrait.jpg');
  const profileDestWebp = path.join(__dirname, '../frontend/public/images/profile/attia-portrait.webp');
  
  await sharp(profileSrc).png().toFile(profileDestPng);
  await sharp(profileSrc).jpeg({ quality: 95 }).toFile(profileDestJpg);
  await sharp(profileSrc).webp({ quality: 95 }).toFile(profileDestWebp);

  // Also update haider-portrait as fallback so any untouched reference shows Attia
  fs.copyFileSync(profileDestJpg, path.join(__dirname, '../frontend/public/images/profile/haider-portrait.jpg'));

  // 3. Certificate
  const certSrc = path.join(__dirname, '../new-asset/image copy 2.png');
  const certDestPng = path.join(__dirname, '../frontend/public/images/certificate/cert-guest-posting-attia.png');
  const certDestJpg = path.join(__dirname, '../frontend/public/images/certificate/cert-guest-posting-attia.jpg');
  const certDestWebp = path.join(__dirname, '../frontend/public/images/certificate/cert-guest-posting-attia.webp');

  await sharp(certSrc).png().toFile(certDestPng);
  await sharp(certSrc).jpeg({ quality: 95 }).toFile(certDestJpg);
  await sharp(certSrc).webp({ quality: 95 }).toFile(certDestWebp);

  // 4. OpenGraph Image
  const ogSvg = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#182A52" />
          <stop offset="70%" stop-color="#0f1b34" />
          <stop offset="100%" stop-color="#2587C4" stop-opacity="0.8" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)" />
      <circle cx="1060" cy="180" r="280" fill="#2587C4" opacity="0.25" />
      <circle cx="140" cy="520" r="320" fill="#FFB719" opacity="0.18" />
      <text x="80" y="160" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="800" fill="#FFB719" letter-spacing="3">GUESTNEXA • OFF-PAGE SEO AGENCY</text>
      <text x="80" y="250" font-family="system-ui, -apple-system, sans-serif" font-size="60" font-weight="800" fill="#FFFFFF">Guest Posting &amp; Link Building</text>
      <text x="80" y="325" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="700" fill="#2587C4">High Authority SEO Solutions</text>
      <text x="80" y="420" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="600" fill="#FFB719">Attia Awais — Founder &amp; Off-Page SEO Expert</text>
      <text x="80" y="465" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="500" fill="#E2E8F0">3+ Years Experience • Lahore, Pakistan • www.Guestnexa.com</text>
      <text x="80" y="530" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="500" fill="#94A3B8">High DA Backlinks • Dofollow Outreach • Google Authority Growth</text>
    </svg>
  `;

  const logoResized = await sharp(logoPng).resize(260, 260).toBuffer();
  await sharp(Buffer.from(ogSvg))
    .composite([
      { input: logoResized, top: 70, left: 880 }
    ])
    .png()
    .toFile(path.join(__dirname, '../frontend/public/images/og-logo.png'));

  fs.copyFileSync(
    path.join(__dirname, '../frontend/public/images/og-logo.png'),
    path.join(__dirname, '../frontend/public/images/og-image.png')
  );
  fs.copyFileSync(
    path.join(__dirname, '../frontend/public/images/og-logo.png'),
    path.join(__dirname, '../frontend/public/opengraph-image.png')
  );
  fs.copyFileSync(
    path.join(__dirname, '../frontend/public/images/og-logo.png'),
    path.join(__dirname, '../frontend/src/app/opengraph-image.png')
  );

  console.log('Setup script completed successfully!');
}

processAssets().catch(console.error);
