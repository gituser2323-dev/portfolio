"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [

  
  {
    q: "Will AI replace professionals or change how they work?",
    a: "AI is transforming workflows, not eliminating developers. Industry-Ready Professionals who understand systems, architecture, and problem-solving — and know how to leverage AI tools — become exponentially more productive and valuable.",
  },
  {
    q: "Do I need prior coding knowledge before joining?",
    a: "No. The journey is structured from fundamentals to advanced engineering. The focus is building thinking ability and systems understanding step-by-step.",
  },
  {
    q: "How is this different from learning on YouTube?",
    a: "Online tutorials show isolated features. We teach how complete systems are designed, connected, debugged, optimized, and deployed in real Industry-Ready Software Developer environments.",
  },
  {
    q: "Will I build real applications or just practice tasks?",
    a: "Students build full-stack, engineering-style applications with authentication, databases, APIs, deployment, and real architecture patterns — not toy exercises.",
  },
  {
    q: "How do these courses prepare me for AI-driven careers?",
    a: "We integrate AI tools, automation workflows, and modern Industry-Ready Software Developement practices. Students learn how to work *with* AI — just like today’s Industry-Ready Software Developer teams.",
  },
  {
    q: "What makes SpeedUp different from traditional institutes?",
    a: `Traditional institutes focus on syllabus completion. SpeedUp focuses on industry readiness.
        We train you through hands-on projects, system-level learning, real-world deployment, and continuous mentorship—so you don’t just learn concepts, you learn how to build, think, and perform like a Industry-Ready Software Developer.
        At SpeedUp, the goal isn’t a certificate.
        It’s an industry-ready career outcome.`
  },
  {
    q: "Can someone from a non-IT background transition into tech?",
    a: "Yes. Many learners start without technical backgrounds. The curriculum focuses on mindset, structured practice, and gradual complexity rather than assumptions.",
  },
 
  {
    q: "Will this help me get job-ready or just knowledgeable?",
    a: "The goal is Industry-Ready Software Developer readiness — meaning you can build, debug, deploy, and collaborate like Industry-Ready Software Developers working in real tech teams.",
  },
];

export default function ModernFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-black text-white py-14 sm:py-16 md:py-20 overflow-hidden">

      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="absolute top-20 sm:top-24 md:top-32 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] md:h-[700px] bg-red-600/10 blur-[120px] sm:blur-[150px] md:blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== HEADING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 md:mb-32"
        >
          <p className="text-white/30 tracking-[0.35em] text-[10px] sm:text-xs uppercase mb-4 sm:mb-6">
            Learning Clarity
          </p>

          <h2 className="text-[clamp(24px,6vw,70px)] font-semibold leading-[1.15] max-w-4xl">
            Before You Begin <span className="text-red-500">FAQ</span>
          </h2>
        </motion.div>

        {/* ===== FAQ BLOCK ===== */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 md:space-y-6">

          {faqs.map((item, i) => (
            <div
              key={i}
              className="border-t border-white/15  last:border-b overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center py-5 sm:py-6 md:py-8 group"
              >
                <span className="text-base sm:text-lg text-white/80 group-hover:text-white transition text-left pr-4">
                  {item.q}
                </span>

                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  className="text-red-500 text-xl sm:text-2xl"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="pb-5 sm:pb-6 md:pb-8 text-white/50 leading-relaxed text-sm sm:text-base"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
