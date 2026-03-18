import { HomeContent } from "./home";

// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ... [Type definitions unchanged, omitted for brevity. Retain definitions exactly as before] ...

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Swift",
    badgeOuter: "Accelerate Relationships",
    titleBefore: "Run your internal",
    titleHighlight: "CRM",
    titleAfter: "– beautifully simple.",
    subtitle:
      "SwiftCRM gives your team one workspace for managing contacts, companies, and deals—all with speed, clarity, and control.",
    primaryCta: { label: "Get Started", href: "/auth#signup" },
    secondaryCta: { label: "See CRM demo", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "SwiftCRM dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Trusted technologies power SwiftCRM",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Postgres" },
      { icon: "Cookie", name: "SendGrid" },
      { icon: "Drama", name: "Drizzle ORM" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why SwiftCRM",
    heading: "Redefine internal CRM efficiency",
    description:
      "Built for teams who want a truly productive, private, and reliable CRM platform—without the bloat and hassle of legacy systems.",
    items: [
      {
        icon: "Blocks",
        title: "All-in-one Workspace",
        description: "Centralize contacts, companies, and communications without context-switching or scattered spreadsheets.",
      },
      {
        icon: "LineChart",
        title: "Fast, Familiar UX",
        description: "Minimal friction, keyboard-friendly UI, and zero learning curve so your team can adopt instantly.",
      },
      {
        icon: "Wallet",
        title: "Data Ownership",
        description: "Your data stays yours—100% under your control, with export at any time and no vendor lock-in.",
      },
      {
        icon: "Sparkle",
        title: "Modern Enterprise Security",
        description: "Robust auth, strong encryption, and inheritance from industry best-practices by default.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "CRM Features",
    heading: "What makes SwiftCRM powerful",
    subtitle:
      "Everything your team needs to organize, outreach, and close—the essentials, without extra clutter.",
    items: [
      { icon: "User", title: "Contacts Management", description: "Add, update, and search all your people in one easy spot. Filter by tags, company or notes." },
      { icon: "Building2", title: "Companies Directory", description: "Keep all organizations, vendors, and partners updated with key info and relationship history." },
      { icon: "Mail", title: "Group Outreach", description: "Send tailored group or one-to-one emails using built-in templates and tracking (coming soon)." },
      { icon: "Users", title: "Team Permissions", description: "Multi-tenant teams. Control access, invite colleagues, and manage roles easily." },
      { icon: "Table", title: "Custom Fields", description: "Add fields unique to your workflow—track birthdays, renewal dates, reference IDs, and more." },
      { icon: "CloudUpload", title: "Instant Data Export", description: "Download all your CRM data at any time. Your data is never locked in or hidden." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Core Capabilities",
    heading: "What comes standard",
    subtitle:
      "SwiftCRM empowers internal teams to move with clarity and control.",
    items: [
      { title: "Email & Password Auth", description: "Onboard your team securely. Invite, verify, and manage users with ease.", pro: false },
      { title: "Team Management", description: "Create teams, assign roles, and control access for growth or audits.", pro: false },
      { title: "Contact & Company CRUD", description: "Add, edit, search, and manage all relationships in one place.", pro: false },
      { title: "Drizzle + Postgres Backend", description: "Enterprise-grade storage for reliability, privacy, and exportability.", pro: false },
      { title: "Dockerized for CI/CD", description: "Zero-surprise builds and deployments. Use anywhere, from localhost to Vercel to Railway.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Customer Stories",
    heading: "Why teams switch to SwiftCRM",
    reviews: [
      { image: "/demo-img.jpg", name: "Chirag Dodiya", role: "Founder", comment: "We needed a CRM we could truly own—and SwiftCRM let our team focus on results, not administration.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Sara Lee", role: "Ops Lead, Makerway", comment: "Love the simplicity. We moved our address book into SwiftCRM and never looked back.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Jordan Kalb", role: "CTO, Actualize", comment: "Contacts and companies just work. Our team finally aligned on a single process.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Lina Brown", role: "Compliance Manager", comment: "Data export and audit control were critical; SwiftCRM nails this without extra hoops.", rating: 5.0 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "SwiftCRM Core Team",
    heading: "Meet our builder team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Product Founder", "Fullstack & DevOps"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/chiragdodiya/" },
          { name: "Github", url: "https://github.com/chiragd" },
        ],
      },
      {
        imageUrl: "/team3.jpg",
        firstName: "Leo",
        lastName: "Miranda",
        positions: ["Lead Engineer", "Database & Backend"],
        socialNetworks: [
          { name: "Github", url: "https://github.com/leoMirandaa" },
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Pam",
        lastName: "Taylor",
        positions: ["Frontend & Design Systems"],
        socialNetworks: [
          { name: "X", url: "https://x.com/leo_mirand4" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Simple Pricing",
    heading: "Transparent plans for every team",
    subtitle: "Start with essentials, scale as you grow. No hidden fees or exports.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Team",
        popular: true,
        price: 29,
        description: "All core CRM features. Unlimited records. Suited for growing internal teams.",
        buttonText: "Start your workspace",
        benefits: ["Unlimited contacts", "Unlimited companies", "All core CRM features", "Team roles and invites", "Data export"],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 99,
        description: "Need SSO, custom fields, or audit trail? Let's talk.",
        buttonText: "Contact sales",
        benefits: ["All from Team", "SAML SSO", "Field-level audit log", "Custom support", "White-glove onboarding"],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to SwiftCRM",
    description:
      "Want a demo, special integration, or launch support? Message Chirag Dodiya, our founder, directly.",
    mailtoAddress: "hi@chirag.co",
    info: {
      address: { label: "Location", value: "Remote: India & worldwide" },
      phone: { label: "Phone", value: "" },
      email: { label: "Email", value: "hi@chirag.co" },
      hours: { label: "Available", value: ["Monday - Saturday", "10AM - 8PM IST"] },
    },
    formSubjects: [
      "CRM Demo",
      "Custom Integration",
      "Migration Help",
      "Feature Request",
      "Enterprise Plan"
    ],
    formSubmitLabel: "Send message",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Common Questions",
    items: [
      { question: "Is SwiftCRM open source?", answer: "For now, it’s private. Contact Chirag (hi@chirag.co) for partnership or licensing." },
      { question: "Can I export all my CRM data?", answer: "Yes – you can download all contacts and data anytime, no lock-in." },
      { question: "Is data secure?", answer: "Yes. SwiftCRM inherits modern security from Postgres, Drizzle, and Next.js, plus encryption and strict access controls." },
      { question: "Who owns my account?", answer: "Your own team. SwiftCRM never sells or shares your data." },
      { question: "How do I get started?", answer: "Just sign up! Your own secure workspace is live in under a minute." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "SwiftCRM",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "hi@chirag.co", href: "mailto:hi@chirag.co" },
          { label: "Github", href: "https://github.com/chiragd" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "CRM Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Chirag", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/chiragd" },
          { label: "X", href: "https://x.com/chiragdodiya" },
        ],
      },
    ],
    copyright: "© 2026 SwiftCRM. Built for fast teams.",
    attribution: { label: "Powered by Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "SwiftCRM",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#team", label: "Team" },
      { href: "/#faq", label: "FAQ" },
      { href: "/#contact", label: "Contact" },
    ],
    featureDropdownLabel: "Why SwiftCRM?",
    featureImage: { src: "/demo-img.jpg", alt: "SwiftCRM preview" },
    features: [
      { title: "Contacts & Companies", description: "Modern, fast, and flexible CRM tables." },
      { title: "Teams & Permissions", description: "Every workspace is private, with multi-user support." },
      { title: "Data Export", description: "You control your data: full export, always available." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragd", ariaLabel: "View on GitHub" },
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}