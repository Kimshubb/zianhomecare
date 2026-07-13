import { BlogHero } from "@/components/blog/BlogHero";
import { Categories } from "@/components/blog/Categories";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { FeaturedGuides } from "@/components/blog/FeaturedGuides";
//import { Resources } from "@/components/blog/Resources";
//import { Newsletter } from "@/components/blog/Newsletter";

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <Categories />
      <BlogGrid />
      <FeaturedGuides />
    </>
  );
}