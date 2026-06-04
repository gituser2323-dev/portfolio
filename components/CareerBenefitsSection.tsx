"use client"

import { useEffect, useRef } from "react"
import { gsap, initGSAP } from "@/lib/gsap"




export default function CareerBenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
      initGSAP()

    if (!sectionRef.current) return

    const ctx = gsap.context(() => {

      gsap.fromTo(
        ".benefit-title",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true
          }
        }
      )

      gsap.fromTo(
        ".benefit-card",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const benefits = [
    {
      title: "Real Ownership",
      desc: "You don’t execute tasks. You drive outcomes."
    },
    {
      title: "Elite Mentorship",
      desc: "Work alongside senior builders who push your limits."
    },
    {
      title: "Technical Depth",
      desc: "Architect scalable systems, not surface features."
    },
    {
      title: "Career Acceleration",
      desc: "Clear progression with measurable impact."
    }
  ]

 return (
  <section
    ref={sectionRef}
    className="relative py-14 md:py-20 bg-black text-white overflow-hidden overflow-x-hidden"
  >

    {/* Ambient Glow */}
    <div className="absolute left-1/2 -translate-x-1/2 top-0 
                    w-[350px] sm:w-[500px] md:w-[700px] 
                    h-[350px] sm:h-[500px] md:h-[700px]
                    bg-red-600/15 blur-[120px] md:blur-[220px] rounded-full" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-start">

      {/* LEFT */}
      <div className="benefit-title text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight">
          What
          You <span className="text-red-500">Gain</span>
        </h2>

        <p className="mt-6 md:mt-8 text-gray-400 max-w-md text-base md:text-lg mx-auto md:mx-0">
          Growth isn’t promised.
          It’s Industry-Ready Engineering
        </p>
      </div>

      {/* RIGHT */}
      <div className="space-y-6 md:space-y-8 mt-10 md:mt-0">

        {benefits.map((item, i) => (
          <div
            key={i}
            className="benefit-card group relative p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl
                       bg-gradient-to-br from-white/5 to-black/40
                       backdrop-blur-2xl
                       border border-white/10
                       transition-all duration-500
                       hover:-translate-y-2 hover:scale-[1.02]
                       shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-4 md:mt-6 text-sm sm:text-base text-gray-400 leading-relaxed">
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
