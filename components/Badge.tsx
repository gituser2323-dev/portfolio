"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function FloatingBadge() {
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const badge = badgeRef.current
    if (!badge) return

    const move = (e: MouseEvent) => {
      const rect = badge.getBoundingClientRect()

      const x = (e.clientX - rect.left - rect.width / 2) * 0.05
      const y = (e.clientY - rect.top - rect.height / 2) * 0.05

      gsap.to(badge, {
        x,
        y,
        rotate: -10 + x * 0.2, // base tilt + dynamic tilt
        duration: 0.5,
        ease: "power2.out",
      })
    }

    const reset = () => {
      gsap.to(badge, {
        x: 0,
        y: 0,
        rotate: -10,
        duration: 1,
        ease: "elastic.out(1, 0.4)",
      })
    }

    window.addEventListener("mousemove", move)
    window.addEventListener("mouseleave", reset)

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseleave", reset)
    }
  }, [])

  return (
    <div className="absolute right-[-80px] top-10">

      {/* 🔥 BADGE */}
      <div
        ref={badgeRef}
        className="relative w-[180px] h-[260px] rounded-2xl shadow-2xl overflow-hidden"
        style={{
          transform: "rotate(-10deg)",
          background: "#FB2B37",
        }}
      >

        {/* 🔴 PATTERN */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,_white_2px,transparent_2px)] [background-size:40px_40px]" />

        {/* 🧾 CARD BODY */}
        <div className="absolute bottom-0 w-full h-[70%] bg-white rounded-t-3xl p-3 flex flex-col items-center">

          {/* IMAGE */}
          <div className="w-24 h-24 bg-gray-200 overflow-hidden border-4 border-white -mt-12 shadow-md">
            <img
              src="/pratik.jpg"
              alt="Pratik"
              className="w-full h-full object-cover"
            />
          </div>

          {/* NAME */}
          <p className="mt-3 text-sm font-semibold text-black">
            Pratik Sabale
          </p>

        </div>

      </div>

      {/* 🔥 CLIP (TOP CIRCLE) */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 bg-black rounded-full shadow-lg" />

    </div>
  )
}