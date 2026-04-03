"use client"

import Link from "next/link"
import { Calendar, Linkedin } from "lucide-react"

export default function Hero() {
  return (
    <section
      className="hero-premium-bg hero-glossy hero-tension relative min-h-screen flex items-center justify-center"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        e.currentTarget.style.setProperty("--mx", `${x}%`)
        e.currentTarget.style.setProperty("--my", `${y}%`)
      }}
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">

        {/* Availability badge */}

        <div className="mb-10">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-sm text-white/80">

            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>

            Available for mentorship & speaking

          </div>
        </div>

        {/* Name */}

        <div className="relative inline-block mb-8">
          <div className="hero-name-field absolute inset-[-20%] -z-10"></div>

          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
            Pratik Sabale
          </h1>
        </div>

        {/* Subtitle */}

        <div className="max-w-2xl mx-auto mb-12">

          <p className="text-white text-xl md:text-1xl font-medium mb-5">
            Most developers stay stuck in tutorials.
            I help them build real systems.          </p>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            <span className="text-white font-semibold">End-to-end engineering</span>{" "}
            — from <span className="text-white font-semibold">apps</span>{" "}
            <span className="text-white/40">→</span>{" "}
            <span className="text-white font-semibold">systems</span>{" "}
            <span className="text-white/40">→</span>{" "}
            <span className="text-white font-semibold">automation</span>.
          </p>

        </div>

        {/* CTA */}

        <div className="flex justify-center gap-4 mb-10">

          <button className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-xl text-white font-medium transition">
            Let’s Talk
          </button>

          <button className="border border-white/20 hover:border-white px-8 py-3 rounded-xl text-white transition">
            View Work
          </button>

        </div>

        {/* Credibility */}

        <p className="text-sm text-white/60 tracking-wide mb-6">
          MERN + AI • AI Engineering • Automation • Gen-AI • DevOps • Mentorship    </p>

        <p className="text-sm text-white/40 mb-10">
          Sessions & Workshops across Pune, Nashik, A.Nagar & Mumbai
        </p>

        {/* Social */}

        <div className="flex items-center justify-center gap-3">

          <Link
            href="/book"
            className="p-3 rounded-2xl border border-red-500/40 bg-red-500/10 hover:bg-red-500/20 transition text-white"
          >
            <Calendar size={20} />
          </Link>

          <Link
            href="#"
            className="p-3 rounded-2xl border border-white/15 hover:bg-white/10 transition text-white"
          >
            <Linkedin size={20} />
          </Link>

        </div>

      </div>
    </section>
  )
}