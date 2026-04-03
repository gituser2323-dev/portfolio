"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Badge } from "./ui/badge"

export function About() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const floatingRef = useRef<HTMLDivElement>(null)

  // 🔥 SLIDER (smooth infinite)
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const ctx = gsap.context(() => {
      gsap.to(slider, {
        xPercent: -50,
        ease: "none",
        duration: 30, // slower = premium
        repeat: -1,
      })
    })

    return () => ctx.revert()
  }, [])

  // 🔥 FLOATING CARD (premium motion)
  useEffect(() => {
    const card = floatingRef.current
    if (!card) return

    let bounds = card.getBoundingClientRect()
    let centerX = bounds.left + bounds.width / 2
    let centerY = bounds.top + bounds.height / 2

    const updateCenter = () => {
      bounds = card.getBoundingClientRect()
      centerX = bounds.left + bounds.width / 2
      centerY = bounds.top + bounds.height / 2
    }

    const move = (e: MouseEvent) => {
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY

      gsap.to(card, {
        x: dx * 0.05,
        y: dy * 0.05,
        rotate: dx * 0.08,
        duration: 0.5,
        ease: "power2.out",
      })
    }

    const reset = () => {
      gsap.to(card, {
        x: 0,
        y: 0,
        rotate: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
      })
    }

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseleave", reset)
    window.addEventListener("resize", updateCenter)

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseleave", reset)
      window.removeEventListener("resize", updateCenter)
    }
  }, [])

  return (
    <section className="bg-black text-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-red-600 rounded-3xl p-10 h-[420px] flex flex-col justify-between">
            <div>
              <p className="text-white/70 text-lg">AI Engineering</p>
              <h2 className="text-4xl font-bold mt-2">MERN Systems</h2>
            </div>

            <div className="w-40 h-40 rounded-full bg-white/20 flex items-center justify-center">
              <div className="w-18 h-18 rounded-full bg-white" />
            </div>
          </div>

          {/* ⚡ RIGHT SIDE */}
          <div className="relative">

            <h3 className="text-2xl font-semibold mb-4">
              My Time as a MERN + AI Mentor
            </h3>

            <p className="text-white/60 leading-relaxed mb-8 max-w-lg">
              Most developers spend years stuck in tutorials, learning tools but never building anything that works in the real world.

              I focus on changing that.

              I help developers transition into builders by working on real-world systems using MERN, AI, and automation.

              The goal isn’t just to learn technologies, but to understand how systems are built, how they scale, and how they solve real problems in the industry.
            </p>

            {/* 🔥 SLIDER */}
            <div className="overflow-hidden">
              <div ref={sliderRef} className="flex gap-4 w-max">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-4">
                    {[
                      "/img1.png",
                      "/img3.jpeg",
                      "/img4.jpeg",
                      "/img5.jpeg",
                      // "/img7.jpeg",
                      // "/img8.jpeg",
                      "/img9.jpeg",
                      "/img10.jpeg",
                      "/img11.jpeg",
                      "/img2.jpeg",

                      "/img12.jpeg",
                      // "/img13.jpeg",
                      "/img14.jpeg",

                      "/img15.jpeg",
                      "/img16.jpeg",







                    ].map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        className="w-40 h-40 object-cover rounded-xl"
                        alt=""
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>



          </div>
        </div>

        {/* 🔻 BOTTOM */}
        <div className="mt-24 text-center">

          {/* LABEL */}
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-10">
            Technologies I Build With
          </p>

          {/* TECH STRIP */}
          <div className="flex flex-wrap justify-center gap-4">

            {[
              "React",
              "Next JS",
              "MongoDB",
              "Tailwind",
              "Node",
              "OpenAI",
              "Docker",
            ].map((tech, i) => (
              <div
                key={i}
                className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/70 text-sm tracking-wide hover:text-white hover:border-white/30 transition duration-300"
              >
                {tech}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}


export default About