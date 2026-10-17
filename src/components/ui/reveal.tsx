"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function Reveal({ 
  children, 
  delay = 0, 
  className = "", 
  direction = "up" 
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // requestAnimationFrame ensures the browser has painted the initial 
          // hidden state before we trigger the transition, preventing "snap" glitches.
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
          observer.unobserve(ref.current!);
        }
      },
      // Triggers slightly before it fully enters the viewport for a smoother feel
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case "up": return "translateY(32px)";
      case "down": return "translateY(-32px)";
      case "left": return "translateX(32px)";
      case "right": return "translateX(-32px)";
      default: return "translate(0, 0)";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : getInitialTransform(),
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform", // Magic property: Promotes to GPU layer for 60fps smooth animation
      }}
    >
      {children}
    </div>
  );
}