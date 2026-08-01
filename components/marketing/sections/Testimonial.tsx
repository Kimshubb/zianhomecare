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

          <div className="space-y-6">
            <article className="relative overflow-hidden rounded-card bg-surface p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div
                aria-hidden
                className="absolute right-8 top-2 text-8xl font-serif text-primary/10"
              >
                "
              </div>

              <div className="mb-5 flex gap-1 text-2xl text-accent">
                ★★★★★
              </div>

              <blockquote className="text-lg leading-8 italic text-text">
                “The team at Zian SafeHarbour Care treated my mother with genuine
                kindness and respect. Knowing she was safe gave our family complete
                peace of mind.”
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
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

            <article className="relative overflow-hidden rounded-card bg-surface p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div
                aria-hidden
                className="absolute right-8 top-2 text-8xl font-serif text-primary/10"
              >
                "
              </div>

              <div className="mb-5 flex gap-1 text-2xl text-accent">
                ★★★★★
              </div>

              <blockquote className="text-lg leading-8 italic text-text">
                “From the very first consultation, we knew we were in capable hands.
                The caregivers were professional, compassionate, and always treated
                my father with dignity. We couldn't have asked for better support.”
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                  DN
                </div>

                <div>
                  <h3 className="font-semibold text-primary">
                    David N.
                  </h3>

                  <p className="text-sm text-muted">
                    Son of Client
                  </p>
                </div>
              </div>
            </article>
          </div>
          {/* Service Areas */}

          <article className="rounded-card bg-surface p-10 shadow-lg">
            <span className="inline-flex rounded-full bg-secondary-soft px-4 py-2 text-sm font-semibold text-primary">
              Where We Serve
            </span>

            <h3 className="mt-5 text-3xl font-bold text-primary">
              Serving Communities Across Nairobi & Mombasa
            </h3>

            <p className="mt-5 leading-8 text-muted">
              Our caregivers provide compassionate home care services throughout
              Nairobi and Mombasa, supporting individuals and families in the comfort
              of their own homes.
            </p>

            <div className="mt-8 rounded-card border border-border bg-secondary-soft p-6">
              <h4 className="font-semibold text-primary">
                Not sure if we cover your location?
              </h4>

              <p className="mt-3 leading-7 text-muted">
                Get in touch with our team and we'll be happy to let you know whether
                we currently provide services in your area and discuss the best care
                options available for you or your loved one.
              </p>
            </div>

            <div className="mt-8">
              <Button
                href="/contact"
                className="animate-float transition-all duration-300 hover:scale-105 hover:animate-none"
              >
                Contact Us
              </Button>
            </div>
          </article>

        </div>

      </Container>
    </Section>
  );
}