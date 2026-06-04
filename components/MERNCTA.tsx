"use client"
import React from "react"

export default function MERNCTA() {
  return (
    <section className="relative bg-black text-white py-16 md:py-32 overflow-hidden">

      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-red-600/15 blur-[140px] md:blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-red-600/10 blur-[120px] md:blur-[140px]" />

      <div className="relative z-10 max-w-5xl mx-auto md:ml-18 px-6 text-left">

        {/* Micro Label */}
        <p className="text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.45em] text-white/40 uppercase mb-4 md:mb-6">
          Start Your Journey
        </p>

        {/* Heading */}
        <h2 className="text-[clamp(28px,5vw,56px)] font-semibold leading-tight mb-6 md:mb-8">
          Build Real-World Software Developement Skills —
          <br className="hidden sm:block" />
          <span className="relative text-red-500">
            Not Just Theory
            <span className="absolute inset-0 blur-2xl bg-red-600/20 -z-10 rounded-full" />
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-white/50 max-w-2xl mb-8 md:mb-12 leading-relaxed text-sm md:text-lg">
          Join the complete MERN Development program designed to take you from
          fundamentals to Industry-Ready Professional-level systems used in real companies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">

          {/* Primary CTA */}
          <a
            href="/book-session"
            className="group relative w-full sm:w-auto text-center px-8 md:px-12 py-3 md:py-4 rounded-full font-medium overflow-hidden border border-red-600 text-sm md:text-base"
          >
            <span className="absolute inset-0 bg-red-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
            <span className="relative z-10 group-hover:text-white transition">
              Book A Free Counselling →
            </span>
          </a>
        </div>

      </div>
    </section>
  )
}
