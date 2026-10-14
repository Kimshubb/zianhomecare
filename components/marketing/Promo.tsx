"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { POSTERS, WHATSAPP_NUMBER } from "./posters";

/** Show the poster this long after the page opens (or on first scroll, whichever is first). */
const SHOW_AFTER_MS = 2000;
/** Once closed, don't show again until the browser tab/session ends. */
const STORAGE_KEY = "zian-promo-poster-dismissed";

export function PromoPoster() {
  const [open, setOpen] = useState(false);
  const [entered, setEntered] = useState(false);
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const poster = POSTERS[index];
  const hasMany = POSTERS.length > 1;
  const ratio = poster ? poster.width / poster.height : 1;

  const close = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // storage unavailable (private mode etc.) – popup just won't be remembered
    }
  }, []);

  // Trigger: after 2 seconds, or the first scroll, whichever happens first
  useEffect(() => {
    if (POSTERS.length === 0) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // ignore
    }

    let timer: number | undefined;

    function stop() {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", show);
    }
    function show() {
      stop();
      setOpen(true);
    }

    timer = window.setTimeout(show, SHOW_AFTER_MS);
    window.addEventListener("scroll", show, { passive: true });
    return stop;
  }, []);

  // While open: animate in, lock page scroll, handle Esc and keep Tab focus inside
  useEffect(() => {
    if (!open) {
      setEntered(false);
      return;
    }

    const raf = requestAnimationFrame(() => setEntered(true));
    closeRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  if (!open || !poster) return null;

  const goTo = (next: number) =>
    setIndex((next + POSTERS.length) % POSTERS.length);

  return (
    <div
      className="fixed inset-0 z-[100] flex overflow-y-auto bg-black/60 p-4 backdrop-blur-sm"
      onClick={close}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={poster.alt}
        onClick={(e) => e.stopPropagation()}
        // Card is as wide as the poster needs to be to fit the screen height (no cropping),
        // capped at 32rem and never wider than the screen.
        style={{
          width: `min(100%, 32rem, calc((100dvh - 12rem) * ${ratio}))`,
          minWidth: "min(100%, 16rem)",
        }}
        className={cn(
          "relative m-auto overflow-hidden rounded-2xl bg-white shadow-2xl",
          "transition duration-300 motion-reduce:transition-none",
          entered ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
      >
        {/* Poster */}
        <div
          className="relative w-full bg-slate-100"
          style={{ aspectRatio: `${poster.width} / ${poster.height}` }}
        >
          <Image
            key={poster.id}
            src={poster.image}
            alt={poster.alt}
            fill
            sizes="(max-width: 768px) 90vw, 512px"
            className="object-cover"
          />

          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close poster"
            className="absolute right-3 top-3 z-10 rounded-full bg-black/60 p-2.5 text-white transition hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="h-5 w-5" />
          </button>

          {hasMany && (
            <>
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous poster"
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next poster"
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 p-4">
          {hasMany && (
            <div className="flex justify-center gap-2" aria-hidden="true">
              {POSTERS.map((p, i) => (
                <span
                  key={p.id}
                  className={cn(
                    "h-2 w-2 rounded-full transition",
                    i === index ? "bg-slate-900" : "bg-slate-300"
                  )}
                />
              ))}
            </div>
          )}

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              poster.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          >
            {poster.ctaLabel ?? "Enrol on WhatsApp"}
          </a>

          <button
            type="button"
            onClick={close}
            className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            Continue to website
          </button>
        </div>
      </div>
    </div>
  );
}