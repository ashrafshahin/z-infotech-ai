import Link from "next/link";
import { projects, services, servicesPage } from "@/lib/site";

// Quick lookup so each service card can link to its demo project's detail page.
const projectMap = new Map(projects.map((project) => [project.id, project]));

export const metadata = {
  title: "Services",
  description: servicesPage.intro,
};

// Inline SVG icon paths for each service (decorative — titles are in headings).
const serviceIcons = {
  "mvp-saas": <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  "ai-solutions": (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </>
  ),
  "ai-agents": (
    <>
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M12 8V5M8 13h.01M16 13h.01M2 13v4M22 13v4" />
    </>
  ),
  "web-applications": (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  "mobile-applications": (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  "custom-software": <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  "full-stack": (
    <>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </>
  ),
  "apis-integrations": (
    <>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </>
  ),
  consulting: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  "client-it": (
    <>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </>
  ),
  "business-consultation": (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  "ecommerce-platforms": (
    <>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </>
  ),
  "product-upgrades": (
    <>
      <path d="M23 4v6h-6M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </>
  ),
  "legacy-modernisation": (
    <>
      <path d="M23 6l-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </>
  ),
  "website-design-development": (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
  "frontend-development": (
    <>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  "backend-development": (
    <>
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <path d="M6 6h.01M6 18h.01" />
    </>
  ),
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-96 w-[38rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h1
              id="services-heading"
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              {servicesPage.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {servicesPage.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section
        aria-labelledby="services-heading"
        className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const project = projectMap.get(service.projectId);
            return (
            <li key={service.id}>
              <article
                id={service.id}
                className="group flex h-full scroll-mt-24 flex-col rounded-2xl border border-navy-700/60 bg-navy-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-xl hover:shadow-brand-600/10"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-600/10 text-accent-400"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {serviceIcons[service.id]}
                  </svg>
                </span>
                <h2 className="mt-4 text-lg font-semibold text-white transition-colors group-hover:text-accent-400">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-500"
                  >
                    {servicesPage.card.contactLabel}
                  </Link>
                  <Link
                    href={project ? `/portfolio/${project.slug}` : "/portfolio"}
                    className="inline-flex items-center justify-center rounded-lg border border-navy-700 px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-accent-500/50 hover:text-white"
                  >
                    {servicesPage.card.projectLabel}
                  </Link>
                </div>
              </article>
            </li>
            );
          })}
        </ul>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="services-cta-heading"
        className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-navy-900 px-6 py-16 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl"
          />
          <div className="relative">
            <h2
              id="services-cta-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {servicesPage.cta.title}
            </h2>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 shadow-lg transition-colors hover:bg-accent-300 hover:text-navy-950"
              >
                {servicesPage.cta.buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
