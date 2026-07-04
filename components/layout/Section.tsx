import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/cn";

interface SectionProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLElement> {
  className?: string;
  spacing?: "sm" | "md" | "lg";
}

const spacingMap = {
  sm: "py-12 lg:py-16",
  md: "py-16 lg:py-24",
  lg: "py-20 lg:py-32",
} as const;

export function Section({
  children,
  className,
  spacing = "md",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        spacingMap[spacing],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}