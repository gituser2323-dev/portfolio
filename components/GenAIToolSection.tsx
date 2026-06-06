"use client"

export default function GenAIToolSection() {
  return (
   <section className="py-32 bg-black">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <span className="text-white/40 uppercase tracking-[0.3em]">
      AI Stack
    </span>

    <h2 className="mt-6 text-5xl md:text-7xl font-semibold text-white">
      Tools Used By
      <br />
      Modern AI Teams
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20">

      {[
        "OpenAI",
        "Claude",
        "Gemini",
        "Kimi",
        "LangChain",
        "LangGraph",
        "Pinecone",
        "Qdrant",
        "Next.js",
        "FastAPI",
        "Docker",
        "AWS",
        "Vercel",
      ].map((tech) => (
        <div
          key={tech}
          className="
            h-24
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            flex
            items-center
            justify-center
            text-white/80
          "
        >
          {tech}
        </div>
      ))}
    </div>

  </div>
</section>
  )
}
