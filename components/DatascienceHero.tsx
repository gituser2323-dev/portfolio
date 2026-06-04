"use client"

import { motion } from "framer-motion"

export default function DataScienceHero() {
  const text = "Science";

  return (
    <section
      className="
        relative
        min-h-[85svh] md:min-h-screen
        flex items-start md:items-center
        justify-center
        bg-black text-white
        overflow-hidden
        px-6 pt-32 md:pt-0
      "
    >

      {/* Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,0,0,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.04),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:22px_22px]" />

      {/* Responsive Glow */}
      <motion.div
        animate={{ y: [0, -40, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute
          w-[400px] md:w-[600px] lg:w-[700px]
          h-[400px] md:h-[600px] lg:h-[700px]
          bg-red-600/5 md:bg-red-600/4
          blur-[120px] md:blur-[150px]
          rounded-full
        "
      />

      <div className="relative z-10 text-center max-w-6xl w-full">

        {/* Badge */}
        <motion.div
          className="
            inline-block mb-8 md:mb-10
            px-4 md:px-6 py-2
            text-[10px] md:text-xs
            tracking-[0.25em] md:tracking-[0.35em]
            rounded-full border border-white/10
            text-white/50 bg-white/[0.02]
          "
        >
          Data Science Course In JM Road Pune
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-[clamp(40px,9vw,120px)]
            font-semibold tracking-[-0.04em]
            leading-[1] md:leading-[0.95]
          "
        >
          <span className="text-white">Data </span>

          <span className="text-red-600 relative inline-block">
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8 + i * 0.15,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}

            <span className="absolute inset-0 blur-3xl bg-red-600/20 -z-10 rounded-full" />

            <motion.span
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.9 }}
              className="
                absolute -bottom-4 md:-bottom-6
                left-1/2 -translate-x-1/2
                w-[110%] h-[3px]
                bg-gradient-to-r from-transparent via-white/70 to-transparent
                blur-[0.6px] rotate-[-6deg] origin-left
              "
            />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="
            mt-8 md:mt-10
            text-white/75
            max-w-3xl mx-auto
            leading-relaxed
            text-base md:text-lg lg:text-xl
            px-2
          "
        >
          Design machine learning systems, build predictive models, and deploy
          AI solutions into real Industry-Ready Professionals environments.
        </motion.p>

        {/* Stack Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
            mt-10 md:mt-12
            flex flex-wrap justify-center
            gap-8 md:gap-14
            text-xs md:text-sm
            tracking-widest text-white/40
          "
        >
          <div className="flex flex-col items-center">
            <span className="text-yellow-400 text-base md:text-lg">P</span>
            <span>PYTHON</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-red-500 text-base md:text-lg">M</span>
            <span>ML</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-blue-400 text-base md:text-lg">D</span>
            <span>DATA</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-base md:text-lg">A</span>
            <span>AI SYSTEMS</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="
            mt-12 md:mt-16
            flex flex-col sm:flex-row
            justify-center gap-4 sm:gap-6
          "
        >
          <a
            href="/contact"
            className="
              w-full sm:w-auto
              group relative
              px-8 md:px-14
              py-4 md:py-5
              rounded-full
              border border-white/15
              text-white
              hover:border-red-600 hover:text-red-600
              overflow-hidden
              transition duration-300
              text-sm md:text-base
            "
          >
            <span className="absolute inset-0 bg-red-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
            <span className="relative z-10 group-hover:text-white transition">
              Enroll in Data Science Program →
            </span>
          </a>

          <a
            href="/Data_Science_Brouchure.pdf"
            target="_blank"
            className="
              w-full sm:w-auto
              px-8 md:px-14
              py-4 md:py-5
              rounded-full
              border border-white/15  
              text-white
              hover:border-white
              transition
              text-sm md:text-base
            "
          >
            View Curriculum
          </a>
        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 md:h-40 bg-gradient-to-t from-black to-transparent" />

    </section>
  )
}
