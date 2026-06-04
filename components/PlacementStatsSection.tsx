"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"


export default function PlacementStatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  if (typeof window === "undefined") return

  

  const ctx = gsap.context(() => {

    // HERO
    gsap.from(".hero-number", {
      scale: 0.85,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        invalidateOnRefresh: true,
      },
    })

    // CARDS
    gsap.from(".stat-card", {
      x: 60,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
        invalidateOnRefresh: true,
      },
    })

    // COUNTERS
    gsap.utils.toArray<HTMLElement>(".counter").forEach((el) => {
      const target = Number(el.dataset.target)
      let obj = { value: 0 }

      gsap.to(obj, {
        value: target,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
        },
        onUpdate: () => {
          el.innerText =
            target % 1 !== 0
              ? obj.value.toFixed(1)
              : Math.floor(obj.value).toString()
        },
      })
    })

  }, sectionRef)

  // 🔥 Force refresh after everything renders
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 300)

  return () => ctx.revert()
}, [])


return (
  <section
    ref={sectionRef}
    className="relative pt-10 md:py-20 bg-black text-white overflow-hidden overflow-x-hidden"
  >

    {/* Dynamic Red Glow Background */}
    <div className="absolute inset-0">
      <div className="absolute top-1/3 left-1/4 
                      w-[300px] sm:w-[500px] md:w-[700px] 
                      h-[300px] sm:h-[500px] md:h-[700px]
                      bg-red-600/20 blur-[120px] md:blur-[180px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 
                      w-[250px] sm:w-[450px] md:w-[600px] 
                      h-[250px] sm:h-[450px] md:h-[600px]
                      bg-red-500/10 blur-[120px] md:blur-[200px] rounded-full animate-pulse" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28 items-center">

      {/* LEFT SIDE */}
      <div className="relative text-center lg:text-left">

        <p className="text-[10px] sm:text-xs tracking-[0.4em] text-gray-500 uppercase">
          Placement Dominance
        </p>

        <h2 className="mt-6 md:mt-8 hero-number text-[90px] sm:text-[130px] md:text-[220px] font-black leading-none text-white/10">
          <span
            className="counter"
            data-target={64}
          >
            0
          </span>
          %
        </h2>

        <p className="mt-6 md:mt-8 text-gray-400 text-base md:text-lg max-w-md mx-auto lg:mx-0">
          Students placed across India & global tech companies.
          We don’t just train professionals — we launch careers.
        </p>

      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-6 md:space-y-10 mt-8 lg:mt-0">

        <StatCard number={450} suffix="+" label="Students Placed" />
        <StatCard number={8.5} suffix=" LPA" label="Highest Package" />
        <StatCard number={3.3} suffix=" LPA" label="Average Package" />

      </div>

    </div>
  </section>
)


}

function StatCard({
  number,
  suffix,
  label,
}: {
  number: number
  suffix: string
  label: string
}) {
  return (
    <div
      className="
      stat-card relative p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl
      bg-white/5
      border border-white/10
      backdrop-blur-xl
      transition-all duration-500
      hover:scale-105
      hover:shadow-[0_40px_120px_rgba(239,68,68,0.35)]
      overflow-hidden
      "
    >

      <div className="absolute inset-0 rounded-2xl md:rounded-3xl
                      bg-gradient-to-br from-red-500/10 to-transparent
                      opacity-0 hover:opacity-100 transition duration-500" />

      <h3 className="relative text-2xl sm:text-3xl md:text-5xl font-bold text-white">
        <span
          className="counter"
          data-target={number}
        >
          0
        </span>
        {suffix}
      </h3>

      <p className="relative mt-4 md:mt-6 text-xs sm:text-sm text-gray-400 tracking-wide uppercase">
        {label}
      </p>

    </div>
  )
}



