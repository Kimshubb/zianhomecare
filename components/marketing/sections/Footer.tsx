import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTiktok } from "react-icons/fa6";

import { Container } from "@/components/layout/Container";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary py-10 text-primary-foreground">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}

          <div>
            <Link href="/">
              <Image
                src="/full-logozian.png"
                alt="Zian SafeHarbour Care logo"
                width={150}
                height={150}
                className="h-24 w-auto"
                priority
              />
            </Link>

            <p className="mt-4 max-w-sm leading-7 text-white/80">
              Compassionate home care wherever you need it — restoring
              dignity, comfort and peace of mind for families and their
              loved ones.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h4 className="mb-5 text-lg font-semibold">
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

          {/* Contact */}

          <div>
            <h4 className="mb-5 text-lg font-semibold">
              Contact Us
            </h4>

            <div className="space-y-3 text-white/80">
              <a
                href="tel:+254790174570"
                className="block transition-colors hover:text-white"
              >
                📞 +254 790 174 570
              </a>

              <a
                href="mailto:info@ziansafeharbour.com"
                className="block transition-colors hover:text-white"
              >
                ✉ info@ziansafeharbour.com
              </a>

              <p>📍 Nairobi, Kenya</p>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-medium text-white">
                Connect With Us
              </p>

              <div className="flex gap-3">
                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-white hover:text-primary"
                >
                  <FaFacebookF size={16} />
                </a>

                <a
                  href="https://tiktok.com/@youraccount"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-white hover:text-primary"
                >
                  <FaTiktok size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Zian SafeHarbour Care. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}