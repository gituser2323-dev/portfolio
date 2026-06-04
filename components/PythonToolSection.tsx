"use client"

import { motion } from "framer-motion"

const tools = [
  "icons/html.svg",
  "icons/css.svg",
  "icons/js.svg",
  "/icons/tailwind.svg",
  "/icons/react.svg",
  "/icons/next.svg",
  "/icons/django.svg",
  "/icons/sql.svg",
  "/icons/flask.svg",
  "/icons/postgresql.svg",
  "/icons/openai.svg",
  "/icons/git.svg",
]

export default function PythonToolSection() {
  return (
    <section className="relative bg-black text-white py-15 md:py-26 overflow-hidden">

      {/* subtle dotted texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16">

        {/* 🔹 MICRO HEADLINE */}
        <p className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.35em] text-white/40 mb-12 md:mb-20">
          TOOLS YOU'LL MASTER
        </p>

        <div className="grid lg:grid-cols-[140px_1fr] gap-8">

          {/* LEFT LABEL (Desktop Only) */}
          <div className="hidden lg:flex items-start pt-10">
            <div className="flex flex-col items-center gap-6">
              <div className="w-px h-24 bg-white/20" />
              <p className="text-xs tracking-[0.35em] text-white/40 rotate-[-90deg] origin-left">
                STACK
              </p>
            </div>
          </div>

          {/* LOGO STRIP */}
          <div className="relative overflow-hidden">

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 md:gap-16 w-max p-4 md:p-10"
            >
              {[...tools, ...tools].map((logo, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, scale: 1.08 }}
                  className="
                    w-20 h-20 md:w-32 md:h-32
                    rounded-full
                    bg-white/[0.02]
                    border border-white/10
                    backdrop-blur-md
                    flex items-center justify-center
                    hover:border-red-600
                    hover:shadow-[0_0_40px_rgba(255,0,0,0.25)]
                    transition
                  "
                >
                  <img
                    src={logo}
                    className="w-8 md:w-12 opacity-70 hover:opacity-100 transition"
                    alt="tool"
                  />
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
