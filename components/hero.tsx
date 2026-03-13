"use client"

import Link from "next/link"
import { Github, Linkedin, Youtube, Instagram, Calendar } from "lucide-react"
import { siteConfig } from "@/lib/data"
import { UltraCTA } from "./CTA"

export function Hero() {
  return (
    <section
      className="hero-premium-bg mt-10 hero-glossy hero-tension relative min-h-screen flex items-center"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        e.currentTarget.style.setProperty("--mx", `${x}%`)
        e.currentTarget.style.setProperty("--my", `${y}%`)
      }}
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">

        {/* Availability Badge — intentionally offset */}
        <div className="relative mb-10 mt-15">
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full
                       border border-white/15 bg-white/5 backdrop-blur-md
                       text-sm text-white/80
                       translate-x-[14px]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-30" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for mentorship & speaking
          </div>
        </div>

        {/* Name — grid intensifies only here */}
        <div className="relative inline-block mb-8">
          <div className="hero-name-field absolute inset-[-20%] -z-10" />

          <h1
            className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                       font-black tracking-tight leading-[0.95]"
          >
            Pratik Sabale
          </h1>
        </div>

        {/* Subtitle */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-white text-xl md:text-2xl font-medium mb-5">
            Inspiring the next generation of engineers to build India’s future
          </p>

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
        <UltraCTA />

        {/* Credibility */}
        <p className="text-sm text-white/60 tracking-wide mb-6">
          Mentorship • Python • MERN + AI • Workshops • AI Automation • DevOps
        </p>

        {/* Trust line */}
        <p className="text-sm text-white/45 mb-10">
          Sessions & Workshops across{" "}
          <span className="text-white/70 font-medium">
            Pune, Nashik, A.Nagar & Mumbai
          </span>{" "}
          — VIIT • JSPM • MMCOE • SIMMC
        </p>

        {/* Social — we’ll upgrade this next */}
        {/* Social + Booking */}
        <div className="flex items-center justify-center gap-3">

          {/* Book a Call (Cal.com) */}
          <Link
            href="/book"
            target="_blank"
            className="p-3 rounded-2xl border border-red-500/40
               bg-red-500/10 hover:bg-red-500/20
               transition text-white"
            aria-label="Book a Call"
          >
            <Calendar size={20} />
          </Link>

          {/* Other socials */}
          <Link
            href={siteConfig.social.linkedin}
            target="_blank"
            className="p-3 rounded-2xl border border-white/15
               hover:bg-white/10 hover:border-red-500/40 transition
               text-white"
          >
            <Linkedin size={20} />
          </Link>

      

       
        </div>


      </div>
    </section>
  )
}
