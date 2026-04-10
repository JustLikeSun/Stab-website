"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

function clampCursor(clientX: number, clientY: number, rect: DOMRect, radiusPad: number) {
  const minX = radiusPad + 22;
  const maxX = rect.width - radiusPad - 22;
  const minY = radiusPad + 8;
  const maxY = rect.height - radiusPad - 8;
  const x = gsap.utils.clamp(minX, maxX, clientX - rect.left);
  const y = gsap.utils.clamp(minY, maxY, clientY - rect.top);
  return { x, y };
}

export type WorkAllLandingCardProps = {
  href: string;
  title: string;
  tag: string;
  image: string;
  index: number;
  isLarge: boolean;
};

const CIRCLE_K = 130;

/**
 * Work index landing cards: clip-path circle reveal + parallax, blur timeline on base layer.
 * landingStyle (no custom cursor) — GSAP-driven.
 */
export function WorkAllLandingCard({
  href,
  title,
  tag,
  image,
  index,
  isLarge,
}: WorkAllLandingCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const hoverInnerRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLDivElement>(null);

  const E = isLarge ? CIRCLE_K * 1.5 : CIRCLE_K;

  useLayoutEffect(() => {
    const box = wrapRef.current;
    const clip = clipRef.current;
    const hoverInner = hoverInnerRef.current;
    const base = baseRef.current;
    if (!box || !clip || !hoverInner || !base) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const zIndexSetter = gsap.quickSetter(clip, "zIndex");

      gsap.set(clip, { clipPath: "circle(0px at 50% 50%)", zIndex: 0 });
      gsap.set(hoverInner, { x: 0, y: 0 });
      gsap.set(clip, { scale: 1.05, transformOrigin: "center center" });
      gsap.set(base, {
        filter: "blur(0px)",
        scale: 1.05,
        transformOrigin: "center center",
      });

      const tl = gsap.timeline({ paused: true });
      tl.to(clip, { scale: 1.1, duration: 1, ease: "power2.inOut" }, 0);
      tl.to(
        base,
        { filter: "blur(10px)", scale: 1.2, duration: 1, ease: "power2.inOut" },
        0
      );

      const X = (e: MouseEvent, isEnter?: boolean) => {
        const rect = box.getBoundingClientRect();
        const { x: a, y: i } = clampCursor(e.clientX, e.clientY, rect, E + 10);
        zIndexSetter(1);
        if (isEnter) {
          gsap.set(clip, { clipPath: `circle(0px at ${a}px ${i}px)` });
          gsap.set(hoverInner, { x: 0, y: 0 });
        }
        gsap.to(clip, {
          clipPath: `circle(${E}px at ${a}px ${i}px)`,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(hoverInner, {
          x: 0.05 * a,
          y: 0.05 * i,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      const G = (e: MouseEvent) => {
        const rect = box.getBoundingClientRect();
        const { x: r, y: t } = clampCursor(e.clientX, e.clientY, rect, E + 10);
        gsap.to(clip, {
          clipPath: `circle(0px at ${r}px ${t}px)`,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            zIndexSetter(0);
          },
        });
        gsap.to(hoverInner, { x: 0, y: 0, duration: 0.5, ease: "power2.out" });
      };

      const onEnter = (e: MouseEvent) => {
        X(e, true);
        tl.play();
      };
      const onLeave = (e: MouseEvent) => {
        G(e);
        tl.reverse();
      };

      box.addEventListener("mousemove", X);
      box.addEventListener("mouseenter", onEnter);
      box.addEventListener("mouseleave", onLeave);

      return () => {
        box.removeEventListener("mousemove", X);
        box.removeEventListener("mouseenter", onEnter);
        box.removeEventListener("mouseleave", onLeave);
      };
    }, box);

    return () => ctx.revert();
  }, [E]);

  const idx = String(index).padStart(2, "0");
  const sizes =
    "(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw";

  return (
    <div className="work-all-item" data-large={isLarge || undefined}>
      <div ref={wrapRef} className="work-all-image-box-wrap">
        <Link
          href={href}
          className={`work-all-card${isLarge ? " work-all-card-large" : ""}`}
          aria-label={`${title} - View Project`}
        >
          <div ref={baseRef} className="work-all-media-base">
            <Image
              src={image}
              alt={title}
              fill
              className="work-all-img"
              sizes={sizes}
              unoptimized
            />
          </div>
          <div ref={clipRef} className="work-all-clip">
            <div ref={hoverInnerRef} className="work-all-hover-inner">
              <Image
                src={image}
                alt=""
                fill
                className="work-all-img work-all-img-hover-layer"
                sizes={sizes}
                unoptimized
                aria-hidden
              />
            </div>
          </div>
          <div className="work-all-card-gradient" aria-hidden />
          <div className="work-all-card-top">
            <span className="work-all-card-index">{idx}</span>
            <span className="work-all-card-meta">{tag}</span>
          </div>
          <div className="work-all-card-bottom">
            <h3 className="work-all-card-title">{title}</h3>
            <span className="work-all-card-action">View Project</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
