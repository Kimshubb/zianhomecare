import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { EmergencyCTA } from "@/components/marketing/sections/EmergencyCTA";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}

      <Section className="bg-secondary-soft">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-pill bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              About Us
            </span>

            <h1 className="mt-6 text-5xl font-bold text-primary lg:text-6xl">
              Compassionate Care.
              <br />
              Trusted Support.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
              At Zian SafeHarbour Care, we believe everyone deserves to age
              with dignity, independence and confidence in the comfort of
              their own home.
            </p>
          </div>
        </Container>
      </Section>

      {/* Our Story */}

      <Section>
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-accent">
                Our Story
              </span>

              <h2 className="mt-4 text-4xl font-bold text-primary">
                Caring for families like our own.
              </h2>

              <p className="mt-6 leading-8 text-muted">
                Zian SafeHarbour Care was founded with one simple purpose:
                helping people remain safe, comfortable and independent in
                their own homes while giving families peace of mind.
              </p>

              <p className="mt-4 leading-8 text-muted">
                Every care plan is tailored to the individual because no two
                people have the same needs. Our caregivers are chosen not only
                for their professional skills but also for their compassion,
                patience and commitment to dignity.
              </p>

              <div className="mt-8">
                <Button href="/contact">
                  Talk to Our Team
                </Button>
              </div>
            </div>

            <div className="flex aspect-square items-center justify-center rounded-card bg-secondary-soft">
              <div className="text-center">
                <div className="text-6xl">🏡</div>

                <p className="mt-4 text-muted">
                  Team photograph placeholder
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission Vision Values */}

      <Section className="bg-secondary-soft">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-primary">
              What Guides Everything We Do
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Our mission, vision and values shape every interaction with our
              clients and their families.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Mission",
                emoji: "💙",
                text: "Deliver compassionate, personalised home care that promotes dignity and independence.",
              },
              {
                title: "Vision",
                emoji: "🌍",
                text: "To become Zimbabwe's most trusted provider of quality home healthcare services.",
              },
              {
                title: "Values",
                emoji: "🤝",
                text: "Compassion, integrity, professionalism and respect guide every decision we make.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-card bg-surface p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="mb-5 text-5xl">
                  {item.emoji}
                </div>

                <h3 className="text-2xl font-semibold text-primary">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Families Choose Us */}

      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary">
              Why Families Choose Zian SafeHarbour Care
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Qualified & Compassionate Caregivers",
              "Personalised Care Plans",
              "Flexible Home Care Services",
              "Reliable Family Communication",
            ].map((reason) => (
              <div
                key={reason}
                className="rounded-card border border-border bg-surface p-6 text-center shadow-sm"
              >
                <div className="mb-4 text-4xl">✔</div>

                <p className="font-medium text-text">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <EmergencyCTA />
    </>
  );
}
