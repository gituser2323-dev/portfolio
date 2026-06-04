"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">

      {/* 🌌 Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* 🔴 Cinematic Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-red-600/10 blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-white/5 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* MICRO LABEL */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.45em] text-white/35 uppercase mb-6"
        >
          Who We Are
        </motion.p>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(50px,6vw,90px)] font-semibold leading-[1.05] tracking-tight"
        >
          We Don’t Just Teach Code.
          <span className="block text-red-500">We Build Industry-Ready Professionals</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 max-w-xl text-white/55 leading-relaxed text-lg"
        >
          SpeedUp Infotech exists to transform learners into system thinkers —
          Industry-Ready Professionals who design real solutions, solve complex problems, and
          build technology that works in the real world.
        </motion.p>

        {/* PREMIUM ACCENT LINE */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 h-[2px] bg-red-500"
        />

        {/* BRAND PHILOSOPHY TAGLINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 text-white/40 text-sm tracking-wide"
        >
          From fundamentals → system design → Industry-Ready Professionals-ready expertise.
        </motion.p>

      </div>
    </section>
  );
}
