"use client"

export default function CoursesHero() {
  return (
    <section className="relative bg-black text-white px-6 md:px-24 lg:px-32 pt-10 sm:pt-12 md:pt-12 pb-12 sm:pb-12 md:pb-12 overflow-hidden">

      {/* Ambient red glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent blur-3xl -z-10" />

      {/* Headline */}
      <div className="max-w-6xl mx-auto">
        <h1 className="
          text-[38px] 
          sm:text-[48px] 
          md:text-[80px] 
          lg:text-[100px] 
          font-bold 
          leading-[1.05] 
          md:leading-[0.95] 
          tracking-tight
        ">
          Engineering{" "}
          <span className="text-red-600">Excellence</span>
        </h1>

        {/* Identity-driven message */}
        <p className="
          mt-8 sm:mt-10 
          text-base sm:text-lg 
          md:text-2xl 
          text-gray-400 
          max-w-3xl 
          leading-relaxed
        ">
          Stop learning random tools. Start thinking like an Industry-Ready Professionals — someone who designs systems, solves real problems, and builds technology that actually works in the real world.
        </p>

        {/* Journey framing */}
        <p className="
          mt-5 sm:mt-6 
          text-sm sm:text-base 
          md:text-lg 
          text-gray-500
        ">
          From beginner foundations → system design → Industry-Ready Engineering-ready expertise.
        </p>
      </div>

      {/* Capability Pills */}
      <div className="
        flex flex-wrap 
        gap-3 sm:gap-4 
        mt-12 sm:mt-16 
        max-w-6xl 
        mx-auto
      ">
        {[
          "Think Like an Professionals",
          "Build Real Systems",
          "AI-Driven Development",
          "Industry-Ready Professional-Level Skills",
          "Automation & Efficiency",
          "Mentorship That Guides Growth",
        ].map((tag, i) => (
          <span
            key={i}
            className="
              px-4 sm:px-6 
              py-2 sm:py-3 
              text-sm sm:text-base
              border border-white/15  
              rounded-full 
              text-gray-300 
              bg-white/[0.03] 
              backdrop-blur-md
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Support Line */}
      <p className="
        mt-12 sm:mt-16 
        text-sm sm:text-base 
        md:text-lg
        text-gray-600 
        max-w-4xl 
        mx-auto
      ">
        Built for learners who don’t just want certificates — but want the confidence, mindset, and real-world skills to work like Industry-Ready Software Developer in modern tech teams.
      </p>
    </section>
  )
}
