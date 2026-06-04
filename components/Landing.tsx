"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Landing() {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-red-600/20 blur-[220px] rounded-full" />
      </div>

      {/* HERO */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            font-bold tracking-tight
            text-[clamp(42px,6vw,90px)]
            leading-[1.05]
          "
        >
          Stop Watching Tutorials.
          <br />
          <span className="text-red-500">
            Start Building Your Career.
          </span>
        </motion.h1>

        <p className="mt-8 text-white/60 max-w-2xl mx-auto text-lg">
          Industry-focused MERN & AI training designed to transform beginners
          into job-ready Professionals with real projects and placements.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-full font-semibold">
            Book Free Career Call →
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/5">
            View Success Stories
          </button>
        </div>
      </div>

      {/* TRANSFORMATION SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10">

        {[
          ["Confused", "Too many tutorials, no direction."],
          ["Learning", "Structured roadmap & mentors."],
          ["Hired", "Real projects + placement support."],
        ].map(([title, desc]) => (
          <motion.div
            key={title}
            whileHover={{ y: -6 }}
            className="
              p-8 rounded-2xl
              bg-white/[0.03]
              border border-white/10
              backdrop-blur-xl
            "
          >
            <h3 className="text-2xl font-semibold text-red-500">{title}</h3>
            <p className="text-white/60 mt-4">{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* SOCIAL PROOF */}
      <div className="py-24 border-y border-white/10 text-center">
        <p className="text-white/50 tracking-widest text-sm">
          TRUSTED BY STUDENTS PLACED IN
        </p>

        <div className="flex flex-wrap justify-center gap-10 mt-10 opacity-70">
          {["TCS", "Infosys", "Capgemini", "Accenture"].map((c) => (
            <span key={c} className="text-xl font-semibold">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* PROGRAM PREVIEW */}
      <div className="max-w-6xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-14 items-center">

        <div>
          <h2 className="text-4xl font-bold">
            Learn Like Real Professionals

          </h2>

          <ul className="mt-8 space-y-4 text-white/70">
            <li>✔ Real client projects</li>
            <li>✔ AI + MERN combined curriculum</li>
            <li>✔ Interview preparation</li>
            <li>✔ Placement mentorship</li>
          </ul>

          <button className="mt-10 bg-red-500 px-8 py-4 rounded-full">
            Start Your Journey →
          </button>
        </div>

        <div className="relative h-[420px] rounded-3xl overflow-hidden border border-white/10">
          <Image
            src="/speedup.webp"
            alt="Training"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="text-center py-32 px-6">
        <h2 className="text-5xl font-bold">
          Your Tech Career Starts Today.
        </h2>

        <button className="mt-10 bg-red-500 hover:bg-red-600 px-10 py-5 rounded-full text-lg">
          Get Free Career Plan →
        </button>
      </div>
    </section>
  )
}