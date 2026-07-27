import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { EmergencyCTA } from "@/components/marketing/sections/EmergencyCTA";

import { SERVICES } from "@/lib/services";

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

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-card border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Service Name */}

                <div className="px-6 pt-6">
                  <h3 className="text-2xl font-bold leading-tight text-primary">
                    {service.title}
                  </h3>
                </div>

                {/* Service Image */}

                <div className="relative mt-5 h-56 overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                </div>

                {/* Description */}

                <div className="p-6">
                  <p className="line-clamp-3 leading-7 text-muted">
                    {service.shortDescription}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
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
                  "Talk to our team about your needs, ask questions, and discuss the type of support you're looking for.",
              },
              {
                step: "2",
                title: "Personalised Care Plan",
                description:
                  "We carry out a detailed assessment and create a care plan tailored to your individual needs and goals.",
              },
              {
                step: "3",
                title: "Care Begins",
                description:
                  "Your dedicated caregiver starts providing compassionate, reliable support while keeping your family informed.",
              },
            ].map((item) => (
              <article
                key={item.step}
                className="rounded-card bg-surface p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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