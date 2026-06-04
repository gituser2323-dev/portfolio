"use client"

import { motion } from "framer-motion"

const roles = [
  "MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Data Analyst",
  "Data Science Associate",
]

export default function PlacementCredibility() {
  return (
    <section className="relative bg-black text-white py-8 md:py-[8rem] border-t border-white/5 overflow-hidden">

      {/* Soft red ambient glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[420px] bg-red-600/6 blur-[200px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">

        {/* Micro label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-[11px] tracking-[0.35em] md:tracking-[0.45em] text-white/20 uppercase mb-6 md:mb-8"
        >
          Career Directions
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(30px,7vw,78px)] md:text-[clamp(44px,5vw,78px)] font-medium leading-[1.15] md:leading-[1.12] tracking-[-0.015em] max-w-4xl"
        >
          Students transition into Industry-Ready Professional roles
          <span className="text-red-500 block mt-2 md:mt-0">
            across modern tech teams.
          </span>
        </motion.h2>

        {/* Roles List */}
        <div className="mt-12 md:mt-20 flex flex-wrap gap-x-8 md:gap-x-14 gap-y-5 md:gap-y-7 text-white/50 text-base md:text-lg leading-relaxed">

          {roles.map((role, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="hover:text-white transition duration-300"
            >
              {role}
            </motion.span>
          ))}

        </div>

        {/* Divider */}
        <div className="mt-14 md:mt-20 h-[1px] bg-white/10" />

        {/* Supporting statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/35 mt-8 md:mt-10 text-base md:text-lg max-w-3xl leading-relaxed"
        >
          Graduates move into startups, product companies, agencies, and analytics teams —
          applying structured engineering practices and Software Developer workflows learned during training.
        </motion.p>

      </div>
    </section>
  )
}
