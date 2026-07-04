"use client";

import { useEffect, useRef } from "react";

const SEGMENTS = 120;
const STROKE_WIDTH = 10;

export function RotatingRing() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let animationId = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const size = Math.min(parent.clientWidth, parent.clientHeight) * 0.72;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = size * dpr;
      canvas.height = size * dpr;

      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement!);

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const r = w / 2 - STROKE_WIDTH;

      ctx.clearRect(0, 0, w, h);

      ctx.lineWidth = STROKE_WIDTH;
      ctx.lineCap = "round";

      for (let i = 0; i < SEGMENTS; i++) {
        const start =
          ((Math.PI * 2) / SEGMENTS) * i + frame * 0.004;

        const end = start + 0.03;

        ctx.strokeStyle =
          i % 8 === 0 ? "#E8715A" : "#F3D6CC";

        ctx.beginPath();
        ctx.arc(w / 2, h / 2, r, start, end);
        ctx.stroke();
      }

      frame++;

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas className="absolute inset-0 m-auto" ref={canvasRef} />
  );
}
