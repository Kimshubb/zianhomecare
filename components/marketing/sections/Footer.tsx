import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary py-16 text-primary-foreground">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold">
              Zian SafeHarbour Care
            </h3>

            <p className="mt-4 max-w-sm text-white/80">
              Compassionate home care that empowers people to live safely,
              comfortably and independently.
            </p>
          </div>

          <div>
            <h4 className="mb-5 font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-semibold">
              Contact
            </h4>

            <div className="space-y-2 text-white/80">
              <p>📞 +263 xx xxx xxxx</p>
              <p>✉ info@ziansafeharbour.com</p>
              <p>📍 Harare, Zimbabwe</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Zian SafeHarbour Care.
          All rights reserved.
        </div>
      </Container>
    </footer>
  );
}