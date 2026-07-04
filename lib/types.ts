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