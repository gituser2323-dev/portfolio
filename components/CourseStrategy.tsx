"use client";
import { motion } from "framer-motion";

export default function CourseStrategy() {
  return (
    <section className="relative py-5 md:py-12 bg-black text-white overflow-hidden">

      {/* 🔥 Ambient Red Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 blur-[160px]" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-28"
        >
          <h2 className="text-[clamp(25px,5vw,64px)] font-semibold tracking-tight leading-tight">
            Course <span className="text-red-500">Strategy Framework</span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="origin-left mt-4 md:mt-6 h-px w-28 md:w-40 mx-auto bg-gradient-to-r from-transparent via-red-500 to-transparent"
          />
        </motion.div>

        {/* ================= BLOCK 01 ================= */}
        <div className="relative grid lg:grid-cols-2 gap-10 md:gap-20 items-start mb-16 md:mb-36 group">

          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/20 via-white/10 to-transparent" />

          <motion.div whileHover={{ y: -6 }}>
            <span className="text-red-500 text-3xl md:text-5xl font-bold opacity-20">01</span>

            <h3 className="text-xl md:text-3xl font-semibold mt-4 md:mt-6 mb-3 md:mb-4">
              In-Depth Technical Learning
            </h3>

            <p className="text-white/60 max-w-xl leading-relaxed text-sm md:text-base">
              Every program is designed around system-level understanding —
              architecture, problem solving, and Industry-Ready Professionals workflows instead of
              surface-level tutorials.
            </p>

            <div className="mt-6 md:mt-8 p-4 md:p-6 rounded-xl border border-red-500/30 bg-black/60 backdrop-blur-xl hover:border-red-500/60 transition">
              <p className="text-red-400 text-[10px] md:text-xs uppercase tracking-wider mb-2">
                Learning Strategy
              </p>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                Multi-layered training through structured modules, guided practice, real-time projects, and expert mentorship focused on making you job-ready.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-4 md:p-8 rounded-2xl border border-green-500/30 bg-black/70 backdrop-blur-xl hover:shadow-[0_0_40px_rgba(34,197,94,0.25)] transition"
            >
              <h4 className="text-green-400 font-medium mb-2 md:mb-3 text-sm md:text-base">Pros</h4>
              <ul className="text-white/60 text-xs md:text-sm space-y-1 md:space-y-2">
                <li>Strong Industry-Ready Professional Foundation</li>
                <li>High Industry Alignment</li>
                <li>Deep Technical Authority</li>
                <li>Career-Ready Skillset</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-4 md:p-8 rounded-2xl border border-red-500/30 bg-black/70 backdrop-blur-xl hover:shadow-[0_0_40px_rgba(239,68,68,0.25)] transition"
            >
              <h4 className="text-red-400 font-medium mb-2 md:mb-3 text-sm md:text-base">Challenges</h4>
              <ul className="text-white/60 text-xs md:text-sm space-y-1 md:space-y-2">
                <li>Requires Consistent Effort</li>
                <li>Not Passive Learning</li>
                <li>High Discipline Needed</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16 md:mb-36" /> */}

        {/* ================= BLOCK 02 ================= */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start mb-16 md:mb-36">

          <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-4 md:p-8 rounded-2xl border border-green-500/30 bg-black/70 backdrop-blur-xl hover:shadow-[0_0_40px_rgba(34,197,94,0.25)] transition"
            >
              <h4 className="text-green-400 font-medium mb-2 md:mb-3 text-sm md:text-base">Pros</h4>
              <ul className="text-white/60 text-xs md:text-sm space-y-1 md:space-y-2">
                <li>Community Interaction</li>
                <li>Project-Based Engagement</li>
                <li>Peer Collaboration</li>
                <li>Motivational Structure</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-4 md:p-8 rounded-2xl border border-red-500/30 bg-black/70 backdrop-blur-xl hover:shadow-[0_0_40px_rgba(239,68,68,0.25)] transition"
            >
              <h4 className="text-red-400 font-medium mb-2 md:mb-3 text-sm md:text-base">Challenges</h4>
              <ul className="text-white/60 text-xs md:text-sm space-y-1 md:space-y-2">
                <li>Requires Active Participation</li>
                <li>Time Commitment</li>
                <li>Team Coordination</li>
              </ul>
            </motion.div>
          </div>

          <motion.div whileHover={{ y: -6 }}>
            <span className="text-red-500 text-3xl md:text-5xl font-bold opacity-20">02</span>

            <h3 className="text-xl md:text-3xl font-semibold mt-4 md:mt-6 mb-3 md:mb-4">
              Hands-On Industry Challenges            </h3>

            <p className="text-white/60 max-w-xl leading-relaxed text-sm md:text-base">
              Students don’t just learn — they apply. Sprint-based challenges,
              real feature builds, and collaborative exercises simulate actual
              Industry-Ready environments.
            </p>

            <div className="mt-6 md:mt-8 p-4 md:p-6 rounded-xl border border-red-500/30 bg-black/60 backdrop-blur-xl hover:border-red-500/60 transition">
              <p className="text-red-400 text-[10px] md:text-xs uppercase tracking-wider mb-2">
                Engagement Focus
              </p>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                Continuous hands-on building ensures learning translates into
                real-world problem solving ability.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= BLOCK 03 ================= */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start">

          <motion.div whileHover={{ y: -6 }}>
            <span className="text-red-500 text-3xl md:text-5xl font-bold opacity-20">03</span>

            <h3 className="text-xl md:text-3xl font-semibold mt-4 md:mt-6 mb-3 md:mb-4">
              Career & Industry Readiness
            </h3>

            <p className="text-white/60 max-w-xl leading-relaxed text-sm md:text-base">
             The final stage prepares you for real jobs — improving communication, building clean code, and developing the confidence to work in real industry environments.
            </p>

            <div className="mt-6 md:mt-8 p-4 md:p-6 rounded-xl border border-red-500/30 bg-black/60 backdrop-blur-xl hover:border-red-500/60 transition">
              <p className="text-red-400 text-[10px] md:text-xs uppercase tracking-wider mb-2">
                Outcome Focus
              </p>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                Students graduate with Industry-Ready awareness, collaborative skills,
                and the confidence to contribute in teams from day one.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-4 md:p-8 rounded-2xl border border-green-500/30 bg-black/70 backdrop-blur-xl hover:shadow-[0_0_40px_rgba(34,197,94,0.25)] transition"
            >
              <h4 className="text-green-400 font-medium mb-2 md:mb-3 text-sm md:text-base">Pros</h4>
              <ul className="text-white/60 text-xs md:text-sm space-y-1 md:space-y-2">
                <li>Industry-Aligned Workflow</li>
                <li>Improved Communication Skills</li>
                <li>Industry-Ready Professionals Code Practices</li>
                <li>Strong Interview Readiness</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-4 md:p-8 rounded-2xl border border-red-500/30 bg-black/70 backdrop-blur-xl hover:shadow-[0_0_40px_rgba(239,68,68,0.25)] transition"
            >
              <h4 className="text-red-400 font-medium mb-2 md:mb-3 text-sm md:text-base">Challenges</h4>
              <ul className="text-white/60 text-xs md:text-sm space-y-1 md:space-y-2">
                <li>Requires Consistent Practice</li>
                <li>Feedback & Iteration Cycles</li>
                <li>High Standards for Quality</li>
              </ul>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
