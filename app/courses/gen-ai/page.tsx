"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const words = ["LLMs", "Agents", "RAG", "LangChain", "Embeddings", "Automation"]

export default function GenAIHero() {
  const glowRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      // 🧲 Cursor glow
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x}px, ${y}px)`
      }

      // 🌊 Subtle content parallax (gravity feel)
      if (contentRef.current) {
        const dx = (x - window.innerWidth / 2) * 0.015
        const dy = (y - window.innerHeight / 2) * 0.015

        contentRef.current.style.transform = `translate(${dx}px, ${dy}px)`
      }
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <section className="relative h-screen bg-black text-white overflow-hidden flex items-center justify-center">

      {/* 🔲 GRID (slower, deeper) */}
      <div className="absolute inset-0 opacity-10 animate-[gridMove_60s_linear_infinite]">
        <div className="w-full h-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* 🌐 FLOATING WORDS (intelligent drift) */}
      {words.map((word, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.04, 0.12, 0.04],
            x: [0, 10, 0],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute text-xs md:text-sm text-white/20 tracking-wide"
          style={{
            left: `${10 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
        >
          {word}
        </motion.div>
      ))}

      {/* 💡 CENTER GLOW (base layer) */}
      <div className="absolute w-[600px] h-[600px] bg-white/5 blur-3xl rounded-full" />

      {/* 🧲 CURSOR GLOW (top layer) */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed w-[220px] h-[220px] bg-white/10 blur-2xl rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out"
      />

      {/* 🚀 CONTENT */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 transition-transform duration-200"
      >

        {/* ✨ HEADLINE */}
        <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tight bg-gradient-to-r from-white via-white/70 to-white bg-[length:200%_100%] bg-clip-text text-transparent animate-[shine_10s_linear_infinite]">
          Generative AI
          <br />
          <span className="text-white/60">Engineering</span>
        </h1>

        {/* ✨ SUBTEXT */}
        <p className="mt-6 text-white/50 max-w-2xl mx-auto text-lg">
          Build intelligent systems using LLMs, agents, and real-world AI architectures.
          Not prompts. Not theory. Real systems.
        </p>

        {/* 🔥 BUTTONS */}
        <div className="mt-10 flex gap-4 justify-center">

          <button className="group bg-white text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)]">
            <span className="group-hover:tracking-wide transition-all duration-300">
              Enter AI System
            </span>
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-xl text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black">
            View Curriculum
          </button>

        </div>
      </div>

      {/* ✨ KEYFRAMES */}
      <style jsx>{`
        @keyframes shine {
          0% { background-position: 0% }
          100% { background-position: 200% }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0) }
          100% { transform: translate(60px, 60px) }
        }
      `}</style>
    </section>
  )
}