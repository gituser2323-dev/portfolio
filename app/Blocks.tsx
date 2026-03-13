"use client";

import { motion } from "framer-motion";

const skills = [
  "Systems Thinking",
  "Scalable Architecture",
  "AI-Powered Development",
  "Production Engineering",
  "Automation Workflows",
  "Technical Mentorship",
];

export default function Blocks() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white flex items-center overflow-hidden">
      
      {/* Soft Red Glow Accent (unchanged) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0,0),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6 py-28 relative z-10 w-full">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-[11vw] md:text-[7vw] font-extrabold leading-[0.9] tracking-tight"
        >
          Engineering <span className="" style={{color:'#AC2422'}}>Leaders</span>
        </motion.h1>

        {/* MISSION */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-3xl text-xl md:text-2xl text-gray-300"
        >
          Turning learners into engineers who think in systems, build with
          purpose, and deliver technology that works in the real world.
        </motion.p>

        {/* ENGINEERING STATEMENT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-lg text-gray-400"
        >
          From fundamentals → architecture → production-grade solutions.
        </motion.p>

        {/* SKILL TAGS */}
        <div className="mt-16 flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.07 }}
              className="px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium text-white"
            >
              {skill}
            </motion.div>
          ))}
        </div>

        {/* LOCATION CREDIBILITY */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ delay: 1 }}
          className="mt-12 text-sm text-gray-400"
        >
          Training engineers across institutions, workshops, and industry
          programs through hands-on, project-driven learning.
        </motion.p>
      </div>
    </section>
  );
}
