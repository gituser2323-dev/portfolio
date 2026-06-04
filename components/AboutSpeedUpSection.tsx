"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"


gsap.registerPlugin(ScrollTrigger)

export default function AboutAwwwardsTransition() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ---------- TEXT REVEAL ---------- */
      gsap.from(".reveal", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      /* ---------- FLOATING IMAGE ---------- */
      gsap.to(imageRef.current, {
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
      })

      /* ---------- CINEMATIC DARK FADE ---------- */
      gsap.to(".cinematic-overlay", {
        opacity: 0.6,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

      /* ---------- IMAGE SCALE ON SCROLL ---------- */
      gsap.to(imageRef.current, {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white overflow-hidden"
    >

      {/* CINEMATIC OVERLAY */}
      <div className="cinematic-overlay pointer-events-none absolute inset-0 bg-black opacity-0 z-10" />

      {/* ================= CONTENT ================= */}

      <div className="min-h-screen flex items-center relative z-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8 max-w-xl">

            <p className="reveal text-xs tracking-[0.4em] text-gray-500 uppercase">
              Inside SpeedUp
            </p>

            <h3 className="reveal text-4xl md:text-5xl font-semibold leading-tight">
              Most Professionals don’t fail because they lack tutorials.
              <br />
              They fail because nobody teaches them
              <span className="text-red-500"> how systems think.</span>
            </h3>

          <p className="reveal text-gray-400 text-lg">
  At SpeedUp, you don’t just attend classes — you train with real projects, gain practical skills, and become job-ready with full placement support.
</p>

            <p className="reveal text-gray-400 text-lg">
              Students learn how software breaks, scales,
              and evolves in real-world conditions.
            </p>

            <p className="reveal text-red-500 font-medium">
              Real growth begins when tutorials stop working.
            </p>

            {/* SIGNATURE + LINKEDIN */}
            <div className="reveal pt-6 border-t border-white/15  space-y-3">

              <div>
                <p className="font-medium text-lg">Divya</p>
                <p className="text-sm text-gray-400">
                  Center Manager
                </p>
              </div>



            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">

            <div
              ref={imageRef}
              className="relative will-change-transform"
            >
              {/* RED GLOW */}
              <div className="absolute inset-0 -z-10
                              bg-red-600/20 blur-[140px]
                              rounded-3xl scale-110" />


              <Image
                src="/d.png"
                alt="Divya Nair"
                width={520}
                height={650}
                className="
    rounded-3xl
    w-[420px] md:w-[520px]
    h-auto
    shadow-[0_80px_200px_rgba(0,0,0,0.9)]
  "
              />
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}