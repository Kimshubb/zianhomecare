import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

const GUIDES = [
  {
    title: "The Complete Family Guide to Home Care",
    description:
      "Everything families need to know before arranging professional home care.",
    image: "/blog/guides/family-guide.jpg",
    href: "/blog/family-guide",
  },
  {
    title: "Preparing Your Home for Safe Independent Living",
    description:
      "Simple changes that improve comfort, accessibility and safety.",
    image: "/blog/guides/home-safety.jpg",
    href: "/blog/home-safety",
  },
  {
    title: "Choosing the Right Home Care Provider",
    description:
      "Questions every family should ask before making an important decision.",
    image: "/blog/guides/choosing-care.jpg",
    href: "/blog/choosing-care",
  },
];
export function FeaturedGuides() {
  return (
    <Section>
      <Container>
        <div className="mb-14 text-center">
          <span className="inline-flex rounded-pill bg-secondary-soft px-4 py-2 text-sm font-semibold text-primary">
            Featured Guides
          </span>

          <h2 className="mt-5 text-4xl font-bold text-primary">
            Free Resources for Families
          </h2>

          <p className="mt-4 text-lg text-muted">
            In-depth guides written to help you make confident care decisions.
          </p>
        </div>

        <div className="space-y-10">
          {GUIDES.map((guide, index) => (
            <article
              key={guide.title}
              className={`grid items-center gap-10 rounded-card bg-surface p-8 shadow-md lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-inner">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  width={700}
                  height={450}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">
                  {guide.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-muted">
                  {guide.description}
                </p>

                <div className="mt-8">
                  <Button href={guide.href}>
                    Read Guide
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
