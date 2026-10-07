// All site-wide text content lives here. Never hardcode copy in pages/components.

export const company = {
  name: "Z InfoTech AI Ltd",
  shortName: "Z InfoTech AI",
  tagline: "Smart software. Intelligent automation.",
  slogan: "Building Intelligent Digital Solutions.",
  sloganSub:
    "Next-generation Information Technology and Artificial Intelligence.",
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

// About page copy — kept here so no text is hardcoded in app/about/page.js.
export const about = {
  hero: {
    badge: "Who we are",
    title: "A UK technology partner for startups and established businesses",
    description:
      "From first sketch to live product, we plan, design, build and support software that solves real problems — combining modern engineering with practical AI.",
  },
  vision: {
    title: "Our vision",
    statement:
      "To lead global innovation, engineer the future through intelligent technology.",
  },
  mission: {
    title: "Our mission",
    statement:
      "We design and build intelligent software, web applications, mobile apps, AI-powered systems, and digital platforms that solve real-world problems, improve efficiency, accelerate business growth, and create meaningful global impact.",
  },
  valuesTitle: "Core values",
  values: [
    {
      id: "innovation-first",
      title: "Innovation First",
      description:
        "We challenge conventional thinking and continuously pursue breakthrough ideas, technologies, and solutions.",
    },
    {
      id: "excellence",
      title: "Excellence Without Compromise",
      description:
        "We maintain the highest standards in design, engineering, security, performance, and customer experience.",
    },
    {
      id: "integrity-trust",
      title: "Integrity & Trust",
      description:
        "We act with honesty, accountability, transparency, and respect in every relationship and decision.",
    },
    {
      id: "customer-success",
      title: "Customer Success",
      description:
        "We succeed when our customers succeed. Every product and service must create measurable value.",
    },
    {
      id: "continuous-learning",
      title: "Continuous Learning",
      description:
        "We embrace curiosity, research, experimentation, and lifelong learning to remain at the forefront of technology.",
    },
    {
      id: "ownership-accountability",
      title: "Ownership & Accountability",
      description:
        "We take responsibility for our actions, commitments, and outcomes, treating the company's mission as our own.",
    },
    {
      id: "global-impact",
      title: "Global Impact",
      description:
        "We build technology with the ambition to improve lives, strengthen communities, and contribute to progress worldwide.",
    },
    {
      id: "people-empowerment",
      title: "People Empowerment",
      description:
        "We believe technology should amplify human creativity, productivity, and opportunity rather than replace human potential.",
    },
  ],
  howWeWork: {
    title: "How we work",
    description:
      "A simple, proven path from first conversation to long-term success.",
    steps: [
      {
        id: "discover",
        title: "Discover",
        description:
          "We start by understanding your goals, users and constraints, then agree on scope, priorities and a realistic roadmap.",
      },
      {
        id: "design",
        title: "Design",
        description:
          "We model the solution, design the architecture and shape the interfaces, reviewing everything with you before build work begins.",
      },
      {
        id: "build",
        title: "Build",
        description:
          "We develop in short iterations with regular demos, automated testing and continuous feedback so the product stays on track.",
      },
      {
        id: "support",
        title: "Support",
        description:
          "After launch we monitor, maintain and improve your software, helping it evolve as your business grows.",
      },
    ],
  },
  managingDirector: {
    title: "A message from our Managing Director",
    name: "Ashraf Shahin",
    role: "Managing Director",
    image: {
      src: "/images/managing-director.jpg",
      alt: "Ashraf Hossein Shahin, Managing Director of Z InfoTech AI Ltd, in front of Tower Bridge, London",
    },
    paragraphs: [
      "Thank you for taking the time to get to know Z InfoTech AI Ltd. When I founded this company, my goal was simple: to give businesses access to high-quality software engineering and practical AI expertise, delivered honestly and without unnecessary complexity.",
      "We have built our reputation on clear communication, careful craftsmanship and long-term relationships. Whether we are shaping an MVP, integrating AI into an existing product or supporting a live platform, we treat every project as if it were our own.",
      "I am proud of the team we have assembled and the results we deliver for our clients. I would welcome the chance to discuss how we can help you turn your ideas into software that makes a real difference.",
    ],
  },
};

export const services = [
  {
    id: "mvp-saas",
    title: "MVP & SaaS Development",
    description:
      "We design and build minimum viable products and scalable SaaS platforms that get your idea to market quickly and grow with your business.",
    projectId: "project-1",
  },
  {
    id: "ai-solutions",
    title: "AI Solutions & Integrations",
    description:
      "We embed artificial intelligence into your products and workflows, from large language models to predictive analytics, to unlock real business value.",
    projectId: "project-2",
  },
  {
    id: "ai-agents",
    title: "AI Agents & Automation",
    description:
      "We build intelligent agents and automated workflows that handle repetitive tasks, support your customers and free up your team to focus on what matters.",
    projectId: "project-2",
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description:
      "We craft fast, accessible and responsive web applications that deliver a seamless experience across every browser and device.",
    projectId: "project-1",
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description:
      "We develop polished mobile applications for iOS and Android that keep your customers engaged wherever they are.",
    projectId: "project-3",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "We build tailor-made software around your exact business processes when off-the-shelf tools simply do not fit.",
    projectId: "project-7",
  },
  {
    id: "full-stack",
    title: "Full-Stack Development",
    description:
      "Our full-stack engineers deliver complete solutions, from robust backends to refined frontends, as one coherent product.",
    projectId: "project-1",
  },
  {
    id: "apis-integrations",
    title: "APIs & Third-Party Integrations",
    description:
      "We design secure APIs and connect the tools you rely on so your systems talk to each other and data flows freely.",
    projectId: "project-2",
  },
  {
    id: "consulting",
    title: "Technology Consulting",
    description:
      "We advise on architecture, technology choices and digital strategy so you invest in the right solution the first time.",
    projectId: "project-4",
  },
  {
    id: "client-it",
    title: "Client IT Services",
    description:
      "We provide reliable ongoing IT support and maintenance that keeps your systems secure, up to date and running smoothly.",
    projectId: "project-6",
  },
  {
    id: "business-consultation",
    title: "Business Consultation",
    description:
      "We work with you to validate ideas, define requirements and shape a practical technology roadmap before you commit to a build.",
    projectId: "project-4",
  },
  {
    id: "ecommerce-platforms",
    title: "E-Commerce Platforms",
    description:
      "We build single-vendor and multi-vendor e-commerce platforms with secure payments, catalogue management and scalable order processing.",
    projectId: "project-5",
  },
  {
    id: "product-upgrades",
    title: "Ready Product Upgrades & Bug Fixing",
    description:
      "We upgrade existing products with new features and performance improvements, and fix bugs quickly to keep them stable and current.",
    projectId: "project-6",
  },
  {
    id: "legacy-modernisation",
    title: "Legacy Platform Modernisation",
    description:
      "We rebuild old platforms on the latest stack so they are faster, more secure and ready to scale, without losing what already works.",
    projectId: "project-7",
  },
];

// Services page copy — kept here so no text is hardcoded in app/services/page.js.
export const servicesPage = {
  title: "Services",
  intro:
    "From MVPs and SaaS platforms to AI agents and bespoke software, we cover the full delivery lifecycle — planning, architecture, design, build, testing, deployment and ongoing support.",
  cta: {
    title: "Not sure which service you need?",
    buttonLabel: "Get in touch",
  },
  card: {
    contactLabel: "Get in touch",
    projectLabel: "View project",
  },
};

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
  {
    id: "project-4",
    title: "Business Technology Consultancy",
    description:
      "A strategy engagement helping a growing business choose the right technology direction and plan a phased route to delivery.",
    tags: ["Consulting", "Strategy", "Roadmap"],
  },
  {
    id: "project-5",
    title: "Multi-Vendor E-Commerce Marketplace",
    description:
      "A multi-vendor marketplace with vendor onboarding, commission handling, secure checkout and an operations dashboard.",
    tags: ["E-Commerce", "Multi-Vendor", "Full-Stack"],
  },
  {
    id: "project-6",
    title: "SaaS Product Upgrade & Bug Fix",
    description:
      "A live SaaS product upgraded with new features and performance improvements, plus a full round of bug fixes.",
    tags: ["Upgrades", "Maintenance", "QA"],
  },
  {
    id: "project-7",
    title: "Legacy Platform Rebuild",
    description:
      "An ageing platform rebuilt on a modern stack and migrated to the cloud, ready to scale with the business.",
    tags: ["Modernisation", "Migration", "Scalability"],
  },
];
