"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const sections = [
  { id: "accounts", title: "Accounts", content: "To access features, you must create an account. You confirm you are legally capable of entering contracts, will provide accurate information, and are responsible for safeguarding your credentials." },
  { id: "conduct", title: "User Conduct", content: "Users must act responsibly. Harassment, abuse, account sharing, scraping, piracy, or misuse of resources is strictly prohibited." },
  { id: "courses", title: "Courses & Content", content: "All content is licensed for personal, non-commercial educational use only. Redistribution, resale, recording, or sharing is not permitted." },
  { id: "payments", title: "Payments & Refunds", content: "Fees must be paid in full. Refunds: Recorded courses within 3 days (conditions apply). Live batches within 7 days. After that, refunds are not available." },
  { id: "role", title: "Our Role & Disclaimer", content: "We are not a university and do not guarantee employment or admission. Services are provided as-is without warranties." },
  { id: "privacy", title: "Privacy", content: "Your data is handled according to our Privacy Policy, which forms part of this Agreement." },
  { id: "termination", title: "Termination of Use", content: "We may suspend or terminate accounts for violations, illegal activities, or abuse of services." },
  { id: "law", title: "Governing Law", content: "These terms are governed by the laws of India. Jurisdiction lies with courts in Pune, Maharashtra." },
  { id: "liability", title: "Liability & Disputes", content: "Liability is limited to fees paid. We are not liable for indirect or consequential damages." },
  { id: "complaints", title: "Complaints & Grievances", content: "For concerns, contact: support@speedupinfotech.com" },
  { id: "guarantee", title: "Guarantee Disclaimer", content: "Unless stated otherwise, all services are provided without express or implied warranties." },
];

export default function TermsConditions() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative bg-black text-white min-h-screen">

      {/* Elegant thin progress bar */}
      <motion.div
        style={{ width: progressWidth }}
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-red-600 to-red-400 z-50"
      />

      {/* Subtle depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 grid lg:grid-cols-[260px_1fr] gap-24">

        {/* LEFT NAV */}
        <aside className="hidden lg:block sticky top-32 h-fit">
          <p className="text-white/30 uppercase text-xs tracking-[0.35em] mb-10">
            Terms & Conditions
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

        {/* CONTENT */}
        <div className="space-y-20">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-white/30 uppercase tracking-[0.35em] text-xs mb-6">
              Legal Agreement
            </p>
            <h1 className="text-[clamp(42px,5vw,72px)] font-semibold tracking-tight leading-[1.05]">
              Terms & <span className="text-red-600">Conditions</span>
            </h1>
            <p className="text-white/40 mt-6 text-sm">
              Effective upon use of Speedup Infotech services.
            </p>
          </motion.div>

          {/* SECTIONS */}
          {sections.map((sec, i) => (
            <motion.div
              key={sec.id}
              id={sec.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.03 }}
              viewport={{ once: true }}
              className="pb-14 border-b border-white/10"
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
