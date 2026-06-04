"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
  <div className="max-w-3xl">
  <div className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
    AI-Powered Career Transformation Programs
  </div>

  <h1 className="mt-8 text-6xl md:text-8xl font-black tracking-[-0.06em] leading-[0.9]">
    From Tutorials
    <br />
    To
    <span className="text-red-500"> Production</span>
    <br />
    Systems.
  </h1>

  <p className="mt-8 max-w-2xl text-xl text-zinc-400 leading-relaxed">
    Most people spend years collecting courses.
    <br />
    Very few learn how to build systems that companies actually pay for.
  </p>

  <p className="mt-6 max-w-2xl text-lg text-zinc-500">
    Learn Full Stack Development, AI Engineering,
    Data Science and Cloud through real projects,
    production workflows and industry mentorship.
  </p>

  <div className="mt-10 flex gap-4">
    <button className="rounded-2xl bg-red-600 px-8 py-4 text-white font-semibold">
      Start Your Transformation
    </button>

    <button className="rounded-2xl border border-white/10 px-8 py-4 text-white">
      View Student Outcomes
    </button>
  </div>

  <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-400">
    <span>500+ Students Trained</span>
    <span>•</span>
    <span>100+ Real Projects</span>
    <span>•</span>
    <span>Internship Certificate</span>
    <span>•</span>
    <span>Placement Assistance</span>
  </div>
</div>
  );
}