"use client";

import { motion } from "framer-motion";
import {
  Star,
  Users,
  BriefcaseBusiness,
  Award,
} from "lucide-react";

const stats = [
  {
    value: "4.8",
    suffix: "★",
    label: "Google Rating",
    sub: "423+ Verified Reviews",
    icon: Star,
  },
  {
    value: "2700+",
    label: "Students Trained",
    sub: "Across Modern Tech Domains",
    icon: Users,
  },
  {
    value: "8.5+",
    label: "Years of Experience",
    sub: "Industry-Oriented Mentorship",
    icon: Award,
  },
  {
    value: "100%",
    label: "Placement Assistance",
    sub: "Mock Interviews & Career Support",
    icon: BriefcaseBusiness,
  },
];

export default function PremiumStatsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-32 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.12),transparent_40%)]" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.22em] text-white/70">
              Trusted IT Training Institute in Pune
            </span>
          </div>

          <h2 className="mt-8 text-[clamp(40px,8vw,88px)] font-semibold leading-[0.92] tracking-[-0.06em]">
            Building Careers
            <br />
            Through Real Skills
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
            Master MERN Stack, AI, Java, Python & Data Science with
            project-driven learning, real mentorship and placement-focused
            training.
          </p>
        </motion.div>

        {/* Premium Stats Grid */}
        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] to-transparent" />
                  <div className="absolute -top-24 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-red-500/20 blur-3xl" />
                </div>

                {/* Glass Reflection */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Icon className="h-6 w-6 text-red-400" />
                  </div>

                  {/* Value */}
                  <div className="mt-8 flex items-end justify-center sm:justify-start">
                    <h3 className="text-[52px] font-semibold leading-none tracking-[-0.06em]">
                      {stat.value}
                    </h3>

                    {stat.suffix && (
                      <span className="mb-2 ml-1 text-2xl text-yellow-400">
                        {stat.suffix}
                      </span>
                    )}
                  </div>

                  {/* Label */}
                  <p className="mt-5 text-lg font-medium tracking-tight text-white">
                    {stat.label}
                  </p>

                  {/* Sub */}
                  <p className="mt-2 text-sm leading-relaxed text-white/45">
                    {stat.sub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-xl">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full border border-black bg-red-500" />
              <div className="h-8 w-8 rounded-full border border-black bg-white" />
              <div className="h-8 w-8 rounded-full border border-black bg-zinc-700" />
            </div>

            <p className="text-sm text-white/60">
              Located near Deccan, FC Road & Shivaji Nagar, Pune
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}