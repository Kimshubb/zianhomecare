import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { EmergencyCTA } from "@/components/marketing/sections/EmergencyCTA";
import Image from "next/image";
import {
  HeartHandshake,
  Globe2,
  Handshake,
  Home,
  GraduationCap,
  ClipboardList,
  CalendarClock,
  MessageCircle,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}

      <Section className="relative overflow-hidden bg-primary">
        {/* Wave accents */}
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 w-full opacity-10"
          height="120"
          viewBox="0 0 400 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 Q100 30 200 60 T400 60 V120 H0 Z"
            fill="var(--color-secondary-soft)"
          />
          <path
            d="M0 85 Q100 55 200 85 T400 85 V120 H0 Z"
            fill="var(--color-secondary-soft)"
            opacity="0.7"
          />
        </svg>

        {/* Logo mark accent — hidden on mobile so it never overlaps text,
            fully contained (not clipped) on larger screens, tonal not colorful */}
        <Image
          src="/logo-mark-silhouette.png"
          alt=""
          width={400}
          height={388}
          className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 opacity-[0.14] md:block md:h-[300px] md:w-[300px] lg:right-16 lg:h-[400px] lg:w-[400px]"
        />

        <Container className="relative">
          <div className="max-w-xl py-20 lg:py-28">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              About Us
            </span>

            <h1 className="mt-3 text-4xl font-bold leading-tight text-white lg:text-5xl">
              Every family needs
              <br />a harbour to return to.
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-white/80">
              When caring for someone you love starts to feel like too much
              to carry alone, we&apos;re the steady place to anchor.
            </p>

            <div className="mt-8">
              <Button href="/contact">
                Find Your Anchor
              </Button>
            </div>
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
                <Home
                  size={64}
                  strokeWidth={1.5}
                  className="mx-auto text-primary"
                />

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
                icon: HeartHandshake,
                text: "To stand beside every patient & family with compassionate, skilled care — bringing comfort, dignity & reassurance in every moment, whether at home or in hospital.",
              },
              {
                title: "Vision",
                icon: Globe2,
                text: "To redefine caregiving as a trusted presence in every stage of life — where compassion meets professionalism, & every patient is treated with dignity, respect & humanity.",
              },
              {
                title: "Values",
                icon: Handshake,
                text: "Compassion, integrity, professionalism and respect guide every decision we make.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-card bg-surface p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-secondary-soft">
                  <item.icon
                    size={28}
                    strokeWidth={1.75}
                    className="text-primary"
                  />
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

          <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              {
                text: "Qualified & Compassionate Caregivers",
                icon: GraduationCap,
              },
              {
                text: "Personalised Care Plans",
                icon: ClipboardList,
              },
              {
                text: "Flexible Home Care Services",
                icon: CalendarClock,
              },
              {
                text: "Reliable Family Communication",
                icon: MessageCircle,
              },
              {
                text: "Care Anywhere You Need Us",
                icon: MapPin,
              },
              {
                text: "Reliable & Consistent",
                icon: ShieldCheck,
              },
            ].map((reason) => (
              <div
                key={reason.text}
                className="rounded-card border border-border bg-surface p-4 text-center shadow-sm"
              >
                <reason.icon
                  size={24}
                  strokeWidth={1.75}
                  className="mx-auto mb-3 text-accent"
                />

                <p className="text-sm font-medium text-text">
                  {reason.text}
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