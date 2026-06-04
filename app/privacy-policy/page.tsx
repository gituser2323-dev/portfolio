"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const sections = [
  { id: "data", title: "Personal Data We Collect", content: "We collect information when you register, enroll in courses, or contact us. This may include your name, email address, phone number, and account-related details voluntarily provided by you." },
  { id: "nonpersonal", title: "Non-Personal Data", content: "We automatically collect technical data such as IP address, browser type, device information, pages visited, time spent, and approximate location insights." },
  { id: "cookies", title: "Cookies", content: "Cookies help us enhance functionality and personalize your experience. Disabling cookies may impact certain features." },
  { id: "usage", title: "Use of Information", content: "Your information is used to deliver services, improve our platform, communicate updates, and maintain system security." },
  { id: "sharing", title: "Information Sharing", content: "We only share data with instructors, payment providers, hosting services, or when required by law." },
  { id: "rights", title: "Your Rights", content: "You may update your data, opt out of marketing communication, or request restrictions at any time." },
  { id: "security", title: "Security", content: "We use encryption, secure servers, and best practices. However, no system is entirely immune to risks." },
  { id: "children", title: "Children’s Privacy", content: "We do not knowingly collect personal data from children under 13." },
  { id: "updates", title: "Policy Updates", content: "We may revise this policy occasionally. Continued use of the site indicates acceptance of updates." },
  { id: "grievance", title: "Grievance Officer", content: "For concerns, contact support@speedupinfotech.com — Pune, India." },
];

export default function PrivacyPolicy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative bg-black text-white min-h-screen overflow-hidden">

      {/* Elegant top progress bar */}
      <motion.div
        style={{ width: progressWidth }}
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-red-600 to-red-400 z-50"
      />

      {/* Subtle depth background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 grid lg:grid-cols-[260px_1fr] gap-24">

        {/* LEFT NAV */}
        <aside className="hidden lg:block sticky top-32 h-fit">
          <p className="text-white/30 uppercase text-xs tracking-[0.35em] mb-10">
            Privacy Policy
          </p>

          <nav className="space-y-5 border-l border-white/15  pl-6">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block text-sm text-white/50 hover:text-white transition-colors"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <div className="space-y-20">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-white/30 uppercase tracking-[0.35em] text-xs mb-6">
              Legal Document
            </p>
            <h1 className="text-[clamp(42px,5vw,72px)] font-semibold tracking-tight leading-[1.05]">
              Privacy <span className="text-red-600">Policy</span>
            </h1>
            <p className="text-white/40 mt-6 text-sm">
              Last updated: January 19, 2026
            </p>
          </motion.div>

          {/* SECTIONS */}
          {sections.map((sec, i) => (
            <motion.div
              id={sec.id}
              key={sec.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.03 }}
              viewport={{ once: true }}
              className="pb-12 border-b border-white/10"
            >
              <h2 className="text-xl font-semibold mb-4 text-white">
                {sec.title}
              </h2>
              <p className="text-white/60 leading-relaxed text-[15px] max-w-2xl">
                {sec.content}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
