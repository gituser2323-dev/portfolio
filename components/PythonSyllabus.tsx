"use client";
import { motion } from "framer-motion";


const roadmap = [
  {
    phase: "01",
    title: "Frontend Foundations",
    modules: [
      "HTML Semantic Architecture",
      "CSS Layout Systems",
      "Responsive Industry-Ready Software Devlopment",
      "Flexbox & Grid Internals",
      "Reusable Layout Patterns",
      "UI Consistency Systems",
    ],
  },
  {
    phase: "02",
    title: "JavaScript Engineering",
    modules: [
      "Execution Context & Scope",
      "Closures & Memory Model",
      "Event Loop & Async Flow",
      "DOM System",
      "ES6+ Modules",
      "API Integration",
    ],
  },
  {
    phase: "03",
    title: "ReactJS",
    modules: [
      "Component Architecture",
      "Hooks Deep Dive",
      "State Management Patterns",
      "Reusable UI Systems",
      "Performance Optimization",
      "Form Systems",
    ],
  },
  {
    phase: "04",
    title: "Advanced UI Systems",
    modules: [
      "Tailwind CSS Architecture",
      "Design Systems",
      "Animations",
      "Dashboard Layout",
      "Theme Systems",
    ],
  },
  {
    phase: "05",
    title: "Python Core for Backend",
    modules: [
      "Python Execution Model",
      "OOP for Backend Systems",
      "Virtual Environments",
      "Dependency Management",
      "File Handling",
      "Error Handling Strategies",
    ],
  },
  {
    phase: "06",
    title: "Django Backend",
    modules: [
      "Django Project Architecture",
      "Apps & MTV Pattern",
      "URL Routing System",
      "Views & Templates",
      "Django ORM Deep Dive",
      "Admin Panel Customization",
      "Authentication System",
      "User Management",
      "Forms & Validation",
      "Middleware in Django",
      "Signals & Lifecycle Hooks",
    ],
  },
  {
    phase: "07",
    title: "Django REST API Systems",
    modules: [
      "Django REST Framework",
      "Serializers & Validation",
      "ViewSets & Routers",
      "JWT Authentication",
      "Permissions & Roles",
      "API Versioning",
      "Throttling & Rate Limiting",
      "Pagination Systems",
    ],
  },
  {
    phase: "08",
    title: "Database (SQL)",
    modules: [
      "MySQL & PostgreSQL Architecture",
      "Schema Design Strategy",
      "Normalization & Relationships",
      "JOIN Queries Deep Dive",
      "Indexing & Optimization",
      "Transactions & ACID",
      "Backup & Recovery",
    ],
  },
  {
    phase: "09",
    title: "Deployment",
    modules: [
      "Gunicorn & WSGI",
      "NGINX Configuration",
      "Environment Variables",
      "Static & Media File Handling",
      "CI/CD Basics",
      "Server Security Practices",
      "Monitoring & Logging",
    ],
  },
  {
    phase: "10",
    title: "Capstone Projects",
    modules: [
      "Full Stack Dashboard",
      "Auth & Role-Based Access",
      "E-commerce Backend",
      "Payment Integration",
      "REST API + React Frontend",
      "Deployment to Industry-Ready Developement",
      "Scalability Planning",
    ],
  },
];


export default function PYTHONSyllabus() {
  return (
    <section className="relative bg-black text-white py-16 md:py-20 overflow-hidden">

      {/* Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-28 max-w-3xl"
        >
          <p className="text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.45em] text-white/40 uppercase mb-4 md:mb-5">
            Full Stack Software Development Path
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Become a <span className="text-red-500">Industry-Ready Software-</span> Developer
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative md:border-l border-white/15  md:pl-14 space-y-14 md:space-y-24">

          {roadmap.map((item, i) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="relative group"
            >
              {/* Dot (desktop only) */}
              <div className="hidden md:block absolute -left-[60px] top-2 w-4 h-4 rounded-full bg-red-500 shadow-lg shadow-red-600/40" />

              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/15  rounded-2xl p-5 md:p-8 hover:border-red-500/30 hover:shadow-[0_0_60px_rgba(255,0,0,0.08)] transition-all duration-500">

                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 mb-5 md:mb-6">

                  <span className="text-3xl md:text-5xl text-white/10 font-semibold">
                    {item.phase}
                  </span>

                  <h3 className="text-lg md:text-2xl font-medium">
                    {item.title}
                  </h3>

                </div>

                {/* Modules */}
                <div className="grid gap-3 md:grid-cols-2 md:gap-4">
                  {item.modules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-white/70 text-xs md:text-sm"
                    >
                      <div className="w-2 h-2 mt-1 rounded-full bg-red-500 shrink-0" />
                      {mod}
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-28 text-center md:text-left">
          <button className="w-full md:w-auto px-8 md:px-10 py-3 md:py-4 bg-red-600 hover:bg-red-500 transition rounded-full font-medium text-sm md:text-base">
            Start Your Software Developement Journey
          </button>
        </div>

      </div>
    </section>
  );
}
