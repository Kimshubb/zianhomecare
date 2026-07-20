import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BLOG_POSTS } from "@/lib/blog";
import { BLOG_CATEGORIES } from "@/lib/blogCategories";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { BlogGrid } from "@/components/blog/BlogGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const category = BLOG_CATEGORIES.find(
    (c) => c.slug === slug
  );

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.title} Articles | Zian SafeHarbour Care`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category = BLOG_CATEGORIES.find(
    (c) => c.slug === slug
  );

  if (!category) {
    notFound();
  }

  const posts = BLOG_POSTS.filter(
    (post) => post.category.slug === slug
  );

  return (
  <>
    <Section className="bg-secondary-soft">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-pill bg-surface px-4 py-2 text-sm font-semibold text-primary">
            Blog Category
          </span>

          <h1 className="mt-6 text-5xl font-bold text-primary">
            {category.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
            {category.description}
          </p>
        </div>
      </Container>
    </Section>

    {posts.length === 0 ? (
      <Container className="py-20 text-center">
        <h2 className="text-3xl font-bold text-primary">
          Articles Coming Soon
        </h2>

        <p className="mt-4 text-muted">
          We're preparing helpful resources for this topic. Please check back soon.
        </p>
      </Container>
    ) : (
      <BlogGrid posts={posts} />
    )}
  </>
);
}