"use client";
import { motion } from "framer-motion";


const roadmap = [
  {
    phase: "01",
    title: "Foundations of Data Analytics",
    modules: [
      "What is Data Analytics",
      "Types of Analytics (Descriptive, Diagnostic, Predictive)",
      "Data-Driven Decision Making",
      "Understanding Business Metrics",
      "Data Lifecycle Overview",
      "Analytical Thinking Framework",
    ],
  },
  {
    phase: "02",
    title: "Excel for Data Analysis",
    modules: [
      "Excel Interface & Data Handling",
      "Formulas & Functions",
      "Pivot Tables & Pivot Charts",
      "Data Cleaning in Excel",
      "Conditional Formatting",
      "Business Reporting with Excel",
    ],
  },
  {
    phase: "03",
    title: "SQL for Analytics",
    modules: [
      "Relational Database Concepts",
      "SELECT Queries & Filtering",
      "GROUP BY & Aggregations",
      "JOIN Operations",
      "Subqueries & CTEs",
      "Indexing & Query Optimization",
      "SQL for Business Metrics",
    ],
  },
  {
    phase: "04",
    title: "Python for Data Analysis",
    modules: [
      "NumPy Basics",
      "Pandas DataFrames",
      "Data Cleaning Techniques",
      "Handling Missing Values",
      "Grouping & Aggregation",
      "Data Transformation",
    ],
  },
  {
    phase: "05",
    title: "Data Visualization Systems",
    modules: [
      "Matplotlib Fundamentals",
      "Seaborn Statistical Plots",
      "Plotly Dashboards",
      "Storytelling with Data",
      "Visualization Best Practices",
      "Insight Communication",
    ],
  },
  {
    phase: "06",
    title: "Business Intelligence Tools",
    modules: [
      "Power BI Interface",
      "Data Modeling in Power BI",
      "DAX Basics",
      "Interactive Dashboards",
      "KPI Reporting",
      "Dashboard Design Principles",
    ],
  },
  {
    phase: "07",
    title: "Statistics for Analytics",
    modules: [
      "Descriptive Statistics",
      "Probability Basics",
      "Distributions",
      "Correlation vs Causation",
      "Hypothesis Testing",
      "A/B Testing Basics",
    ],
  },
  {
    phase: "08",
    title: "Real-World Data Projects",
    modules: [
      "Sales Analysis Dashboard",
      "Customer Behavior Analysis",
      "Financial Reporting System",
      "Marketing Analytics Project",
      "End-to-End Data Report",
    ],
  },
  {
    phase: "09",
    title: "Reporting & Communication",
    modules: [
      "Presenting Insights to Stakeholders",
      "Data Storytelling",
      "Building Executive Reports",
      "Visualization for Business Users",
      "Documentation Standards",
    ],
  },
  {
    phase: "10",
    title: "Career & Portfolio Development",
    modules: [
      "Building Analytics Portfolio",
      "Case Study Presentation",
      "Interview Preparation",
      "Resume for Data Roles",
      "LinkedIn Optimization",
    ],
  },
];

export default function DASyllabus() {
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
            Data Analytics Roadmap
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Become a <span className="text-red-500">Industry-Ready Professionals-</span> Data Analyst
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

                {/* Module Points */}
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
            Start Your Data Journey
          </button>
        </div>

      </div>
    </section>
  );
}
