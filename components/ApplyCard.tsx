function ApplyCard() {
  return (
    <div
      className="
        relative
        group
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          rounded-[32px]
          bg-gradient-to-r
          from-cyan-500/20
          to-violet-500/20
          blur-3xl
          opacity-50
        "
      />

      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-3xl
          p-8
        "
      >
        {/* Reflection */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-white/10
            via-transparent
            to-transparent
          "
        />

        <div className="relative z-10">
          <div
            className="
              inline-flex
              px-3
              py-1
              rounded-full
              bg-white/5
              border
              border-white/10
              text-xs
              text-white/60
            "
          >
            LIMITED SEATS
          </div>

          <h3
            className="
              mt-5
              text-3xl
              font-semibold
              text-white
            "
          >
            AI Engineering
            <br />
            Cohort 2027
          </h3>

          <div className="mt-8 space-y-4">
            {[
              "LLMs & Prompt Engineering",
              "RAG Systems",
              "AI Agents",
              "MCP",
              "LangGraph",
              "Production Deployment",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-3
                  text-white/70
                "
              >
                <div className="h-2 w-2 rounded-full bg-white" />
                {item}
              </div>
            ))}
          </div>

          <div
            className="
              mt-8
              grid
              grid-cols-3
              gap-4
            "
          >
            <div>
              <div className="text-white text-xl font-semibold">
                6
              </div>
              <div className="text-white/40 text-sm">
                Months
              </div>
            </div>

            <div>
              <div className="text-white text-xl font-semibold">
                20+
              </div>
              <div className="text-white/40 text-sm">
                Projects
              </div>
            </div>

            <div>
              <div className="text-white text-xl font-semibold">
                1:1
              </div>
              <div className="text-white/40 text-sm">
                Mentorship
              </div>
            </div>
          </div>

          <button
            className="
              mt-8
              w-full
              h-14
              rounded-2xl
              bg-white
              text-black
              font-medium
              transition-all
              hover:scale-[1.02]
            "
          >
            Apply Now →
          </button>
        </div>
      </div>
    </div>
  );
}