import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { home, portfolioPage, projects, services } from "@/lib/site";

const labels = portfolioPage.detail.labels;

// Decorative gradient variants for the project placeholders.
const placeholderGradients = [
  "from-brand-600 via-brand-700 to-navy-900",
  "from-accent-600 via-brand-600 to-navy-900",
  "from-brand-500 via-accent-600 to-navy-900",
  "from-brand-700 via-accent-600 to-navy-950",
  "from-accent-500 via-brand-600 to-navy-900",
  "from-brand-600 via-accent-800 to-navy-900",
  "from-brand-700 via-brand-700 to-navy-950",
];

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (project === undefined) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (project === undefined) notFound();

  const index = projects.indexOf(project);
  const relatedServices = services.filter((s) => s.projectId === project.id);
  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-96 w-[38rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-accent-400"
          >
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 12H5M12 19l-7-7 7-7"
              />
            </svg>
            {portfolioPage.detail.backLabel}
          </Link>

          <p className="mt-8 inline-flex items-center rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent-300 sm:text-sm">
            {project.category}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            {project.description}
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {labels.client}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                {project.client}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {labels.year}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                {project.year}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {labels.duration}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-white">
                {project.duration}
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-500"
            >
              {home.cta.buttonLabel}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-navy-700 bg-navy-900/60 px-6 py-3 text-base font-semibold text-slate-200 transition-colors hover:border-accent-500/50 hover:text-white"
            >
              {home.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Content + sidebar */}
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-3 lg:gap-14 lg:px-8">
        <div className="space-y-12 lg:col-span-2">
          <div
            className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-navy-700/60 bg-gradient-to-br ${
              placeholderGradients[index % placeholderGradients.length]
            }`}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
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
                  className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white/25"
                >
                  {project.title.charAt(0)}
                </span>
              </>
            )}
          </div>

          <section aria-labelledby="challenge-heading">
            <h2
              id="challenge-heading"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              {labels.challenge}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {project.challenge}
            </p>
          </section>

          <section aria-labelledby="approach-heading">
            <h2
              id="approach-heading"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              {labels.approach}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              {project.approach}
            </p>
          </section>

          <section aria-labelledby="features-heading">
            <h2
              id="features-heading"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              {labels.features}
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-navy-700/60 bg-navy-900 p-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent-500/10 text-accent-400"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-sm leading-6 text-slate-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="results-heading">
            <h2
              id="results-heading"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              {labels.results}
            </h2>
            <ul className="mt-6 space-y-4">
              {project.results.map((result) => (
                <li
                  key={result}
                  className="flex items-start gap-3 rounded-xl border border-brand-500/30 bg-brand-600/10 p-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-500/20 text-brand-300"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5-5 5M6 12h12"
                      />
                    </svg>
                  </span>
                  <span className="text-sm leading-6 text-slate-200">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-8 lg:col-span-1">
          <div className="rounded-2xl border border-navy-700/60 bg-navy-900 p-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              {labels.details}
            </h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-400">{labels.category}</dt>
                <dd className="font-medium text-white">{project.category}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-400">{labels.client}</dt>
                <dd className="text-right font-medium text-white">
                  {project.client}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-400">{labels.year}</dt>
                <dd className="font-medium text-white">{project.year}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-slate-400">{labels.duration}</dt>
                <dd className="font-medium text-white">{project.duration}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-navy-700/60 bg-navy-900 p-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              {labels.relatedServices}
            </h2>
            <ul className="mt-4 space-y-2">
              {relatedServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="flex items-center justify-between gap-3 rounded-lg border border-navy-700 bg-navy-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-accent-500/50 hover:text-accent-400"
                  >
                    {service.title}
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0"
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
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* More projects */}
      <section
        aria-labelledby="more-heading"
        className="border-t border-navy-700/60 bg-navy-900/50"
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2
            id="more-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            {labels.moreProjects}
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {otherProjects.map((other) => (
              <li key={other.id}>
                <Link
                  href={`/portfolio/${other.slug}`}
                  className="group flex overflow-hidden rounded-2xl border border-navy-700/60 bg-navy-950/60 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/60"
                >
                  <div
                    aria-hidden="true"
                    className={`w-24 shrink-0 bg-gradient-to-br ${
                      placeholderGradients[
                        projects.indexOf(other) % placeholderGradients.length
                      ]
                    }`}
                  />
                  <div className="p-5">
                    <p className="text-xs font-medium tracking-wide text-accent-400">
                      {other.category}
                    </p>
                    <p className="mt-1 font-semibold text-white transition-colors group-hover:text-accent-400">
                      {other.title}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="detail-cta-heading"
        className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-navy-900 px-6 py-16 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl"
          />
          <div className="relative">
            <h2
              id="detail-cta-heading"
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
    </>
  );
}
