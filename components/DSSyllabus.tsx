"use client";
import { motion } from "framer-motion";


const roadmap = [
  {
    phase: "01",
    title: "Python Foundations for Data",
    modules: [
      "Python Syntax & Execution Model",
      "Data Types & Memory Handling",
      "Functions & Modular Code",
      "OOP Concepts for Data Systems",
      "Virtual Environments & Libraries",
      "Working with Files & CSV Data",
    ],
  },
  {
    phase: "02",
    title: "Mathematics for Data Science",
    modules: [
      "Linear Algebra Basics",
      "Vectors & Matrices",
      "Statistics Fundamentals",
      "Probability Concepts",
      "Distributions & Hypothesis Testing",
      "Data Sampling Techniques",
    ],
  },
  {
    phase: "03",
    title: "Data Analysis with Python",
    modules: [
      "NumPy Arrays & Vectorized Operations",
      "Pandas DataFrames Deep Dive",
      "Data Cleaning Techniques",
      "Handling Missing Values",
      "Data Transformation & Aggregation",
      "Exploratory Data Analysis (EDA)",
    ],
  },
  {
    phase: "04",
    title: "Data Visualization",
    modules: [
      "Matplotlib Fundamentals",
      "Seaborn Statistical Plots",
      "Plotly Interactive Dashboards",
      "Storytelling with Data",
      "Visual Design Principles",
    ],
  },
  {
    phase: "05",
    title: "Machine Learning Foundations",
    modules: [
      "Supervised vs Unsupervised Learning",
      "Regression Algorithms",
      "Classification Algorithms",
      "Model Training Workflow",
      "Overfitting vs Underfitting",
      "Evaluation Metrics",
    ],
  },
  {
    phase: "06",
    title: "Advanced Machine Learning",
    modules: [
      "Decision Trees & Random Forest",
      "Gradient Boosting",
      "Feature Industry-Ready Professionals",
      "Hyperparameter Tuning",
      "Cross Validation",
      "Model Deployment Basics",
    ],
  },
  {
    phase: "07",
    title: "Deep Learning & AI",
    modules: [
      "Neural Network Basics",
      "TensorFlow / PyTorch Intro",
      "CNN for Image Data",
      "RNN & Sequence Models",
      "Transfer Learning",
      "AI Model Optimization",
    ],
  },
  {
    phase: "08",
    title: "Data Engineering Basics",
    modules: [
      "SQL for Data Analysis",
      "Database Connections in Python",
      "ETL Pipelines",
      "Working with APIs",
      "Data Warehousing Concepts",
    ],
  },
  {
    phase: "09",
    title: "Deployment & ML",
    modules: [
      "Model Serialization",
      "API Deployment with FastAPI",
      "Docker Basics",
      "Cloud Deployment Concepts",
      "Monitoring ML Systems",
    ],
  },
  {
    phase: "10",
    title: "Capstone AI Projects",
    modules: [
      "Predictive Analytics Project",
      "Recommendation System",
      "Image Classification Model",
      "NLP Text Analysis",
      "End-to-End ML Deployment",
    ],
  },
];


export default function DSSyllabus() {
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
            Data Science Roadmap
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Become a <span className="text-red-500">Industry-Ready Professionals-</span> Data Scientist
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
            Start Your Data Science Journey
          </button>
        </div>

      </div>
    </section>
  );
}
