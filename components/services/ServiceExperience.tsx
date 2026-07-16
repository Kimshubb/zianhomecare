import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

import type { Service } from "@/lib/types";

import { ServiceFAQ } from "./ServiceFAQ";

interface ServiceExperienceProps {
  service: Service;
}

export function ServiceExperience({
  service,
}: ServiceExperienceProps) {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-7xl space-y-32">

        {/* ABOUT */}

        <section>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-secondary-soft px-4 py-2 text-sm font-semibold text-primary">
                Understanding This Service
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-primary lg:text-5xl">
                Compassionate care,
                tailored to every individual.
              </h2>

              <p className="mt-8 text-lg leading-8 text-muted">
                {service.overview}
              </p>
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-card shadow-xl">
              <Image
                src={service.heroImage2}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}

        <section>
          <div className="text-center">
            <span className="inline-flex rounded-full bg-secondary-soft px-4 py-2 text-sm font-semibold text-primary">
              What's Included
            </span>

            <h2 className="mt-6 text-4xl font-bold text-primary">
              Comprehensive Care Tailored to Everyday Needs
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted">
              Every care plan is personalised, but these are some of the ways
              our caregivers provide compassionate support to help clients
              remain safe, comfortable and independent at home.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {service.includes.map((item) => (
              <article
                key={item.title}
                className="
                  group
                  flex
                  flex-col
                  rounded-3xl
                  border
                  border-border
                  bg-surface
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <h3 className="text-center text-xl font-semibold text-primary">
                  {item.title}
                </h3>

                <div className="my-6 flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={160}
                    height={160}
                    className="
                      h-36
                      w-36
                      rounded-full
                      object-cover
                      shadow-md
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

                <p className="flex-1 text-center leading-7 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* IMPACT */}

        <section>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-card bg-secondary-soft p-10">
              <h3 className="text-2xl font-bold text-primary">
                What We Do
              </h3>

              <ul className="mt-8 space-y-4">
                {service.includes.map((item) => (
                  <li
                    key={item.title}
                    className="flex gap-3"
                  >
                    <span className="text-primary">✓</span>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-card bg-primary p-10 text-white">
              <h3 className="text-2xl font-bold">
                What Families Notice
              </h3>

              <ul className="mt-8 space-y-4">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex gap-3"
                  >
                    <span>❤</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* WHO THIS SERVICE IS FOR */}

        <section>
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="text-4xl font-bold text-primary">
                Who Is This Service For?
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {service.suitableFor.map((item) => (
                  <div
                    key={item}
                    className="rounded-card border border-border bg-surface p-6"
                  >
                    <span className="font-medium">
                      ✓ {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-card bg-primary p-8 text-white">
              <h3 className="text-2xl font-bold">
                Unsure Where to Start?
              </h3>

              <p className="mt-4 leading-7 text-white/90">
                Our care coordinators will help you choose the most
                appropriate service for your loved one and answer any
                questions you may have.
              </p>

              <div className="mt-8">
                <Button href="/contact">
                  Book a Consultation
                </Button>
              </div>
            </aside>
          </div>
        </section>

        {/* FAQ */}

        <section>
  <div className="mx-auto max-w-4xl">
    <div className="text-center">
        <span className="inline-flex rounded-full bg-secondary-soft px-4 py-2 text-sm font-semibold text-primary">
          FAQs
        </span>

        <h2 className="mt-6 text-4xl font-bold text-primary">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-lg text-muted">
          Here are answers to some of the questions families ask before starting care.
        </p>
      </div>

      <div className="mt-12">
        <ServiceFAQ faqs={service.faqs} />
      </div>
    </div>
  </section>

      </div>
    </Container>
  );
}