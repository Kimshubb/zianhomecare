import { Bath, Stethoscope, GraduationCap, HeartPulse, Activity, HandHeart } from "lucide-react";
import { Service } from "./types";

export const SERVICES: Service[] = [
  {
    slug: "personal-daily-care",
    icon: Bath,
    title: "Personal & Daily Care",
    shortDescription:
      "Respectful assistance with daily routines that helps clients maintain dignity and independence.",
    heroImage2: "/services/home-care.png",
    heroImage: "/services/home-carenew.jpeg",
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
    heroImage2: "/services/clinicnew.jpeg",
    heroImage: "/services/hospital.jpeg",
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
    heroImage: "/services/physionew.jpeg",
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
        image: "/services/pain-new.jpeg",
        description:
          "Attentive support managing pain and symptoms in coordination with medical guidance.",
      },
      {
        title: "Post-Hospital Discharge Care",
        image: "/services/discharge-new.jpeg",
        description:
          "Monitoring and support during the transition from hospital back to a safe home environment.",
      },
      {
        title: "Emotional Support",
        image: "/services/emotional-new.jpeg",
        description:
          "Compassionate emotional support for clients and their families through difficult stages of care.",
      },
      {
        title: "Hospital & Hospice Coordination",
        image: "/services/hospital.jpeg",
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
  {
    slug: "first-aid-bls-cpr-training",
    icon: HeartPulse,
    title: "First Aid, BLS & CPR Training",
    shortDescription:
      "Hands-on emergency response training that equips families, carers and workplaces to act confidently when every second counts.",
    heroImage: "/services/bls.png",
    heroImage2: "/services/caregiver-training-hero2.jfif",
    overview:
      "Our First Aid, BLS & CPR Training teaches practical, life-saving skills through guided, hands-on sessions. Delivered by trained professionals, our courses help families, caregivers and organisations respond calmly and correctly in the critical moments before emergency help arrives.",
    includes: [
      {
        title: "Basic Life Support (BLS)",
        image: "/services/bls.png",
        description:
          "Structured training in recognising and responding to life-threatening emergencies, including airway support and early intervention.",
      },
      {
        title: "CPR & Defibrillator Awareness",
        image: "/services/cpr.png",
        description:
          "Practical CPR practice on manikins for adults, children and infants, with guidance on using an AED where available.",
      },
      {
        title: "Choking & Airway Emergencies",
        image: "/services/choking.png",
        description:
          "Clear, step-by-step techniques for responding to choking and breathing difficulties.",
      },
      {
        title: "Wound, Burn & Bleeding Control",
        image: "/services/wound-care.png",
        description:
          "Confident first response to cuts, burns, bleeding and minor injuries until professional care is available.",
      },
      {
        title: "Falls, Fractures & Medical Emergencies",
        image: "/services/falls.jpg",
        description:
          "Safe handling after falls and fractures, plus recognising signs of stroke, seizures, diabetic emergencies and heart attack.",
      },
    ],
    benefits: [
      "Build confidence to act in an emergency",
      "Practical, hands-on learning",
      "Suitable for beginners, no prior experience needed",
      "Helps protect loved ones at home",
      "Group and workplace sessions available",
    ],
    suitableFor: [
      "Family members caring for older or unwell relatives",
      "Parents, guardians and childcare workers",
      "Schools, churches and community groups",
      "Businesses and workplace safety teams",
    ],
    faqs: [
      {
        question: "Do I need any prior experience to attend?",
        answer:
          "No. Our sessions are designed for complete beginners and build skills step by step with plenty of hands-on practice.",
      },
      {
        question: "Can you deliver training at our home, workplace or school?",
        answer:
          "Yes. We can arrange group sessions at your location, and tailor the content to your setting. Contact us to discuss group sizes and scheduling.",
      },
    ],
  },
  {
    slug: "professional-caregiver-training",
    icon: GraduationCap,
    title: "Advanced Caregiver Training Programme",
    shortDescription:
      "Practical, compassionate training that prepares individuals to deliver safe, dignified and professional home care.",
    heroImage: "/services/school.jpeg",
    heroImage2: "/services/caregiver-training-hero2.jfif",
    overview:
      "Our Professional Caregiver Training Programme prepares aspiring and practising caregivers with the knowledge, skills and values needed for quality home care. Combining classroom learning with supervised practical sessions, the programme builds confidence in personal care, safety, communication and the compassionate support of clients and their families.",
    includes: [
      {
        title: "Personal Care & Hygiene Skills",
        image: "/services/personal-care.png",
        description:
          "Safe, respectful techniques for bathing, dressing, grooming and toileting that protect client dignity.",
      },
      {
        title: "Safe Moving & Handling",
        image: "/services/mobility.png",
        description:
          "Correct transfer, mobility and repositioning techniques that protect both the client and the caregiver.",
      },
      {
        title: "Infection Prevention & Safety",
        image: "/services/discharge-new.png",
        description:
          "Hand hygiene, safe handling of equipment and everyday practices that keep clients and caregivers healthy.",
      },
      {
        title: "Dementia & Chronic Illness Awareness",
        image: "/services/home-care.png",
        description:
          "Understanding common conditions and learning communication approaches that reduce distress and build trust.",
      },
      {
        title: "Emergency Response & First Aid",
        image: "/services/injury.png",
        description:
          "Core first aid and emergency response skills so caregivers can act quickly and appropriately.",
      },
      {
        title: "Professional Conduct & Safeguarding",
        image: "/services/school.jpeg",
        description:
          "Ethics, confidentiality, record keeping and safeguarding principles for trusted, accountable care.",
      },
    ],
    benefits: [
      "Build job-ready home care skills",
      "Learn through practical, supervised sessions",
      "Confidence handling real care situations",
      "Raises the standard of care for clients",
      "Pathway into professional caregiving",
    ],
    suitableFor: [
      "Aspiring professional caregivers",
      "Family members providing long-term care at home",
      "Domestic and household support staff",
      "Practising caregivers seeking refresher training",
    ],
    faqs: [
      {
        question: "Do I need a healthcare background to join?",
        answer:
          "No. The programme is open to beginners and is taught from the ground up, with practical guidance at every stage.",
      },
      {
        question: "How long does the programme run?",
        answer:
          "Duration depends on the course option you choose. Contact us for current schedules, class sizes and what is covered in each intake.",
      },
    ],
  },
] as const;