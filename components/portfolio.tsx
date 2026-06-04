"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "AI-Powered Resume Screening System",
    category: "Students build ML + NLP models to automate hiring workflows",
  },
  {
    title: "Full MERN Job Portal Platform",
    category: "Scalable full stack recruitment system with dashboards & analytics",
  },
  {
    title: "Sales Forecasting & Demand Prediction Engine",
    category: "Data Science project using business datasets and ML models",
  },
  {
    title: "Business Intelligence & KPI Analytics Dashboard",
    category: "SQL, Python & visualization tools for real decision insights",
  },
  {
    title: "Fraud Detection & Risk Analysis System",
    category: "Machine Learning project identifying suspicious financial activity",
  },
  {
    title: "Real-Time Support Ticket Management System",
    category: "MERN + WebSockets platform for live issue tracking",
  },
  
];

export function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  const lift = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const fadeIn = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative -mt-20 md:-mt-32 lg:-mt-40 pt-24 md:pt-32 lg:pt-40 pb-24 md:pb-32 lg:pb-15 overflow-hidden bg-black"
    >
      <div className="absolute top-0 left-0 w-full h-32 md:h-40 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05),transparent_60%)]" />

      <motion.div
        style={{ y: lift, opacity: fadeIn }}
        className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10"
      >
        {/* HEADER */}
        <div className="mb-16 md:mb-20 lg:mb-24 max-w-4xl">
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/40 mb-3 md:mb-4">
            What Students Build
          </p>

          <h2 className="text-[clamp(26px,6vw,72px)] font-semibold leading-[1.1] tracking-[-0.02em]">
            Real Industry <span className="text-red-600">Projects</span> <br />
            That Make You Job-Ready
          </h2>

          <p className="text-white/50 mt-4 md:mt-6 max-w-2xl leading-relaxed text-sm md:text-base">
            During training, students work on Industry-level projects,
            solving real business problems using tools used in top companies.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16">
          {projects.map((project, i) => (
            <PortfolioCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* CARD */
function PortfolioCard({ project, index }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 140, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 140, damping: 18 });

  const rotateX = useTransform(smoothY, [-60, 60], [12, -12]);
  const rotateY = useTransform(smoothX, [-60, 60], [-12, 12]);

  const glowX = useMotionTemplate`${smoothX}px`;
  const glowY = useMotionTemplate`${smoothY}px`;

  const handleMouse = (e: any) => {
    if (window.innerWidth < 1024) return; // disable tilt on mobile
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="group relative"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none shadow-[0_0_50px_rgba(220,38,38,0.25)]" />

      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(220,38,38,0.25), transparent 65%)`,
        }}
      />

      {/* Card Body */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative rounded-xl md:rounded-2xl border border-white/15  group-hover:border-red-600/60 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 lg:p-10 h-full transition-colors duration-500"
      >
        {/* Background Number */}
        <div className="absolute inset-0 flex items-center justify-center text-white/5 text-[80px] md:text-[120px] lg:text-[140px] font-semibold pointer-events-none">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="relative z-10">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight group-hover:text-white transition duration-500">
            {project.title}
          </h3>

          <p className="text-sm text-white/50 mt-3 md:mt-4 leading-relaxed max-w-sm">
            {project.category}
          </p>

          <motion.div
            className="mt-6 md:mt-8 text-white/40 text-lg md:text-xl group-hover:text-red-600"
            whileHover={{ x: 8 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            →
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
