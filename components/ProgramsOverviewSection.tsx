"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const programs = [
  {
    title: "MERN Stack + AI Automation",
    desc: "Frontend to backend engineering with real Industry-Ready Software projects.",
    href: "/courses/mern-stack",
  },
  {
    title: "Python Full Stack",
    desc: "Build scalable web systems using Python, APIs and databases.",
    href: "/courses/python-fullstack",
  },
  {
    title: "Java Full Stack",
    desc: "End-to-end development using Java, Spring Boot, APIs, and modern frontend frameworks.",
    href: "/courses/java-full-stack",
  },
  {
    title: "DevOps",
    desc: "CI/CD pipelines, cloud deployment, Docker, Kubernetes, and automation practices.",
    href: "/courses/cloud-devops",
  },
  {
    title: "Data Science",
    desc: "Machine learning, data modeling and intelligent systems.",
    href: "/courses/data-science",
  },
  {
    title: "Data Analyst",
    desc: "Dashboards, insights and business-driven data skills.",
    href: "/courses/data-analyst",
  },
];

export default function ProgramsPremiumSection() {
  return (
    <section className="relative bg-black text-white py-20 sm:py-28 md:py-36 overflow-hidden border-t border-white/5">

      {/* Cinematic Glow Layers (responsive scaled) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] md:w-[900px] h-[250px] sm:h-[320px] md:h-[400px] bg-red-600/10 blur-[120px] md:blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[550px] md:w-[700px] h-[200px] sm:h-[250px] md:h-[300px] bg-white/5 blur-[120px] md:blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-[11px] tracking-[0.45em] text-white/35 uppercase mb-5 sm:mb-6"
        >
          Our Programs
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(34px,7vw,88px)] font-semibold leading-[1.15] md:leading-tight max-w-3xl"
        >
          Choose Your Path Into{" "}
          <span className="text-red-500">
            Modern Tech Careers.
          </span>
        </motion.h2>

        <p className="text-white/40 mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed">
          Structured, mentor-led programs designed to make you industry-ready.
        </p>

        {/* Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-14 mt-14 sm:mt-20 md:mt-24">

          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <Link href={p.href}>
                <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/15  p-6 sm:p-8 md:p-12 rounded-[22px] md:rounded-[28px] overflow-hidden transition duration-500 hover:border-red-500/40 hover:-translate-y-2 cursor-pointer">

                  {/* Hover Glow Bloom */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-600/15 to-transparent blur-2xl" />

                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 relative z-10">
                    {p.title}
                  </h3>

                  <p className="text-white/40 mb-6 sm:mb-8 md:mb-10 relative z-10 leading-relaxed text-sm sm:text-base">
                    {p.desc}
                  </p>

                  <span className="text-white/60 group-hover:text-white transition relative z-10 text-sm sm:text-base">
                    Explore Program →
                  </span>

                </div>
              </Link>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
