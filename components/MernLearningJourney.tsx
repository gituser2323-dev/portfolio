"use client";
import { motion } from "framer-motion";

const stages = [
  {
    level: "01",
    title: "Foundational Understanding",
    desc: "You learn how digital systems are structured, how interfaces behave, and how technology layers connect. You move from surface knowledge to core principles.",
  },
  {
    level: "02",
    title: "Programming & Logical Thinking",
    desc: "You develop structured problem-solving ability. Logic, debugging, data flow, and algorithmic thinking become second nature.",
  },
  {
    level: "03",
    title: "System Building",
    desc: "You connect components into complete working systems — interfaces, APIs, databases, and user flows. You build applications, not isolated features.",
  },
  {
    level: "04",
    title: "Industry-Ready Professionals Mindset",
    desc: "You understand scalability, performance, architecture, and clean code practices used in real Industry-Ready professional environments.",
  },
  {
    level: "05",
    title: "Engineering Deployment",
    desc: "You deploy real applications, manage environments, and understand how systems run in live Industry-Ready professional infrastructure.",
  },
];

export default function CoursesLearningJourney() {
  return (
    <section className="relative bg-black text-white py-16 md:py-48 overflow-hidden">

      {/* Dotted texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:ml-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-24 max-w-3xl"
        >
          <p className="text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.45em] text-white/35 uppercase mb-4 md:mb-6">
            Career Transformation Framework
          </p>

          <h2 className="text-2xl md:text-5xl font-semibold leading-tight">
            How Our Programs Shape You Into {" "}
            <span className="text-red-500">
             an Industry-Ready Professionals
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-14 md:space-y-32">

          {/* Vertical Line */}
          <div className="absolute left-5 md:left-6 top-0 w-px h-full bg-gradient-to-b from-red-600/40 via-white/10 to-transparent" />

          {stages.map((stage, i) => (
            <motion.div
              key={stage.level}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              viewport={{ once: true }}
              className="relative pl-16 md:pl-24 group"
            >
              {/* Level Circle */}
              <div className="absolute left-0 top-1 w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-red-600/20 to-red-600/5 border border-red-600/40 flex items-center justify-center text-red-500 text-xs md:text-base font-medium backdrop-blur-xl group-hover:scale-110 transition">
                {stage.level}
              </div>

              {/* Content */}
              <div className="p-5 md:p-12 rounded-2xl md:rounded-3xl border border-white/15  bg-white/[0.025] backdrop-blur-2xl hover:border-red-600/40 hover:shadow-[0_0_60px_rgba(255,0,0,0.08)] transition duration-500">
                <h3 className="text-lg md:text-2xl font-medium mb-3 md:mb-5">
                  {stage.title}
                </h3>
                <p className="text-white/60 leading-relaxed max-w-2xl text-xs md:text-base">
                  {stage.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
