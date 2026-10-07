// All site-wide text content lives here. Never hardcode copy in pages/components.

export const company = {
  name: "Z InfoTech AI Ltd",
  shortName: "Z InfoTech AI",
  tagline: "Smart software. Intelligent automation.",
  description:
    "Z InfoTech AI Ltd is a UK-registered IT company building MVPs, SaaS products, AI-powered solutions and bespoke software for startups and established businesses.",
  email: "hello@zinfotechai.co.uk",
  phone: "+44 (0)1234 567890",
  companyNumber: "12345678",
  location: "United Kingdom",
  website: "https://zinfotechai.co.uk",
};

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

// Home page copy — kept here so no text is hardcoded in app/page.js.
export const home = {
  hero: {
    badge: "UK-registered technology company",
    primaryCta: "Start a project",
    secondaryCta: "Explore services",
  },
  services: {
    title: "What we do",
    description:
      "From intelligent automation to full-stack product development, we deliver the engineering expertise your business needs to move forward.",
  },
  why: {
    title: "Why choose us",
    description:
      "A complete, proven software delivery process — from exclusive planning, modelling and architecture through testing and deployment to long-term support.",
  },
  cta: {
    title: "Have a project in mind?",
    description:
      "Tell us what you are building and we will help you plan the fastest, smartest route to launch.",
    buttonLabel: "Start a project",
  },
};

export const services = [
  {
    id: "mvp-saas",
    title: "MVP & SaaS Development",
    description:
      "We design and build minimum viable products and scalable SaaS platforms that get your idea to market quickly and grow with your business.",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions & Integrations",
    description:
      "We embed artificial intelligence into your products and workflows, from large language models to predictive analytics, to unlock real business value.",
  },
  {
    id: "ai-agents",
    title: "AI Agents & Automation",
    description:
      "We build intelligent agents and automated workflows that handle repetitive tasks, support your customers and free up your team to focus on what matters.",
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description:
      "We craft fast, accessible and responsive web applications that deliver a seamless experience across every browser and device.",
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description:
      "We develop polished mobile applications for iOS and Android that keep your customers engaged wherever they are.",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "We build tailor-made software around your exact business processes when off-the-shelf tools simply do not fit.",
  },
  {
    id: "full-stack",
    title: "Full-Stack Development",
    description:
      "Our full-stack engineers deliver complete solutions, from robust backends to refined frontends, as one coherent product.",
  },
  {
    id: "apis-integrations",
    title: "APIs & Third-Party Integrations",
    description:
      "We design secure APIs and connect the tools you rely on so your systems talk to each other and data flows freely.",
  },
  {
    id: "consulting",
    title: "Technology Consulting",
    description:
      "We advise on architecture, technology choices and digital strategy so you invest in the right solution the first time.",
  },
  {
    id: "client-it",
    title: "Client IT Services",
    description:
      "We provide reliable ongoing IT support and maintenance that keeps your systems secure, up to date and running smoothly.",
  },
];

export const whyChooseUs = [
  {
    id: "planning",
    title: "Exclusive planning & discovery",
    description:
      "Every project begins with dedicated planning — discovery workshops, requirements gathering and a clear roadmap — so scope, budget and priorities are agreed before any code is written.",
  },
  {
    id: "modelling",
    title: "Requirements & modelling",
    description:
      "We model data, processes and user journeys into clear diagrams and specifications, giving everyone a shared picture of the system before build work starts.",
  },
  {
    id: "architecture",
    title: "Technical architecture",
    description:
      "We design a secure, scalable architecture and choose the right stack, databases and integrations so your software stands on solid foundations.",
  },
  {
    id: "design",
    title: "UX & interface design",
    description:
      "Wireframes and polished, accessible interfaces are designed and reviewed with you, so the product feels right before development begins.",
  },
  {
    id: "development",
    title: "Agile development",
    description:
      "We build in short, transparent iterations with regular demos, so you see steady progress and can steer the project as it takes shape.",
  },
  {
    id: "testing",
    title: "Testing & quality assurance",
    description:
      "Unit, integration and end-to-end testing — automated where it counts — catches issues early, so what ships is reliable, secure and bug-free.",
  },
  {
    id: "deployment",
    title: "Deployment & launch",
    description:
      "We automate builds and releases with CI/CD, handle hosting setup and supervise a smooth, low-risk go-live with monitoring in place from day one.",
  },
  {
    id: "long-term-support",
    title: "Long-term support",
    description:
      "We stay by your side after launch with ongoing maintenance, monitoring and improvements as your business grows.",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "SaaS Analytics Platform",
    description:
      "A multi-tenant analytics dashboard helping subscription businesses track growth metrics in real time.",
    tags: ["SaaS", "Next.js", "AI"],
  },
  {
    id: "project-2",
    title: "AI Customer Support Agent",
    description:
      "An intelligent support agent that resolves common customer enquiries automatically around the clock.",
    tags: ["AI Agents", "Automation", "APIs"],
  },
  {
    id: "project-3",
    title: "E-Commerce Mobile App",
    description:
      "A fast, accessible mobile shopping experience with secure payments and personalised recommendations.",
    tags: ["Mobile", "Full-Stack", "Payments"],
  },
];
