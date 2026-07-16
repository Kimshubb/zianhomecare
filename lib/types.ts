import { LucideIcon } from "lucide-react";

export type BadgePosition =
  | "top"
  | "right"
  | "bottom"
  | "left";

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

export interface ServiceItem {
  emoji: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface ValueItem {
  emoji: string;
  title: string;
  description: string;
}

export interface SceneData {
  id: string;
  bgClass: string;
  emoji: string;
  sceneLabel: string;
  innerIcon: string;
  innerText: string;
  innerSub: string;
}

export interface StatBadgeData {
  position: BadgePosition;
  label: string;
}

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  heroImage: string;
  heroImage2: string;
  overview: string;
  includes: {
    title: string;
    image: string;
    description: string;
  }[];
  benefits: string[];
  suitableFor: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}