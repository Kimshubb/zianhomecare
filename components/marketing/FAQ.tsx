"use client";

import { useState } from "react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const FAQS = [
  {
    question: "How quickly can care begin?",
    answer:
      "Depending on your needs, care can often begin shortly after the initial consultation and care assessment.",
  },
  {
    question: "Do you provide personalised care plans?",
    answer:
      "Yes. Every client receives a tailored care plan based on their medical, personal and lifestyle needs.",
  },
  {
    question: "Can I arrange care for a family member?",
    answer:
      "Absolutely. Many of our enquiries come from family members looking for compassionate support for their loved ones.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We currently provide home care services throughout Harare and surrounding areas. Contact us to confirm coverage in your location.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide personal care, medication support, companionship, transportation assistance, meal preparation and respite care.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply complete the contact form, give us a call or send us a WhatsApp message. We'll guide you through the next steps.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-background">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="inline-flex rounded-pill bg-secondary-soft px-4 py-2 text-sm font-semibold text-primary">
              Frequently Asked Questions
            </span>

            <h2 className="mt-6 text-4xl font-bold text-primary">
              We're Here to Answer Your Questions
            </h2>

            <p className="mt-5 text-lg text-muted">
              If you don't see your question below, please get in touch—we're
              always happy to help.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {FAQS.map((faq, index) => {
              const open = openIndex === index;

              return (
                <article
                  key={faq.question}
                  className="overflow-hidden rounded-card border border-border bg-surface shadow-sm transition-shadow hover:shadow-md"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(open ? null : index)
                    }
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <h3 className="text-lg font-semibold text-primary">
                      {faq.question}
                    </h3>

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-secondary-soft text-xl font-light text-primary transition-all duration-300 ${
                        open ? "rotate-45 bg-accent text-white" : ""
                      }`}
                    >
                      +
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      open
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-8 text-muted">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
