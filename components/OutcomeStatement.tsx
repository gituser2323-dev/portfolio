"use client"
import { motion } from "framer-motion"

export default function OutcomeStatement() {
  return (
    <section className="relative bg-black text-white py-10 md:py-24 lg:py-32 overflow-hidden">

      {/* 🌑 Soft depth glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(255,0,0,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.03),transparent_60%)]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* MICRO LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-6 md:mb-16"
        >
          <p className="text-[8px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.45em] text-white/35 uppercase">
            Career Evolution
          </p>
        </motion.div>

        {/* MAIN EDITORIAL STATEMENT */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-[clamp(26px,7vw,80px)]
            font-[500]
            tracking-[-0.015em] md:tracking-[-0.04em]
            leading-[1.15] md:leading-[1.02]
            max-w-6xl
          "
        >
          You don’t just study technology.
          <br className="hidden sm:block" />
          <span className="relative inline-block" style={{color:"#FB2B37"}}>
            You learn how to think like an developer
            <span className="absolute inset-0 blur-3xl bg-red-600/20 -z-10 rounded-full" />
          </span>
        </motion.h2>

        {/* SPACING LINE */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="origin-left mt-8 md:mt-24 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* SUPPORTING LINE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="
            mt-5 md:mt-14
            text-white/55
            text-[13px] sm:text-[15px] md:text-[clamp(16px,1.2vw,20px)]
            leading-relaxed
            max-w-2xl
            font-light
          "
        >
          Architecture decisions. Scalability thinking. Debugging discipline.
          Deployment understanding.
          This program builds the mindset companies actually hire for — not just code familiarity.
        </motion.p>

      </div>
    </section>
  )
}
