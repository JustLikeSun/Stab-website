"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  originX: number;
  originY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  phase: number;
  speed: number;
}

interface Props {
  text?: string;
  className?: string;
  particleColor?: string;
  particleSize?: number;
  density?: number;
  mouseRadius?: number;
  mouseForce?: number;
}

export function KineticText({
  text = "ANUBI",
  className,
  particleColor = "#0a0a0a",
  particleSize = 1.8,
  density = 3,
  mouseRadius = 80,
  mouseForce = 0.15,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const rafRef = useRef<number>(0);
  const dprRef = useRef(1);

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    dprRef.current = dpr;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    canvas.width = w * dpr;
    canvas.height = h * dpr;

    const offscreen = document.createElement("canvas");
    offscreen.width = w;
    offscreen.height = h;
    const offCtx = offscreen.getContext("2d")!;

    const fontSize = Math.min(w * 0.28, h * 0.55);
    offCtx.fillStyle = "#000";
    offCtx.font = `700 ${fontSize}px "Epilogue", "Inter", sans-serif`;
    offCtx.textAlign = "center";
    offCtx.textBaseline = "middle";
    offCtx.letterSpacing = `${-fontSize * 0.06}px`;
    offCtx.fillText(text, w / 2, h / 2);

    const imageData = offCtx.getImageData(0, 0, w, h);
    const pixels = imageData.data;
    const particles: Particle[] = [];
    const step = density;

    for (let y = 0; y < h; y += step) {
      for (let x = 0; x < w; x += step) {
        const i = (y * w + x) * 4;
        if (pixels[i + 3] > 128) {
          const jitterX = (Math.random() - 0.5) * step * 0.4;
          const jitterY = (Math.random() - 0.5) * step * 0.4;
          particles.push({
            originX: x + jitterX,
            originY: y + jitterY,
            x: x + jitterX,
            y: y + jitterY,
            vx: 0,
            vy: 0,
            size: particleSize * (0.6 + Math.random() * 0.8),
            alpha: 0,
            baseAlpha: 0.55 + Math.random() * 0.45,
            phase: Math.random() * Math.PI * 2,
            speed: 0.003 + Math.random() * 0.006,
          });
        }
      }
    }

    particlesRef.current = particles;
  }, [text, particleSize, density]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    initParticles();

    let time = 0;
    const ctx = canvas.getContext("2d")!;

    const animate = () => {
      const dpr = dprRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      time += 1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (p.alpha < p.baseAlpha) {
          p.alpha = Math.min(p.alpha + 0.008, p.baseAlpha);
        }

        const breathe = Math.sin(time * p.speed + p.phase) * 0.6;
        const drift = Math.cos(time * p.speed * 0.7 + p.phase * 1.3) * 0.4;

        let targetX = p.originX + drift;
        let targetY = p.originY + breathe;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            const force = (1 - dist / mouseRadius) * mouseForce * 60;
            targetX += (dx / dist) * force;
            targetY += (dy / dist) * force;
          }
        }

        p.vx += (targetX - p.x) * 0.06;
        p.vy += (targetY - p.y) * 0.06;
        p.vx *= 0.88;
        p.vy *= 0.88;
        p.x += p.vx;
        p.y += p.vy;

        const alphaFlicker = p.alpha * (0.85 + Math.sin(time * 0.02 + p.phase) * 0.15);
        ctx.globalAlpha = alphaFlicker;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const onResize = () => {
      initParticles();
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
    };
  }, [initParticles, particleColor, mouseRadius, mouseForce]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999, active: false };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
