import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <Section
      id="about"
      className="bg-secondary-soft"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image Placeholder */}

          <div className="order-2 lg:order-1">
            <div className="flex aspect-[4/3] items-center justify-center rounded-card border border-border bg-surface shadow-card">
              <span className="text-lg font-medium text-muted">
                Family Care Image
              </span>
            </div>
          </div>

          {/* Content */}

          <div className="order-1 lg:order-2">
            <span className="inline-flex rounded-pill bg-surface px-4 py-2 text-sm font-semibold text-primary">
              About Us
            </span>

            <h2 className="mt-6 text-4xl font-bold text-primary">
              Compassionate home care built around people.
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted">
              At Zian SafeHarbour Care, we believe everyone deserves to
              remain safe, independent and comfortable in the place they
              call home.
            </p>

            <p className="mt-6 leading-8 text-muted">
              Our experienced caregivers provide personalised support that
              respects each client's dignity while giving families peace of
              mind.
            </p>

            <div className="mt-8">
              <Button href="/about">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}