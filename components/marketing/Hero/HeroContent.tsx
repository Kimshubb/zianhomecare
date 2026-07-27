import { Button } from "@/components/ui/Button";
import { TrustCheck } from "@/components/ui/TrustCheck";

export function HeroContent() {
  return (
    <div className="max-w-xl">
      {/* Hero Badge */}

      <span className="inline-flex rounded-pill bg-secondary-soft px-3 py-1.5 text-xs font-semibold text-primary sm:px-4 sm:py-2 sm:text-sm">
        Trusted Home Care in Kenya
      </span>

      {/* Heading */}

      <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:mt-6 sm:text-5xl lg:text-6xl">
        Compassionate
        <br />
        Home Care
        <br />
        <span className="text-primary">
          That Feels Like Family
        </span>
      </h1>

      {/* Description */}

      <p className="mt-4 text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">
        We provide personalised home care services that help older adults,
        individuals recovering from illness, and families enjoy safe,
        comfortable, and independent living at home.
      </p>

      {/* CTA */}

      <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
        <Button href="/contact" size="lg" className="w-full sm:w-auto">
          Schedule a Consultation
        </Button>

        <Button
          href="tel:+254771234567"
          variant="secondary"
          size="lg"
          className="w-full sm:w-auto"
        >
          Call Now
        </Button>
      </div>

      {/* Trust Points */}

      <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 sm:mt-10 sm:gap-4">
        <TrustCheck label="Personalised Care" />
        <TrustCheck label="Experienced Caregivers" />
        <TrustCheck label="Available 24/7" />
      </div>
    </div>
  );
}