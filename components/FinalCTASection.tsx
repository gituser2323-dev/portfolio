"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function FinalCTASection() {
  return (
    <section className="relative bg-black text-white py-12 md:py-20 overflow-hidden">

      {/* Cinematic Glow (reduced dominance) */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute top-1/2 left-1/2
          w-[900px] md:w-[1100px]
          h-[400px] md:h-[500px]
          bg-red-600/8
          blur-[200px]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center">

        {/* Main Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-[clamp(44px,5vw,84px)]
            font-semibold
            leading-[1.15]
            tracking-tight
          "
        >
          Ready to build real systems
          <span className="text-red-500 block mt-2">
            instead of just learning theory?
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            text-white/50
            mt-10
            text-base md:text-lg
            max-w-2xl
            mx-auto
            leading-relaxed
          "
        >
           Join a structured program designed to take you from fundamentals
          to industry-ready Engineering skills.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="
            mt-14
            flex flex-col sm:flex-row
            justify-center
            items-center
            gap-4 sm:gap-6
          "
        >
          <Link href="/courses">
            <button className="
              px-8 py-3
              bg-red-600
              rounded-full
              font-semibold
              hover:bg-red-500
              transition
              shadow-[0_0_18px_rgba(255,0,0,0.5)]
            ">
              Explore Programs
            </button>
          </Link>

          <Link href="/contact">
            <button className="
              px-8 py-3
              border border-white/15  
              rounded-full
              hover:bg-white
              hover:text-black
              transition
            ">
              Talk to Us
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
