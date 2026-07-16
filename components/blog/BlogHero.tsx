import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function BlogHero() {
  return (
    <Section className="relative overflow-hidden bg-secondary-soft">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>
            <span className="inline-flex rounded-pill bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              Home Care Insights
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-primary lg:text-6xl">
              Practical Advice
              <br />
              For Every Family.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Explore expert articles on elderly care, recovery,
              nutrition, wellbeing and independent living.
            </p>

            <div className="mt-10">
              <Button href="#articles" size="lg">
                Explore Articles
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-card shadow-xl">
            <Image
              src="/services/home-care.png"
              alt="Caregiver assisting an elderly client"
              width={700}
              height={500}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

        </div>
      </Container>
    </Section>
  );
}

