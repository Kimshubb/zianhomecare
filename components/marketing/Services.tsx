import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

import { SERVICES } from "@/lib/constants";

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
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="
                  rounded-card
                  border
                  border-border
                  bg-surface
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary-soft text-primary">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-primary">
                  {service.title}
                </h3>

                <p className="leading-7 text-muted">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}