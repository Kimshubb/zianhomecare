import type {
  SceneData,
  StatBadgeData,
} from "@/lib/types";

export const ROTATION_PERIOD_MS = 12_000;

export const SCENES: SceneData[] = [
  {
    id: "care",
    bgClass: "bg-[#FDEEE7]",
    emoji: "🏡",
    sceneLabel: "Care and companionship",
    innerIcon: "🤝",
    innerText: "Care at home",
    innerSub: "Trusted caregivers",
  },
  {
    id: "healing",
    bgClass: "bg-[#EAF3DE]",
    emoji: "🏠",
    sceneLabel: "Healing at home",
    innerIcon: "🏠",
    innerText: "Healing at home",
    innerSub: "Familiar surroundings",
  },
  {
    id: "support",
    bgClass: "bg-[#E1F0FB]",
    emoji: "🤝",
    sceneLabel: "Expert support",
    innerIcon: "💛",
    innerText: "Expert support",
    innerSub: "Licensed professionals",
  },
  {
    id: "compassion",
    bgClass: "bg-[#FEF3E2]",
    emoji: "💛",
    sceneLabel: "With compassion",
    innerIcon: "❤️",
    innerText: "With compassion",
    innerSub: "Every single day",
  },
];

export const BADGES: StatBadgeData[] = [
  { position: "top", label: "24/7 Available" },
  { position: "right", label: "500+ Caregivers" },
  { position: "bottom", label: "98% Satisfaction" },
  { position: "left", label: "15+ Years" },
];
