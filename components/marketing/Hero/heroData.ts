import type {
  SceneData,
  StatBadgeData,
} from "@/lib/types";

export const ROTATION_PERIOD_MS = 12_000;

export const SCENES: SceneData[] = [
  {
    id: "care",
    bgClass: "bg-[#FDEEE7]",
    emoji: " to add",
    sceneLabel: "Care and companionship",
    innerIcon: "to add",
    innerText: "Care at home",
    innerSub: "Trusted caregivers",
  },
  {
    id: "healing",
    bgClass: "bg-[#EAF3DE]",
    emoji: "to add",
    sceneLabel: "Healing at home",
    innerIcon: "to add",
    innerText: "Healing at home",
    innerSub: "Familiar surroundings",
  },
  {
    id: "support",
    bgClass: "bg-[#E1F0FB]",
    emoji: "to add",
    sceneLabel: "Expert support",
    innerIcon: "to add",
    innerText: "Expert support",
    innerSub: "Licensed professionals",
  },
  {
    id: "compassion",
    bgClass: "bg-[#FEF3E2]",
    emoji: "to add",
    sceneLabel: "With compassion",
    innerIcon: "to add",
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
