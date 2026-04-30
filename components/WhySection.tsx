"use client"

import { motion } from "framer-motion"

export default function WhySection() {
  return (
    <section className="relative py-32 px-6 bg-black text-white overflow-hidden">

      {/* 🌫️ Background Glow */}
      <div className="absolute w-[700px] h-[700px] bg-red-500/10 blur-[140px] rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full bottom-[-200px] right-[-200px]" />

      <div className="relative max-w-5xl mx-auto text-center">

        {/* 🔥 HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black tracking-tight leading-tight"
        >
          Most Developers Are
          <span className="block text-white/40">Stuck Without Realizing</span>
        </motion.h2>

        {/* 💡 TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-lg text-white/60 max-w-3xl mx-auto leading-relaxed"
        >
          They complete tutorials.
          <br />
          They learn new frameworks every month.
          <br />
          But when it comes to building real systems…
          <span className="text-white font-semibold"> they freeze.</span>
        </motion.p>

        {/* ⚔️ GRID */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Tutorial Trap",
              desc: "Watching feels like progress. But nothing gets built.",
            },
            {
              title: "No System Thinking",
              desc: "They can build components… not real products.",
            },
            {
              title: "Tool Confusion",
              desc: "New tech every week. No clarity. No depth.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="
                p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
                hover:bg-white/10 transition-all duration-300
              "
            >
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/50">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* 💥 TRANSITION LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-xl text-white/70 font-medium"
        >
          This is not a skill problem.
          <span className="block text-white mt-2">
            It’s a thinking problem.
          </span>
        </motion.p>

      </div>
    </section>
  )
}