import { useEffect, useState } from "react";

/** Returns true if the user prefers reduced motion. */
const getPrefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Returns true on narrow/touch screens. */
const getIsMobile = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 767px)").matches;

/**
 * Tracks mouse position and returns a soft parallax offset { x, y }.
 * Disabled on mobile and when prefers-reduced-motion is set.
 * @param {number} strength  Max pixel offset (default 18)
 */
export function useMouseParallax(strength = 18) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (getPrefersReduced() || getIsMobile()) return;

    let raf;
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };

    const onMove = (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * strength;
      target.y = (e.clientY / window.innerHeight - 0.5) * strength;
    };

    // Lerp toward target for smooth feel
    const tick = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      setOffset({ x: current.x, y: current.y });
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return offset;
}

/**
 * Returns scrollY * strength for background parallax translate.
 * Disabled when prefers-reduced-motion is set.
 * @param {number} strength  Multiplier (default 0.3)
 */
export function useScrollParallax(strength = 0.3) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    if (getPrefersReduced()) return;

    const onScroll = () => setOffsetY(window.scrollY * strength);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [strength]);

  return offsetY;
}
