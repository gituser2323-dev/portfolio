"use client";

import Image from "next/image";

const metrics = [
  { value: "1000+", label: "Students Trained" },
  { value: "20+", label: "Real Projects" },
  { value: "MERN + AI", label: "Production Stack" },
  { value: "Live", label: "Mentorship Model" },
];

export default function HeroV2() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* base background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_70%_45%,rgba(255,0,0,0.16),transparent_28%),linear-gradient(to_bottom,#050505,#000000)]" />

      {/* dotted texture */}
      <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(rgba(255,255,255,0.7)_0.8px,transparent_0.8px)] bg-[size:24px_24px]" />

      {/* side vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-10 pt-28 md:px-10">
        {/* top copy */}
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/70 backdrop-blur-md">
            AI Powered Full Stack Program 5.0
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-8xl">
            We Don’t Train
            <span className="text-red-500 ml-2">Coders.</span>
            <br />
            We Build
    
            <span className="text-white ml-3">AI Engineers.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/65 sm:text-lg">
            Learn to build full-stack systems, ship AI-powered products, and
            think like a real engineer — through live mentorship, project-based
            execution, and production-style training.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group rounded-full border border-red-500 bg-red-500 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:scale-[1.03] hover:bg-red-600">
              Apply for Cohort 5.0
            </button>

            <button className="rounded-full border border-white/12 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-md transition duration-300 hover:bg-white/[0.08]">
              Explore Curriculum
            </button>
          </div>
        </div>

        {/* visual stage */}
        <div className="relative mx-auto mt-14 flex w-full max-w-6xl flex-1 items-end justify-center">
          {/* center halo */}
          <div className="absolute bottom-10 h-[520px] w-[520px] rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.14),rgba(255,255,255,0.05)_35%,rgba(255,0,0,0.12)_60%,transparent_75%)] blur-[2px]" />

          {/* outer ring */}
          <div className="absolute bottom-16 h-[580px] w-[580px] rounded-full border border-white/10 opacity-70" />
          <div className="absolute bottom-20 h-[640px] w-[640px] rounded-full border border-red-500/10" />

          {/* left floating card */}
          <div className="absolute left-[2%] top-[12%] hidden rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl md:block">
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">
              Positioning
            </p>
            <p className="mt-2 text-lg font-medium text-white">
              Founder-Led
              <br />
              Technical Mentorship
            </p>
          </div>

          {/* right floating card */}
          <div className="absolute right-[4%] top-[18%] hidden rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl md:block">
            <p className="text-xs uppercase tracking-[0.22em] text-white/45">
              Outcome
            </p>
            <p className="mt-2 text-lg font-medium text-white">
              Build Systems,
              <br />
              Not Just Screens
            </p>
          </div>

          {/* bottom-left chip */}
          <div className="absolute bottom-24 left-[7%] hidden rounded-full border border-white/10 bg-black/60 px-4 py-3 text-sm text-white/80 backdrop-blur-xl lg:block">
            Real Industry Projects
          </div>

          {/* bottom-right chip */}
          <div className="absolute bottom-28 right-[8%] hidden rounded-full border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-white/90 backdrop-blur-xl lg:block">
            AI + MERN + Architecture
          </div>

          {/* portrait frame */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-4 pt-4 shadow-[0_0_80px_rgba(255,0,0,0.12)] backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 to-transparent" />
              <Image
                src="/pratik.png"
                alt="Pratik Sabale"
                width={480}
                height={760}
                className="relative z-10 h-auto w-[290px] rounded-[2rem] object-cover sm:w-[340px] md:w-[390px]"
                priority
              />
            </div>

            <div className="mt-5 text-center">
              <p className="text-2xl font-semibold tracking-tight">
                Pratik Sabale
              </p>
              <p className="mt-1 text-sm text-white/50">
                AI Full Stack Mentor • Founder
              </p>
            </div>
          </div>
        </div>

        {/* bottom trust rail */}
        <div className="relative mx-auto mt-10 grid w-full max-w-6xl grid-cols-2 gap-3 rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl md:grid-cols-4">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.4rem] border border-white/8 bg-black/40 px-4 py-5 text-center"
            >
              <p className="text-lg font-semibold text-red-500">{item.value}</p>
              <p className="mt-1 text-sm text-white/55">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}