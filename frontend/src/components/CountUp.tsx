"use client";

import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 1800,
  prefix = "",
  suffix = "",
  className = ""
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTime: number | null = null;

            const step = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              // Smooth easeOutCubic curve
              const easeProgress = 1 - Math.pow(1 - progress, 3);
              const currentVal = Math.floor(easeProgress * end);

              setCount(currentVal);

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setCount(end);
              }
            };

            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [end, duration, hasAnimated]);

  const formattedNumber = count.toLocaleString("en-US");

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};
