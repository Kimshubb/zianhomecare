import { useReducedMotion } from "framer-motion";

export function useMotionEnabled() {
  return !useReducedMotion();
}
