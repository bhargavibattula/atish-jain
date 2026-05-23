"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./SkillsBubbles.css";

interface SkillBubbleItem {
  label: string;
  rotation?: number;
  hoverStyles?: { bgColor?: string; textColor?: string };
}

interface SkillsBubblesProps {
  items: SkillBubbleItem[];
  pillBg?: string;
  pillColor?: string;
}

export default function SkillsBubbles({
  items,
  pillBg = "#111827",
  pillColor = "#e5e7eb",
}: SkillsBubblesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || hasAnimated.current) return;

    const pills = pillsRef.current.filter(Boolean) as HTMLDivElement[];
    // Hide all initially
    gsap.set(pills, { y: -120, opacity: 0, scale: 0.6 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            // Stagger fall-in with bounce
            pills.forEach((pill, i) => {
              const randomDelay = i * 0.04 + gsap.utils.random(0, 0.15);
              const randomY = gsap.utils.random(-140, -80);

              gsap.fromTo(
                pill,
                { y: randomY, opacity: 0, scale: 0.5, rotation: gsap.utils.random(-15, 15) },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  rotation: items[i]?.rotation ?? 0,
                  duration: 0.8,
                  delay: randomDelay,
                  ease: "bounce.out",
                }
              );
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [items]);

  return (
    <div ref={containerRef} className="skills-pill-grid">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="skills-pill-item"
          ref={(el) => {
            pillsRef.current[idx] = el;
          }}
          style={{
            ["--item-rot" as string]: `${item.rotation ?? 0}deg`,
            ["--pill-bg" as string]: pillBg,
            ["--pill-color" as string]: pillColor,
            ["--hover-bg" as string]: item.hoverStyles?.bgColor || "#f3f4f6",
            ["--hover-color" as string]: item.hoverStyles?.textColor || pillColor,
          }}
        >
          <span className="skills-pill-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
