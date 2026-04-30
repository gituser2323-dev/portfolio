"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Calendar, Linkedin } from "lucide-react"

export default function Hero() {
  const [bootDone, setBootDone] = useState(false)
  const [text, setText] = useState("")
  const fullText = `
> Detecting industry shift...
> AI systems redefining workflows...
> Updating skill requirements...
> 2027 Mode Activated
> Pratik Sabale is live
`


  useEffect(() => {
    let i = 0

    const type = () => {
      setText(fullText.slice(0, i))
      i++

      if (i <= fullText.length) {
        const speed = i < 30 ? 40 : 20
        setTimeout(type, speed)
      } else {
        setTimeout(() => setBootDone(true), 500)
      }
    }

    type()
  }, [])

  return (
    <>
      {/* TERMINAL */}
      {!bootDone && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center px-4">
          <pre className="text-green-400 font-mono text-sm sm:text-base whitespace-pre-wrap">
            {text}
            <span className="animate-pulse">|</span>
          </pre>
        </div>
      )}

      {/* HERO */}
      <section
        className={`hero-premium-bg hero-glossy hero-tension relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-opacity duration-700 ${bootDone ? "opacity-100" : "opacity-0"
          }`}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width) * 100
          const y = ((e.clientY - rect.top) / rect.height) * 100
          e.currentTarget.style.setProperty("--mx", `${x}%`)
          e.currentTarget.style.setProperty("--my", `${y}%`)
        }}
      >
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">

          {/* Badge */}
          <div className="mb-6 sm:mb-8 mt-10">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-[11px] sm:text-sm text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for mentorship & speaking
            </div>
          </div>

          {/* NAME */}
          <h1 className="text-white font-black tracking-tight leading-[0.9]
            text-[34px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] mb-6">
            Pratik Sabale
          </h1>

          {/* TEXT */}
          <div className="max-w-2xl mx-auto mb-8 sm:mb-10">
            <p className="text-white font-medium mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
              Most developers stay stuck in tutorials.
              <span className="block sm:inline"> I help them build real systems.</span>
            </p>

            <p className="text-white/70 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
              <span className="text-white font-semibold">End-to-end engineering</span>{" "}
              - from <span className="text-white font-semibold">apps</span>{" "}
              to <span className="text-white font-semibold">systems</span>{" "}
              to <span className="text-white font-semibold">automation</span>.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <button className="w-full sm:w-auto bg-red-500 hover:bg-red-600 px-6 sm:px-8 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:scale-[1.02]">
              Lets Talk
            </button>

            <button className="w-full sm:w-auto border border-white/20 hover:border-white px-6 sm:px-8 py-3 rounded-xl text-white transition-all duration-300 hover:bg-white hover:text-black">
              View Work
            </button>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center justify-center gap-3">
            <Link href="/book" className="p-3 rounded-xl border border-red-500/40 bg-red-500/10 hover:bg-red-500/20 transition">
              <Calendar className="w-5 h-5" />
            </Link>

            <Link href="#" className="p-3 rounded-xl border border-white/15 hover:bg-white/10 transition">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}