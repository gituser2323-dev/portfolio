"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function FinalCTA() {
  return (
    <section className="relative bg-black text-white px-6 md:px-24 lg:px-32 py-20 md:py-28 overflow-hidden">

      {/* 🔥 Ambient layered glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 blur-[140px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-4xl"
      >
        {/* Label */}
        <p className="text-xs md:text-sm tracking-[0.35em] text-gray-500 mb-6">
          START YOUR JOURNEY
        </p>

        {/* Headline */}
        <h2 className="text-[clamp(32px,5vw,64px)] font-light leading-[1.15] mb-8">
          Ready to build real systems  
          and think like an
          <span className="text-red-500 font-medium"> Industry-Ready Software Professionals</span>?
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl leading-relaxed">
       At SpeedUp, learning goes beyond classrooms — we train you in a real-world environment that prepares you for your first job.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-6 items-center">

          <Link
            href="/book-session"
            className="group relative px-10 py-4 rounded-full bg-red-600 font-medium overflow-hidden transition duration-300"
          >
            {/* Hover glow layer */}
            <span className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-100 transition duration-300 blur-md" />

            {/* Button text */}
            <span className="relative z-10 tracking-wide">
              Book a Call →
            </span>
          </Link>

          {/* Optional subtle secondary text */}
          <span className="text-gray-500 text-sm">
            Limited seats • Mentor-led • Project-based
          </span>

        </div>
      </motion.div>

    </section>
  )
}
