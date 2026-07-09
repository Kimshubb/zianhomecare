"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { NAV_LINKS } from "@/lib/constants";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/logo-horizontal.png"
              alt="Zian Safe Harbour Care"
              width={260}
              height={80}
              priority
              className="h-10 w-auto object-contain sm:h-12 lg:h-14"
            />
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden flex-1 items-center justify-end gap-10 md:flex">
            <nav className="flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors duration-200 ${
                      active
                        ? "text-primary"
                        : "text-muted hover:text-primary"
                    }`}
                  >
                    {link.label}

                    {active && (
                      <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-accent" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <Button href="/contact">
              Book Care
            </Button>
          </div>

          {/* Mobile Toggle */}

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="rounded-full p-2 transition-colors hover:bg-secondary-soft md:hidden"
          >
            {open ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <nav className="border-t border-border pt-4">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 font-medium transition-colors ${
                      active
                        ? "bg-secondary-soft text-primary"
                        : "text-muted hover:bg-secondary-soft hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="mt-4">
                <Button
                  href="/contact"
                  className="w-full"
                >
                  Book Care
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}