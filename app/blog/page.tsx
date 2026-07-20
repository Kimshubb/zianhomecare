import { BlogHero } from "@/components/blog/BlogHero";
import { Categories } from "@/components/blog/Categories";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { FeaturedGuides } from "@/components/blog/FeaturedGuides";
//import { Resources } from "@/components/blog/Resources";
//import { Newsletter } from "@/components/blog/Newsletter";
import { BLOG_POSTS } from "@/lib/blog";

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <Categories />
      <BlogGrid posts={BLOG_POSTS} />
      <FeaturedGuides />
    </>
  );
}