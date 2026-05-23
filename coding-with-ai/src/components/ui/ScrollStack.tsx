"use client";

import React, { useEffect, useRef, useCallback } from "react";
import "./ScrollStack.css";

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = "" }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string | number;
  scaleEndPosition?: string | number;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const lastTransformsRef = useRef<Map<number, { translateY: number; scale: number; rotation: number; blur: number }>>(new Map());

  const clamp = (val: number, min: number, max: number) => Math.min(max, Math.max(min, val));

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const updateCards = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const scrollTop = useWindowScroll ? window.scrollY : (scrollerRef.current?.scrollTop ?? 0);
    const containerHeight = useWindowScroll ? window.innerHeight : (scrollerRef.current?.clientHeight ?? 0);
    const stackPosPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPx = parsePercentage(scaleEndPosition, containerHeight);

    const endEl = (useWindowScroll ? document : scrollerRef.current)?.querySelector(".scroll-stack-end") as HTMLElement | null;
    const endTop = endEl
      ? (useWindowScroll ? endEl.getBoundingClientRect().top + window.scrollY : endEl.offsetTop)
      : 0;

    cards.forEach((card, i) => {
      const cardTop = useWindowScroll
        ? card.getBoundingClientRect().top + window.scrollY
        : card.offsetTop;

      const triggerStart = cardTop - stackPosPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPx;
      const pinStart = triggerStart;
      const pinEnd = endTop - containerHeight / 2;

      // Scale progress
      const scaleProgress = clamp((scrollTop - triggerStart) / (triggerEnd - triggerStart || 1), 0, 1);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      // Blur
      let blur = 0;
      if (blurAmount) {
        let topIdx = 0;
        for (let j = 0; j < cards.length; j++) {
          const jTop = useWindowScroll
            ? cards[j].getBoundingClientRect().top + window.scrollY
            : cards[j].offsetTop;
          if (scrollTop >= jTop - stackPosPx - itemStackDistance * j) topIdx = j;
        }
        if (i < topIdx) blur = Math.max(0, (topIdx - i) * blurAmount);
      }

      // Translation (pin logic)
      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPosPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPosPx + itemStackDistance * i;
      }

      const t = {
        translateY: Math.round(translateY * 10) / 10,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 10) / 10,
        blur: Math.round(blur * 10) / 10,
      };

      const prev = lastTransformsRef.current.get(i);
      if (
        !prev ||
        Math.abs(prev.translateY - t.translateY) > 0.05 ||
        Math.abs(prev.scale - t.scale) > 0.0005 ||
        Math.abs(prev.rotation - t.rotation) > 0.05 ||
        Math.abs(prev.blur - t.blur) > 0.05
      ) {
        card.style.transform = `translate3d(0,${t.translateY}px,0) scale(${t.scale}) rotate(${t.rotation}deg)`;
        card.style.filter = t.blur > 0 ? `blur(${t.blur}px)` : "none";
        lastTransformsRef.current.set(i, t);
      }

      // Stack complete callback
      if (i === cards.length - 1) {
        const inView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (inView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!inView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    useWindowScroll, stackPosition, scaleEndPosition, itemStackDistance,
    baseScale, itemScale, rotationAmount, blurAmount, onStackComplete, parsePercentage,
  ]);

  // RAF-batched scroll handler — never blocks the main thread
  const onScroll = useCallback(() => {
    if (rafRef.current) return; // already scheduled
    rafRef.current = requestAnimationFrame(() => {
      updateCards();
      rafRef.current = null;
    });
  }, [updateCards]);

  useEffect(() => {
    const scroller = scrollerRef.current;

    // Gather cards
    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : scroller?.querySelectorAll(".scroll-stack-card") || []
    ) as HTMLDivElement[];

    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
    });

    // Use native scroll listener — no Lenis hijacking
    const target = useWindowScroll ? window : scroller;
    target?.addEventListener("scroll", onScroll, { passive: true });

    // Initial paint
    updateCards();

    return () => {
      target?.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      cardsRef.current = [];
      lastTransformsRef.current.clear();
      stackCompletedRef.current = false;
    };
  }, [itemDistance, useWindowScroll, onScroll, updateCards]);

  return (
    <div
      className={`scroll-stack-wrapper ${className}`.trim()}
      ref={scrollerRef}
    >
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
