"use client"

import Link from "next/link"
import { motion } from "framer-motion"
const programs = [
  { slug: "data-science", title: "Data Science & Machine Learning" },
  { slug: "data-analyst", title: "Data Analytics Program" },
  { slug: "java-full-stack", title: "Java Full Stack Development" },
  { slug: "python-full-stack", title: "Python Full Stack Development" },
  { slug: "cloud-devops", title: "Cloud & DevOps Engineering" },
  { slug: "mern-stack", title: "MERN Stack + AI Automation" },


];

export default function CoursePrograms() {
  return (
    <section className="bg-black text-white px-6 md:px-24 lg:px-32 py-16 md:py-24 overflow-hidden">

      {/* Label */}
      <p className="text-[10px] md:text-sm tracking-[0.25em] md:tracking-[0.3em] text-gray-500 mb-8 md:mb-20">
        WHAT YOU CAN MASTER
      </p>

      <div className="max-w-6xl mx-auto relative">
        {programs.map((program, i) => (
          <Link
            key={i}
            href={`/courses/${program.slug}`}
            className="relative block border-t border-white/15   group"
          >
            {/* Glow Sweep */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 blur-2xl" />

            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="
                relative w-full
                py-8 md:py-16
                flex flex-col md:flex-row
                md:justify-between
                md:items-center
                gap-5 md:gap-0
                transition-all duration-500
              "
            >

              {/* LEFT SIDE */}
              <div className="flex-1">
                <motion.h2
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="
                    text-xl sm:text-2xl md:text-5xl
                    font-[400]
                    tracking-tight
                    leading-snug
                  "
                >
                  <span className="relative inline-block">
                    {program.title}
                    <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full shadow-[0_0_15px_rgba(239,68,68,0.6)]" />
                  </span>
                </motion.h2>

                <p className="text-xs sm:text-sm text-gray-500 mt-2 md:mt-3 tracking-wide group-hover:text-white/70 transition">
                  Explore full curriculum
                </p>
              </div>

              {/* RIGHT SIDE */}
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="
                  flex items-center
                  justify-between md:justify-start
                  w-full md:w-auto
                  pt-3 md:pt-0
                  border-t border-white/15  md:border-0
                  text-white/40 group-hover:text-red-500
                  transition duration-300
                "
              >
                <span className="text-xs sm:text-sm tracking-wide">
                  View Details
                </span>

                <span className="text-base md:text-xl group-hover:translate-x-2 transition-all duration-300">
                  →
                </span>
              </motion.div>

            </motion.div>
          </Link>
        ))}

        {/* Bottom border */}
        <div className="border-t border-white/15  " />
      </div>
    </section>
  )
}
