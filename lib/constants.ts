import type {
  ServiceItem,
  StatItem,
  Step,
  ValueItem,
} from "./types";

export const BRAND_NAME = "ZianHomeCare";

export const PHONE = "";

export const EMAIL = "";

export const NAV_LINKS = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

/**
 * Phase 4
 */

export const SCENES = [];

export const BADGES = [];

/**
 * Phase 5
 */

export const STATS = [
  {
    value: 100,
    suffix: "+",
    label: "Families Supported",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Care Available",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
] as const;

export const SERVICES = [
  {
    emoji: "🏡",
    title: "Personal Care",
    description: "Daily assistance with dignity and compassion.",
  },
  {
    emoji: "💊",
    title: "Medication Support",
    description: "Helping clients stay on schedule safely.",
  },
  {
    emoji: "🤝",
    title: "Companionship",
    description: "Meaningful social interaction and emotional support.",
  },
  {
    emoji: "🚗",
    title: "Transportation",
    description: "Appointments, shopping and community visits.",
  },
  {
    emoji: "🍽️",
    title: "Meal Preparation",
    description: "Healthy meals tailored to individual needs.",
  },
  {
    emoji: "🌙",
    title: "Respite Care",
    description: "Support that gives family caregivers time to recharge.",
  },
] as const;

export const VALUES: ValueItem[] = [];

export const STEPS = [
  {
    number: 1,
    title: "Free Consultation",
    description:
      "We learn about your needs and answer every question.",
  },
  {
    number: 2,
    title: "Personalized Care Plan",
    description:
      "A tailored plan designed around your family.",
  },
  {
    number: 3,
    title: "Meet Your Caregiver",
    description:
      "We carefully match you with the right professional.",
  },
  {
    number: 4,
    title: "Ongoing Support",
    description:
      "Continuous care with regular reviews and adjustments.",
  },
] as const;

export const TESTIMONIAL = {
  quote:
    "ZianHomeCare has been a blessing for our family. Their caregivers are compassionate, reliable, and truly care about my mother's wellbeing.",
  author: "Sarah M.",
  role: "Family Member",
};

export const SERVICE_AREAS = [
  "Karen",
  "Lavington",
  "Kilimani",
  "Westlands",
  "Kileleshwa",
  "Runda",
  "Muthaiga",
  "Gigiri",
  "Lang'ata",
  "Nairobi West",
  "Kiambu Town",
  "Limuru",
  "Bamburi",
  "Changamwe",
  "Mtwapa",
  "Kilifi Town",
  "Watamu",
  "Malindi",
  "Diani",
] as const;