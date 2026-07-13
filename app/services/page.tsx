import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { EmergencyCTA } from "@/components/marketing/sections/EmergencyCTA";

import { SERVICES } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}

      <Section className="bg-secondary-soft">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-pill bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              Our Services
            </span>

            <h1 className="mt-6 text-5xl font-bold text-primary lg:text-6xl">
              Professional Home Care
              <br />
              Tailored to Every Family
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
              Every client deserves care that is compassionate, personalised,
              and delivered with dignity. We work alongside families to provide
              dependable support that promotes comfort, independence and peace
              of mind.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services */}

      <Section>
        <Container>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-primary">
              Services We Provide
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Whether you need occasional assistance or ongoing daily support,
              our experienced caregivers are here to help.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="rounded-card bg-secondary-soft p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                  {service.title}
                </h3>

                <div className="mt-5 flex h-40 items-center justify-center rounded-card bg-surface">
                  <service.icon
                    size={56}
                    strokeWidth={1.5}
                    className="text-primary"
                  />
                </div>

                <p className="mt-5 leading-7 text-muted">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}

      <Section className="bg-secondary-soft">
        <Container>
          <div className="text-center">
            <span className="inline-flex rounded-pill bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              How It Works
            </span>

            <h2 className="mt-6 text-4xl font-bold text-primary">
              Getting Started Is Simple
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              We guide you through every step, making it easy to arrange
              compassionate care for yourself or your loved one.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description:
                  "Talk to our team about your needs and ask any questions.",
              },
              {
                step: "2",
                title: "Care Assessment",
                description:
                  "Together we'll develop a personalised care plan that fits your circumstances.",
              },
              {
                step: "3",
                title: "Care Begins",
                description:
                  "Your dedicated caregiver starts providing compassionate support at home.",
              },
            ].map((item) => (
              <article
                key={item.step}
                className="rounded-card bg-surface p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                  {item.step}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-primary">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </Container>
      </Section>

      <EmergencyCTA />
    </>
  );
}