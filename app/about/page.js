import Image from "next/image";
import Link from "next/link";
import { about, company, home } from "@/lib/site";

export const metadata = {
  title: "About",
  description: about.hero.description,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-96 w-[38rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent-300 sm:text-sm">
              {about.hero.badge}
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {about.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {about.hero.description}
            </p>
            <p className="mt-6 text-xl font-semibold text-accent-400 sm:text-2xl">
              {company.slogan}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-base">
              {company.sloganSub}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <section
            aria-labelledby="vision-heading"
            className="rounded-2xl border border-navy-700/60 bg-navy-900 p-8 sm:p-10"
          >
            <h2
              id="vision-heading"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              {about.vision.title}
            </h2>
            <blockquote className="mt-5 border-l-2 border-accent-500 pl-4 text-lg leading-8 text-accent-300">
              <p>{about.vision.statement}</p>
            </blockquote>
          </section>

          <section
            aria-labelledby="mission-heading"
            className="rounded-2xl border border-navy-700/60 bg-navy-900 p-8 sm:p-10"
          >
            <h2
              id="mission-heading"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              {about.mission.title}
            </h2>
            <blockquote className="mt-5 border-l-2 border-brand-500 pl-4 text-lg leading-8 text-slate-300">
              <p>{about.mission.statement}</p>
            </blockquote>
          </section>
        </div>
      </div>

      {/* Managing Director's message */}
      <section
        aria-labelledby="md-heading"
        className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[18rem_1fr] lg:gap-14">
            <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0 lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-navy-700/60 shadow-xl shadow-brand-950/40">
                <Image
                  src={about.managingDirector.image.src}
                  alt={about.managingDirector.image.alt}
                  width={708}
                  height={782}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>

            <div>
              <p className="inline-flex items-center rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-accent-300 sm:text-sm">
                {about.managingDirector.role}
              </p>
              <h2
                id="md-heading"
                className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {about.managingDirector.title}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                {about.managingDirector.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8">
                <span className="block text-lg font-semibold text-white">
                  {about.managingDirector.name}
                </span>
                <span className="mt-1 block text-sm text-accent-400">
                  {about.managingDirector.role}, {company.name}
                </span>
              </p>
            </div>
          </div>
      </section>

      {/* Values */}
      <section
        aria-labelledby="values-heading"
        className="border-y border-navy-700/60 bg-navy-900/50"
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <h2
            id="values-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {about.valuesTitle}
          </h2>

          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((value) => (
              <li key={value.id}>
                <div className="h-full rounded-2xl border border-navy-700/60 bg-navy-950/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/60 hover:shadow-xl hover:shadow-accent-500/10">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-bold text-white"
                  >
                    {value.title.charAt(0)}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {value.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we work */}
      <section
        aria-labelledby="process-heading"
        className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="max-w-2xl">
          <h2
            id="process-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {about.howWeWork.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-400">
            {about.howWeWork.description}
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.howWeWork.steps.map((step, index) => (
            <li
              key={step.id}
              className="rounded-2xl border border-navy-700/60 bg-navy-900 p-6"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/10 text-lg font-bold text-accent-400"
              >
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="about-cta-heading"
        className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-navy-900 px-6 py-16 text-center sm:px-16 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl"
          />
          <div className="relative">
            <h2
              id="about-cta-heading"
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
