"use client"

import { motion } from "framer-motion"

const steps = [
  {
    stage: "FOUNDATIONS",
    title: "Understanding the Building Blocks",
    desc: "Programming fundamentals, problem-solving, and core technologies that form the base of all Industry-Ready Professionals systems.",
  },
  {
    stage: "CORE DEVELOPMENT",
    title: "Building Real Applications",
    desc: "Frontend, backend, APIs, databases, and system integration through hands-on development.",
  },
  {
    stage: "ADVANCED SYSTEMS",
    title: "Design and Developement at Scale",
    desc: "Architecture patterns, performance, security, and scalable Industry-Ready Professionals systems.",
  },
  {
    stage: "Industry-Ready Professional Developement & AI",
    title: "Working Like Real Professionals",
    desc: "Deployment, automation, AI integrations, debugging, and industry workflows.",
  },
]

export default function LearningRoadmap() {
  return (
    <section className="bg-black text-white px-6 md:px-24 lg:px-32 py-14 md:py-24">

      {/* Section Heading */}
      <div className="max-w-4xl mb-16 md:mb-28">
        <p className="text-xs md:text-sm tracking-[0.3em] text-gray-500 mb-4 md:mb-6">
          LEARNING ROADMAP
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
          Your journey from beginner to
          <span className="text-red-500 font-medium">
            {" "}Industry-Ready Professionals
          </span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl md:ml-16">

        {/* Vertical Line */}
        <div className="absolute left-3 md:left-0 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-14 md:space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative pl-10 md:pl-12"
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-[-7px] top-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-500" />

              <p className="text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] text-gray-500 mb-2 md:mb-3">
                {step.stage}
              </p>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-3 md:mb-4">
                {step.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
