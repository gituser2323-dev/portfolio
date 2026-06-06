"use client";

import { motion } from "framer-motion";

export default function FounderLetterSection() {
  return (
    <section className="relative py-40 bg-black overflow-hidden">

      <div className="absolute right-0 top-0 h-[800px] w-[800px] rounded-full bg-white/[0.03] blur-[220px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="
                aspect-[4/5]
                rounded-[40px]
                overflow-hidden
                border
                border-white/10
                bg-white/[0.03]
              "
            >
              <img
                 src="/cover.jpeg"
                alt="Mentor"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="text-white/40 uppercase tracking-[0.3em] text-xs">
              Founder Letter
            </p>

            <h2
              className="
                mt-8
                text-5xl
                md:text-7xl
                font-semibold
                leading-[0.95]
              "
            >
              <span className="text-white">
                Most courses
              </span>

              <br />

              <span className="text-white/20">
                teach tools.
              </span>

              <br />

              <span className="text-white">
                We teach systems.
              </span>
            </h2>

            <div
              className="
                mt-10
                space-y-6
                text-white/55
                text-lg
                leading-relaxed
              "
            >
              <p>
                AI is changing software faster than
                anything we've seen before.
              </p>

              <p>
                The challenge isn't learning another tool.
                It's learning how modern AI products are
                designed, architected and deployed.
              </p>

              <p>
                This program was built to help developers
                move beyond tutorials and start building
                production-ready AI systems.
              </p>

              <p>
                You'll work on real projects,
                understand architecture decisions,
                deploy systems and think like an
                AI Engineer.
              </p>
            </div>

            <div className="mt-12">

              <div className="text-white text-xl font-semibold">
                Pratik Sabale
              </div>

              <div className="text-white/40 mt-2">
                Founder • AI Engineering Program
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}