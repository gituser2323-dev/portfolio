"use client";

import { motion } from "framer-motion";

const roadmap = [
  {
    phase: "01",
    title: "AI Foundations",
    desc: "How modern AI systems work. LLMs, transformers, embeddings, prompting and AI product thinking.",
  },
  {
    phase: "02",
    title: "LLM Engineering",
    desc: "Prompt engineering, structured outputs, tool calling, function calling and production patterns.",
  },
  {
    phase: "03",
    title: "RAG Systems",
    desc: "Embeddings, chunking, retrieval, vector databases and enterprise knowledge systems.",
  },
  {
    phase: "04",
    title: "AI Agents",
    desc: "Single-agent, multi-agent workflows, planning, memory and autonomous execution.",
  },
  {
    phase: "05",
    title: "Production AI",
    desc: "FastAPI, Docker, deployment, monitoring, observability and scaling AI applications.",
  },
  {
    phase: "06",
    title: "Capstone",
    desc: "Build a complete production-grade AI product and prepare for interviews and hiring.",
  },
];

export default function CurriculumRoadmapSection() {
  return (
    <section className="relative py-40 bg-black overflow-hidden">

      <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[220px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="max-w-5xl">

          <p className="text-white/40 uppercase tracking-[0.3em] text-xs">
            Learning Roadmap
          </p>

          <h2
            className="
              mt-8
              text-6xl
              md:text-8xl
              lg:text-[8rem]
              font-semibold
              leading-[0.9]
            "
          >
            <span className="text-white">
              Six Months.
            </span>

            <br />

            <span className="text-white/20">
              One Transformation.
            </span>
          </h2>

        </div>

        <div className="mt-32 relative">

          <div className="absolute left-[35px] top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-20">

            {roadmap.map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-8"
              >
                <div
                  className="
                    relative
                    h-[70px]
                    w-[70px]
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    flex
                    items-center
                    justify-center
                    text-white
                    font-semibold
                    shrink-0
                  "
                >
                  {item.phase}
                </div>

                <div className="pt-2">

                  <h3
                    className="
                      text-3xl
                      md:text-5xl
                      font-semibold
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-2xl
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

      </div>
    </section>
  );
}