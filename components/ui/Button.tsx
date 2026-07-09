import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-pill font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-primary-foreground hover:bg-accent-hover",

        secondary:
          "border border-border bg-surface text-primary hover:bg-secondary-soft",

        white:
          "bg-surface text-primary hover:bg-secondary-soft",
        ghost:
          "bg-transparent text-primary hover:bg-secondary-soft",
      },

      size: {
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface BaseProps extends ButtonVariants {
  className?: string;
  children: ReactNode;
}

type ButtonProps =
  | (BaseProps &
      ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
      })
  | (BaseProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
      });

export function Button({ className, variant, size, children, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (props.href) {
    const { href, ...anchorProps } = props as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}