"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  type PanInfo,
} from "framer-motion";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type SlideType =
  | "intro_card"
  | "mission"
  | "service"
  | "summary"
  | "contact";

interface Slide {
  type: SlideType;

  image: string;

  alt: string;

  title: string;

  subtitle?: string;

  number?: string;

  isVortex?: boolean;

  position?: "tl" | "tr" | "bl" | "br";
}

const SLIDES: Slide[] = [
  {
    type: "intro_card",
    image: "/hero/carousel-1.png",
    alt: "Caregiver with elderly client",
    title: "Care is at the heart of everything we do.",
    subtitle:
      "Real support, for every stage of the journey.",
  },

  {
    type: "mission",
    image: "/hero/carousel-2.png",
    alt: "Mission",
    title: "Helping people remain safe, independent and comfortable at home.",
    subtitle:
      "Professional care built around dignity, compassion and trust.",
  },

  {
    type: "service",
    image: "/hero/carouselmain.png",
    alt: "Personal Care",
    title: "Personal & Daily Care",
    subtitle:
      "Respectful assistance with daily routines that helps clients maintain dignity and independence.",
    number: "01",
    position: "br",
  },

  {
    type: "service",
    image: "/hero/carousel-1.png",
    alt: "Clinical Care",
    title: "Clinical Care Services",
    subtitle:
      "Skilled nursing support delivered at home, including monitoring, medication and wound care for complex health needs.",
    number: "02",
    position: "br",
  },

  {
    type: "service",
    image: "/hero/carousel-2.png",
    alt: "Recovery",
    title: "Recovery & Therapy Support",
    subtitle:
      "Physiotherapy and occupational therapy support that helps clients regain strength, mobility and everyday independence.",
    number: "03",
    position: "br",
  },

  {
    type: "service",
    image: "/hero/carouselmain.png",
    alt: "Specialized Care",
    title: "Specialized Care",
    subtitle:
      "Compassionate palliative and post-hospital care for clients navigating serious illness or the transition home after treatment.",
    number: "04",
    position: "br",
    isVortex: true,
  },

  {
    type: "summary",
    image: "/hero/carousel-1.png",
    alt: "Compassion",
    title: "Safe. Professional. Compassionate.",
    subtitle:
      "From the first cup of tea in the morning to the medication reminder at night, every visit is centred around dignity, comfort and independence.",
  },

  {
    type: "contact",
    image: "/hero/carousel-2.png",
    alt: "Contact",
    title: "Let's talk about your care needs.",
    subtitle:
      "Our friendly team is here to answer your questions and guide you through your options.",
  },
];

