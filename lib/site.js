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
  email: "zinfotechai@gmail.com",
  phone: "+44 7887 280757",
  companyNumber: "12345678",
  location: "United Kingdom",
  website: "https://zinfotechai.com",
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
    id: "website-design-development",
    title: "Website Design & Development",
    description:
      "We design and build beautiful, fast, accessible websites — our core specialism — that represent your brand and turn visitors into customers.",
    projectId: "project-8",
  },
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
    id: "frontend-development",
    title: "Frontend Development",
    description:
      "Our frontend engineers craft responsive, accessible user interfaces with modern tools and careful attention to every detail.",
    projectId: "project-1",
  },
  {
    id: "backend-development",
    title: "Backend Development",
    description:
      "We build secure, scalable backends — APIs, databases and cloud infrastructure — that keep your products fast and reliable as they grow.",
    projectId: "project-7",
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
    "We mainly design and build websites and web applications — alongside SaaS products, AI agents and bespoke software — covering the full delivery lifecycle: planning, architecture, design, build, testing, deployment and ongoing support.",
  cta: {
    title: "Not sure which service you need?",
    buttonLabel: "Get in touch",
  },
  card: {
    contactLabel: "Get in touch",
    projectLabel: "View project",
  },
};

// Portfolio page copy — kept here so no text is hardcoded in app/portfolio/page.js.
export const portfolioPage = {
  title: "Portfolio",
  intro:
    "A selection of products we have designed, built and improved — from SaaS platforms and AI agents to e-commerce marketplaces and legacy modernisation.",
  note: {
    text: "More case studies coming soon",
    linkLabel: "Get in touch",
  },
  buttons: {
    viewCaseStudy: "View case study",
  },
  detail: {
    backLabel: "Back to portfolio",
    labels: {
      category: "Category",
      client: "Client",
      year: "Year",
      duration: "Duration",
      challenge: "The challenge",
      approach: "Our approach",
      features: "Key features",
      results: "Results",
      details: "Project details",
      relatedServices: "Related services",
      moreProjects: "More case studies",
    },
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

// Portfolio images: put a file in public/images/portfolio/ and set
// image: "/images/portfolio/<file>.jpg" — leave as null for the gradient placeholder.
export const projects = [
  {
    id: "project-1",
    slug: "saas-analytics-platform",
    title: "SaaS Analytics Platform",
    category: "SaaS",
    image: null,
    client: "Fintech startup",
    year: "2025",
    duration: "14 weeks",
    description:
      "A multi-tenant analytics dashboard helping subscription businesses track growth metrics in real time.",
    tags: ["SaaS", "Next.js", "AI"],
    challenge:
      "Subscription metrics were scattered across spreadsheets and disconnected tools, making it hard for the team to see churn, growth and revenue in one place.",
    approach:
      "We built a multi-tenant analytics platform on a modern full-stack foundation with real-time data pipelines, shipped in two-week increments alongside the client's team.",
    features: [
      "Multi-tenant dashboards with live charts",
      "MRR, churn and cohort reporting",
      "Role-based access for teams and guests",
    ],
    results: [
      "Reporting time cut from days to minutes",
      "A single source of truth for every team",
      "Architecture ready to scale to thousands of accounts",
    ],
  },
  {
    id: "project-2",
    slug: "ai-customer-support-agent",
    title: "AI Customer Support Agent",
    category: "AI & Automation",
    image: null,
    client: "Online retailer",
    year: "2025",
    duration: "8 weeks",
    description:
      "An intelligent support agent that resolves common customer enquiries automatically around the clock.",
    tags: ["AI Agents", "Automation", "APIs"],
    challenge:
      "The support inbox was flooded with repetitive questions, pushing replies to high-value customers hours behind.",
    approach:
      "We designed an AI agent powered by a large language model with retrieval over the help centre, integrated with the existing ticketing API and a graceful human hand-off.",
    features: [
      "24/7 automated first replies",
      "Answers grounded in the knowledge base",
      "Seamless hand-off to human agents",
    ],
    results: [
      "Around 70% of routine enquiries resolved automatically",
      "First-response time cut to seconds",
      "Support agents focused on complex cases",
    ],
  },
  {
    id: "project-3",
    slug: "e-commerce-mobile-app",
    title: "E-Commerce Mobile App",
    category: "Mobile",
    image: null,
    client: "Independent fashion brand",
    year: "2026",
    duration: "12 weeks",
    description:
      "A fast, accessible mobile shopping experience with secure payments and personalised recommendations.",
    tags: ["Mobile", "Full-Stack", "Payments"],
    challenge:
      "The brand needed a mobile experience that made shopping effortless and kept customers coming back, without the cost of two native codebases.",
    approach:
      "We designed and built a cross-platform mobile app with a shared API layer, secure payment integration and personalised recommendations driven by purchase behaviour.",
    features: [
      "Secure checkout with card and wallet payments",
      "Personalised product recommendations",
      "Push notifications for orders and offers",
    ],
    results: [
      "Higher mobile conversion rate",
      "Checkout completed in fewer taps",
      "Loyal customers returning through push campaigns",
    ],
  },
  {
    id: "project-4",
    slug: "business-technology-consultancy",
    title: "Business Technology Consultancy",
    category: "Consulting",
    image: null,
    client: "Growing UK SME",
    year: "2025",
    duration: "4 weeks",
    description:
      "A strategy engagement helping a growing business choose the right technology direction and plan a phased route to delivery.",
    tags: ["Consulting", "Strategy", "Roadmap"],
    challenge:
      "Rapid growth had left the business with manual processes and no clear technology direction, putting a costly wrong turn at every decision.",
    approach:
      "We ran discovery workshops, reviewed the current systems and produced a costed, phased roadmap that sequenced quick wins before larger investments.",
    features: [
      "Stakeholder discovery workshops",
      "Current-state systems review",
      "Costed, phased technology roadmap",
    ],
    results: [
      "A clear 12-month technology plan",
      "Investments prioritised by value and risk",
      "Expensive rework avoided before any build began",
    ],
  },
  {
    id: "project-5",
    slug: "multi-vendor-e-commerce-marketplace",
    title: "Multi-Vendor E-Commerce Marketplace",
    category: "E-Commerce",
    image: null,
    client: "Marketplace venture",
    year: "2026",
    duration: "16 weeks",
    description:
      "A multi-vendor marketplace with vendor onboarding, commission handling, secure checkout and an operations dashboard.",
    tags: ["E-Commerce", "Multi-Vendor", "Full-Stack"],
    challenge:
      "The founders wanted a marketplace where multiple vendors could sell independently, with commissions handled automatically and a checkout customers could trust.",
    approach:
      "We built a multi-vendor platform with vendor onboarding, an automated commission engine, secure payments and an operations dashboard, tested with real vendors before launch.",
    features: [
      "Vendor onboarding and self-serve dashboards",
      "Automated commission and payout handling",
      "Secure checkout with order management",
    ],
    results: [
      "First vendors onboarded within days of launch",
      "Commission calculations fully automated",
      "One dashboard for day-to-day operations",
    ],
  },
  {
    id: "project-6",
    slug: "saas-product-upgrade-bug-fix",
    title: "SaaS Product Upgrade & Bug Fix",
    category: "Maintenance",
    image: null,
    client: "B2B SaaS company",
    year: "2026",
    duration: "6 weeks",
    description:
      "A live SaaS product upgraded with new features and performance improvements, plus a full round of bug fixes.",
    tags: ["Upgrades", "Maintenance", "QA"],
    challenge:
      "Years of fast feature delivery had left a live product with recurring bugs, slow pages and rising churn from frustrated users.",
    approach:
      "We audited the codebase, triaged issues by impact, added a regression test suite and shipped fixes and performance improvements in small, safe releases.",
    features: [
      "Automated regression test suite",
      "Performance profiling and optimisation",
      "Continuous delivery pipeline for safe releases",
    ],
    results: [
      "Crashes and critical bugs cut dramatically",
      "Noticeably faster page and app load times",
      "Confident, frequent releases with less risk",
    ],
  },
  {
    id: "project-7",
    slug: "legacy-platform-rebuild",
    title: "Legacy Platform Rebuild",
    category: "Modernisation",
    image: null,
    client: "Established logistics firm",
    year: "2025",
    duration: "20 weeks",
    description:
      "An ageing platform rebuilt on a modern stack and migrated to the cloud, ready to scale with the business.",
    tags: ["Modernisation", "Migration", "Scalability"],
    challenge:
      "A decade-old platform on an unsupported stack was slow, expensive to maintain and unable to scale during peak seasons.",
    approach:
      "We re-architected the platform on a modern, cloud-native stack and migrated data in phases with zero downtime, keeping the business running throughout.",
    features: [
      "Phased migration with zero downtime",
      "Modern frontend and API architecture",
      "Cloud infrastructure with autoscaling",
    ],
    results: [
      "Pages loading several times faster",
      "Infrastructure costs reduced",
      "Platform ready for peak-season demand",
    ],
  },
  {
    id: "project-8",
    slug: "responsive-company-website",
    title: "Company Website Design & Build",
    category: "Web Design",
    image: null,
    client: "UK professional services firm",
    year: "2026",
    duration: "6 weeks",
    description:
      "A polished, fast company website with a flexible content layout, enquiry forms and strong search visibility.",
    tags: ["Web Design", "Next.js", "SEO"],
    challenge:
      "The firm's old website looked dated, loaded slowly on phones and failed to turn visitors into enquiries.",
    approach:
      "We redesigned the site around clear customer journeys, rebuilt it as a fast, accessible website and set up analytics to measure every enquiry.",
    features: [
      "Bespoke responsive design system",
      "Fast, accessible pages that score highly in audits",
      "Enquiry forms integrated with the CRM",
    ],
    results: [
      "A modern site that reflects the brand",
      "Dramatically faster load times on mobile",
      "More enquiries from organic search",
    ],
  },
  {
    id: "project-9",
    slug: "single-vendor-e-commerce-store",
    title: "Single-Vendor E-Commerce Store",
    category: "E-Commerce",
    image: null,
    client: "UK home & garden retailer",
    year: "2026",
    duration: "10 weeks",
    description:
      "A complete single-vendor online store with product catalogue, secure checkout, order management and a fast, mobile-first shopping experience.",
    tags: ["E-Commerce", "Full-Stack", "Payments"],
    challenge:
      "The retailer was selling only through marketplaces, paying rising commission fees and with no control over the customer experience.",
    approach:
      "We designed and built a single-vendor store with a fast storefront, secure payment processing and an admin panel for catalogue, stock and orders.",
    features: [
      "Product catalogue with search and filtering",
      "Secure checkout with card and wallet payments",
      "Admin panel for stock, orders and promotions",
    ],
    results: [
      "A commission-free direct sales channel",
      "Mobile-first experience with faster checkout",
      "Full control over brand and customer data",
    ],
  },
  {
    id: "project-10",
    slug: "business-web-application",
    title: "Business Web Application",
    category: "Web Application",
    image: null,
    client: "UK field services company",
    year: "2025",
    duration: "12 weeks",
    description:
      "A bespoke internal web application that digitises workflows, tracks jobs and gives management live reporting across teams.",
    tags: ["Web App", "Next.js", "Full-Stack"],
    challenge:
      "Scheduling, job tracking and reporting ran on spreadsheets and paper forms, causing missed jobs and no visibility for managers.",
    approach:
      "We mapped the team's workflows and built a bespoke web application with role-based access, live dashboards and automated notifications.",
    features: [
      "Job scheduling and dispatch board",
      "Role-based access for teams and managers",
      "Live reporting dashboards and exports",
    ],
    results: [
      "Administrative time significantly reduced",
      "Real-time visibility across every job",
      "Fewer errors and missed appointments",
    ],
  },
  {
    id: "project-11",
    slug: "ecommerce-backend-custom-apis",
    title: "E-Commerce Backend with Custom APIs",
    category: "Backend & APIs",
    image: null,
    client: "Multi-channel retail brand",
    year: "2026",
    duration: "9 weeks",
    description:
      "A custom e-commerce backend with tailored APIs connecting the storefront, payments, inventory and third-party fulfilment systems.",
    tags: ["Backend", "APIs", "E-Commerce"],
    challenge:
      "The storefront, warehouse and accounting tools did not talk to each other, so stock levels and orders were reconciled by hand.",
    approach:
      "We built a custom backend with well-documented REST APIs and webhooks, synchronising catalogue, stock, orders and payments across every system.",
    features: [
      "Custom REST APIs for catalogue, stock and orders",
      "Webhook-driven synchronisation with fulfilment",
      "Secure payment and accounting integrations",
    ],
    results: [
      "Stock levels accurate across every channel",
      "Order processing largely automated",
      "A flexible API layer ready for new sales channels",
    ],
  },
];
