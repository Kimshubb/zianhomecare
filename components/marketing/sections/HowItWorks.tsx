import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const STEPS = [
  {
    number: "01",
    title: "Get in Touch",
    description:
      "Contact our friendly team to discuss your care needs and ask any questions.",
  },
  {
    number: "02",
    title: "Personalised Care Plan",
    description:
      "We assess your situation and create a care plan tailored to you or your loved one.",
  },
  {
    number: "03",
    title: "Begin Care",
    description:
      "Your caregiver starts providing compassionate, professional support at home.",
  },
];

export function HowItWorks() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex rounded-pill bg-secondary-soft px-4 py-2 text-sm font-semibold text-primary">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-primary">
            Starting care is simple.
          </h2>

          <p className="mt-4 text-lg text-muted">
            From your first call to ongoing support, we're with you every
            step of the way.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <article
              key={step.number}
              className="rounded-card border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                {step.number}
              </div>

              <h3 className="mb-4 text-xl font-semibold text-primary">
                {step.title}
              </h3>

              <p className="leading-7 text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}