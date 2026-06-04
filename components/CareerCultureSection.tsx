"use client"

import { useEffect, useRef } from "react"
import { gsap, initGSAP } from "@/lib/gsap"

export default function CareerCultureSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    initGSAP()

    const ctx = gsap.context(() => {

      gsap.fromTo(
        ".culture-title",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      )

      gsap.fromTo(
        ".culture-card",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      )

    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

 return (
  <section
    ref={sectionRef}
    className="relative py-10 md:py-10 bg-black text-white overflow-hidden overflow-x-hidden"
  >
    {/* Massive Background Word */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <h1 className="text-[80px] sm:text-[120px] md:text-[220px] font-bold text-white/5 select-none tracking-tight whitespace-nowrap">
        BUILD
      </h1>
    </div>

    {/* Red Glow */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 
                    w-[300px] sm:w-[450px] md:w-[600px] 
                    h-[300px] sm:h-[450px] md:h-[600px]
                    bg-red-600/20 blur-[120px] md:blur-[200px] 
                    rounded-full" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">

      <div className="culture-title mb-16 md:mb-24 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight">
          How We <span className="text-red-500">Operate</span>
        </h2>
        <p className="mt-4 md:mt-6 text-gray-400 max-w-md md:max-w-xl text-base md:text-lg mx-auto md:mx-0">
          We don’t hire for tasks.
          We build people who build systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {[
          {
            title: "System Thinking",
            desc: "Every feature connects to a larger architecture.",
          },
          {
            title: "Precision Execution",
            desc: "Clarity, ownership, and disciplined shipping.",
          },
          {
            title: "Long-Term Scale",
            desc: "We build infrastructure that outlives trends.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`culture-card group relative p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl
                        backdrop-blur-3xl
                        border border-white/10
                        transition-all duration-500
                        hover:-translate-y-3 hover:scale-[1.04]
                        shadow-[0_40px_120px_rgba(0,0,0,0.7)]
                        ${
                          i === 1
                            ? "bg-gradient-to-br from-white/10 to-black/40"
                            : "bg-gradient-to-br from-white/5 to-black/30"
                        }`}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-4 md:mt-8 text-sm sm:text-base text-gray-400 leading-relaxed">
              {item.desc}
            </p>

            <div className="absolute inset-0 rounded-2xl md:rounded-3xl
                            bg-gradient-to-tr from-red-500/10 to-transparent
                            opacity-0 group-hover:opacity-100
                            transition duration-500" />
          </div>
        ))}
      </div>

    </div>
  </section>
)

}
