import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Z InfoTech AI Ltd.",
};

const iconWrapperClass =
  "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400";

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    company.location
  )}&output=embed`;

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">
          Get in touch
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Let&apos;s work together
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-400">
          Whether you need a single-vendor e-commerce store, a business web application
          or a backend with custom APIs, we would love to hear about your project.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Contact details — left */}
        <div className="space-y-8">
          <section
            aria-labelledby="contact-details-heading"
            className="rounded-2xl border border-navy-700/60 bg-navy-900/60 p-8 sm:p-10"
          >
            <h2
              id="contact-details-heading"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Contact details
            </h2>
            <p className="mt-2 text-base leading-8 text-slate-400">
              Drop us a line and we will get back to you within one working day.
            </p>

            <dl className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className={iconWrapperClass}>
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <div>
                  <dt className="text-sm font-medium text-slate-400">Email</dt>
                  <dd className="mt-1 text-sm text-slate-200">
                    <a
                      href={`mailto:${company.email}`}
                      className="transition-colors hover:text-accent-400"
                    >
                      {company.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span aria-hidden="true" className={iconWrapperClass}>
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <div>
                  <dt className="text-sm font-medium text-slate-400">WhatsApp</dt>
                  <dd className="mt-1 text-sm text-slate-200">
                    <a
                      href="https://wa.me/447887280757"
                      className="inline-flex items-center gap-1 transition-colors hover:text-accent-400"
                    >
                      +44 7887 280757
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span aria-hidden="true" className={iconWrapperClass}>
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <div>
                  <dt className="text-sm font-medium text-slate-400">Location</dt>
                  <dd className="mt-1 text-sm text-slate-200">{company.location}</dd>
                </div>
              </div>
            </dl>

            <div className="mt-8">
              <p className="mb-2 text-sm font-medium text-slate-300">
                Business address
              </p>
              <div className="relative overflow-hidden rounded-2xl border border-navy-700/60 bg-navy-900/70">
                <iframe
                  title={`Map showing ${company.name} business address`}
                  src={mapSrc}
                  className="h-56 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Contact form — right */}
        <section
          aria-labelledby="contact-form-heading"
          className="rounded-2xl border border-navy-700/60 bg-navy-900/60 p-8 sm:p-10"
        >
          <h2
            id="contact-form-heading"
            className="text-2xl font-bold tracking-tight text-white"
          >
            Send us a message
          </h2>
          <p className="mt-2 mb-8 text-base leading-8 text-slate-400">
            Tell us about your project and we will get back to you.
          </p>
          <ContactForm />
        </section>
      </div>
    </div>
  );
};