"use client"

import { motion } from "framer-motion"

export default function PlacementHeroEditorial() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center overflow-hidden">

      {/* Soft red ambient glow */}
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[500px] bg-red-600/10 blur-[200px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-8">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[clamp(48px,6vw,100px)] font-medium leading-[1.12] tracking-tight"
        >
          Our students grow through immersive learning,  
          real-world systems, and{" "}
          <span className="text-red-500">career-ready skills</span>{" "}
        </motion.h1>

      </div>
    </section>
  )
}