const AUTOPLAY = 10000;
const DRAG_THRESHOLD = 80;

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const badgeReveal = {
  hidden: {
    opacity: 0,
    x: -24,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      delay: 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textReveal = {
  hidden: {
    opacity: 0,
    y: 10,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.7,
      ease: "easeOut",
    },
  },
};

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY);

    return () => clearInterval(timer);
  }, [paused]);

  function handleDragEnd(
    _: unknown,
    info: PanInfo
  ) {
    if (info.offset.x < -DRAG_THRESHOLD) {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }

    if (info.offset.x > DRAG_THRESHOLD) {
      setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    }
  }

  const slide = SLIDES[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-card">

        <AnimatePresence mode="wait">

          <motion.div
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            initial={{
              opacity: 0,
              scale: slide.isVortex ? 1.2 : 1.05,
              rotate: slide.isVortex ? 2 : 0,
              filter: slide.isVortex
                ? "blur(10px)"
                : "blur(0px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: slide.isVortex ? 0.9 : 1.02,
              filter: slide.isVortex
                ? "blur(12px)"
                : "blur(0px)",
            }}
            transition={{
              duration: slide.isVortex ? 1.4 : 0.9,
            }}
          >
            {/* Background */}

            <motion.div
              animate={{
                scale: [1, 1.08],
                x: [0, -8],
                y: [0, -6],
              }}
              transition={{
                duration: AUTOPLAY / 1000,
                ease: "linear",
              }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="(min-width:1024px) 520px,100vw"
                className="object-cover"
              />
            </motion.div>

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/90" />

            <div className="absolute inset-0 bg-black/10" />

            {/* Vignette */}

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_45%,_rgba(0,0,0,0.5)_100%)]" />

            {/* Film grain */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                backgroundSize: "120px 120px",
              }}
            />

            {/* Logo */}

            <div className="absolute left-8 top-8 z-20">

              <Image
                src="/full-logozian.png"
                alt="Zian SafeHarbour Care"
                width={130}
                height={130}
                className="h-20 w-auto drop-shadow-xl"
              />

            </div>

            {/* Content (parallax layer — drifts opposite the background pan) */}

            <motion.div
              animate={{
                x: [0, 5],
                y: [0, 4],
              }}
              transition={{
                duration: AUTOPLAY / 1000,
                ease: "linear",
              }}
              className="absolute inset-0 z-20"
            >
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="absolute inset-0"
            >  
              {/* INTRO */}

              {slide.type === "intro_card" && (
                <div className="flex h-full items-end p-10 lg:p-12">
                  <motion.div
                    variants={fadeUp}
                    className="max-w-lg rounded-card bg-primary/60 p-8 backdrop-blur-md"
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                      Zian SafeHarbour Care
                    </span>

                    <h2 className="mt-4 text-4xl font-bold leading-tight text-white lg:text-5xl">
                      {slide.title}
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-white/90">
                      {slide.subtitle}
                    </p>
                  </motion.div>
                </div>
              )}

              {/* MISSION */}

              {slide.type === "mission" && (
                <div className="flex h-full items-center justify-center px-8">
                  <motion.article
                    variants={fadeUp}
                    className="max-w-xl rounded-card bg-surface/90 p-10 shadow-2xl backdrop-blur-xl"
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                      Our Mission
                    </span>

                    <h2 className="mt-5 text-4xl font-bold leading-tight text-primary">
                      {slide.title}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-muted">
                      {slide.subtitle}
                    </p>

                    <div className="mt-8 flex gap-3 flex-wrap">
                      {["Professional", "Compassionate", "Trusted"].map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-secondary-soft px-4 py-2 text-sm font-semibold text-primary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                </div>
              )}

              {/* SERVICE */}

              {slide.type === "service" && (
                <div
                  className={cn(
                    "absolute inset-0 flex p-10 lg:p-12",

                    slide.position === "bl" && "items-end justify-start",

                    slide.position === "br" && "items-end justify-end",

                    slide.position === "tl" && "items-start justify-start",

                    slide.position === "tr" && "items-start justify-end"
                  )}
                >
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      y: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.2,
                      },
                    }}
                    className="max-w-md"
                  >
                    <motion.div initial="hidden" animate="visible">

                      {/* Badge — lower-third style */}

                      <motion.div
                        variants={badgeReveal}
                        className="inline-flex items-stretch overflow-hidden rounded-xl border border-white/20 bg-black/30 shadow-2xl backdrop-blur-md"
                      >
                        <div className="flex items-center bg-accent px-5">
                          <span className="text-3xl font-black text-white">
                            {slide.number}
                          </span>
                        </div>

                        <div className="flex flex-col justify-center gap-0.5 px-5 py-3">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                            Service
                          </span>
                          <span className="text-lg font-bold leading-snug tracking-wide text-white">
                            {slide.title}
                          </span>
                        </div>
                      </motion.div>

                      {/* Glass Card */}

                      <motion.div
                        variants={cardReveal}
                        className="mt-5 rounded-card border border-white/15 bg-white/8 p-7 backdrop-blur-xl"
                      >
                        <motion.p
                          variants={textReveal}
                          className="text-lg leading-8 text-white"
                        >
                          {slide.subtitle}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              )}

              {/* SUMMARY */}

              {slide.type === "summary" && (
                <div className="flex h-full items-end justify-center p-10">
                  <motion.article
                    variants={fadeUp}
                    className="max-w-2xl rounded-card bg-surface/90 p-10 text-center shadow-xl backdrop-blur-xl"
                  >
                    <h2 className="text-4xl font-bold text-primary">
                      {slide.title}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-muted">
                      {slide.subtitle}
                    </p>
                  </motion.article>
                </div>
              )}

              {/* CONTACT */}

              {slide.type === "contact" && (
                <div className="flex h-full items-center justify-center px-8">
                  <motion.article
                    variants={fadeUp}
                    className="max-w-lg rounded-card bg-primary/80 p-10 text-center backdrop-blur-xl"
                  >
                    <h2 className="text-4xl font-bold leading-tight text-white">
                      {slide.title}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-white/90">
                      {slide.subtitle}
                    </p>

                    <div className="mt-8">
                      <Button
                        href="/contact"
                        size="lg"
                      >
                        Book a Consultation
                      </Button>
                    </div>

                    <div className="mt-8 space-y-2 text-white/80">
                      <p>📞 +254 790 174 570</p>
                      <p>💬 WhatsApp Available</p>
                      <p>✉ info@ziansafeharbour.com</p>
                      <p>🌐 www.ziansafeharbour.com</p>
                    </div>
                  </motion.article>
                </div>
              )}
            </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}

        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-xl">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                index === i
                  ? "w-8 bg-accent"
                  : "w-2 bg-white/60 hover:bg-white"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}