import type {
  ServiceItem,
  StatItem,
  Step,
  ValueItem,
} from "./types";
import { Bath, Stethoscope, Activity, ShieldPlus, Moon } from "lucide-react";

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
  {
    label: "Blog",
    href: "/blog",
  }
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
    icon: Bath,
    title: "Personal & Daily Care",
    description:
      "Assistance with daily routines like bathing, dressing and mobility, delivered with dignity and respect.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Support",
    description: "Professional medical care and monitoring to ensure safety and peace of mind.",
  },
  {
    icon: Activity,
    title: "Recovery & Therapy Support",
    description: "Restoring mobility and independence through targeted therapy.",
  },
  {
    icon: ShieldPlus,
    title: "Specialized Care",
    description: "Support for clients with specific medical conditions or needs.",
  },
  {
    icon: Moon,
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