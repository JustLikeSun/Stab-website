"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ContactCtaButtonProps = {
  href?: string;
  children?: React.ReactNode;
};

/**
 * Mirrors anubi.io end CTA: magnetic follow, hover ripple, per-letter pop,
 * subtle idle float, ScrollTrigger entrance (GSAP, same timing/easing as source).
 */
export function ContactCtaButton({
  href = "/contact",
  children = "Contact us",
}: ContactCtaButtonProps) {
  const hitRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);
  const floatTween = useRef<gsap.core.Tween | null>(null);
  const hovering = useRef(false);

  useLayoutEffect(() => {
    const hit = hitRef.current;
    const link = linkRef.current;
    const textEl = textRef.current;
    const ripple = rippleRef.current;
    if (!hit || !link || !textEl || !ripple) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const raw = textEl.textContent?.trim() || "Contact us";
    const chars = [...raw];
    textEl.innerHTML = chars
      .map(
        (ch, i) =>
          `<span class="contact-btn-char" style="--char-index:${i}">${ch === " " ? "&nbsp;" : ch}</span>`
      )
      .join("");
    const charEls = textEl.querySelectorAll<HTMLElement>(".contact-btn-char");

    const killFloat = () => {
      floatTween.current?.kill();
      floatTween.current = null;
    };

    const startFloat = () => {
      killFloat();
      floatTween.current = gsap.to(link, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    };

    const onMove = (e: MouseEvent) => {
      const rect = link.getBoundingClientRect();
      const dx = e.clientX - rect.left - rect.width / 2;
      const dy = e.clientY - rect.top - rect.height / 2;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 250) {
        const f = 1 - dist / 250;
        gsap.to(link, {
          x: dx * f * 0.3,
          y: dy * f * 0.3,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      } else {
        gsap.to(link, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.3)",
          overwrite: "auto",
        });
      }
    };

    const onEnter = (e: MouseEvent) => {
      hovering.current = true;
      killFloat();
      const rect = link.getBoundingClientRect();
      const lx = e.clientX - rect.left;
      const ly = e.clientY - rect.top;
      gsap.set(ripple, {
        x: lx - rect.width / 2,
        y: ly - rect.height / 2,
        scale: 0,
      });
      gsap.to(ripple, { scale: 2.5, duration: 0.8, ease: "power2.out" });
      charEls.forEach((el, i) => {
        gsap.to(el, {
          y: -8,
          rotateZ: gsap.utils.random(-5, 5),
          duration: 0.5,
          delay: 0.02 * i,
          ease: "back.out(2)",
          overwrite: true,
        });
      });
      gsap.to(link, { scale: 1.05, duration: 0.6, ease: "power2.out", overwrite: "auto" });
    };

    const onLeave = () => {
      hovering.current = false;
      gsap.to(ripple, { scale: 0, duration: 0.5, ease: "power2.in" });
      charEls.forEach((el, i) => {
        gsap.to(el, {
          y: 0,
          rotateZ: 0,
          duration: 0.6,
          delay: 0.015 * i,
          ease: "elastic.out(1, 0.5)",
          overwrite: true,
        });
      });
      gsap.to(link, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
        overwrite: "auto",
        onComplete: startFloat,
      });
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(
        link,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: link,
            start: "top 90%",
            toggleActions: "play none none reverse",
            onLeaveBack: () => {
              killFloat();
            },
          },
          onComplete: () => {
            if (!hovering.current) startFloat();
          },
        }
      );
    }, hit);

    document.addEventListener("mousemove", onMove);
    link.addEventListener("mouseenter", onEnter);
    link.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("mousemove", onMove);
      link.removeEventListener("mouseenter", onEnter);
      link.removeEventListener("mouseleave", onLeave);
      killFloat();
      ctx.revert();
    };
  }, [children]);

  return (
    <div ref={hitRef} className="contact-hit-area">
      <Link ref={linkRef} href={href} className="contact-btn">
        <span ref={rippleRef} className="contact-btn-ripple" aria-hidden />
        <span ref={textRef} className="contact-btn-text">
          {children}
        </span>
      </Link>
    </div>
  );
}
