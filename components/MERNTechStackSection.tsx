"use client";

import { motion } from "framer-motion";

const layers = [
  {
    title: "Frontend",
    description:
      "Design responsive interfaces and interactive user experiences.",
    tech: "React · Next.js · Tailwind",
  },
  {
    title: "Backend",
    description:
      "Build APIs, authentication systems and business logic.",
    tech: "Node.js · Express · JWT",
  },
  {
    title: "Data",
    description:
      "Model, store and manage application data efficiently.",
    tech: "MongoDB · Redis",
  },
  {
    title: "Cloud",
    description:
      "Deploy, scale and monitor production applications.",
    tech: "Docker · AWS · Vercel",
  },
  {
    title: "AI",
    description:
      "Integrate LLMs, agents and intelligent workflows.",
    tech: "OpenAI · LangChain · RAG",
  },
];

export default function MERNEngineeringLayersSection() {
  return (
    <section className="bg-black py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6">

        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Engineering Layers
          </p>

          <h2
            className="
              mt-8
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-semibold
              tracking-tight
              leading-tight
            "
          >
            <span className="text-white">
              Learn how modern
            </span>

            <br />

            <span className="text-white/30">
              products are built.
            </span>
          </h2>
        </div>

        <div className="mt-20 space-y-12">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="
                border-b
                border-white/10
                pb-12
              "
            >
              <div className="grid lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-2xl font-medium text-white">
                    {layer.title}
                  </h3>
                </div>

                <div>
                  <p className="text-white/50 leading-relaxed">
                    {layer.description}
                  </p>
                </div>

                <div>
                  <p className="text-white/30">
                    {layer.tech}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <h3
            className="
              text-3xl
              md:text-5xl
              font-semibold
              leading-tight
            "
          >
            <span className="text-white">
              From Interface
            </span>

            <span className="text-white/20"> → </span>

            <span className="text-white/60">
              Infrastructure
            </span>

            <span className="text-white/20"> → </span>

            <span className="text-white">
              Intelligence
            </span>
          </h3>
        </div>

      </div>
    </section>
  );
}