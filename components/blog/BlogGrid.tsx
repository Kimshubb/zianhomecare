import Image from "next/image";
import Link from "next/link";

import { BLOG_POSTS } from "@/lib/blog";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function BlogGrid() {
  return (
    <Section id="articles">
      <Container>
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-pill bg-secondary-soft px-4 py-2 text-sm font-semibold text-primary">
            Latest Articles
          </span>

          <h2 className="mt-5 text-4xl font-bold text-primary">
            Care Tips & Insights
          </h2>

          <p className="mt-4 text-lg text-muted">
            Practical advice from our care team to help families make informed
            decisions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-card bg-surface shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={320}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-secondary-soft px-3 py-1 text-xs font-semibold text-primary">
                    {post.category}
                  </span>

                  <span className="text-sm text-muted">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold text-primary">
                  {post.title}
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-muted">
                    {post.date}
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-semibold text-accent transition-colors hover:text-primary"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
