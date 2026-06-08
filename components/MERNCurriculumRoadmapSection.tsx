"use client";

import { motion } from "framer-motion";

const roadmap = [
  {
    phase: "Phase 01",
    title: "Learn Development Fundamentals",
    desc: "Build a strong foundation in HTML, CSS, JavaScript and modern development practices.",
  },
  {
    phase: "Phase 02",
    title: "Create Modern Interfaces",
    desc: "Develop responsive applications using React, Next.js and component-driven architecture.",
  },
  {
    phase: "Phase 03",
    title: "Build Backend Systems",
    desc: "Design APIs, authentication systems, databases and scalable server-side applications.",
  },
  {
    phase: "Phase 04",
    title: "Launch Full Stack Products",
    desc: "Combine frontend, backend and databases into complete production-ready applications.",
  },
  {
    phase: "Phase 05",
    title: "Deploy To The Cloud",
    desc: "Learn Docker, cloud infrastructure, CI/CD and production deployment workflows.",
  },
  {
    phase: "Phase 06",
    title: "Integrate AI",
    desc: "Add AI capabilities, agents, automation and intelligent workflows into your products.",
  },
];

export default function MERNFullStackRoadmapSection() {
  return (
    <section className="relative bg-black py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 flex justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-white/[0.03] blur-[180px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}

        <div className="max-w-4xl">
          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-white/40
            "
          >
            Learning Journey
          </p>

          <h2
            className="
              mt-8
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-semibold
              leading-[1]
              tracking-tight
            "
          >
            <span className="text-white">
              From Beginner.
            </span>

            <br />

            <span className="text-white/30">
              To Full Stack AI Engineer.
            </span>
          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              text-base
              md:text-lg
              text-white/50
              leading-relaxed
            "
          >
            A step-by-step roadmap designed to take you
            from writing your first lines of code to
            building and deploying AI-powered products.
          </p>
        </div>

        {/* Roadmap */}

        <div className="mt-24">

          {roadmap.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
              }}
              className="
                border-b
                border-white/10
                py-10
              "
            >
              <div
                className="
                  flex
                  flex-col
                  lg:flex-row
                  gap-6
                "
              >
                <div className="lg:w-56">
                  <p className="text-sm text-white/30">
                    {item.phase}
                  </p>
                </div>

                <div className="flex-1">
                  <h3
                    className="
                      text-2xl
                      md:text-4xl
                      font-semibold
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-2xl
                      text-white/50
                      leading-relaxed
                    "
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}

        <div className="mt-24">
          <h3
            className="
              text-3xl
              md:text-5xl
              font-semibold
              leading-[1.1]
              tracking-tight
            "
          >
            <span className="text-white">
              Learn.
            </span>

            <span className="text-white/20"> → </span>

            <span className="text-white/60">
              Build.
            </span>

            <span className="text-white/20"> → </span>

            <span className="text-white">
              Deploy.
            </span>

            <span className="text-white/20"> → </span>

            <span className="text-white/30">
              Scale.
            </span>
          </h3>
        </div>

      </div>
    </section>
  );
}