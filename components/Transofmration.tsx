"use client"

import { motion } from "framer-motion"

export default function TransformationSection() {
  return (
    <section className="relative py-32 px-6 bg-black text-white overflow-hidden">

      {/* 🌫️ Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-red-500/10 blur-[140px] rounded-full left-[-200px] top-[-100px]" />
      <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-[140px] rounded-full right-[-200px] bottom-[-100px]" />

      <div className="relative max-w-6xl mx-auto text-center">

        {/* 🔥 HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black tracking-tight"
        >
          This Is The Shift
        </motion.h2>

        <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto">
          Not just learning AI.
          <span className="text-white font-semibold"> Becoming an engineer who builds systems.</span>
        </p>

        {/* ⚔️ BEFORE VS AFTER */}
        <div className="mt-20 grid md:grid-cols-2 gap-10">

          {/* ❌ BEFORE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl border border-red-500/20 bg-red-500/5 backdrop-blur-xl text-left"
          >
            <h3 className="text-xl font-semibold mb-6 text-red-400">
              Before
            </h3>

            <ul className="space-y-4 text-white/60 text-sm">
              <li>• Watching endless tutorials</li>
              <li>• Copy-pasting projects</li>
              <li>• Confused with tools</li>
              <li>• No real system understanding</li>
              <li>• Low confidence in real work</li>
            </ul>
          </motion.div>

          {/* ✅ AFTER */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl border border-green-500/20 bg-green-500/5 backdrop-blur-xl text-left"
          >
            <h3 className="text-xl font-semibold mb-6 text-green-400">
              After
            </h3>

            <ul className="space-y-4 text-white/80 text-sm">
              <li>• Build real AI-powered systems</li>
              <li>• Understand architecture deeply</li>
              <li>• Use tools with clarity</li>
              <li>• Think like an engineer</li>
              <li>• Confident to work & earn</li>
            </ul>
          </motion.div>

        </div>

        {/* 💥 CENTER LINE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-xl font-medium"
        >
          <span className="text-white">
            From consuming tutorials
          </span>
          <span className="block text-white/40 mt-2">
            to building systems that solve real problems
          </span>
        </motion.div>

      </div>
    </section>
  )
}