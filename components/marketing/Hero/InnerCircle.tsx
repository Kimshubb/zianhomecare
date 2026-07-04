"use client";

import { AnimatePresence, motion } from "framer-motion";

import type { SceneData } from "@/lib/types";

interface InnerCircleProps {
  scene: SceneData;
}

export function InnerCircle({ scene }: InnerCircleProps) {
  return (
    <div className="absolute left-1/2 top-1/2 flex h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border-8 border-white bg-surface shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={scene.id}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center px-6"
        >
          <div className="mb-5 text-6xl">
            {scene.innerIcon}
          </div>

          <h3 className="text-lg font-semibold text-primary">
            {scene.innerText}
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted">
            {scene.innerSub}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}