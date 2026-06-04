"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/* ================================
   🏢 COMPANY CONFIG
================================ */

const companies = [
  {
    logo: "/logos/1.png",
    desc: "Global IT services leader delivering enterprise digital transformation.",
  },
  {
    logo: "/logos/2.png",
    desc: "Next-generation company focused on cloud, AI, and innovation.",
  },
  {
    logo: "/logos/3.png",
    desc: "Technology consulting firm enabling modern business solutions.",
  },
  {
    logo: "/logos/4.png",
    desc: "Digital Industry-Ready Professionals and R&D services provider worldwide.",
  },
  {
    logo: "/logos/5.png",
    desc: "Product company powering startups and enterprises globally.",
  },

  ...Array.from({ length: 25 }, (_, i) => ({
    logo: `/logos/${i + 6}.png`,
    desc: "Leading organization hiring skilled developers",
  })),
];

const loop = [...companies, ...companies];

const row1 = loop.filter((_, i) => i % 2 === 0);
const row2 = loop.filter((_, i) => i % 2 !== 0);

/* ================================
   🎴 COMPANY CARD
================================ */

function CompanyCard({ c }: any) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
        flex flex-col items-center text-center
        min-w-[180px] md:min-w-[220px]
        gap-4
        opacity-70 hover:opacity-100
        transition duration-500
      "
    >
      {/* LOGO CARD */}
      <div
        className="
          m-10
          flex items-center justify-center
          h-20 md:h-24 w-full
          rounded-2xl
          bg-white
          border border-white/10
          backdrop-blur-xl
          hover:border-red-500/40
          transition duration-500
        "
      >
        <Image
          src={c.logo}
          alt="company logo"
          width={120}
          height={48}
          loading="lazy"
          decoding="async"
          sizes="120px"
          className="
            max-h-10 md:max-h-12
            object-contain
            transition duration-500
          "
        />
      </div>

      {/* DESCRIPTION */}
      <p
        className="
          text-[11px] md:text-sm
          text-white/[0.5]
          leading-relaxed
          max-w-[200px]
        "
      >
        {c.desc}
      </p>
    </motion.div>
  );
}

/* ================================
   🚀 MAIN COMPONENT
================================ */

export default function PlacedStudents() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const dotsY = useTransform(scrollY, [0, 1200], [0, -80]);

  return (
    <section
      ref={ref}
      className="relative py-15 sm:py-18 md:py-26 bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND DOT GRID */}
      <motion.div
        style={{ y: dotsY }}
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        {/* HEADER */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-[clamp(28px,5vw,56px)] font-semibold leading-tight">
            Our Students Work At{" "}
            <span className="text-red-600">Top Tech Companies</span>
          </h2>

          <p className="text-white/40 mt-4 text-lg">
            From startups to global enterprises — our learners are building
            real-world careers across the tech ecosystem.
          </p>
        </div>

        {/* ================= MARQUEE ================= */}
        <div className="relative overflow-hidden space-y-10">

          {/* EDGE FADE */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

          {/* ---------- ROW 1 ---------- */}
          <motion.div
            className="flex gap-12 md:gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 45,
              ease: "linear",
            }}
          >
            {row1.map((c, i) => (
              <CompanyCard key={i} c={c} />
            ))}
          </motion.div>

          {/* ---------- ROW 2 ---------- */}
          <motion.div
            className="flex gap-12 md:gap-16 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 45,
              ease: "linear",
            }}
          >
            {row2.map((c, i) => (
              <CompanyCard key={i} c={c} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}