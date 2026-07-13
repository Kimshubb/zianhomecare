export interface BlogSection {
  type: "paragraph" | "tip" | "quote" | "image";
  heading?: string;
  body?: string;
  image?: string;
  alt?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  published: string;
  readTime: string;
  author?: string;
  featured?: boolean;

  sections: BlogSection[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;

  featured?: boolean;
  guide?: boolean;

  author: string;
  readTime: string;
  published: string;

  content: string[];
}

export interface FeaturedPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

export const FEATURED_POSTS: FeaturedPost[] = [
  {
    slug: "when-loved-one-needs-home-care",
    title: "10 Signs Your Loved One May Need Home Care",
    excerpt:
      "Recognising the early signs can help your loved one remain safe, comfortable and independent.",
    image: "/blog/hero1.jpg",
    category: "Home Care",
  },
  {
    slug: "recovering-after-surgery",
    title: "Recovering Comfortably After Surgery at Home",
    excerpt:
      "Helping your loved one recover safely with professional home care support.",
    image: "/blog/hero2.jpg",
    category: "Recovery",
  },
  {
    slug: "healthy-meals-for-seniors",
    title: "Healthy Nutrition for Older Adults",
    excerpt:
      "Simple nutrition tips that promote strength, wellbeing and independence.",
    image: "/blog/hero3.jpg",
    category: "Nutrition",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "when-loved-one-needs-home-care",
    title: "10 Signs Your Loved One May Need Home Care",
    excerpt:
      "Recognising the early signs can help your loved one remain safe, comfortable and independent.",
    image: "/blog/home-care.jpg",
    category: "Home Care",
    date: "June 18, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "healthy-meals-for-seniors",
    title: "Healthy Meal Ideas for Older Adults",
    excerpt:
      "Simple nutritious meals that promote wellbeing and recovery.",
    image: "/blog/meals.jpg",
    category: "Nutrition",
    date: "June 10, 2026",
    readTime: "4 min read",
  },
  {
    slug: "recovering-after-surgery",
    title: "Recovering Comfortably After Surgery at Home",
    excerpt:
      "Helpful tips for a smoother recovery in familiar surroundings.",
    image: "/blog/recovery.jpg",
    category: "Recovery",
    date: "May 30, 2026",
    readTime: "6 min read",
  },
  {
    slug: "when-loved-one-needs-home-care",
    title: "10 Signs Your Loved One May Need Home Care",
    excerpt:
      "Recognising the early signs can help your loved one remain safe, comfortable and independent.",
    image: "/blog/home-care.jpg",
    category: "Home Care",
    date: "18 June 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "recovering-after-surgery",
    title: "Recovering Comfortably After Surgery at Home",
    excerpt:
      "Helping your loved one recover safely in familiar surroundings.",
    image: "/blog/recovery.jpg",
    category: "Recovery",
    date: "12 June 2026",
    readTime: "6 min read",
  },
  {
    slug: "meal-planning",
    title: "Healthy Meals Every Senior Should Enjoy",
    excerpt:
      "Simple, nutritious meals that support healthy ageing.",
    image: "/blog/meals.jpg",
    category: "Nutrition",
    date: "9 June 2026",
    readTime: "4 min read",
  },
  {
    slug: "fall-prevention",
    title: "Preventing Falls Around the Home",
    excerpt:
      "Practical adjustments that greatly improve safety.",
    image: "/blog/falls.jpg",
    category: "Safety",
    date: "3 June 2026",
    readTime: "7 min read",
  },
  {
    slug: "companionship",
    title: "Why Companionship Matters for Seniors",
    excerpt:
      "Emotional wellbeing is just as important as physical care.",
    image: "/blog/companionship.jpg",
    category: "Wellbeing",
    date: "1 June 2026",
    readTime: "5 min read",
  },
  {
    slug: "dementia-care",
    title: "Supporting a Loved One Living with Dementia",
    excerpt:
      "Compassionate approaches that make everyday life easier.",
    image: "/blog/dementia.jpg",
    category: "Dementia",
    date: "28 May 2026",
    readTime: "8 min read",
  },
];