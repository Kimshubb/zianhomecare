"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";

import { cn } from "@/lib/cn";

// TODO: swap these for real photography. Keep the same file paths
// (/public/hero/carousel-1.jpg etc.) and this component needs no changes.
const SLIDES = [
  { src: "/hero/carousel-1.png", alt: "Caregiver providing personal care at home" },
  { src: "/hero/carousel-2.png", alt: "Caregiver and client sharing a moment of companionship" },
  { src: "/hero/carouselmain.png", alt: "A healthy meal prepared for a client" },
];

const AUTOPLAY_INTERVAL_MS = 5000;
const DRAG_THRESHOLD_PX = 80;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPaused]);

  function handleDragEnd(_event: unknown, info: PanInfo) {
    if (info.offset.x < -DRAG_THRESHOLD_PX) {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    } else if (info.offset.x > DRAG_THRESHOLD_PX) {
      setIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    }
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card bg-secondary-soft shadow-card">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <Image
              src={SLIDES[index].src}
              alt={SLIDES[index].alt}
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="pointer-events-none object-cover"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot navigation */}
      <div className="mt-5 flex justify-center gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-2 rounded-pill transition-all duration-300",
              i === index ? "w-6 bg-primary" : "w-2 bg-border hover:bg-secondary"
            )}
          />
        ))}
      </div>
    </div>
  );
}