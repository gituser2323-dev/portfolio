"use client";

const stack = [
  {
    category: "Foundation Models",
    items: ["OpenAI", "Claude", "Gemini", "Kimi"],
  },
  {
    category: "AI Orchestration",
    items: ["LangChain", "LangGraph"],
  },
  {
    category: "Knowledge Layer",
    items: ["Pinecone", "Qdrant"],
  },
  {
    category: "Application Layer",
    items: ["Next.js", "FastAPI"],
  },
  {
    category: "Deployment",
    items: ["Docker", "AWS", "Vercel"],
  },
];

export default function GenAIToolSection() {
  return (
    <section className="relative py-40 bg-black overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="text-white/40 uppercase tracking-[0.4em] text-xs">
            AI ENGINEERING STACK
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-semibold text-white leading-[0.95] tracking-tight">
            The Modern
            <br />
            AI Engineering Ecosystem
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-white/50 text-lg leading-relaxed">
            Learn the complete stack used to build,
            deploy and scale production AI products.
          </p>
        </div>

        {/* Flow */}
        <div className="mt-24 flex flex-col items-center">
          {stack.map((section, index) => (
            <div
              key={section.category}
              className="flex flex-col items-center"
            >
              {/* Category */}
              <span className="text-white/30 uppercase tracking-[0.3em] text-xs mb-6">
                {section.category}
              </span>

              {/* Pills */}
              <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="
                      px-6
                      py-3
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      backdrop-blur-xl
                      text-white/80
                      text-sm
                      transition-all
                      duration-500
                      hover:border-cyan-400/30
                      hover:bg-white/[0.06]
                      hover:scale-105
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Connector */}
              {index !== stack.length - 1 && (
                <div className="relative h-20 flex items-center justify-center">
                  <div className="w-px h-20 bg-gradient-to-b from-white/20 via-cyan-400/40 to-transparent" />

                  <div
                    className="
                      absolute
                      w-3
                      h-3
                      rounded-full
                      bg-cyan-400
                      shadow-[0_0_25px_rgba(34,211,238,0.8)]
                    "
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-28 text-center">
          <p className="text-white/30 uppercase tracking-[0.3em] text-xs">
            Outcome
          </p>

          <h3 className="mt-4 text-3xl md:text-5xl font-semibold text-white">
            From Developer
            <span className="text-white/30"> → </span>
            AI Engineer
          </h3>
        </div>
      </div>
    </section>
  );
}