"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const services = [
  { title: "Full Stack + DevOps + AI", desc: "Engineering scalable apps with cloud pipelines and AI intelligence." },
  { title: "Python Full Stack + AI", desc: "Backend systems, data, and AI-driven application architecture." },
  { title: "Business Automation", desc: "Automating workflows, operations, and decision systems using modern tech." },
  { title: "UI / UX Design", desc: "Intelligent systems that reduce manual work and scale output." },
  { title: "AI Automation", desc: "Intelligent systems that reduce manual work and scale output." },
]

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray(".service-row")

      // 🔥 Stagger reveal
      gsap.from(rows, {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      })

      // 🎬 Parallax drift on scroll
      rows.forEach((row: any) => {
        gsap.to(row, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-black text-white py-32 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-white/40 mb-12 text-lg">Our expertise:</p>

        <div className="border border-white/10">
          {services.map((service, i) => (
            <Link
              href="#contact"
              key={i}
              className="group relative block border-b border-white/10 last:border-none overflow-hidden service-row"
            >
              {/* Hover Background Slide */}
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />

              <div className="relative z-10 flex items-center justify-between px-10 py-16 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                <h3 className="text-4xl md:text-6xl font-semibold tracking-tight transition-colors duration-500 group-hover:text-black">
                  {service.title}
                </h3>

                <div className="flex items-center gap-10">
                  <p className="hidden md:block max-w-sm text-white/60 group-hover:text-black/70 transition-colors duration-500">
                    {service.desc}
                  </p>

                  <ArrowRight
                    size={36}
                    className="transition-all duration-500 group-hover:translate-x-4 group-hover:text-black"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
