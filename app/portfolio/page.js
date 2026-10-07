import Image from "next/image";
import Link from "next/link";
import { home, portfolioPage, projects } from "@/lib/site";

export const metadata = {
  title: "Portfolio",
  description: portfolioPage.intro,
};

// Decorative gradient variants for the project image placeholders.
const placeholderGradients = [
  "from-brand-600 via-brand-700 to-navy-900",
  "from-accent-600 via-brand-600 to-navy-900",
  "from-brand-500 via-accent-600 to-navy-900",
  "from-brand-700 via-accent-600 to-navy-950",
  "from-accent-500 via-brand-600 to-navy-900",
  "from-brand-600 via-accent-500 to-navy-900",
  "from-brand-700 via-brand-500 to-navy-950",
];

export default function PortfolioPage() {
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
              id="portfolio-heading"
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              {portfolioPage.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {portfolioPage.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Project cards */}
      <section
        aria-labelledby="portfolio-heading"
        className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <li key={project.id}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-700/60 bg-navy-900 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-2xl hover:shadow-brand-600/15"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${
                    placeholderGradients[index % placeholderGradients.length]
                  }`}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                      >
                        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                        <div className="absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                      </div>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white/25 transition-transform duration-500 group-hover:scale-110"
                      >
                        {project.title.charAt(0)}
                      </span>
                    </>
                  )}
                  <span className="absolute left-4 top-4 z-10 inline-flex items-center rounded-full border border-white/30 bg-navy-950/50 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur">
                    {project.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-semibold text-white transition-colors group-hover:text-accent-400">
                      {project.title}
                    </h2>
                    <svg
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-accent-400 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-navy-700 bg-navy-950/60 px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto pt-5 text-sm font-semibold text-accent-400">
                    {portfolioPage.buttons.viewCaseStudy}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="portfolio-cta-heading"
        className="mx-auto w-full max-w-7xl px-4 sm:px-6"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-navy-900 px-6 py-16 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl"
          />
          <div className="relative">
            <h2
              id="portfolio-cta-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {home.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-brand-100 sm:text-lg">
              {home.cta.description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 shadow-lg transition-colors hover:bg-accent-300 hover:text-navy-950"
              >
                {home.cta.buttonLabel}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {home.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <p className="text-center text-sm text-slate-400 sm:text-base">
          {portfolioPage.note.text}{" "}
          <Link
            href="/contact"
            className="font-semibold text-accent-400 underline-offset-4 transition-colors hover:text-accent-300 hover:underline"
          >
            {portfolioPage.note.linkLabel}
          </Link>
        </p>
      </div>
    </>
  );
}
