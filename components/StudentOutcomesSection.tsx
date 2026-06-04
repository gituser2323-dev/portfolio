"use client"

import { motion } from "framer-motion"

const steps = [
  {
    title: "Strong Foundations",
    desc: "Core logic, problem solving, and Software Developement thinking before tools.",
  },
  {
    title: "Real Project Building",
    desc: "Every concept is applied through hands-on, Industry Ready-style projects.",
  },
  {
    title: "Mentor Reviews",
    desc: "Continuous feedback, code reviews, and guidance from experienced mentors.",
  },
  {
    title: "Engineering Skills",
    desc: "Git, APIs, deployment, debugging, testing — how real Industry-Ready Professional works.",
  },
  {
    title: "Career Preparation",
    desc: "Resume reviews, mock interviews, and structured job-readiness support.",
  },
]

export default function LearningProcessSection() {
  return (
    <section className="relative bg-black text-white py-26 border-t border-white/5 overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-red-600/10 blur-[160px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-8">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.45em] text-white/35 uppercase mb-6 text-center"
        >
          Our Training Process
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(46px,5vw,84px)] font-semibold leading-[1.1] text-center"
        >
          A Guided Path From Beginner  
          <span className="text-red-500">To Industry-Ready Software Developer.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="mt-24 relative">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-16 mb-16"
            >
              {/* Step Dot */}
              <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.6)]" />

              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-white/40 leading-relaxed max-w-xl">{step.desc}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
