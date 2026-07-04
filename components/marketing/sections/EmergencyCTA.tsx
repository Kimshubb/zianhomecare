import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function EmergencyCTA() {
  return (
    <Section
      id="contact"
      spacing="lg"
    >
      <Container>
        <div className="overflow-hidden rounded-card bg-accent shadow-card">
          <div className="px-8 py-12 text-center text-primary-foreground lg:px-16 lg:py-16">
            <span className="inline-flex rounded-pill bg-white/15 px-4 py-2 text-sm font-semibold">
              We're Here to Help
            </span>

            <h2 className="mt-6 text-3xl font-bold lg:text-5xl">
              Need care for a loved one?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
              Whether you need occasional support or full-time home care,
              we're ready to help you find the right solution.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="white" href="tel:+263771234567">
                Call Us Today
              </Button>

              <Button
                variant="ghost"
                href="#contact-form"
                className="border border-white/30 text-white hover:bg-white/10"
              >
                Request a Consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}