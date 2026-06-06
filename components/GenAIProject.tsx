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
    icon: Bot,
    title: "AI Customer Support Agent",
    description:
      "Autonomous AI agent capable of handling customer queries, ticketing workflows and business knowledge retrieval.",
    tag: "Multi-Agent",
  },
  {
    icon: Search,
    title: "RAG Knowledge Assistant",
    description:
      "Chat with company documents, PDFs, SOPs and internal knowledge bases using Retrieval Augmented Generation.",
    tag: "RAG",
  },
  {
    icon: Brain,
    title: "AI Research System",
    description:
      "Multi-step reasoning agent capable of researching, summarizing and generating actionable insights.",
    tag: "Reasoning",
  },
  {
    icon: Database,
    title: "Enterprise AI Chat",
    description:
      "Private GPT powered by vector databases and enterprise knowledge systems.",
    tag: "Vector DB",
  },
  {
    icon: Mic,
    title: "Voice AI Assistant",
    description:
      "Real-time conversational voice agent with speech-to-text and intelligent responses.",
    tag: "Voice AI",
  },
  {
    icon: Workflow,
    title: "Business Automation Platform",
    description:
      "Automate repetitive business operations using AI agents and workflow orchestration.",
    tag: "Automation",
  },
];

export default function GenAIProjectsSection() {
  return (
    <section className="relative bg-black py-40 overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p
            className="
              text-white/40
              uppercase
              tracking-[0.35em]
              text-xs
            "
          >
            Real Projects
          </p>

          <h2
            className="
              mt-8
              text-6xl
              md:text-8xl
              lg:text-[8rem]
              font-semibold
              leading-[0.9]
              tracking-tight
            "
          >
            <span className="text-white">
              Build
            </span>

            <br />

            <span className="text-white/20">
              AI Products.
            </span>

            <br />

            <span className="text-white">
              Not Tutorials.
            </span>
          </h2>

          <p
            className="
              max-w-2xl
              mt-10
              text-xl
              text-white/50
              leading-relaxed
            "
          >
            Every project is designed to simulate
            real-world AI engineering workflows used
            inside modern startups and technology companies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mt-24">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-3xl
                  p-8
                  hover:border-white/20
                  transition-all
                  duration-500
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    bg-gradient-to-br
                    from-white/10
                    via-transparent
                    to-transparent
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      h-14
                      w-14
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  <div
                    className="
                      mt-6
                      inline-flex
                      rounded-full
                      border
                      border-white/10
                      px-3
                      py-1
                      text-xs
                      text-white/40
                    "
                  >
                    {project.tag}
                  </div>

                  <h3
                    className="
                      mt-6
                      text-2xl
                      font-semibold
                      text-white
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-white/50
                      leading-relaxed
                    "
                  >
                    {project.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-32 text-center">
          <h3
            className="
              text-4xl
              md:text-6xl
              font-semibold
              leading-tight
            "
          >
            <span className="text-white">
              Portfolio Ready.
            </span>

            <br />

            <span className="text-white/30">
              Production Ready.
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}