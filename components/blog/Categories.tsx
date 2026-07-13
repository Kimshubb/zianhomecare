import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const CATEGORIES = [
  {
    title: "Home Care",
    description: "Daily support, independence and compassionate care.",
    image: "/blog/categories/home-care.jpg",
    href: "/blog/category/home-care",
  },
  {
    title: "Nutrition",
    description: "Healthy eating for seniors and recovery.",
    image: "/blog/categories/nutrition.jpg",
    href: "/blog/category/nutrition",
  },
  {
    title: "Recovery",
    description: "Post-surgery care and rehabilitation tips.",
    image: "/blog/categories/recovery.jpg",
    href: "/blog/category/recovery",
  },
  {
    title: "Dementia Care",
    description: "Guidance for supporting loved ones with dementia.",
    image: "/blog/categories/dementia.jpg",
    href: "/blog/category/dementia",
  },
  {
    title: "Family Caregivers",
    description: "Advice for balancing work, family and caregiving.",
    image: "/blog/categories/family.jpg",
    href: "/blog/category/family",
  },
  {
    title: "Wellbeing",
    description: "Mental health, companionship and active ageing.",
    image: "/blog/categories/wellbeing.jpg",
    href: "/blog/category/wellbeing",
  },
];

export function Categories() {
  return (
    <Section className="bg-secondary-soft/40">
      <Container>
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-pill bg-surface px-4 py-2 text-sm font-semibold text-primary">
            Browse Topics
          </span>

          <h2 className="mt-5 text-4xl font-bold text-primary">
            Explore by Category
          </h2>

          <p className="mt-4 text-lg text-muted">
            Find helpful articles tailored to your family's needs.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative overflow-hidden rounded-card shadow-lg"
            >
              <div className="relative h-72">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/35 to-transparent" />

                <div className="absolute bottom-0 p-8 text-white">
                  <h3 className="text-2xl font-bold">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-white/90">
                    {category.description}
                  </p>

                  <span className="mt-6 inline-block font-semibold text-accent">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
