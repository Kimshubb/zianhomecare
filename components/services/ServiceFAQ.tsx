"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQ[];
}

export function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const open = openIndex === index;

        return (
          <article
            key={faq.question}
            className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-secondary-soft"
              aria-expanded={open}
            >
              <span className="text-lg font-semibold text-primary">
                {faq.question}
[?12;2$y              </span>

              <ChevronDown
                className={`h-5 w-5 text-primary transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-7 text-muted">
                  {faq.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
