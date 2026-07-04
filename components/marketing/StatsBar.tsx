import { Container } from "@/components/layout/Container";
import { STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/Counter";

export function StatsBar() {
  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <Container>
        <div className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <p className="text-3xl font-bold lg:text-4xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </p>

              <p className="mt-2 text-sm font-medium text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}