"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function BrandLogo() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 60, damping: 20 });

  const rotateX = useTransform(smoothY, [-50, 50], [6, -6]);
  const rotateY = useTransform(smoothX, [-50, 50], [-6, 6]);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex justify-center mb-32"
    >
      <div className="relative inline-block overflow-hidden">

        {/* SPEED */}
        <motion.span
          variants={{
            hidden: { y: "120%" },
            visible: { y: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
          }}
          className="inline-block text-white text-[clamp(64px,8vw,140px)] font-semibold tracking-[-0.04em] leading-none"
        >
          SPEED
        </motion.span>

        {/* UP */}
        <motion.span
          variants={{
            hidden: { y: "120%" },
            visible: { y: 0, transition: { duration: 1, delay: 0.15, ease: [0.76, 0, 0.24, 1] } },
          }}
          className="inline-block text-red-600 ml-2 relative text-[clamp(64px,8vw,140px)] font-semibold tracking-[-0.04em]"
        >
          UP

          {/* Breathing glow */}
          <motion.span
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute inset-0 blur-2xl bg-red-600/40 -z-10 rounded-full"
          />
        </motion.span>

        {/* INFOTECH */}
        <motion.span
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute right-0 bottom-[-22px] text-white/40 text-[clamp(14px,1.1vw,22px)] tracking-[0.45em] uppercase"
        >
          INFOTECH
        </motion.span>

        {/* Metallic shimmer sweep */}
        <motion.div
          initial={{ x: "-120%" }}
          animate={{ x: "120%" }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12"
        />

        {/* Underline sweep */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute left-0 -bottom-4 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent origin-left"
        />

      </div>
    </motion.div>
  );
}
