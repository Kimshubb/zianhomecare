import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { LocationPin } from "@/components/ui/LocationPin";
import { Button } from "@/components/ui/Button";
import { SERVICE_AREAS } from "@/lib/constants";

export function Testimonial() {
  return (
    <Section className="bg-secondary-soft">
      <Container>

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-pill bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            Families Trust Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-primary">
            Care That Brings Peace of Mind
          </h2>

          <p className="mt-4 text-lg text-muted">
            Compassionate home care delivered with dignity,
            professionalism and genuine kindness.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* Testimonial */}

          <article className="relative overflow-hidden rounded-card bg-surface p-10 shadow-lg">

            <div
              aria-hidden
              className="absolute right-8 top-2 text-8xl font-serif text-primary/10"
            >
              "
            </div>

            <div className="mb-6 flex gap-1 text-2xl text-accent">
              ★★★★★
            </div>

            <blockquote className="text-lg leading-8 italic text-text">
              “The team at Zian SafeHarbour Care treated my mother with
              genuine kindness and respect. Knowing she was safe gave
              our family complete peace of mind.”
            </blockquote>

            <div className="mt-10 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                SM
              </div>

              <div>
                <h3 className="font-semibold text-primary">
                  Sarah M.
                </h3>

                <p className="text-sm text-muted">
                  Daughter of Client
                </p>
              </div>
            </div>
          </article>

          {/* Service Areas */}

          <article className="rounded-card bg-surface p-10 shadow-lg">

            <h3 className="text-2xl font-bold text-primary">
              We Proudly Serve
            </h3>

            <p className="mt-3 text-muted">
              Providing professional home care across Central and Coast
              surrounding communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {SERVICE_AREAS.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-2 rounded-pill bg-secondary-soft px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <LocationPin />

                  {area}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="secondary">
                View Service Areas
              </Button>
            </div>

          </article>

        </div>

      </Container>
    </Section>
  );
}