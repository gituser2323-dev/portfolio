"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function PremiumCTA() {
  return (
    <motion.a
      href="#contact"
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="
        relative inline-flex items-center gap-2
        px-5 py-2 rounded-full
        border border-red-600
        text-red-600
        overflow-hidden
        group
        backdrop-blur-md
      "
    >
      {/* ✨ Ambient Glow */}
      <motion.span
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        className="
          absolute inset-0 rounded-full
          bg-red-500/10 blur-xl
          pointer-events-none
        "
      />

      {/* ✨ Glossy Moving Shine */}
      <motion.span
        animate={{ x: ["-120%", "120%"] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
        className="
          absolute top-0 left-0 h-full w-1/2
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
          skew-x-[-25deg]
          pointer-events-none
        "
      />

      {/* ✨ Glass Highlight */}
      <span
        className="
          absolute inset-0 rounded-full
          bg-gradient-to-b
          from-white/20 via-transparent to-transparent
          pointer-events-none
        "
      />

      {/* Hover Fill Layer */}
      <motion.span
        variants={{
          rest: { y: "100%" },
          hover: { y: "0%" },
        }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 bg-white"
      />

      {/* Text */}
      <span className="relative z-10 text-sm font-normal tracking-wide transition-colors duration-300 group-hover:text-black">
        Free Demo
      </span>

      {/* Arrow */}
      <motion.span
        variants={{
          rest: { x: 0, y: 0 },
          hover: { x: 5, y: -3 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="relative z-10"
      >
        <ArrowUpRight className="w-3.5 h-3.5 text-red-600 group-hover:text-black transition-colors" />
      </motion.span>
    </motion.a>
  );
}
