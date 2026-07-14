import Image from "next/image";
import { CheckCircle } from "lucide-react";

import type { Service } from "@/lib/types";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

interface ServiceHeroProps {
  service: Service;
}

export function ServiceHero({
  service,
}: ServiceHeroProps) {
  const Icon = service.icon;

  return (
    <Section className="pb-12">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-pill bg-secondary-soft px-4 py-2 text-sm font-semibold text-primary">
              <Icon className="h-4 w-4" />
              Our Services
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-primary lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted">
              {service.shortDescription}
            </p>

            <div className="mt-8 space-y-3">
              {service.benefits.slice(0, 3).map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-accent" />

                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href="/contact"
                size="lg"
              >
                Book Consultation
              </Button>

              <Button
                href="/services"
                variant="secondary"
                size="lg"
              >
                View All Services
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-card shadow-xl">
            <Image
              src={service.heroImage}
              alt={service.title}
              width={900}
              height={700}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}