"use client";

import { motion } from "framer-motion";

const stack = [
  {
    category: "Models",
    tools: ["OpenAI", "Claude", "Gemini", "DeepSeek","Kimi"],
  },
  {
    category: "Agent Frameworks",
    tools: ["LangGraph", "CrewAI", "PydanticAI", "AutoGen"],
  },
  {
    category: "RAG & Search",
    tools: ["Pinecone", "Qdrant", "Weaviate", "Chroma"],
  },
  {
    category: "Backend",
    tools: ["Python", "FastAPI", "Node.js", "Express"],
  },
  {
    category: "Frontend",
    tools: ["Next.js", "React", "Tailwind", "TypeScript"],
  },
  {
    category: "Deployment",
    tools: ["Docker", "AWS", "Vercel", "Railway"],
  },
];

export default function TechStackSection() {
  return (
    <section className="relative py-40 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs">
            Technology Stack
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
              Work With
            </span>

            <br />

            <span className="text-white/20">
              Modern AI
            </span>

            <br />

            <span className="text-white">
              Infrastructure
            </span>
          </h2>

          <p
            className="
              mt-10
              max-w-2xl
              text-xl
              text-white/50
              leading-relaxed
            "
          >
            Learn the exact tools being used to build
            production AI systems, intelligent agents,
            enterprise search and automation platforms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mt-24">
          {stack.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-3xl
                p-8
              "
            >
              <h3 className="text-2xl font-semibold text-white">
                {item.category}
              </h3>

              <div className="flex flex-wrap gap-3 mt-8">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-white/70
                    "
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <h3
            className="
              text-4xl
              md:text-6xl
              font-semibold
              leading-tight
            "
          >
            <span className="text-white">
              Learn The Stack.
            </span>

            <br />

            <span className="text-white/30">
              Build The Product.
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}