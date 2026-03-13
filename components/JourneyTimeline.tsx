"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  const journey = [
    { phase: "CONFUSED", title: "You’ve learned things… but still feel unsure.", desc: "Tutorials don’t connect into real confidence." },
    { phase: "CONNECTING", title: "Things finally start connecting.", desc: "Systems, logic, flow — it makes sense." },
    { phase: "UNDERSTANDING", title: "You understand why things work.", desc: "You think like a problem solver." },
    { phase: "BUILDING", title: "You build projects that feel real.", desc: "Production-level thinking begins." },
    { phase: "CONFIDENT", title: "You trust your decisions.", desc: "You debug calmly and structure better." },
    { phase: "IN CONTROL", title: "You don’t feel lost anymore.", desc: "You grow with clarity and direction." },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".panel")

      gsap.set(trackRef.current, { width: panels.length * window.innerWidth })

      const scrollTween = gsap.to(trackRef.current, {
        x: () => -(trackRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => "+=" + (trackRef.current!.scrollWidth - window.innerWidth),
          scrub: 1,
          pin: true,
          onUpdate: self => {
            gsap.to(progressRef.current, { height: `${self.progress * 100}%` })
            const index = Math.round(self.progress * (journey.length - 1))
            counterRef.current!.innerText = `${index + 1}`
          }
        },
      })

      panels.forEach(panel => {
        gsap.fromTo(
          panel,
          { opacity: 0.3, y: 60, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            scrollTrigger: {
              trigger: panel,
              containerAnimation: scrollTween,
              start: "left center",
              end: "center center",
              scrub: true,
            },
          }
        )
      })

      // Floating particles
      gsap.to(".particle", {
        y: "-=40",
        repeat: -1,
        yoyo: true,
        duration: 6,
        ease: "sine.inOut",
        stagger: 0.4
      })

      ScrollTrigger.refresh()
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative bg-dots text-white overflow-hidden">

      {/* Soft Spotlight */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/10 blur-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full" />

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="particle absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Side Progress */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-6">
        <div className="w-[2px] h-44 bg-white/10 relative">
          <div ref={progressRef} className="absolute bottom-0 w-full bg-primary" style={{ height: "0%" }} />
        </div>
        <div ref={counterRef} className="text-sm text-white/40 tracking-widest">1</div>
      </div>

      <div className="h-screen overflow-hidden flex items-center">
        <div ref={trackRef} className="flex h-[65%] items-center">

          {journey.map((step, i) => (
            <div key={i} className="panel w-screen flex justify-center px-20">
              <div className="max-w-3xl w-full glass-water rounded-[40px] p-16">

                <p className="text-xs tracking-[0.5em] text-primary uppercase mb-8">
                  {step.phase}
                </p>

                <h2 className="text-5xl font-semibold leading-tight mb-8">
                  {step.title}
                </h2>

                <p className="text-xl text-white/60">
                  {step.desc}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
