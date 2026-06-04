"use client";

import { motion } from "framer-motion";

const mentorshipPoints = [
  {
    title: "Industry-Style Code Reviews",
    desc: "Your projects are reviewed like real engineering teams review software systems — structure, performance, and scalability matter.",
  },
  {
    title: "Mock Interviews That Feel Real",
    desc: "Technical interviews, system design discussions, and problem-solving sessions designed to simulate real hiring rounds.",
  },
  {
    title: "Architecture Guidance",
    desc: "You don’t just write features — you learn how systems are structured, scaled, and maintained in real-world products.",
  },
  {
    title: "Personalized Technical Direction",
    desc: "Mentors help you identify gaps, improve fundamentals, and guide you toward the right projects based on your strengths.",
  },
  {
    title: "Professional Thinking Mindset",
    desc: "You learn how to think like a professionals responsible for systems used by real users — not just someone completing assignments.",
  },
];

export default function MentorshipSection() {
  return (
    <section className="relative bg-black text-white py-44 overflow-hidden">

      {/* Depth Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,0,0.07),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative z-10 max-w-6xl pl-[8vw] pr-6">

        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[11px] tracking-[0.45em] text-white/30 uppercase mb-16"
        >
          Mentorship System
        </motion.p>

        {/* Big Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-[clamp(42px,5vw,84px)] font-light tracking-tight leading-[1.05] max-w-4xl"
        >
          Guided By Software Professionals <br />
          <span className="text-red-600">Not Just Instructors.</span>
        </motion.h2>

        {/* Divider spacing */}
        <div className="mt-24 space-y-20">

          {mentorshipPoints.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="border-t border-white/15  pt-14 group"
            >
              <h3 className="text-[clamp(22px,2.5vw,34px)] font-medium tracking-tight group-hover:text-red-500 transition">
                {item.title}
              </h3>

              <p className="mt-6 text-white/60 max-w-3xl leading-relaxed text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
