"use client"

import { motion } from "framer-motion"

export default function LearningApproachSection() {
  return (
    <section className="relative bg-black text-white py-20 sm:py-28 md:py-36 overflow-hidden border-t border-white/5">

      {/* Ambient Depth */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] md:w-[900px] h-[250px] sm:h-[320px] md:h-[400px] bg-red-600/10 blur-[120px] md:blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">

        {/* LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-[11px] tracking-[0.45em] text-white/35 uppercase mb-5 sm:mb-6"
        >
          Our Learning Approach
        </motion.p>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(34px,7vw,84px)] font-semibold leading-[1.15] md:leading-[1.1] max-w-4xl"
        >
          A Structured Path From Beginner{" "}
          <span className="text-red-500">
            To Industry-Ready Professionals.
          </span>
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/40 mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed"
        >
Our training is not based on random tutorials or fragmented content, but on a structured system designed to develop real Industry-Ready skills.        </motion.p>

        {/* SYSTEM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-14 mt-14 sm:mt-20 md:mt-24">

          {[
            {
              title: "Foundation First",
              text: "Strong fundamentals in logic, problem solving, and system thinking before tools.",
            },
            {
              title: "Project-Based Learning",
              text: "Every concept is applied through real-world projects that simulate industry work.",
            },
            {
              title: "Mentor-Led Guidance",
              text: "Continuous support, reviews, and feedback from mentors working in the field.",
            },
            {
              title: "System Design Mindset",
              text: "Students learn to design scalable systems, not just write code.",
            },
            {
              title: "Industry-Ready Professional-Level Skills",
              text: "Git, APIs, deployment, debugging, testing — how real Industry-Ready Professional works.",
            },
            {
              title: "Career Preparation",
              text: "Resume reviews, mock interviews, and guidance to enter the industry confidently.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/15  p-6 sm:p-8 md:p-10 rounded-[24px] md:rounded-[28px] transition duration-500 hover:border-red-500/40 hover:-translate-y-2"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />

              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 relative z-10">
                {item.title}
              </h3>
              <p className="text-white/40 leading-relaxed text-sm sm:text-base relative z-10">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
