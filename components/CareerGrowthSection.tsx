"use client"

import { useEffect, useRef } from "react"
import { gsap, initGSAP } from "@/lib/gsap"

export default function CareerGrowthSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    initGSAP()

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true, // 🔥 important for SPA stability
        }
      })

      tl.from(".growth-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      })

      tl.from(".growth-line", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.5,
        ease: "power4.out"
      }, "-=0.6")

      tl.from(".growth-step", {
        x: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out"
      }, "-=1")

    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

 return (
  <section
    ref={sectionRef}
    className="relative py-14 md:py-20 bg-black text-white overflow-hidden overflow-x-hidden"
  >
    {/* Massive Background Text */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <h1 className="text-[80px] sm:text-[120px] md:text-[200px] font-bold text-white/5 select-none whitespace-nowrap">
        GROW
      </h1>
    </div>

    {/* Red Ambient Glow */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2
                    w-[300px] sm:w-[450px] md:w-[600px]
                    h-[300px] sm:h-[450px] md:h-[600px]
                    bg-red-600/20 blur-[120px] md:blur-[200px] rounded-full" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">

      {/* LEFT SIDE */}
      <div className="text-center md:text-left">
        <h2 className="growth-title text-3xl sm:text-4xl md:text-7xl font-bold leading-tight">
          Your Growth <br />
          <span className="text-red-500">Evolution</span>
        </h2>

        <p className="mt-6 md:mt-8 text-gray-400 max-w-md text-base md:text-lg mx-auto md:mx-0">
          We design progression, not positions.
          Every role is structured for long-term scale.
        </p>
      </div>

      {/* RIGHT SIDE TIMELINE */}
      <div className="relative pl-10 sm:pl-12 md:pl-14 mt-10 md:mt-0">

        <div className="growth-line absolute left-3 sm:left-4 top-0 w-[2px] h-full
                        bg-gradient-to-b from-red-500 to-transparent" />

        {[
          {
            title: "Onboard",
            desc: "Understand our architecture, standards, and systems."
          },
          {
            title: "Build",
            desc: "Own features and contribute to core Tools & Technologies."
          },
          {
            title: "Scale",
            desc: "Architect solutions impacting thousands of learners."
          },
          {
            title: "Lead",
            desc: "Mentor teams and shape long-term product vision."
          }
        ].map((step, i) => (
          <div key={i} className="growth-step relative mb-16 md:mb-24">

            <div className="absolute -left-[26px] sm:-left-[30px] md:-left-[34px] top-2 w-4 sm:w-5 h-4 sm:h-5
                            rounded-full bg-red-500
                            shadow-[0_0_20px_rgba(239,68,68,0.9)]" />

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              {step.title}
            </h3>

            <p className="mt-3 md:mt-4 text-sm sm:text-base text-gray-400 max-w-sm leading-relaxed">
              {step.desc}
            </p>

          </div>
        ))}

      </div>

    </div>
  </section>
)



}
