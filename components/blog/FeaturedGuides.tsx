import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const GUIDES = [
  {
    title: "Clinical Care Services",
    description:
      "Hospital-level nursing care at home — bringing professional healthcare to the comfort of home.",
    image: "/blog/guides/clinic-new.jpeg",
    file: "/guides/Zian-Safe-Harbour-Care-Clinical-Nursing-Care (8).pdf",
  },
  {
    title: "Specialized Care",
    description:
      "Personalized healthcare for complex needs — individualized support for chronic and advanced conditions.",
    image: "/services/palliative-care.png",
    file: "/guides/Zian-Safe-Harbour-Care-Specialized-care.pdf",
  },
  {
    title: "Stroke: Every Second Counts",
    description:
      "Recognizing the signs, acting FAST, and understanding the path to rehabilitation.",
    image: "/services/stroke.png",
    file: "/guides/Zian-Safe-Harbour-Care-Stroke-Awareness.pdf",
  },
  {
    title: "Recovery and Therapy Support",
    description:
      "Restoring independence, rebuilding strength, and improving quality of life after illness or injury.",
    image: "/services/physionew.jpeg",
    file: "/guides/Zian-Safe-Harbour-Care-Recovery-Therapy-Support (1).pdf",
  },
  {
    title: "Nutrition and Healthy Meal Support",
    description:
      "Nourishing health, promoting recovery, and enhancing quality of life through individualized nutritional care.",
    image: "/services/nutritionnew.jpeg",
    file: "/guides/Zian-Safe-Harbour-Care-Nutrition-Meal-Support.pdf",
  },
  {
    title: "Clinical Care Services",
    description:
      "Hospital-level nursing care at home — bringing professional healthcare to the comfort of home.",
    image: "/services/clinicnew.jpeg",
    file: "/guides/Zian-Safe-Harbour-Care-Clinical-Nursing-Care.pdf",
  }
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
            Download practical guides designed to help you make confident,
            informed home care decisions.
          </p>
        </div>

        <div className="space-y-10">
          {GUIDES.map((guide, index) => (
            <article
              key={guide.title}
              className={`grid items-center gap-10 rounded-card bg-surface p-8 shadow-md transition-shadow duration-300 hover:shadow-xl lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Guide Image */}

              <div className="overflow-hidden rounded-inner">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  width={700}
                  height={450}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Guide Content */}

              <div>
                <span className="inline-flex rounded-full bg-secondary-soft px-3 py-1 text-xs font-semibold text-primary">
                  Free PDF Guide
                </span>

                <h3 className="mt-5 text-3xl font-bold text-primary">
                  {guide.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-muted">
                  {guide.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={guide.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-pill bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary/90"
                  >
                    📄 View & Download Guide
                  </a>

                  <span className="text-sm text-muted">
                    Free • PDF • Printable
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}