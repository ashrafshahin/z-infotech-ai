import Link from "next/link";
import { company, home, services, whyChooseUs } from "@/lib/site";

const featuredServices = services.slice(0, 6);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent-300 sm:text-sm">
              {home.hero.badge}
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {company.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {company.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-500"
              >
                {home.hero.primaryCta}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-navy-700 bg-navy-900/60 px-6 py-3 text-base font-semibold text-slate-200 transition-colors hover:border-accent-500/50 hover:text-white"
              >
                {home.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section
        aria-labelledby="services-heading"
        className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="max-w-2xl">
          <h2
            id="services-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {home.services.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            {home.services.description}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <li key={service.id}>
              <Link
                href="/services"
                className="group flex h-full flex-col rounded-2xl border border-navy-700/60 bg-navy-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-xl hover:shadow-brand-600/10"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-bold text-white"
                >
                  {service.title.charAt(0)}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white transition-colors group-hover:text-accent-400">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Why choose us */}
      <section
        aria-labelledby="why-heading"
        className="border-y border-navy-700/60 bg-navy-900/50"
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-2xl">
            <h2
              id="why-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {home.why.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              {home.why.description}
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((point) => (
              <li key={point.id}>
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 text-accent-400"
                >
                  <svg
                    className="h-5 w-5"
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
                <h3 className="mt-4 text-base font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {point.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section
        aria-labelledby="cta-heading"
        className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-navy-900 px-6 py-16 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl"
          />
          <div className="relative">
            <h2
              id="cta-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {home.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-brand-100 sm:text-lg">
              {home.cta.description}
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 shadow-lg transition-colors hover:bg-accent-300 hover:text-navy-950"
              >
                {home.cta.buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
