"use client";

const stack = [
  {
    category: "Frontend Engineering",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    category: "Backend Engineering",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    category: "Data Layer",
    items: ["MongoDB", "Mongoose", "Aggregation", "Redis"],
  },
  {
    category: "AI Engineering",
    items: ["OpenAI", "RAG", "LangChain", "LangGraph", "Agents"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "AWS", "CI/CD", "Vercel", "Nginx"],
  },
];

export default function MERNFullStackAIStack() {
  return (
    <section className="relative py-40 bg-black overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[220px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <span className="text-white/40 uppercase tracking-[0.35em] text-xs">
            FULL STACK AI ROADMAP
          </span>

          <h2 className="mt-6 text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[0.95]">
            Learn The Complete
            <br />
            Product Engineering Stack
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-white/50 leading-relaxed">
            Go from building responsive web interfaces
            to deploying AI-powered applications used by
            real users in production.
          </p>
        </div>

        {/* Roadmap */}
        <div className="mt-28 flex flex-col items-center">
          {stack.map((section, index) => (
            <div
              key={section.category}
              className="flex flex-col items-center"
            >
              <span className="text-white/30 uppercase tracking-[0.3em] text-xs mb-6">
                {section.category}
              </span>

              <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
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
                      hover:border-blue-400/40
                      hover:bg-white/[0.06]
                      hover:scale-105
                    "
                  >
                    {item}
                  </div>
                ))}
              </div>

              {index !== stack.length - 1 && (
                <div className="relative h-20 flex items-center justify-center">
                  <div className="w-px h-20 bg-gradient-to-b from-white/20 via-blue-400/50 to-transparent" />

                  <div
                    className="
                      absolute
                      w-3
                      h-3
                      rounded-full
                      bg-blue-400
                      shadow-[0_0_30px_rgba(96,165,250,0.9)]
                    "
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Outcome */}
        <div className="mt-32 text-center">
          <span className="text-white/30 uppercase tracking-[0.3em] text-xs">
            Final Outcome
          </span>

          <h3 className="mt-5 text-4xl md:text-6xl font-semibold text-white leading-tight">
            Beginner
            <span className="text-white/20 mx-4">→</span>
            Full Stack Developer
            <span className="text-white/20 mx-4">→</span>
            AI Engineer
          </h3>

          <p className="mt-8 text-white/40 max-w-2xl mx-auto">
            Build complete products, integrate AI,
            deploy to the cloud, and become ready for
            modern engineering teams.
          </p>
        </div>
      </div>
    </section>
  );
}