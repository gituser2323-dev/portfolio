"use client";
import { motion } from "framer-motion";

const roadmap = [
  {
    phase: "01",
    title: "Frontend Foundations",
    modules: [
      "HTML Semantic Architecture & Accessibility Standards",
      "SEO-Optimized Document Structuring",
      "Browser Rendering Pipeline Explained",
      "CSS Box Model & Visual Formatting Context",
      "Flexbox Deep Internals",
      "CSS Grid Advanced Layout engineering",
      "Positioning, Z-Index & Stacking Context",
      "Responsive Breakpoint Strategy",
      "Mobile-First Development",
      "Bootstrap Grid System Internals",
      "Reusable Layout Patterns",
      "UI Consistency Systems",
    ],
  },
  {
    phase: "02",
    title: "JavaScript Engineering",
    modules: [
      "Execution Context Creation & Memory Phases",
      "Scope Chain & Lexical Environment",
      "Hoisting Behavior Internals",
      "Closures for Data Encapsulation",
      "Call Stack vs Event Loop",
      "Task Queue vs Microtask Queue",
      "Promises Internals",
      "Async/Await Execution Flow",
      "Error Propagation Strategies",
      "Modular ES6 Architecture",
      "API Fetch Patterns",
      "Performance Bottlenecks in JS",
    ],
  },
  {
    phase: "03",
    title: "ReactJS",
    modules: [
      "Virtual DOM Diffing Algorithm",
      "Reconciliation Process",
      "Component Lifecycle Mechanics",
      "Hooks Internals (useState, useEffect, useMemo)",
      "State Colocation Strategy",
      "Controlled vs Uncontrolled Forms",
      "Context API Architecture",
      "Reusable Component Design",
      "Code Splitting & Lazy Loading",
      "Performance Optimization Techniques",
      "Folder Structure for Scalability",
    ],
  },
  {
    phase: "04",
    title: "Advanced UI Systems",
    modules: [
      "Tailwind Design Token System",
      "Atomic CSS Architecture",
      "Reusable Layout Shells",
      "Design System Engineering",
      "Framer Motion Animation Systems",
      "Charts & Data Visualization",
      "Industry Ready Dashboard Layouts",
      "Theme Switching Systems",
      "Micro-Interactions for UX",
      "Accessibility in UI Systems",
    ],
  },
  {
    phase: "05",
    title: "Next.js",
    modules: [
      "SSR vs CSR vs SSG Rendering Models",
      "Routing & Layout Hierarchies",
      "Dynamic Routes & Nested Layouts",
      "API Routes Backend Logic",
      "Middleware for Request Handling",
      "Authentication Architecture",
      "Image Optimization Pipeline",
      "SEO Systems in Next.js",
      "Performance Monitoring",
      "Engineering Deployment Structure",
    ],
  },
  {
    phase: "06",
    title: "Backend Engineering (Java)",
    modules: [
      "Java OOPs Core Principles",
      "JVM Architecture & Memory Management",
      "Collections Framework Deep Dive",
      "Multithreading & Concurrency Basics",
      "Spring Boot Architecture",
      "REST API Development using Spring Boot",
      "Controller-Service-Repository Pattern",
      "Hibernate / JPA ORM Mapping",
      "JWT Authentication Flow in Java",
      "Role-Based Authorization System",
      "Exception Handling Strategy",
      "Input Validation & Security Layers",
      "Logging & Monitoring Systems",
    ],
  },
  {
    phase: "07",
    title: "Database Systems (SQL / Postgres)",
    modules: [
      "Relational Database Design & Schema Modeling",
      "Tables, Rows, Columns & Keys (Primary & Foreign Keys)",
      "Normalization (1NF, 2NF, 3NF) Concepts",
      "CRUD Operations using SQL Queries",
      "Joins (INNER, LEFT, RIGHT, FULL)",
      "Indexes & Query Optimization Techniques",
      "SQL Query Performance Tuning",
      "Transactions & ACID Properties",
      "Stored Procedures & Triggers Basics",
      "Data Integrity & Constraints (NOT NULL, UNIQUE, CHECK)",
      "Backup & Recovery Strategies",
    ],
  },
  {
    phase: "08",
    title: "Capstone Industry-Ready Projects",
    modules: [
      "Full Stack Admin Dashboard",
      "Authentication & Authorization System",
      "E-commerce Backend Architecture",
      "Payment Integration Workflow",
      "Role-Based Access Control",
      "Real-Time Features",
      "Deployment to Industry-Ready Development Environment",
      "Monitoring & Debugging Systems",
      "Scalability Considerations",
      "Project Documentation Standards",
    ],
  },
];



export default function JavaSyllabi() {
  return (
    <section className="relative bg-black text-white py-20 md:py-28 overflow-hidden">

      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20 md:mb-28 max-w-3xl"
        >
          <p className="text-[11px] tracking-[0.45em] text-white/40 uppercase mb-5">
            Full Stack Industry Ready Path
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Become a <span className="text-red-500">Professional Software </span> Developer
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/15  pl-8 md:pl-14 space-y-16 md:space-y-24">

          {roadmap.map((item, i) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              className="relative group"
            >
              {/* Dot */}
              <div className="absolute -left-[10px] md:-left-[60px] top-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-red-500 shadow-lg shadow-red-600/40" />

              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/15  rounded-2xl p-6 md:p-8 hover:border-red-500/30 hover:shadow-[0_0_60px_rgba(255,0,0,0.08)] transition-all duration-500">

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                  <span className="text-3xl md:text-5xl text-white/10 font-semibold">
                    {item.phase}
                  </span>

                  <h3 className="text-lg md:text-2xl font-medium">
                    {item.title}
                  </h3>
                </div>

                {/* Modules */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {item.modules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-white/70 text-sm"
                    >
                      <div className="w-2 h-2 mt-1 rounded-full bg-red-500 flex-shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-20 md:mt-28">
          <button className="px-8 md:px-10 py-3 md:py-4 bg-red-600 hover:bg-red-500 transition rounded-full font-medium text-sm md:text-base">
            Start Your Developement Journey
          </button>
        </div>

      </div>
    </section>
  )
}
