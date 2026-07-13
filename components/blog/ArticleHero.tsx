import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, ChevronRight } from "lucide-react";

import type { BlogPost } from "@/lib/blog";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

interface ArticleHeroProps {
  article: BlogPost;
}

export function ArticleHero({ article }: ArticleHeroProps) {
  return (
    <Section className="pb-12">
      <Container>
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link
            href="/"
            className="transition-colors hover:text-primary"
          >
            Home
          </Link>

          <ChevronRight className="h-4 w-4" />

          <Link
            href="/blog"
            className="transition-colors hover:text-primary"
          >
            Blog
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span className="text-primary">
            {article.category}
          </span>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="inline-flex rounded-pill bg-secondary-soft px-4 py-2 text-sm font-semibold text-primary">
              {article.category}
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-primary lg:text-6xl">
              {article.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted">
              {article.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-accent" />
                {article.published}
              </div>

              <div className="flex items-center gap-2">
                <Clock3 className="h-5 w-5 text-accent" />
                {article.readTime}
              </div>
            </div>

            <div className="mt-8 rounded-card border border-border bg-surface p-6 shadow-sm">
              <p className="text-sm uppercase tracking-wider text-muted">
                Written by
              </p>

              <h3 className="mt-2 text-lg font-semibold text-primary">
                Zian Safe Harbour Care Team
              </h3>

              <p className="mt-2 text-muted">
                Dedicated to helping families make confident home care
                decisions through compassionate, evidence-informed guidance.
              </p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="overflow-hidden rounded-card shadow-xl">
            <Image
              src={article.image}
              alt={article.title}
              width={900}
              height={700}
              priority
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
