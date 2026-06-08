"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  Database,
  Mic,
  Search,
  Workflow,
} from "lucide-react";

const projects = [
  {
    icon: Database,
    title: "Multi Vendor E-Commerce",
    description:
      "Production-ready marketplace with authentication, payments, admin dashboards, inventory management and order processing.",
    tag: "MERN",
  },
  {
    icon: Workflow,
    title: "Project Management SaaS",
    description:
      "Collaborative workspace platform with tasks, teams, permissions, notifications and real-time updates.",
    tag: "SaaS",
  },
  {
    icon: Search,
    title: "AI Resume Analyzer",
    description:
      "Upload resumes and receive intelligent feedback, scoring and improvement suggestions using LLMs.",
    tag: "AI",
  },
  {
    icon: Brain,
    title: "AI Mock Interview Platform",
    description:
      "Simulate technical interviews with AI-generated questions, scoring and personalized feedback.",
    tag: "GenAI",
  },
  {
    icon: Bot,
    title: "AI Customer Support Agent",
    description:
      "Enterprise support assistant powered by RAG, company documents and automated workflows.",
    tag: "Agent",
  },
  {
    icon: Mic,
    title: "Full Stack AI SaaS",
    description:
      "Complete AI-powered SaaS application with subscriptions, dashboards, authentication and AI features.",
    tag: "Production",
  },
];

export default function MERNFullStackAIProjectsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-32 md:py-40">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-white/40
            "
          >
            Real Projects
          </p>

          <h2
            className="
              mt-8
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-semibold
              leading-[1]
              tracking-tight
            "
          >
            <span className="text-white">
              Build Products.
            </span>

            <br />

            <span className="text-white/40">
              Integrate AI.
            </span>

            <br />

            <span className="text-white">
              Launch Startups.
            </span>
          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              text-base
              md:text-lg
              leading-relaxed
              text-white/50
            "
          >
            Learn by building complete applications
            used in modern startups, SaaS companies
            and AI-first businesses.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                className="
                  group
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-7
                  transition-all
                  duration-300
                  hover:border-white/20
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                  "
                >
                  <Icon size={20} className="text-white" />
                </div>

                <div
                  className="
                    mt-5
                    inline-flex
                    rounded-full
                    border
                    border-white/10
                    px-3
                    py-1
                    text-[11px]
                    uppercase
                    tracking-wider
                    text-white/40
                  "
                >
                  {project.tag}
                </div>

                <h3
                  className="
                    mt-5
                    text-xl
                    font-semibold
                    text-white
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-relaxed
                    text-white/50
                  "
                >
                  {project.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-24 border-t border-white/10 pt-16 text-center">
          <h3
            className="
              text-3xl
              md:text-5xl
              font-semibold
              leading-tight
            "
          >
            <span className="text-white">
              Full Stack Ready.
            </span>

            <br />

            <span className="text-white/30">
              AI Ready.
            </span>

            <br />

            <span className="text-white">
              Industry Ready.
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}