"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  type PanInfo,
  type Variants,
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
    subtitle: "Real support, for every stage of the journey.",
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

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgeReveal: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const textReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.7, ease: "easeOut" },
  },
};

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Mobile viewport + reduced-motion detection, used to scale back
  // continuous background/parallax animation cost on phones and for
  // users who've asked the OS to minimize motion.
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const widthQuery = window.matchMedia("(max-width: 640px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    setIsMobile(widthQuery.matches);
    setReducedMotion(motionQuery.matches);

    const widthHandler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    const motionHandler = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);

    widthQuery.addEventListener("change", widthHandler);
    motionQuery.addEventListener("change", motionHandler);

    return () => {
      widthQuery.removeEventListener("change", widthHandler);
      motionQuery.removeEventListener("change", motionHandler);
    };
  }, []);

  const skipAmbientMotion = isMobile || reducedMotion;

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY);

    return () => clearInterval(timer);
  }, [paused]);

  function handleDragEnd(_: unknown, info: PanInfo) {
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
      <div className="relative aspect-[3/4] overflow-hidden rounded-card shadow-card sm:aspect-[4/5]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing"
            initial={{
              opacity: 0,
              scale: slide.isVortex ? 1.2 : 1.05,
              rotate: slide.isVortex ? 2 : 0,
              filter: slide.isVortex ? "blur(10px)" : "blur(0px)",
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
              filter: slide.isVortex ? "blur(12px)" : "blur(0px)",
            }}
            transition={{
              duration: reducedMotion ? 0.3 : slide.isVortex ? 1.4 : 0.9,
            }}
          >
            {/* Background */}
            <motion.div
              animate={
                skipAmbientMotion
                  ? undefined
                  : { scale: [1, 1.08], x: [0, -8], y: [0, -6] }
              }
              transition={{ duration: AUTOPLAY / 1000, ease: "linear" }}
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
            <div className="absolute right-4 top-4 z-20 sm:right-8 sm:top-8">
              <Image
                src="/full-logozian.png"
                alt="Zian SafeHarbour Care"
                width={130}
                height={130}
                className="h-12 w-auto drop-shadow-xl sm:h-16 lg:h-20"
              />
            </div>

            {/* Content (parallax layer) */}
            <motion.div
              animate={skipAmbientMotion ? undefined : { x: [0, 5], y: [0, 4] }}
              transition={{ duration: AUTOPLAY / 1000, ease: "linear" }}
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
                  <div className="flex h-full items-end p-5 sm:p-8 lg:p-12">
                    <motion.div
                      variants={fadeUp}
                      className="max-w-lg rounded-card bg-primary/60 p-5 backdrop-blur-md sm:p-8"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm sm:tracking-[0.25em]">
                        Zian SafeHarbour Care
                      </span>

                      <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl">
                        {slide.title}
                      </h2>

                      <p className="mt-3 text-base leading-7 text-white/90 sm:mt-5 sm:text-lg sm:leading-8">
                        {slide.subtitle}
                      </p>
                    </motion.div>
                  </div>
                )}

                {/* MISSION */}
                {slide.type === "mission" && (
                  <div className="flex h-full items-center justify-center px-5 sm:px-8">
                    <motion.article
                      variants={fadeUp}
                      className="max-w-xl rounded-card bg-surface/90 p-5 shadow-2xl backdrop-blur-md sm:p-10 sm:backdrop-blur-xl"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm sm:tracking-[0.25em]">
                        Our Mission
                      </span>

                      <h2 className="mt-3 text-2xl font-bold leading-tight text-primary sm:mt-5 sm:text-4xl">
                        {slide.title}
                      </h2>

                      <p className="mt-3 text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">
                        {slide.subtitle}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                        {["Professional", "Compassionate", "Trusted"].map(
                          (item) => (
                            <span
                              key={item}
                              className="rounded-full bg-secondary-soft px-3 py-1.5 text-xs font-semibold text-primary sm:px-4 sm:py-2 sm:text-sm"
                            >
                              {item}
                            </span>
                          )
                        )}
                      </div>
                    </motion.article>
                  </div>
                )}

                {/* SERVICE */}
                {slide.type === "service" && (
                  <div
                    className={cn(
                      "absolute inset-0 flex p-5 sm:p-8 lg:p-12",
                      slide.position === "bl" && "items-end justify-start",
                      slide.position === "br" && "items-end justify-end",
                      slide.position === "tl" && "items-start justify-start",
                      slide.position === "tr" && "items-start justify-end"
                    )}
                  >
                    <motion.div
                      animate={
                        skipAmbientMotion
                          ? undefined
                          : { y: [0, -6, 0] }
                      }
                      transition={{
                        y: {
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1.2,
                        },
                      }}
                      className="max-w-[calc(100vw-2.5rem)] sm:max-w-md"
                    >
                      <motion.div initial="hidden" animate="visible">
                        {/* Badge — lower-third style */}
                        <motion.div
                          variants={badgeReveal}
                          className="inline-flex items-stretch overflow-hidden rounded-xl border border-white/20 bg-black/30 shadow-2xl backdrop-blur-md"
                        >
                          <div className="flex items-center bg-accent px-3 sm:px-5">
                            <span className="text-xl font-black text-white sm:text-3xl">
                              {slide.number}
                            </span>
                          </div>

                          <div className="flex flex-col justify-center gap-0.5 px-3 py-2 sm:px-5 sm:py-3">
                            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-[10px] sm:tracking-[0.3em]">
                              Service
                            </span>
                            <span className="text-base font-bold leading-snug tracking-wide text-white sm:text-lg">
                              {slide.title}
                            </span>
                          </div>
                        </motion.div>

                        {/* Glass Card */}
                        <motion.div
                          variants={cardReveal}
                          className="mt-4 rounded-card border border-white/15 bg-white/8 p-4 backdrop-blur-md sm:mt-5 sm:p-7 sm:backdrop-blur-xl"
                        >
                          <motion.p
                            variants={textReveal}
                            className="text-base leading-7 text-white sm:text-lg sm:leading-8"
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
                  <div className="flex h-full items-end justify-center p-5 sm:p-10">
                    <motion.article
                      variants={fadeUp}
                      className="max-w-2xl rounded-card bg-surface/90 p-5 text-center shadow-xl backdrop-blur-md sm:p-10 sm:backdrop-blur-xl"
                    >
                      <h2 className="text-2xl font-bold text-primary sm:text-4xl">
                        {slide.title}
                      </h2>

                      <p className="mt-3 text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">
                        {slide.subtitle}
                      </p>
                    </motion.article>
                  </div>
                )}

                {/* CONTACT */}
                {slide.type === "contact" && (
                  <div className="flex h-full items-center justify-center px-5 sm:px-8">
                    <motion.article
                      variants={fadeUp}
                      className="max-w-lg rounded-card bg-primary/80 p-5 text-center backdrop-blur-md sm:p-10 sm:backdrop-blur-xl"
                    >
                      <h2 className="text-2xl font-bold leading-tight text-white sm:text-4xl">
                        {slide.title}
                      </h2>

                      <p className="mt-3 text-base leading-7 text-white/90 sm:mt-6 sm:text-lg sm:leading-8">
                        {slide.subtitle}
                      </p>

                      <div className="mt-5 sm:mt-8">
                        <Button href="/contact" size="lg">
                          Book a Consultation
                        </Button>
                      </div>

                      <div className="mt-5 space-y-1.5 text-sm text-white/80 sm:mt-8 sm:space-y-2 sm:text-base">
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
        <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-1 rounded-full bg-white/15 px-3 py-1.5 backdrop-blur-xl sm:bottom-6 sm:gap-2 sm:px-4 sm:py-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className="-m-2 flex items-center justify-center p-2"
            >
              <span
                className={cn(
                  "block h-2 rounded-full transition-all duration-500",
                  index === i
                    ? "w-6 bg-accent sm:w-8"
                    : "w-1.5 bg-white/60 hover:bg-white sm:w-2"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}