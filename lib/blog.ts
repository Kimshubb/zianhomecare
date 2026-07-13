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

// NOTE: BlogSection shape was inferred (not provided) as { heading?: string; body: string }.
// If your actual BlogSection interface differs, the `sections` arrays below will need
// their keys adjusted accordingly — the rest of the fields already match BlogPost.

// NOTE: Duplicate posts flagged with ⚠️ below — same topic, different slug/date.
// Recommend picking one of each pair and deleting the other.

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "when-loved-one-needs-home-care",
    title: "10 Signs Your Loved One May Need Home Care",
    excerpt:
      "Recognising the early signs can help your loved one remain safe, comfortable and independent.",
    image: "/blog/home-care.jpg",
    category: "Home Care",
    published: "2026-06-18",
    readTime: "5 min read",
    author: "Zian SafeHarbour Care Team",
    featured: true,
    sections: [
      {
        type: "paragraph",
        heading: "Why early signs matter",
        body: "TODO: Replace with real content. Explain why noticing changes early leads to safer, less disruptive care decisions.",
      },
      {
        type: "paragraph",
        heading: "Common signs to watch for",
        body: "TODO: Replace with real content. List physical, cognitive and emotional signs (missed medication, mobility changes, withdrawal, etc.).",
      },
      {
        type: "tip",
        body: "TODO: Replace with real content. A short, actionable tip families can apply immediately.",
      },
      {
        type: "paragraph",
        heading: "What to do next",
        body: "TODO: Replace with real content. Guide the reader toward a consultation or assessment.",
      },
    ],
  },
  {
    slug: "healthy-meal-ideas-for-older-adults",
    title: "Healthy Meal Ideas for Older Adults",
    excerpt: "Simple nutritious meals that promote wellbeing and recovery.",
    image: "/blog/meals.jpg",
    category: "Nutrition",
    published: "2026-06-10",
    readTime: "4 min read",
    author: "Zian SafeHarbour Care Team",
    sections: [
      {
        type: "paragraph",
        heading: "Nutrition needs change with age",
        body: "TODO: Replace with real content.",
      },
      {
        type: "image",
        image: "/blog/meals-detail.jpg",
        alt: "A healthy, senior-friendly meal plated at home",
      },
      {
        type: "paragraph",
        heading: "Easy, nutrient-dense meal ideas",
        body: "TODO: Replace with real content.",
      },
    ],
  },
  {
    slug: "recovering-after-surgery",
    title: "Recovering Comfortably After Surgery at Home",
    excerpt: "Helpful tips for a smoother recovery in familiar surroundings.",
    image: "/blog/recovery.jpg",
    category: "Recovery",
    published: "2026-05-30",
    readTime: "6 min read",
    author: "Zian SafeHarbour Care Team",
    sections: [
      {
        type: "paragraph",
        heading: "Why home recovery can be beneficial",
        body: "TODO: Replace with real content.",
      },
      {
        type: "paragraph",
        heading: "Preparing the home before discharge",
        body: "TODO: Replace with real content.",
      },
      {
        type: "quote",
        body: "TODO: Replace with a real quote — e.g. from a caregiver or family member about the recovery experience.",
      },
      {
        type: "paragraph",
        heading: "Signs recovery isn't going to plan",
        body: "TODO: Replace with real content.",
      },
    ],
  },
  {
    slug: "fall-prevention",
    title: "Preventing Falls Around the Home",
    excerpt: "Practical adjustments that greatly improve safety.",
    image: "/blog/falls.jpg",
    category: "Safety",
    published: "2026-06-03",
    readTime: "7 min read",
    author: "Zian SafeHarbour Care Team",
    sections: [
      {
        type: "paragraph",
        heading: "Why falls are a serious risk for seniors",
        body: "TODO: Replace with real content.",
      },
      {
        type: "paragraph",
        heading: "Room-by-room safety checklist",
        body: "TODO: Replace with real content.",
      },
      {
        type: "tip",
        body: "TODO: Replace with real content. A quick, practical safety tip.",
      },
      {
        type: "paragraph",
        heading: "When to consider additional support",
        body: "TODO: Replace with real content.",
      },
    ],
  },
  {
    slug: "why-companionship-matters",
    title: "Why Companionship Matters for Seniors",
    excerpt: "Emotional wellbeing is just as important as physical care.",
    image: "/blog/companionship.jpg",
    category: "Wellbeing",
    published: "2026-06-01",
    readTime: "5 min read",
    author: "Zian SafeHarbour Care Team",
    sections: [
      {
        type: "paragraph",
        heading: "The link between isolation and health",
        body: "TODO: Replace with real content.",
      },
      {
        type: "paragraph",
        heading: "How companionship care helps",
        body: "TODO: Replace with real content.",
      },
    ],
  },
  {
    slug: "supporting-a-loved-one-with-dementia",
    title: "Supporting a Loved One Living with Dementia",
    excerpt: "Compassionate approaches that make everyday life easier.",
    image: "/blog/dementia.jpg",
    category: "Dementia",
    published: "2026-05-28",
    readTime: "8 min read",
    author: "Zian SafeHarbour Care Team",
    sections: [
      {
        type: "paragraph",
        heading: "Understanding the journey",
        body: "TODO: Replace with real content.",
      },
      {
        type: "paragraph",
        heading: "Practical daily approaches",
        body: "TODO: Replace with real content.",
      },
      {
        type: "quote",
        body: "TODO: Replace with a real quote — e.g. from a family member on what support made the biggest difference.",
      },
      {
        type: "paragraph",
        heading: "Supporting the family, too",
        body: "TODO: Replace with real content.",
      },
    ],
  },
];