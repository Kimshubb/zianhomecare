import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

import { HeroContent } from "./HeroContent";
//import { HeroRing } from "./HeroRing";

export function Hero() {
  return (
    <Section
      spacing="lg"
      className="overflow-hidden bg-background"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <HeroContent />

          {/*<HeroRing />*/}
        </div>
      </Container>
    </Section>
  );
}