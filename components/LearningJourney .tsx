"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BookACall from "./BookACall";

const steps = [
  {
    number: "01",
    title: "Plan Your Path",
    desc: "Get expert guidance to define clear career goals and choose the right learning direction.",
  },
  {
    number: "02",
    title: "Start with Structure",
    desc: "Begin your journey with a well-planned onboarding and a roadmap tailored to your career goals.",
  },
  {
    number: "03",
    title: "Build the Base",
    desc: "Strengthen your core concepts to gain clarity, confidence, and problem-solving ability.",
  },
  {
    number: "04",
    title: "Learn by Doing",
    desc: "Apply what you learn by building real-world projects instead of just watching tutorials.",
  },
  {
    number: "05",
    title: "Create to Impress",
    desc: "to show recruiters.",
  },
  {
    number: "06",
    title: "Deploy & Display",
    desc: "Develop an industry-level capstone project that showcases your skills to employers. Your work goes live. You now have proof of skills, not just theoretical knowledge.",
  },
  {
    number: "07",
    title: "Mock Interviews",
    desc: "Sharpen your interview skills through realistic mock sessions and guided feedback.",
  },
  {
    number: "08",
    title: "Prepare to Perform",
    desc: "You learn to explain your projects confidently, solve problems logically, and communicate like a professionals.",
  },
  {
    number: "09",
    title: "Step into Success 🎉",
    desc: "Secure your offer letter and enter the industry as a trained, job-ready Professionals.",
  },
];

export function LearningJourney() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-24 md:py-32 lg:py-20 bg-black overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-32">
          <p className="uppercase tracking-[0.25em] text-white/40 text-xs sm:text-sm mb-3 sm:mb-4">
            Your Journey
          </p>

          <h2 className="text-[clamp(26px,6vw,72px)] font-semibold leading-[1.1] tracking-tight">
            From Learner to <span className="text-red-600">Job-Ready</span>
          </h2>

          <div className="mt-6 sm:mt-8 md:mt-10">
            <BookACall />
          </div>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Animated vertical line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 sm:left-6 top-0 w-[2px] bg-gradient-to-b from-red-600 via-red-400 to-transparent"
          />

          <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: i * 0.01 }}
                viewport={{ once: true }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Step circle */}
                <div className="absolute left-0 top-1 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600/10 border border-red-600 flex items-center justify-center text-red-600 text-sm sm:text-base font-semibold shadow-[0_0_15px_rgba(220,38,38,0.4)]">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2 sm:mb-3">
                  {step.title}
                </h3>

                <p className="text-white/50 text-sm sm:text-base max-w-xl leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
