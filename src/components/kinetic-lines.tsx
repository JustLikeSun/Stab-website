"use client";

import { useEffect, useRef } from "react";

/**
 * Home hero kinetic field: interactive dot grid + vector mark overlay.
 * — 20px grid of dots, each with sin/cos size drift over time
 * — mouse repels within 100px (strength 8), extra radius while near pointer
 * — rgba(100,100,100, …) fills, STAB wordmark overlay (public/brand-assets/stab.svg)
 */

const GRID = 20;
const MOUSE_RADIUS = 100;
const REPULSE_STRENGTH = 8;
const MOUSE_SIZE_BOOST = 1.5;
const LERP = 0.15;

class GridDot {
  baseX: number;
  baseY: number;
  gridX: number;
  gridY: number;
  baseSize = 2;
  currentX: number;
  currentY: number;
  targetX: number;
  targetY: number;
  currentMouseSize = 0;
  targetMouseSize = 0;

  constructor(baseX: number, baseY: number, gridX: number, gridY: number) {
    this.baseX = baseX;
    this.baseY = baseY;
    this.gridX = gridX;
    this.gridY = gridY;
    this.currentX = baseX;
    this.currentY = baseY;
    this.targetX = baseX;
    this.targetY = baseY;
  }

  draw(
    ctx: CanvasRenderingContext2D,
    time: number,
    mouse: { x: number; y: number }
  ) {
    const wobbleA =
      Math.sin(0.3 * this.gridX + 0.003 * time) *
      Math.cos(0.3 * this.gridY + 0.002 * time);
    const wobbleB =
      Math.cos(0.2 * this.gridX - 0.0025 * time) *
      Math.sin(0.4 * this.gridY + 0.0035 * time);
    const l = this.baseSize + ((wobbleA + wobbleB) / 2) * 0.8;

    const dx = mouse.x - this.baseX;
    const dy = mouse.y - this.baseY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    let cx = 0;
    let cy = 0;
    let sizeBoost = 0;
    if (dist < MOUSE_RADIUS && dist > 0) {
      const falloff = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
      cx = -(dx / dist) * falloff * REPULSE_STRENGTH;
      cy = -(dy / dist) * falloff * REPULSE_STRENGTH;
      sizeBoost = MOUSE_SIZE_BOOST * falloff;
    }

    this.targetX = this.baseX + cx;
    this.targetY = this.baseY + cy;
    this.targetMouseSize = sizeBoost;

    this.currentX += (this.targetX - this.currentX) * LERP;
    this.currentY += (this.targetY - this.currentY) * LERP;
    this.currentMouseSize += (this.targetMouseSize - this.currentMouseSize) * LERP;

    const radius = l + this.currentMouseSize;
    const alpha = 0.05 + (radius / 4) * 0.15;

    ctx.fillStyle = `rgba(100, 100, 100, ${alpha})`;
    ctx.beginPath();
    ctx.arc(this.currentX, this.currentY, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function StabKineticWordmark() {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- local SVG wordmark; avoids inlining huge paths
    <img
      src="/brand-assets/stab.svg"
      alt=""
      width={4052}
      height={692}
      className="kinetic-lines-mark-img"
      draggable={false}
    />
  );
}

interface Props {
  className?: string;
}

export function KineticLines({ className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<GridDot[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const buildGrid = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const w = rect.width;
      const h = rect.height;
      const cols = Math.floor(w / GRID) + 3;
      const rows = Math.floor(h / GRID) + 3;
      const dots: GridDot[] = [];
      for (let gx = 0; gx < cols; gx++) {
        for (let gy = 0; gy < rows; gy++) {
          const x = -30 + GRID * gx;
          const y = -30 + GRID * gy;
          dots.push(new GridDot(x, y, gx, gy));
        }
      }
      dotsRef.current = dots;
    };

    buildGrid();
    window.addEventListener("resize", buildGrid);

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    let raf = 0;
    const tick = () => {
      const rect = canvas.getBoundingClientRect();
      timeRef.current += 1;
      ctx.clearRect(0, 0, rect.width, rect.height);
      for (const dot of dotsRef.current) {
        dot.draw(ctx, timeRef.current, mouseRef.current);
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("resize", buildGrid);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={className ? `kinetic-lines-root ${className}` : "kinetic-lines-root"}>
      <canvas ref={canvasRef} className="kinetic-lines-canvas" />
      <div className="kinetic-lines-logo">
        <StabKineticWordmark />
      </div>
    </div>
  );
}
