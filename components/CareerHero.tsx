"use client"

import { useEffect, useRef } from "react"
import { gsap, initGSAP } from "@/lib/gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

gsap.registerPlugin(MotionPathPlugin)

export default function CareerHero() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const strikeRef = useRef<HTMLSpanElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    initGSAP()

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      tl.from(headingRef.current, { y: 80, opacity: 0, duration: 1 })
        .from(strikeRef.current, { width: 0, duration: 0.8 }, "-=0.6")
        .from(subRef.current, { y: 40, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(btnRef.current, { y: 30, opacity: 0, duration: 0.6 }, "-=0.5")
        .from(visualRef.current, { x: 120, opacity: 0, duration: 1.2 }, "-=1")

      // Core pulse
      gsap.to(".core-glow", {
        scale: 1.2,
        opacity: 0.6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })

      // Floating core
      gsap.to(".floating-core", {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })

      // Responsive orbit radius
      const isMobile = window.innerWidth < 768
      const radius = isMobile ? 70 : 150
      const duration = 20

      const nodes = gsap.utils.toArray<HTMLElement>(".orbit-node")

      nodes.forEach((node, i) => {
        const startAngle = (i / nodes.length) * Math.PI * 2

        gsap.to(node, {
          duration,
          repeat: -1,
          ease: "none",
          motionPath: {
            path: [
              {
                x: radius * Math.cos(startAngle),
                y: radius * Math.sin(startAngle)
              },
              {
                x: radius * Math.cos(startAngle + Math.PI),
                y: radius * Math.sin(startAngle + Math.PI)
              },
              {
                x: radius * Math.cos(startAngle + Math.PI * 2),
                y: radius * Math.sin(startAngle + Math.PI * 2)
              }
            ],
            curviness: 1.25
          }
        })
      })
    }, visualRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative pt-20 md:pt-0 min-h-screen flex items-center bg-black text-white overflow-hidden overflow-x-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black" />
      <div className="absolute top-0 right-0 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-red-600/20 blur-[120px] md:blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          <p className="text-[10px] sm:text-xs tracking-[0.4em] text-gray-500 uppercase mb-4 md:mb-6">
            CAREERS & OPPORTUNITIES
          </p>

          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight"
          >
            Work{" "}
            <span className="relative inline-block">
              <span className="text-gray-600">for</span>
              <span
                ref={strikeRef}
                className="absolute left-0 top-1/2 h-[2px] bg-red-500"
                style={{ width: "100%" }}
              />
            </span>{" "}
            With Us.
          </h1>

          <p
            ref={subRef}
            className="mt-5 md:mt-6 text-base sm:text-lg text-gray-400 max-w-md md:max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            Join a team building scalable systems that power
            modern education and real career outcomes.
          </p>

          <div
            ref={btnRef}
            className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center md:items-start justify-center md:justify-start"
          >
            <button className="w-full sm:w-auto group relative px-8 sm:px-10 py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300">

              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 transition-all duration-500 group-hover:from-red-500 group-hover:to-red-600" />

              <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                <a href="#openroles"> View Open Roles →</a>
              </span>
            </button>

            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full border border-white/15   hover:border-red-500/40 transition duration-300">
              <a href="/about"> Our Culture</a>
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div
          ref={visualRef}
          className="relative mt-0 md:mt-0 h-[300px] sm:h-[380px] md:h-[540px] flex items-center justify-center overflow-hidden max-w-full"
        >

          {/* Energy Glow */}
          <div className="core-glow absolute w-[240px] sm:w-[350px] md:w-[500px] 
                          h-[240px] sm:h-[350px] md:h-[500px]
                          bg-red-600/0 blur-[120px] md:blur-[220px] 
                          rounded-full" />

          {/* Glass Core */}
          <div className="floating-core relative w-[150px] sm:w-[200px] md:w-[260px] 
                          h-[150px] sm:h-[200px] md:h-[260px]
                          rounded-full
                          bg-gradient-to-br from-white/10 via-white/5 to-black/40
                          backdrop-blur-3xl
                          border border-white/15  
                          shadow-[0_80px_200px_rgba(0,0,0,0.7)]
                          flex items-center justify-center">

            <p className="text-white font-semibold text-sm sm:text-base md:text-lg tracking-wide text-center px-4">
              Build Your Career
            </p>
          </div>

          {/* Orbit Ring */}
          <div className="absolute w-[200px] sm:w-[300px] md:w-[420px] 
                          h-[200px] sm:h-[300px] md:h-[420px]
                          rounded-full
                          border border-white/10" />

          {/* Orbit Nodes */}
          {["Learn", "Get Hired", "Mentorship", "Skill"].map((item, i) => (
            <div
              key={i}
              className="orbit-node absolute w-12 sm:w-16 md:w-24 
                         h-12 sm:h-16 md:h-24
                         rounded-xl md:rounded-2xl
                         bg-white/10 backdrop-blur-xl
                         border border-white/15  
                         flex items-center justify-center
                         text-[9px] sm:text-xs md:text-sm text-gray-200
                         shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
