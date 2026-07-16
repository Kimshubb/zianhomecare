import { Bath, Stethoscope, Activity, HandHeart } from "lucide-react";
import { Service } from "./types";

export const SERVICES: Service[] = [
  {
    slug: "personal-daily-care",
    icon: Bath,
    title: "Personal & Daily Care",
    shortDescription:
      "Respectful assistance with daily routines that helps clients maintain dignity and independence.",
    heroImage: "/services/home-care.png",
    heroImage2: "/services/carehero.png",
    overview:
      "Our Personal & Daily Care service provides compassionate assistance with everyday activities while encouraging independence. Every care plan is tailored to the individual's needs, routines and preferences.",
    includes: [
      {
        title: "Bathing & Personal Hygiene",
        image: "/services/bathing.png",
        description:
          "Gentle, respectful support with bathing and hygiene routines that protects dignity and comfort.",
      },
      {
        title: "Dressing & Grooming",
        image: "/services/dressing.png",
        description:
          "Help with dressing, grooming and personal presentation to support confidence and self-esteem.",
      },
      {
        title: "Toileting Assistance",
        image: "/services/toileting.png",
        description:
          "Discreet, dignified support with toileting needs, tailored to each client's level of independence.",
      },
      {
        title: "Mobility & Transfers",
        image: "/services/mobility.png",
        description:
          "Safe assistance with walking, transfers and repositioning to reduce fall risk and build confidence.",
      },
      {
        title: "Meal Preparation",
        image: "/services/meal-prep.png",
        description:
          "Nutritious, preference-based meal preparation that supports health and enjoyment of food.",
      },
      {
        title: "Light Housekeeping",
        image: "/services/housekeeping.png",
        description:
          "Tidying, laundry and light household tasks that keep the home safe, clean and comfortable.",
      },
    ],
    benefits: [
      "Maintain independence",
      "Promote dignity",
      "Reduce fall risks",
      "Improve daily comfort",
      "Peace of mind for families",
    ],
    suitableFor: [
      "Older adults",
      "People recovering after surgery",
      "Individuals living with disability",
      "Clients with chronic illnesses",
    ],
    faqs: [
      {
        question: "Can care be provided every day?",
        answer:
          "Yes. We offer flexible schedules ranging from a few hours a week to full-time daily care.",
      },
      {
        question: "Will I have the same caregiver?",
        answer:
          "Where possible, we aim to provide continuity of care by assigning consistent caregivers.",
      },
    ],
  },
  {
    slug: "clinical-care-services",
    icon: Stethoscope,
    title: "Clinical Care Services",
    shortDescription:
      "Skilled nursing support delivered at home, including monitoring, medication and wound care for complex health needs.",
    heroImage: "/services/clinichero.png",
    heroImage2: "/services/discharge-care.png",
    overview:
      "Our Clinical Care Services bring qualified nursing expertise into the home, supporting clients with ongoing medical needs. Care is delivered under the guidance of trained nurses and coordinated closely with your treating physician, so complex health conditions are managed safely without leaving the comfort of home.",
    includes: [
      {
        title: "Vital Signs Monitoring",
        image: "/services/vitals.png",
        description:
          "Regular checks of blood pressure, temperature, pulse and oxygen levels to track health status closely.",
      },
      {
        title: "Medication & Drug Administration",
        image: "/services/medicated.png",
        description:
          "Safe administration and management of medication schedules in line with physician instructions.",
      },
      {
        title: "Diet & Nutrition Monitoring",
        image: "/services/nutrition.png",
        description:
          "Ongoing monitoring of dietary intake and nutrition to support recovery and long-term health.",
      },
      {
        title: "Tube Feeding Support",
        image: "/services/feed-tubing.png",
        description:
          "Skilled support with NG and PEG tube feeding, delivered safely by trained caregivers and nurses.",
      },
      {
        title: "Wound Care & Dressing Changes",
        image: "/services/wound-care.png",
        description:
          "Professional wound care and regular dressing changes to promote healing and prevent infection.",
      },
    ],
    benefits: [
      "Reduces hospital readmissions",
      "Ensures medical needs are consistently monitored",
      "Provides continuity between hospital and home care",
      "Early detection of complications",
      "Peace of mind for families managing complex conditions",
    ],
    suitableFor: [
      "Clients with chronic or long-term illnesses",
      "Individuals requiring tube feeding",
      "Clients with wounds needing regular dressing",
      "People on multiple medications requiring supervision",
    ],
    faqs: [
      {
        question: "Do you work with registered nurses?",
        answer:
          "Yes. Our clinical care is delivered by trained caregivers and registered nurses, working in coordination with your doctor.",
      },
      {
        question: "Can you administer medication prescribed by my doctor?",
        answer:
          "Yes, our team can manage and administer medication according to your physician's instructions and schedule.",
      },
    ],
  },
  {
    slug: "recovery-therapy-support",
    icon: Activity,
    title: "Recovery & Therapy Support",
    shortDescription:
      "Physiotherapy and occupational therapy support that helps clients regain strength, mobility and everyday independence.",
    heroImage: "/services/feed-tubing.png",
    heroImage2: "/services/personal-care.png",
    overview:
      "Our Recovery & Therapy Support service helps clients rebuild strength and confidence after illness, injury or surgery. We work alongside physiotherapists and occupational therapists to support recovery goals in the comfort of home, keeping families informed of progress along the way.",
    includes: [
      {
        title: "Physiotherapy Sessions",
        image: "/services/physiotherapy.png",
        description:
          "Guided physiotherapy and mobility exercises designed to rebuild strength safely at home.",
      },
      {
        title: "Occupational Therapy",
        image: "/services/occupational-therapy.jpg",
        description:
          "Support with daily living skills to help clients regain confidence and everyday independence.",
      },
      {
        title: "Home Exercise Programmes",
        image: "/services/exercise.png",
        description:
          "Assistance following prescribed home exercise routines set out by therapists.",
      },
      {
        title: "Progress Monitoring & Reporting",
        image: "/services/reporting.png",
        description:
          "Ongoing tracking of recovery milestones, with clear updates shared with families.",
      },
    ],
    benefits: [
      "Faster, more comfortable recovery at home",
      "Reduced risk of re-injury",
      "Rebuilds confidence and independence",
      "Personalised progress tracking",
      "Coordinated care between therapist and caregiver",
    ],
    suitableFor: [
      "People recovering from surgery",
      "Stroke or injury survivors",
      "Individuals regaining mobility after a hospital stay",
      "Clients working on long-term rehabilitation goals",
    ],
    faqs: [
      {
        question: "Do you provide the therapists, or work with our existing ones?",
        answer:
          "We can coordinate with your existing physiotherapist or occupational therapist, or connect you with trusted professionals in our network.",
      },
      {
        question: "How often are therapy sessions scheduled?",
        answer:
          "Frequency depends on your care plan and therapist's recommendations — from a few times a week to daily sessions during intensive recovery periods.",
      },
    ],
  },
  {
    slug: "specialized-care",
    icon: HandHeart,
    title: "Specialized Care",
    shortDescription:
      "Compassionate palliative and post-hospital care for clients navigating serious illness or the transition home after treatment.",
    heroImage: "/services/spechero.png",
    heroImage2: "/services/personal-care1.png",
    overview:
      "Our Specialized Care service supports clients and families through some of the most sensitive stages of care — whether managing a serious illness with dignity or adjusting safely after a hospital stay. We work closely with medical and hospice teams to ensure every need is met with compassion.",
    includes: [
      {
        title: "Palliative & Comfort-Focused Care",
        image: "/services/palliative-care.png",
        description:
          "Compassionate care focused on comfort and dignity for clients living with serious illness.",
      },
      {
        title: "Pain & Symptom Management",
        image: "/services/pain-management.png",
        description:
          "Attentive support managing pain and symptoms in coordination with medical guidance.",
      },
      {
        title: "Post-Hospital Discharge Care",
        image: "/services/discharge-care.png",
        description:
          "Monitoring and support during the transition from hospital back to a safe home environment.",
      },
      {
        title: "Emotional Support",
        image: "/services/emotional-support.png",
        description:
          "Compassionate emotional support for clients and their families through difficult stages of care.",
      },
      {
        title: "Hospital & Hospice Coordination",
        image: "/services/hospital-coordination.png",
        description:
          "Close coordination with hospital and hospice teams to ensure consistent, joined-up care.",
      },
    ],
    benefits: [
      "Comfort and dignity during serious illness",
      "Safer, smoother transition from hospital to home",
      "Reduced risk of post-discharge complications",
      "Emotional support for the whole family",
      "Close coordination with medical teams",
    ],
    suitableFor: [
      "Clients with a life-limiting or serious illness",
      "Individuals recently discharged from hospital",
      "Families needing guidance during end-of-life care",
      "Clients requiring close monitoring after major treatment",
    ],
    faqs: [
      {
        question: "Is palliative care only for end-of-life situations?",
        answer:
          "Not necessarily. Palliative care can begin at any stage of a serious illness to manage symptoms and improve comfort and quality of life.",
      },
      {
        question: "How soon after hospital discharge can care begin?",
        answer:
          "We can typically arrange post-hospital care to begin the same day as discharge, following an initial assessment.",
      },
    ],
  },
] as const;