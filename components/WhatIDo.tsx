"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function WhatIDo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordRefs = useRef<HTMLSpanElement[]>([])
  const glowRef = useRef<HTMLSpanElement>(null)

  const statement =
    "I don’t train people to write more code. I help them think better."

  useEffect(() => {
    const ctx = gsap.context(() => {
      // entrance
      gsap.from(containerRef.current, {
        y: 28,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      })

      // scroll paint per word
      wordRefs.current.forEach((word, i) => {
        gsap.fromTo(
          word,
          { color: "rgba(255,255,255,0.25)" },
          {
            color:
              word.innerText.toLowerCase().includes("think")
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

    // cursor proximity glow (only on phrase)
    const onMove = (e: MouseEvent) => {
      if (!glowRef.current) return
      const rect = glowRef.current.getBoundingClientRect()
      const dx = e.clientX - (rect.left + rect.width / 2)
      const dy = e.clientY - (rect.top + rect.height / 2)
      const dist = Math.sqrt(dx * dx + dy * dy)

      gsap.to(glowRef.current, {
        opacity: dist < 180 ? 1 : 0.4,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    window.addEventListener("mousemove", onMove)

    return () => {
      ctx.revert()
      window.removeEventListener("mousemove", onMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="max-w-xl relative">

      {/* ROLE */}
      <p className="text-[11px] uppercase tracking-[0.4em] text-white/40 mb-12">
        Founder · Mentor · Speaker
      </p>

      {/* STATEMENT */}
      <h3 className="text-[clamp(28px,3.6vw,42px)] font-medium leading-[1.15] mb-14">
        {statement.split(" ").map((word, i) => {
          const isKey = word.toLowerCase().includes("think")
          return (
            <span
              key={i}
              ref={(el) => el && (wordRefs.current[i] = el)}
              className="inline-block mr-3"
            >
              {isKey ? (
                <span
                  ref={glowRef}
                  className="relative"
                >
                  {word}
                  <span className="absolute inset-0 blur-xl bg-yellow-400/20 opacity-40 -z-10" />
                </span>
              ) : (
                word
              )}
            </span>
          )
        })}
      </h3>

      {/* BODY */}
      <div className="space-y-6 text-[17px] leading-relaxed text-white/60">
        <p>
          I’m{" "}
          <span className="text-white/85 font-medium">
            Pratik Sabale
          </span>
          . I work with students, professionals, and teams who feel stuck —
          not because they lack effort, but because they lack direction.
        </p>

        <p>
          My work focuses on building{" "}
          <span className="text-white/75">
            engineering judgment
          </span>
          , system-level clarity, and fundamentals that compound over time.
        </p>
      </div>

      {/* SIGNATURE */}
      <div className="mt-16 pt-8 border-t border-white/15">
        <p className="text-sm italic text-white/55">
          “Tools change. Thinking doesn’t.”
        </p>
        <p className="text-[11px] uppercase tracking-widest text-white/35 mt-2">
          personal philosophy
        </p>
      </div>

    </div>
  )
}
