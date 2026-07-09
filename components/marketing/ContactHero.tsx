import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export function ContactHero() {
  return (
    <Section className="relative overflow-hidden bg-secondary-soft">
      {/* Decorative background blobs */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>
            <span className="inline-flex rounded-pill bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              Contact Us
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-primary lg:text-6xl">
              Helping Starts
              <br />
              With A Simple
              <span className="text-accent"> Conversation.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Whether you're exploring care for yourself or someone you love,
              we're here to answer your questions, guide you through your
              options and help you find the right support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="tel:+263771234567" size="lg">
                Call Now
              </Button>

              <Button
                href="#contact-form"
                variant="secondary"
                size="lg"
              >
                Send a Message
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-muted">
              <span>✓ No obligation</span>
              <span>✓ Private consultation</span>
              <span>✓ Fast response</span>
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <div className="overflow-hidden rounded-card bg-surface shadow-xl">

              {/* Placeholder */}

              <div className="flex aspect-[4/5] items-center justify-center bg-secondary-soft">
                <div className="text-center">
                  <div className="text-7xl">🤝</div>

                  <p className="mt-6 text-muted">
                    Caregiver & Client Image
                  </p>
                </div>
              </div>

            </div>

            {/* Floating card */}

            <div className="absolute -bottom-6 -left-6 rounded-card bg-white p-5 shadow-xl">
              <p className="text-sm text-muted">
                Trusted by families
              </p>

              <p className="mt-2 text-3xl font-bold text-primary">
                98%
              </p>

              <p className="text-sm text-muted">
                Client Satisfaction
              </p>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
