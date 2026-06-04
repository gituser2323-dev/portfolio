"use client"

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion"
import { useRef, useState } from "react"

const steps = [
  "LOST",
  "GUIDED",
  "TRAINED",
  "READY",
  "HIRED",
]

export default function PlacementOutcomesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  /* ================= SCROLL ================= */

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"], // ✅ better for shorter section
  })

  const total = steps.length
  const segment = 1 / total

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.min(total - 1, Math.floor(v / segment))
    setActive(index)
  })

  /* ================= EFFECTS ================= */

  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.05, 0.2])
  const bgScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.25])
  const beamX = useTransform(scrollYProgress, [0, 1], ["-120%", "120%"])

  /* ================= PROGRESS ================= */

  const circleLength = 283
  const progress = useTransform(scrollYProgress, [0, 1], [0, circleLength])
  const dashOffset = useTransform(progress, (v) => circleLength - v)

  /* ================= UI ================= */

  return (
    <section
      ref={ref}
      className="
        relative bg-black text-white
        min-h-[200svh] md:min-h-[220svh]   /* ✅ compact height */
      "
    >
      {/* Sticky Stage */}
      <div className="sticky top-0 h-[100svh] md:h-screen flex items-center justify-center overflow-hidden">

        {/* Ambient Glow */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="
            absolute
            w-[70vw] max-w-[900px]
            aspect-square
            bg-red-600
            blur-[220px]
            rounded-full
          "
        />

        {/* Energy Beam */}
        <motion.div
          style={{ x: beamX }}
          className="
            absolute
            w-[300px] h-full
            bg-gradient-to-r
            from-transparent
            via-red-500/20
            to-transparent
            blur-2xl
          "
        />

        {/* Main Word */}
        <motion.h1
          key={steps[active]}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          style={{ scale: bgScale }}
          className="
            relative z-10
            text-[clamp(48px,12vw,180px)]
            font-bold
            tracking-tight
            text-center
            px-4
            leading-none
          "
        >
          {steps[active]}
        </motion.h1>

        {/* Circular Progress */}
        <div className="absolute bottom-10 flex flex-col items-center">
          <svg width="100" height="100" className="-rotate-90">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="3"
              fill="transparent"
            />

            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="#ef4444"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray={circleLength}
              style={{ strokeDashoffset: dashOffset }}
            />
          </svg>

          <p className="text-xs text-white/40 mt-4 tracking-widest">
            TRANSFORMATION
          </p>
        </div>

      </div>
    </section>
  )
}