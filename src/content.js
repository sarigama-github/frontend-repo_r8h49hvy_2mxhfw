export const siteMeta = {
  title: "AI Product Photo Generator",
  description: "Create studio-quality ecommerce product photos from a single shot. Save time, reduce costs, and boost conversions.",
  ogImage: "/og-image.png"
};

export const copy = {
  heroHeadline: "Create Studio-Quality Product Photos from a Single Shot",
  heroCta: "Start Free — 10 credits/day",
  howItWorksSteps: [
    { title: "Upload • Pick Views • Generate", desc: "Drop in a single photo. Choose presets or custom angles. Get consistent ecommerce-ready images." }
  ],
  pricingMicrocopy: "Free — 10 credits/day (monthly cap 50). Pro — 500 credits for $10.",
  pricing: {
    free: {
      name: "Free",
      price: "$0",
      details: [
        "10 credits/day",
        "Monthly cap 50",
        "Core features",
        "Watermark-free",
        "Email sign-up required"
      ]
    },
    pro: {
      name: "Pro",
      price: "$10",
      credits: 500,
      details: [
        "Priority queue",
        "Batch upload",
        "S3/Dropbox export",
        "API access"
      ],
      cta: "Buy 500 credits — $10"
    },
    examples: "1 hero + 4 angle images = 5 credits"
  },
  about: {
    title: "Why it matters",
    body: "This tool saves time, reduces the need for expensive studio photos, and increases conversions by producing standard ecommerce assets from a single product shot."
  },
  faq: [
    { q: "Which file types are supported?", a: "PNG and JPG up to 20MB per file. Transparent PNGs recommended for best results." },
    { q: "How accurate is rotation/angles?", a: "We approximate realistic rotations from a single image. For complex geometry, results may vary; preview before export." },
    { q: "Refunds?", a: "For Pro demo here, purchases are simulated. In production, refunds are handled via Stripe according to policy." },
    { q: "Commercial rights?", a: "You own the outputs produced from your uploaded images." },
    { q: "Are my images private?", a: "Uploads are processed securely and not shared. You can delete outputs anytime." },
    { q: "Batch limits?", a: "Pro supports batch upload across multiple SKUs. Limits depend on plan and system load." }
  ],
  footer: {
    links: [
      { label: "Home", href: "#top" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" }
    ],
    contact: "contact@productphotos.ai",
    social: [
      { label: "Twitter", href: "https://twitter.com" },
      { label: "GitHub", href: "https://github.com" }
    ],
    legal: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" }
    ]
  }
};
