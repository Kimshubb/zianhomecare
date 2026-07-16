import { notFound } from "next/navigation";

import { BLOG_POSTS } from "@/lib/blog";

import { ArticleHero } from "@/components/blog/ArticleHero";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { EmergencyCTA } from "@/components/marketing/sections/EmergencyCTA";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogArticle({
  params,
}: PageProps) {
  const { slug } = await params;

  const article = BLOG_POSTS.find(
    (post) => post.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <>
      <ArticleHero article={article} />

      <ArticleContent article={article} />

      <ShareButtons title={article.title} />

      <RelatedPosts currentSlug={article.slug} />
      <EmergencyCTA />
    </>
  );
}