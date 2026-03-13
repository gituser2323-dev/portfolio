"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordRefs = useRef<HTMLSpanElement[]>([])

  const text =
 "Learn the skills modern careers demand — guided by experience, powered by innovation.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      wordRefs.current.forEach((word, i) => {
        gsap.fromTo(
          word,
          { color: "rgba(255,255,255,0.18)" },
          {
            color: i >= 6 && i <= 7
              ? "rgba(172, 36, 34, 1)" // accent words (fresh ideas)
              : "rgba(255,255,255,1)",
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top+=${i * 22} center`,
              end: `top+=${i * 22 + 120} center`,
              scrub: true,
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative py-40 bg-black overflow-hidden"
    >
      {/* subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-[clamp(36px,5vw,68px)] leading-[1.18] font-medium tracking-tight">
          {text.split(" ").map((word, i) => (
            <span
              key={i}
              ref={(el) => el && (wordRefs.current[i] = el)}
              className="inline-block mr-3"
            >
              {word}
            </span>
          ))}
        </h2>
      </div>
    </section>
  )
}
