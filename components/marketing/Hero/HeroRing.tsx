"use client";

import { useEffect, useState } from "react";

import {
  ROTATION_PERIOD_MS,
  SCENES,
} from "./heroData";

import { InnerCircle } from "./InnerCircle";
import { PulseRings } from "./PulseRings";
import { SceneBackground } from "./SceneBackground";

export function HeroRing() {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % SCENES.length);
    }, ROTATION_PERIOD_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative flex min-h-[520px] items-center justify-center">
      {/* Decorative background */}
      <SceneBackground />

      {/* Animated pulse rings */}
      <PulseRings />

      {/* Caregiver image */}
      <InnerCircle scene={SCENES[currentScene]} />
    </div>
  );
}