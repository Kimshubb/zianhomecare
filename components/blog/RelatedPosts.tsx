import Image from "next/image";
import Link from "next/link";

import { BLOG_POSTS } from "@/lib/blog";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface RelatedPostsProps {
  currentSlug: string;
}

export function RelatedPosts({
  currentSlug,
}: RelatedPostsProps) {
  const relatedPosts = BLOG_POSTS.filter(
    (post) => post.slug !== currentSlug
  ).slice(0, 3);

  return (
    <Section className="bg-secondary-soft/30">
      <Container>
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-pill bg-surface px-4 py-2 text-sm font-semibold text-primary">
            Continue Reading
          </span>

          <h2 className="mt-5 text-4xl font-bold text-primary">
            Related Articles
          </h2>

          <p className="mt-4 text-lg text-muted">
            Explore more practical advice from our care team.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-card bg-surface shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={320}
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <span className="rounded-pill bg-secondary-soft px-3 py-1 text-xs font-semibold text-primary">
                  {post.category}
                </span>

                <h3 className="mt-4 text-xl font-bold text-primary">
                  {post.title}
                </h3>

                <p className="mt-3 text-muted">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between text-sm text-muted">
                  <span>{post.readTime}</span>

                  <span className="font-semibold text-accent">
                    Read →
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
