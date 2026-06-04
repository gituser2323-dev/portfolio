"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
;



export default function ScrollColorReveal({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context((self) => {
      const words = self.selector?.(".reveal-word") as HTMLSpanElement[];

      // Set initial color to muted
      gsap.set(words, { color: "var(--muted-foreground)" });

      gsap.to(words, {
        color: (i, el) =>
          el.dataset.highlight === "true"
            ? "var(--primary)"
            : "var(--foreground)",
        stagger: 0.12,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 45%",
          scrub: 0.8,
        },
      });
    }, containerRef);

    // Refresh ScrollTrigger on layout shifts
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap text-left leading-relaxed"
    >
      {text.split(" ").map((word, i) => {
        const lower = word.toLowerCase();
        const isHighlight = lower.includes("fresh") || lower.includes("ideas");

        return (
          <span
            key={i}
            data-highlight={isHighlight ? "true" : "false"}
            className="reveal-word mr-2 text-muted-foreground transition-colors duration-300"
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}
