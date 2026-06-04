"use client"

import { useEffect, useRef } from "react"
import { gsap, initGSAP } from "@/lib/gsap"

export default function BlogHeroAligned() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    initGSAP()

    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      })

      gsap.from(".accent-line", {
        width: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="
        relative 
        min-h-screen 
        bg-black 
        z-0
        text-white 
        flex items-center 
        overflow-hidden
        py-20 pt-24 sm:py-24 lg:py-0
      "
    >
      {/* Subtle grid only */}
      <div className="absolute inset-0 -z-10  pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="
        relative z-10 
        w-full 
        max-w-6xl 
        mx-auto 
        px-5 sm:px-6 lg:px-6
      ">

        {/* Label */}
        <p className="
          reveal 
          text-xs sm:text-sm 
          uppercase 
          tracking-[0.25em] sm:tracking-[0.35em] 
          text-white/50 
          mb-8 sm:mb-10
        ">
          Blog & Learning Insights
        </p>

        {/* Heading */}
        <div className="space-y-5 sm:space-y-6">
          <h1 className="
            reveal 
            text-[clamp(36px,9vw,80px)]
            lg:text-8xl
            font-bold 
            leading-[1.08] sm:leading-[1.05]
            tracking-tight
          ">
            <span className="text-red-600">Build Your Career</span> with Confidence
          </h1>
        </div>

        {/* Subtext */}
        <p className="
          reveal 
          mt-10 sm:mt-12 
          max-w-xl sm:max-w-2xl 
          text-base sm:text-lg 
          text-white/60 
          leading-relaxed
        ">
          Explore practical tutorials, career strategies, and real-world
          development insights designed to help you grow step by step.
        </p>

        {/* Accent Line */}
        <div className="
          mt-12 sm:mt-14 
          h-[2px] 
          w-20 sm:w-32 
          bg-red-600 
          accent-line
        " />

      </div>
    </section>
  )
}
