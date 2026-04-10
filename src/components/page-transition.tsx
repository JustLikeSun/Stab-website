"use client";

import gsap from "gsap";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

const STRIPE_COUNT = 19;
const LOGO_STRIPE_INDEX = 8;

/* Survives React Strict Mode remount */
let transitionBootstrapped = false;
let lastTransitionPathname: string | null = null;

/**
 * anubi.io page transition: fixed row of black vertical stripes that collapse
 * (height → 0) with stagger from the start — see _app chunk (pageTransition + _stripe).
 */
export function PageTransition() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile =
      typeof window !== "undefined" && window.matchMedia("(max-width: 779px)").matches;

    const stripes = root.querySelectorAll<HTMLElement>("._stripe");

    if (reduced || mobile) {
      gsap.set(stripes, { height: 0 });
      gsap.set(root, { visibility: "hidden", pointerEvents: "none" });
      if (!transitionBootstrapped) {
        transitionBootstrapped = true;
        lastTransitionPathname = pathname;
      }
      return;
    }

    const play = () => {
      gsap.killTweensOf(stripes);
      gsap.set(stripes, { height: "100%" });
      gsap.set(root, { visibility: "visible", pointerEvents: "none" });

      gsap.to(stripes, {
        height: 0,
        duration: 0.6,
        ease: "power2.inOut",
        stagger: { amount: 0.3, from: "start" },
        onComplete: () => {
          gsap.set(root, { visibility: "hidden" });
        },
      });
    };

    if (!transitionBootstrapped) {
      transitionBootstrapped = true;
      lastTransitionPathname = pathname;
      play();
      return;
    }

    if (lastTransitionPathname === pathname) {
      return;
    }

    lastTransitionPathname = pathname;
    play();
  }, [pathname]);

  return (
    <div ref={rootRef} className="page-transition-root" aria-hidden="true">
      {Array.from({ length: STRIPE_COUNT }, (_, i) => (
        <div key={i} className="page-transition-stripe _stripe">
          {i === LOGO_STRIPE_INDEX ? (
            <div className="page-transition-stripe-text">
              <Image
                src="/anubi-assets/_next/static/media/anubi.00dff3f2.svg"
                alt=""
                width={64}
                height={64}
                priority
              />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
