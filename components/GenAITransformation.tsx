"use client";

import { motion } from "framer-motion";

export default function TheGenAIShiftSection() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[220px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Intro */}
        <div className="py-40">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-2
              text-xs
              uppercase
              tracking-[0.4em]
              text-white/40
            "
          >
            The Shift
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="
              mt-12
              text-6xl
              md:text-8xl
              lg:text-[9rem]
              font-semibold
              tracking-tight
              leading-[0.88]
            "
          >
            <span className="text-white">
              AI won't
            </span>

            <br />

            <span className="text-white/20">
              replace
            </span>

            <br />

            <span className="text-white">
              developers.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="
              max-w-2xl
              mt-16
              text-xl
              text-white/50
              leading-relaxed
            "
          >
            Developers who understand AI systems
            will replace developers who don't.

            <br />
            <br />

            The next generation of software will be
            powered by agents, reasoning, memory,
            automation and intelligent workflows.
          </motion.p>

        </div>

        {/* Timeline */}
        <div className="py-32 border-t border-white/10">

          <div className="space-y-40">

            {[
              {
                year: "2020",
                title: "Build Websites",
                desc: "The web became the default platform for software."
              },
              {
                year: "2023",
                title: "Build SaaS",
                desc: "Companies invested heavily in software products."
              },
              {
                year: "2026",
                title: "Build AI Systems",
                desc: "Businesses are replacing workflows with intelligence."
              }
            ].map((item) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="
                  grid
                  lg:grid-cols-3
                  gap-12
                  items-start
                "
              >
                <div>
                  <span className="text-white/20 text-2xl">
                    {item.year}
                  </span>
                </div>

                <div className="lg:col-span-2">
                  <h3
                    className="
                      text-4xl
                      md:text-6xl
                      font-semibold
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-6
                      max-w-xl
                      text-lg
                      text-white/50
                      leading-relaxed
                    "
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Big Statement */}
        <div className="py-56 border-t border-white/10">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl"
          >
            <p
              className="
                text-5xl
                md:text-7xl
                lg:text-[8rem]
                font-semibold
                leading-[0.95]
                tracking-tight
              "
            >
              <span className="text-white">
                Learn AI.
              </span>

              <br />

              <span className="text-white/40">
                Build with AI.
              </span>

              <br />

              <span className="text-white/20">
                Deploy AI.
              </span>

              <br />

              <span className="text-white">
                Become an
              </span>

              <br />

              <span className="bg-gradient-to-r from-white via-white to-white/30 bg-clip-text text-transparent">
                AI Engineer.
              </span>
            </p>
          </motion.div>

        </div>

        {/* Final Glass Block */}
        <div className="pb-40">

          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-3xl
              p-10
              md:p-16
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

            <div className="relative z-10">

              <p className="text-white/40 uppercase tracking-[0.3em]">
                Program Vision
              </p>

              <h3
                className="
                  mt-6
                  text-4xl
                  md:text-6xl
                  font-semibold
                  text-white
                  leading-tight
                "
              >
                This is not a prompt engineering course.
              </h3>

              <p
                className="
                  mt-8
                  max-w-3xl
                  text-xl
                  text-white/55
                  leading-relaxed
                "
              >
                You'll learn how modern AI products are designed,
                architected, deployed and scaled using LLMs,
                Agents, RAG, LangGraph, Vector Databases and
                production infrastructure.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}