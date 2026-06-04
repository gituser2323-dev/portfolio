"use client"

import { motion } from "framer-motion"

const steps = [
  {
    title: "Foundation Building",
    text: "Programming logic, problem solving, and system thinking.",
  },
  {
    title: "Project Development",
    text: "Hands-on building of real-world applications.",
  },
  {
    title: "Mentor Reviews",
    text: "Structured feedback on code, architecture, and performance.",
  },
  {
    title: "Industry-Ready Professionals Practices",
    text: "Version control, APIs, deployment, debugging workflows.",
  },
  {
    title: "Mock Interviews",
    text: "Technical + HR simulations to build real interview confidence.",
  },
  {
    title: "Career Preparation",
    text: "Resume, portfolio, role targeting, and guidance.",
  },
]

export default function CareerSystemPremium() {
  return (
    <section className="relative bg-black text-white py-10 sm:py-10 md:py-[8rem] overflow-hidden">

      {/* Ambient Glow (responsive) */}
      <div
        className="
        pointer-events-none absolute top-0 left-1/2 -translate-x-1/2
        w-[420px] sm:w-[700px] md:w-[1000px]
        h-[260px] sm:h-[400px] md:h-[500px]
        bg-red-600/10
        blur-[120px] sm:blur-[180px] md:blur-[220px]
      "
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[10px] sm:text-[11px] tracking-[0.35em] sm:tracking-[0.45em] text-white/25 uppercase mb-8 sm:mb-12"
        >
          Career System
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
            text-[clamp(34px,8vw,80px)]
            font-semibold
            leading-[1.15]
            max-w-4xl
            md:max-w-3xl
          "
        >
          A structured path from learning
          <span className="text-red-500 block">
            to real industry readiness.
          </span>
        </motion.h2>

        {/* Steps */}
        <div className="mt-14 sm:mt-20 md:mt-28 space-y-8 sm:space-y-12 md:space-y-14">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="
                group relative
                flex items-start
                gap-4 sm:gap-6 md:gap-8
              "
            >
              {/* Number */}
              <div
                className="
                flex-shrink-0
                w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12
                rounded-full
                bg-white/[0.05]
                backdrop-blur-xl
                border border-white/10
                flex items-center justify-center
                text-red-500 font-semibold
                text-sm sm:text-base
                shadow-[0_0_20px_rgba(255,0,0,0.2)]
              "
              >
                {i + 1}
              </div>

              {/* Content */}
              <div className="max-w-[90%] sm:max-w-xl">
                <h3 className="text-base sm:text-xl font-semibold group-hover:text-red-500 transition">
                  {step.title}
                </h3>

                <p className="text-white/40 mt-2 text-sm sm:text-base leading-relaxed">
                  {step.text}
                </p>
              </div>

              {/* Hover glow (desktop preserved) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-red-600/10 to-transparent blur-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}