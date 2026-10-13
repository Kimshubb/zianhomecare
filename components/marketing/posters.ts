export interface Poster {
  id: string;
  /** Path under /public, e.g. "/posters/first-aid-training.jpg" (4:5 portrait works best) */
  image: string;
  alt: string;
  /** Where the main button goes. Omit to show the poster with no call-to-action. */
  href?: string;
  ctaLabel?: string;
}

export const POSTERS: Poster[] = [
  {
    id: "first-aid-bls-cpr",
    image: "/posters/poster-training.jpeg",
    alt: "First Aid, BLS and CPR training now open for enrolment",
    href: "/services/first-aid-bls-cpr-training",
    ctaLabel: "Learn more",
  },
  {
    id: "caregiver-training",
    image: "/posters/training-2.jpeg",
    alt: "Professional Caregiver Training Programme now open for enrolment",
    href: "/services/professional-caregiver-training",
    ctaLabel: "Learn more",
  },
];