import type { BadgePosition } from "@/lib/types";
import { cn } from "@/lib/cn";

interface StatBadgeProps {
  position: BadgePosition;
  label: string;
}

const positionClasses: Record<BadgePosition, string> = {
  top: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  right: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  left: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
};

export function StatBadge({
  position,
  label,
}: StatBadgeProps) {
  return (
    <div
      className={cn(
        "absolute rounded-pill border border-brand-border bg-white px-4 py-2 text-xs font-semibold shadow-sm",
        positionClasses[position]
      )}
    >
      {label}
    </div>
  );
}
