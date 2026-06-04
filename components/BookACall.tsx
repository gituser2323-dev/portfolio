"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function BookACall() {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 150, damping: 12 });
  const smoothY = useSpring(y, { stiffness: 150, damping: 12 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href="/book-session"
      target="_blank"
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: smoothX, y: smoothY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="relative inline-flex items-center gap-3 px-9 py-4 rounded-full overflow-hidden group"
    >
      {/* Glass base */}
      <div className="absolute inset-0 bg-white/[0.05] backdrop-blur-xl border border-white/15  rounded-full" />

      {/* Red glow on hover */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 shadow-[0_0_60px_rgba(220,38,38,0.5)]" />

      {/* Light sweep */}
      <motion.div
        initial={{ x: "-120%" }}
        whileHover={{ x: "120%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12"
      />

      {/* Text */}
      <span className="relative z-10 font-medium tracking-wide text-white group-hover:text-red-500 transition duration-300">
        Book a Free Counselling Call
      </span>

      {/* Arrow */}
      <motion.span
        className="relative z-10 text-white group-hover:text-red-500"
        initial={{ x: 0 }}
        whileHover={{ x: 6 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        →
      </motion.span>
    </motion.a>
  );
}
