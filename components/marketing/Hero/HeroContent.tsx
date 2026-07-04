import { Button } from "@/components/ui/Button";
import { TrustCheck } from "@/components/ui/TrustCheck";

export function HeroContent() {
  return (
    <div className="max-w-xl">
      {/* Hero Badge */}

      <span className="inline-flex rounded-pill bg-secondary-soft px-4 py-2 text-sm font-semibold text-primary">
        Trusted Home Care in Kenya
      </span>

      {/* Heading */}

      <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight lg:text-6xl">
        Compassionate
        <br />
        Home Care
        <br />
        <span className="text-primary">
          That Feels Like Family
        </span>
      </h1>

      {/* Description */}

      <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
        We provide personalised home care services that help older adults,
        individuals recovering from illness, and families enjoy safe,
        comfortable, and independent living at home.
      </p>

      {/* CTA */}

      <div className="mt-10 flex flex-wrap gap-4">
        <Button size="lg">
          Schedule a Consultation
        </Button>

        <Button
          href="tel:+254771234567"
          variant="secondary"
          size="lg"
        >
          Call Now
        </Button>
      </div>

      {/* Trust Points */}

      <div className="mt-10 flex flex-wrap gap-4">
        <TrustCheck label="Personalised Care" />
        <TrustCheck label="Experienced Caregivers" />
        <TrustCheck label="Available 24/7" />
      </div>
    </div>
  );
}