"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const lines = [
  "> Detecting industry shift...",
  "> AI systems replacing workflows...",
  "> Updating skill requirements...",
  "> 2027 Mode Activated",
]

export default function BootHero() {
  const [displayedLines, setDisplayedLines] = useState([])
  const [currentLine, setCurrentLine] = useState("")
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [phase, setPhase] = useState("boot") // boot → reveal → hero

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setTimeout(() => setPhase("reveal"), 500)
      return
    }

    if (charIndex < lines[lineIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + lines[lineIndex][charIndex])
        setCharIndex((prev) => prev + 1)
      }, 25)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentLine])
        setCurrentLine("")
        setCharIndex(0)
        setLineIndex((prev) => prev + 1)
      }, 400)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, lineIndex])

  useEffect(() => {
    if (phase === "reveal") {
      setTimeout(() => setPhase("hero"), 600)
    }
  }, [phase])

  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">

      {/* ⚡ FLASH */}
      {phase === "reveal" && (
        <div className="absolute inset-0 bg-white animate-pulse z-20" />
      )}

      <AnimatePresence mode="wait">

        {/* 🧠 TERMINAL */}
        {phase === "boot" && (
          <motion.div
            key="boot"
            exit={{ opacity: 0 }}
            className="h-full flex items-center justify-center font-mono text-green-400 px-6"
          >
            <div className="w-full max-w-3xl text-sm md:text-base space-y-2">

              {displayedLines.map((line, i) => (
                <p key={i} className={i === lines.length - 1 ? "text-white" : ""}>
                  {line}
                </p>
              ))}

              <p>
                {currentLine}
                <span className="animate-pulse">_</span>
              </p>

            </div>
          </motion.div>
        )}

        {/* 🚀 FINAL HERO */}
        {phase === "hero" && (
          <motion.div
            key="hero"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="h-full flex items-center justify-center px-6 text-center"
          >

            <div className="max-w-4xl">

              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Become an
                <span className="block text-white/50 mt-2">
                  AI Systems Engineer
                </span>
              </h1>

              <p className="mt-6 text-white/50 text-lg max-w-2xl mx-auto">
                Build real AI systems using LLMs, RAG, and agents.
                <span className="block text-white mt-2 font-semibold">
                  Not prompts. Not theory. Real systems.
                </span>
              </p>

              {/* 🧠 PSYCHOLOGICAL PUSH */}
              <p className="mt-4 text-white/30 text-sm">
                The shift has already started. Most will realize this late.
              </p>

              {/* 🔥 CTA */}
              <div className="mt-10 flex justify-center gap-4">

                <button className="
                  px-8 py-3 bg-white text-black rounded-lg font-medium
                  transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                ">
                  Enter 2027 →
                </button>

                <button className="
                  px-8 py-3 border border-white/20 text-white rounded-lg
                  transition-all duration-300 hover:border-white hover:bg-white hover:text-black
                ">
                  View Curriculum
                </button>

              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </section>
  )
}