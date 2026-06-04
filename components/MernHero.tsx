"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function MernHero() {
  const text = "Stack";

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-6 pt-28 md:pt-0">

      {/* 🌌 DEPTH BACKGROUNDS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,0,0,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.04),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* 🔴 Responsive Glow Orb */}
      <motion.div
        animate={{ y: [0, -40, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[400px] md:w-[600px] lg:w-[700px] h-[400px] md:h-[600px] lg:h-[700px] bg-red-600/5 md:bg-red-600/4 blur-[120px] md:blur-[150px] rounded-full"
      />

      <div className="relative z-10 text-center max-w-6xl w-full">

        {/* 🔷 MICRO BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-8 md:mb-10 px-4 md:px-6 py-2 text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.35em] rounded-full border border-white/15 text-white/50 bg-white/[0.02] font-normal"
        >
          MERN Stack Course in Pune
        </motion.div>

        {/* 🧨 MAIN TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[clamp(42px,9vw,120px)] font-semibold tracking-[-0.04em] leading-[0.95]"
        >
          <span className="text-white">
            MERN{" "}
          </span>

          <span className="text-red-600 relative inline-block">
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8 + i * 0.15,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}

            {/* Glow */}
            <span className="absolute inset-0 blur-3xl bg-red-600/20 -z-10 rounded-full" />

            {/* Accent streak */}
            <motion.span
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.9 }}
              className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 w-[110%] h-[3px]
              bg-gradient-to-r from-transparent via-white/70 to-transparent
              blur-[0.6px] rotate-[-6deg] origin-left"
            />
          </span>

          {/* SEO TEXT */}
          <span className="sr-only">
            MERN Stack Course in Pune
          </span>
        </motion.h1>

        {/* 💬 POSITIONING */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 md:mt-10 text-white/75 max-w-3xl mx-auto leading-relaxed text-base md:text-lg lg:text-xl"
        >
          Industry-focused MERN Stack training in Deccan Pune designed to build scalable
          applications using React, Node.js, MongoDB and Express.js.
          <br className="hidden md:block" />
          Learn real-world development, deployment and modern full stack architecture.
        </motion.p>

        {/* 🧠 STACK VISUAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 md:mt-12 flex flex-wrap justify-center gap-8 md:gap-14 text-xs md:text-sm tracking-widest text-white/40"
        >
          <div className="flex flex-col items-center">
            <span className="text-green-500 text-base md:text-lg">M</span>
            <span>MONGODB</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-white text-base md:text-lg">E</span>
            <span>EXPRESS</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-cyan-400 text-base md:text-lg">R</span>
            <span>REACT</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-green-400 text-base md:text-lg">N</span>
            <span>NODE</span>
          </div>
        </motion.div>

        {/* 🚀 CTA ZONE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/contact"
            className="group relative px-8 md:px-14 py-4 md:py-5 rounded-full border border-white/15 text-white hover:border-red-600 hover:text-red-600 overflow-hidden transition duration-300 text-sm md:text-base"
          >
            <span className="absolute inset-0 bg-red-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />

            <span className="relative z-10 group-hover:text-white transition">
              Enroll in MERN Program →
            </span>
          </Link>

          <Link
            href="/MERN_Stack_with_Vue.pdf"
            target="_blank"
            className="px-8 md:px-14 py-4 md:py-5 rounded-full border border-white/15 text-white hover:border-white transition text-sm md:text-base"
          >
            View Curriculum
          </Link>
        </motion.div>

        {/* ⭐ TRUST SIGNAL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-white/45 text-sm tracking-wide"
        >
          Trusted by 443+ students • Internship Support • Real Projects
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}