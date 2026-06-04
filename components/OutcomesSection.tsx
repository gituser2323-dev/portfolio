"use client"

import { motion } from "framer-motion"

export default function OutcomesInsane() {
  return (
    <section className="relative bg-black text-white py-10 sm:py-10 md:py-[6rem] overflow-hidden">

      {/* 🔥 Ambient Glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute top-1/2 left-1/2
          w-[420px] sm:w-[650px] md:w-[1000px]
          h-[260px] sm:h-[360px] md:h-[500px]
          bg-red-600/10
          blur-[110px] sm:blur-[150px] md:blur-[200px]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[10px] sm:text-[11px] tracking-[0.35em] sm:tracking-[0.45em] text-white/30 uppercase mb-6 sm:mb-10"
        >
          Student Outcomes
        </motion.p>

        {/* Main Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
            text-[clamp(30px,8vw,80px)]
            font-semibold
            leading-[1.2]
          "
        >
          <span className="block">We’ve helped</span>
          <span className="text-red-500 block sm:inline">
            3,220+ students
          </span>
          <span className="block">build real systems.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            text-white/45
            mt-8 sm:mt-10
            text-sm sm:text-base md:text-lg
            max-w-2xl
            mx-auto
            leading-relaxed
          "
        >
          Students work on real-world projects, learn Industry-Ready Professionals workflows,
          and gain the confidence needed to contribute in Professionals teams.
        </motion.p>

        {/* Stats */}
        <div
          className="
            mt-14 sm:mt-20
            flex flex-col sm:flex-row
            flex-wrap
            items-center justify-center
            gap-6 sm:gap-10 md:gap-14
            text-white/25
            text-sm sm:text-lg md:text-xl
            font-medium
          "
        >

          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="whitespace-nowrap"
          >
            150+ Live Projects
          </motion.div>

          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="whitespace-nowrap"
          >
            Career-Ready Skills
          </motion.div>

          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="whitespace-nowrap"
          >
            Hands-On Learning
          </motion.div>

        </div>
      </div>
    </section>
  )
}
