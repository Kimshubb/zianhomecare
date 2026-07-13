import Image from "next/image";

import type { BlogPost } from "@/lib/blog";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface ArticleContentProps {
  article: BlogPost;
}

export function ArticleContent({
  article,
}: ArticleContentProps) {
  return (
    <Section className="pt-0">
      <Container>
        <article className="mx-auto max-w-4xl">
          {article.sections.map((section, index) => {
            switch (section.type) {
              case "paragraph":
                return (
                  <div
                    key={index}
                    className="mb-10"
                  >
                    {section.heading && (
                      <h2 className="mb-5 text-3xl font-bold text-primary">
                        {section.heading}
                      </h2>
                    )}

                    <p className="text-lg leading-9 text-muted">
                      {section.body}
                    </p>
                  </div>
                );

              case "tip":
                return (
                  <div
                    key={index}
                    className="mb-10 rounded-card border-l-4 border-accent bg-secondary-soft p-8"
                  >
                    <h3 className="text-xl font-semibold text-primary">
                      💡 {section.heading}
                    </h3>

                    <p className="mt-4 leading-8 text-muted">
                      {section.body}
                    </p>
                  </div>
                );

              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="my-12 border-l-4 border-accent pl-8 italic"
                  >
                    <p className="text-3xl leading-relaxed text-primary">
                      “{section.body}”
                    </p>

                    <footer className="mt-5 text-muted">
                      — Zian Safe Harbour Care
                    </footer>
                  </blockquote>
                );

              case "image":
                return (
                  <figure
                    key={index}
                    className="my-12 overflow-hidden rounded-card"
                  >
                    <Image
                      src={section.image!}
                      alt={section.alt ?? ""}
                      width={1200}
                      height={700}
                      className="w-full object-cover"
                    />
                  </figure>
                );

              default:
                return null;
            }
          })}
        </article>
      </Container>
    </Section>
  );
}
