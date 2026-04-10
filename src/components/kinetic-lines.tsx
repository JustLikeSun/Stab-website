"use client";

import { useEffect, useRef } from "react";

/**
 * Port of anubi.io home KineticLines (from their shipped pages bundle):
 * — 20px grid of dots, each with sin/cos size drift over time
 * — mouse repels within 100px (strength 8), extra radius while near pointer
 * — rgba(100,100,100, …) fills, #222 vector mark overlay
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

function AnubiLogoMark() {
  return (
    <svg
      viewBox="0 0 597 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M93.672 2.424L141.288 90.872H111.208L102.888 74.744H39.016L30.696 90.872H0.744L48.232 2.424H93.672ZM49.384 54.776H92.648L75.752 22.264H66.152L49.384 54.776ZM148.805 1.52799H182.853L245.189 57.848V1.52799H275.397V91.128H245.189L178.885 31.736V91.128H148.805V1.52799ZM385.522 0.887993H415.986V44.024C415.986 47.736 415.474 51.576 414.578 55.416C413.682 59.128 411.89 63.352 409.202 67.704C406.514 72.184 403.058 76.024 398.834 79.352C394.61 82.68 388.85 85.496 381.554 87.672C374.13 89.976 365.682 91 356.21 91H351.474C344.306 91 337.65 90.488 331.762 89.336C325.746 88.184 320.754 86.648 316.658 84.728C312.562 82.808 308.85 80.504 305.778 77.816C302.578 75.128 300.146 72.312 298.354 69.624C296.434 66.808 295.026 63.864 293.746 60.664C292.594 57.464 291.826 54.52 291.442 51.96C291.058 49.272 290.93 46.712 290.93 44.024V0.887993H321.394V42.36C321.394 45.56 321.906 48.504 322.802 51.192C323.698 54.008 325.234 56.696 327.41 59.384C329.586 62.072 332.914 64.12 337.522 65.656C342.002 67.192 347.378 68.088 353.65 68.088C359.794 68.088 365.042 67.192 369.522 65.656C373.874 64.12 377.202 62.072 379.378 59.384C381.682 56.696 383.218 54.008 384.114 51.192C385.01 48.504 385.522 45.56 385.522 42.36V0.887993ZM429.385 91V1.272H513.097C526.153 1.272 535.369 3.064 540.745 6.904C546.249 10.744 548.937 15.736 548.937 21.752V23.416C548.937 26.104 548.297 28.664 547.273 30.84C546.121 33.016 544.713 34.808 542.793 36.088C541.001 37.496 539.337 38.52 537.801 39.16C536.393 39.928 534.857 40.568 533.321 40.952C535.497 41.336 537.545 42.104 539.593 43C541.641 43.896 543.817 45.176 546.249 46.712C548.681 48.376 550.729 50.68 552.137 53.624C553.673 56.44 554.441 59.768 554.441 63.48V65.144C554.441 82.424 540.873 91 513.865 91H429.385ZM459.977 20.216V34.808H507.849C515.017 34.808 518.473 32.376 518.473 27.512V27.256C518.473 22.52 515.017 20.216 507.849 20.216H459.977ZM510.537 53.88H459.977V71.416H510.537C515.017 71.416 518.217 70.52 520.009 68.728C521.673 67.064 522.569 65.016 522.569 62.584V62.2C522.569 56.568 518.601 53.88 510.537 53.88ZM596.516 1.656V91H566.052V1.656H596.516Z"
        fill="#222"
      />
    </svg>
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
        <AnubiLogoMark />
      </div>
    </div>
  );
}
