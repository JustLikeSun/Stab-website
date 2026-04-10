"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import {
  ANUBI_CLIENT_WAVE_DURATION_S,
  ANUBI_CLIENT_WAVE_STAGGER_S,
  homeClients,
} from "@/data/clients";

/**
 * Mirrors anubi.io `#home-clients`: 9 logos, Sanity assets, grid + inset hairline,
 * `logoOpacityWave` animation (6.48s, staggered negative delays).
 */
export function ClientsStrip() {
  const n = homeClients.length;

  return (
    <section
      className="clients-section reveal"
      aria-labelledby="clients-strip-heading"
    >
      <h2 id="clients-strip-heading" className="sr-only">
        Clients
      </h2>
      <div className="page-container clients-section-inner">
        <ul className="clients-partners-grid" role="list">
          {homeClients.map((c, i) => {
            const delayS = -(n - 1 - i) * ANUBI_CLIENT_WAVE_STAGGER_S;
            const waveStyle = {
              animationDuration: `${ANUBI_CLIENT_WAVE_DURATION_S}s`,
              animationDelay: `${delayS}s`,
            } as CSSProperties;

            return (
              <li key={c.name} className="clients-partner-cell">
                {c.isSvg ? (
                  // eslint-disable-next-line @next/next/no-img-element -- remote SVG from Sanity
                  <img
                    src={c.src}
                    alt={c.name}
                    width={c.width}
                    height={c.height}
                    className="clients-partner-img"
                    style={waveStyle}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <Image
                    src={c.src}
                    alt={c.name}
                    width={c.width}
                    height={c.height}
                    className="clients-partner-img"
                    style={waveStyle}
                    sizes="(max-width: 640px) 22vw, (max-width: 1024px) 14vw, 12vw"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
