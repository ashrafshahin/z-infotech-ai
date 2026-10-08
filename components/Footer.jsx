import Link from "next/link";
import { company, navLinks } from "@/lib/site";

// Cached at build time so the prerender stays deterministic (Cache Components).
async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

const headingClass =
  "text-sm font-semibold uppercase tracking-wider text-slate-300";
const linkClass = "text-sm text-slate-400 transition-colors hover:text-accent-400";

export default async function Footer() {
  const year = await getCurrentYear();
  const phoneHref = `tel:${company.phone.replace(/[^+\d]/g, "")}`;

  return (
    <footer className="border-t border-navy-700/70 bg-navy-900">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-bold text-white">
            {/* {company.shortName} */}
            <img src="/images/logo.jpeg" alt="logo" srcset="" />
            <span aria-hidden="true" className="text-accent-400">
              .
            </span>
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            {company.description}
          </p>
        </div>

        <nav aria-labelledby="footer-nav-heading">
          <h2 id="footer-nav-heading" className={headingClass}>
            Navigation
          </h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={headingClass}>Contact</h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-slate-400">
            <p>
              <a
                href={`mailto:${company.email}`}
                className="transition-colors hover:text-accent-400"
              >
                {company.email}
              </a>
            </p>
            <p>
              <a href={phoneHref} className="transition-colors hover:text-accent-400">
                {company.phone}
              </a>
            </p>
            <p>{company.location}</p>
            <p>Company number: {company.companyNumber}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-navy-700/70 py-6">
        <p className="px-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          &copy; {year} {company.name}. All rights reserved.
        </p>
        <p className="mt-1 px-4 text-center text-xs text-slate-600 sm:px-6 lg:px-8">
          Powered by Ashraf Shahin
        </p>
      </div>
    </footer>
  );
}