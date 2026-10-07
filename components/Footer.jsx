import Link from "next/link";
import { company, navLinks } from "@/lib/site";

// Cached at build time so the prerender stays deterministic (Cache Components).
async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="border-t border-navy-700/70 bg-navy-900">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-bold text-white">
            {company.shortName}
            <span aria-hidden="true" className="text-accent-400">
              .
            </span>
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            {company.description}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Navigation
          </h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-accent-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>
              <a
                href={`mailto:${company.email}`}
                className="transition-colors hover:text-accent-400"
              >
                {company.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                className="transition-colors hover:text-accent-400"
              >
                {company.phone}
              </a>
            </li>
            <li>{company.location}</li>
            <li>Company number: {company.companyNumber}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-700/70 py-6">
        <p className="mx-auto w-full max-w-7xl px-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          &copy; {year} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
