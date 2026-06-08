"use client";

import { motion } from "framer-motion";

export default function MERNFullStackAIEvolutionSection() {
  return (
    <section className="relative bg-black overflow-hidden py-32 md:py-40">
      {/* Soft Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Intro */}
        <div className="max-w-4xl">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-2
              text-[11px]
              uppercase
              tracking-[0.3em]
              text-white/40
            "
          >
            The Evolution
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              mt-10
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-semibold
              tracking-tight
              leading-[1]
            "
          >
            <span className="text-white">
              Software is becoming
            </span>

            <br />

            <span className="text-white/25">
              intelligent.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="
              mt-8
              max-w-2xl
              text-base
              md:text-lg
              text-white/50
              leading-relaxed
            "
          >
            Modern engineers are no longer just building
            websites and APIs.

            <br />
            <br />

            They're building products that think,
            automate, reason and interact with users.
          </motion.p>

        </div>

        {/* Evolution Timeline */}

        <div className="mt-28 border-t border-white/10 pt-20">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

            {[
              {
                year: "2015",
                title: "Frontend",
                desc: "Building interfaces users interact with",
              },
              {
                year: "2020",
                title: "Full Stack",
                desc: "Owning both frontend and backend systems",
              },
              {
                year: "2024",
                title: "Cloud",
                desc: "Deploying scalable applications globally",
              },
              {
                year: "2027",
                title: "AI",
                desc: "Embedding intelligence into products",
              },
            ].map((item) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="text-white/20 text-sm">
                  {item.year}
                </div>

                <h3 className="text-white text-2xl font-medium">
                  {item.title}
                </h3>

                <p className="text-white/45 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

        {/* Statement */}

        <div className="mt-32 border-t border-white/10 pt-24">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="
              max-w-5xl
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-semibold
              tracking-tight
              leading-[1.1]
            "
          >
            <div className="text-white">
              Learn Development.
            </div>

            <div className="text-white/60 mt-3">
              Build Products.
            </div>

            <div className="text-white/30 mt-3">
              Deploy Systems.
            </div>

            <div className="text-white mt-3">
              Integrate AI.
            </div>
          </motion.div>

        </div>

        {/* Vision */}

        <div className="mt-32">

          <div
            className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              md:p-12
            "
          >
            <p className="text-white/35 uppercase tracking-[0.3em] text-xs">
              Program Vision
            </p>

            <h3
              className="
                mt-6
                text-3xl
                md:text-5xl
                font-semibold
                text-white
                leading-tight
              "
            >
              Not another coding bootcamp.
            </h3>

            <p
              className="
                mt-8
                max-w-3xl
                text-white/55
                text-base
                md:text-lg
                leading-relaxed
              "
            >
              Learn how modern software products are
              designed, developed, deployed and scaled.

              <br />
              <br />

              From React, Next.js and Node.js to
              MongoDB, Cloud, DevOps and AI-powered
              applications.

              <br />
              <br />

              Build production-ready systems used by
              modern startups and engineering teams.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}