"use client";

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  onLetterAnimationComplete?: () => void;
  animateOnMount?: boolean;
  overflow?: 'visible' | 'hidden';
  display?: string;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete,
  animateOnMount = false,
  overflow = 'visible',
  display = 'block'
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Keep callback ref updated
  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      if (animationCompletedRef.current) return;

      const el = ref.current;

      // Select targets to animate
      let targets: NodeListOf<Element> | Element[] = [];
      if (splitType === 'chars') {
        targets = Array.from(el.querySelectorAll('.split-char'));
      } else if (splitType === 'words') {
        targets = Array.from(el.querySelectorAll('.split-word'));
      } else {
        targets = [el];
      }

      if (targets.length === 0) return;

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign =
        marginValue === 0
          ? ''
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      // Reset initial values before starting animation
      gsap.set(targets, { ...from });

      const scrollTriggerConfig = animateOnMount ? undefined : {
        trigger: el,
        start,
        once: true,
        fastScrollEnd: true,
        anticipatePin: 0.4
      };

      const tween = gsap.to(targets, {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        scrollTrigger: scrollTriggerConfig,
        onComplete: () => {
          animationCompletedRef.current = true;
          onCompleteRef.current?.();
        },
        willChange: 'transform, opacity',
        force3D: true
      });

      return () => {
        if (!animateOnMount) {
          ScrollTrigger.getAll().forEach(st => {
            if (st.trigger === el) st.kill();
          });
        }
        tween.kill();
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
        animateOnMount
      ],
      scope: ref
    }
  );

  const renderTextContent = () => {
    if (splitType === 'chars') {
      const words = text.split(' ');
      return words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="split-word inline-block whitespace-nowrap"
          style={{ marginRight: '0.22em', paddingBottom: '0.15em', marginBottom: '-0.15em' }}
        >
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className="split-char inline-block"
              style={{ display: 'inline-block', willChange: 'transform, opacity', paddingBottom: '0.15em', marginBottom: '-0.15em' }}
            >
              {char}
            </span>
          ))}
        </span>
      ));
    }

    if (splitType === 'words') {
      const words = text.split(' ');
      return words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="split-word inline-block"
          style={{ marginRight: '0.22em', willChange: 'transform, opacity', paddingBottom: '0.15em', marginBottom: '-0.15em' }}
        >
          {word}
        </span>
      ));
    }

    return text;
  };

  const style: React.CSSProperties = {
    textAlign,
    overflow,
    display,
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    willChange: 'transform, opacity'
  };
  const classes = `split-parent ${className}`;
  const Tag = tag || 'p';

  return (
    <Tag ref={ref as any} style={style} className={classes}>
      {renderTextContent()}
    </Tag>
  );
};

export default SplitText;
