"use client";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative bg-black text-white overflow-hidden
      pt-32 sm:pt-40 lg:pt-52 
      pb-16 sm:pb-20 lg:pb-10">

      {/* Background depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,0,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative z-10 
        max-w-6xl 
        mx-auto 
        px-5 sm:px-8 lg:px-6">

        {/* Micro Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            text-[10px] sm:text-[11px]
            tracking-[0.35em] sm:tracking-[0.45em]
            text-white/35 uppercase
            mb-8 sm:mb-10
          "
        >
          Contact & Collaboration
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="
            font-semibold 
            leading-[1.08] sm:leading-[1.05]
            tracking-tight
            text-[clamp(36px,8vw,88px)]
            max-w-4xl lg:max-w-5xl
          "
        >
          Let’s Build Something{" "}
          <span className="text-red-500">Meaningful</span> Together
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            mt-8 sm:mt-10
            text-white/60
            text-base sm:text-lg
            max-w-xl sm:max-w-2xl
            leading-relaxed
          "
        >
        Whether you’re a student, hiring partner, or collaborator, connect with us to explore opportunities for career growth, hiring, and skill development.
        </motion.p>

        {/* Divider */}
        <div className="
          mt-14 sm:mt-16 lg:mt-20
          w-16 sm:w-20 lg:w-24
          h-[2px]
          bg-red-500
        " />

      </div>
    </section>
  );
}
