import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

import { SERVICES } from "@/lib/services";

export function Services() {
  return (
    <Section
      id="services"
      className="bg-background"
    >
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex rounded-pill bg-secondary-soft px-4 py-2 text-sm font-semibold text-primary">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold text-primary">
            Everything needed to support independent living.
          </h2>

          <p className="mt-4 text-lg text-muted">
            Compassionate home care tailored to each client's unique needs,
            helping them live safely and comfortably at home.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => {
            return (
              <article
                key={service.title}
                className="
                  group
                  overflow-hidden
                  rounded-card
                  border
                  border-border
                  bg-surface
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-muted">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-primary"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}