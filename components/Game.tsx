"use client"

import { useEffect, useState } from "react"
import gsap from "gsap"

export default function EnergyGame({ onComplete }: any) {
  const [orbs, setOrbs] = useState<any[]>([])
  const [score, setScore] = useState(0)

  const TARGET = 6

  // 🎯 SPAWN ORBS
  useEffect(() => {
    const interval = setInterval(() => {
      setOrbs((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
      ])
    }, 700)

    return () => clearInterval(interval)
  }, [])

  // 🧠 COMPLETE
  useEffect(() => {
    if (score >= TARGET) {
      onComplete?.()
    }
  }, [score])

  // 💥 CLICK ORB
  const handleClick = (id: number) => {
    setScore((s) => s + 1)

    const el = document.getElementById(`orb-${id}`)

    gsap.to(el, {
      scale: 2,
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        setOrbs((prev) => prev.filter((o) => o.id !== id))
      },
    })
  }

  return (
    <>
      {/* 🎮 HUD */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 text-center">
        <p className="text-white/70 text-sm mb-2">
          Capture energy
        </p>

        {/* ⚡ PROGRESS BAR */}
        <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{
              width: `${(score / TARGET) * 100}%`,
            }}
          />
        </div>

        <p className="text-xs text-white/40 mt-1">
          {score} / {TARGET}
        </p>
      </div>

      {/* 🔮 ORBS */}
      {orbs.map((orb) => (
        <div
          key={orb.id}
          id={`orb-${orb.id}`}
          onClick={() => handleClick(orb.id)}
          className="fixed z-40 w-5 h-5 rounded-full bg-white/80 cursor-pointer"
          style={{
            left: orb.x,
            top: orb.y,
            boxShadow: "0 0 20px rgba(255,255,255,0.8)",
          }}
        />
      ))}
    </>
  )
}