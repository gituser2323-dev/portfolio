"use client";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useRef } from "react";

function CourseCard({ label, shape }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 120, damping: 14 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 14 });

  const glowX = useMotionTemplate`${smoothX}px`;
  const glowY = useMotionTemplate`${smoothY}px`;

  const handleMouse = (e: any) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: smoothX, y: smoothY }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
        group relative 
        w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52
        rounded-[28px] sm:rounded-[32px] lg:rounded-[36px]
        bg-[#0c0c0c] border border-white/5
        flex flex-col items-center justify-center
        overflow-hidden
      "
    >
      {/* Cursor reflection */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(255,255,255,0.18), transparent 55%)`,
        }}
      />

      {/* Glass top shine */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent opacity-40" />

      {/* Moving light streak */}
      <motion.div
        initial={{ x: "-120%" }}
        whileHover={{ x: "120%" }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12"
      />

      {/* Depth inner glow */}
      <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(255,255,255,0.03)]" />

      {/* Floating icon */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="relative z-10"
      >
        {shape}
      </motion.div>

      <p className="absolute bottom-4 text-white/40 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase group-hover:text-white transition">
        {label}
      </p>
    </motion.div>
  );
}

export default function CourseLogoStrip() {
  return (
    <div className="mt-16 md:mt-20 w-full">
      
      {/* 
        Mobile: Grid (no horizontal scroll)
        Tablet: 2 columns
        Desktop: Horizontal centered layout
      */}
      <div className="
        grid grid-cols-2 gap-6
        sm:grid-cols-2
        md:grid-cols-3
        lg:flex lg:justify-center lg:gap-12
      ">
        <CourseCard
          label="Full STACK"
          shape={
            <div className="flex gap-2">
              <div className="w-5 h-5 bg-white rounded-sm" />
              <div className="w-5 h-5 bg-white/60 rounded-sm" />
              <div className="w-5 h-5 bg-white/30 rounded-sm" />
            </div>
          }
        />

         <CourseCard
          label="Devops"
          shape={
            <div className="flex gap-2">
              <div className="w-5 h-5 bg-white rounded-sm" />
              <div className="w-5 h-5 bg-white/60 rounded-sm" />
              <div className="w-5 h-5 bg-white/30 rounded-sm" />
            </div>
          }
        />

    

        <CourseCard
          label="DATA SCIENCE"
          shape={
            <div className="flex gap-2">
              <div className="w-4 h-4 bg-white rounded-sm rotate-12" />
              <div className="w-4 h-4 bg-white/60 rounded-sm -rotate-12" />
              <div className="w-4 h-4 bg-white/40 rounded-sm rotate-45" />
            </div>
          }
        />

        <CourseCard
          label="DATA ANALYST"
          shape={
            <div className="grid grid-cols-2 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-white/70 rounded-sm" />
              ))}
            </div>
          }
        />
      </div>
    </div>
  );
}
