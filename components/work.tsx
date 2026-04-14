"use client"

import { useState } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// 🔥 YOUR NICHE DATA (IMPORTANT)
const projects = [
  {
    title: "AI Batch Management System",
    type: "AI Systems",
    description:
      "Automated batch scheduling system with intelligent slot optimization and trainer allocation.",
    impact:
      "Reduced manual scheduling by 80% and improved resource utilization across batches.",
    tags: ["React", "Node", "MongoDB", "AI Logic"],
    link: "#",
  },

  {
    title: "HRMS – Employee Management System",
    type: "Full Stack",
    description:
      "Complete HR system managing attendance, payroll, leave tracking, and performance analytics.",
    impact:
      "Centralized HR operations and reduced admin workload by 70% with automated workflows.",
    tags: ["Next.js", "Node", "MongoDB", "Auth", "RBAC"],
    link: "#",
  },

  {
    title: "MERN + AI Hiring Platform",
    type: "AI Systems",
    description:
      "Smart hiring platform with resume parsing, AI scoring, and automated interview shortlisting.",
    impact:
      "Improved hiring speed by 60% and reduced manual screening effort drastically.",
    tags: ["React", "Express", "AI APIs", "NLP"],
    link: "#",
  },

  {
    title: "Business Automation Dashboard",
    type: "Automation",
    description:
      "Centralized system to automate reports, workflows, and operational processes.",
    impact:
      "Saved 20+ hours/week by eliminating repetitive manual business tasks.",
    tags: ["Next.js", "Node", "Cron Jobs", "APIs"],
    link: "#",
  },

  {
    title: "Learning Management System (LMS)",
    type: "Full Stack",
    description:
      "Platform to manage students, batches, syllabus tracking, and trainer performance.",
    impact:
      "Enabled scalable training operations with real-time tracking and analytics.",
    tags: ["React", "Node", "MongoDB", "Dashboard"],
    link: "#",
  },

  {
    title: "AI Content Automation Engine",
    type: "AI Systems",
    description:
      "Automates content generation using AI for reels, scripts, and marketing pipelines.",
    impact:
      "Reduced content production time by 90% while maintaining consistency.",
    tags: ["Node", "OpenAI", "Automation", "APIs"],
    link: "#",
  },
]

const filters = [
  "All",
  "AI Systems",
  "Full Stack",
  "Automation",
]

export function Work() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter)

  // 🎯 Mouse spotlight
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 300 })
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 300 })

  const maskImage = useMotionTemplate`
    radial-gradient(500px at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.25), transparent 70%)
  `

  return (
    <section
      id="work"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }}
      className="relative py-36 bg-[#050505] text-white overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* 🫧 Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.15), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* 🔥 HEADER */}
        <div className="max-w-5xl mx-auto mb-20">
          <p className="text-xs tracking-[0.35em] text-white/50 mb-4">
            SYSTEMS I BUILD
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6 tracking-tight">
            Real-World Engineering Systems
            <br />
            <span className="text-white/40">
              Powered by MERN + AI
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl">
            Production-grade systems, automation pipelines, and AI-driven
            applications designed to scale businesses and eliminate manual work.
          </p>
        </div>

        {/* 🔘 FILTERS */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {filters.map((filter) => (
            <Button
              key={filter}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full px-5 backdrop-blur-md border transition-all duration-300",
                activeFilter === filter
                  ? "bg-white text-black border-white shadow-lg"
                  : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
              )}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* 💎 GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="group relative"
            >
              <motion.div
                whileHover={{
                  rotateX: 6,
                  rotateY: -6,
                  scale: 1.03,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative"
              >
                <Card className="relative border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/10">
                  
                  {/* 🔥 Shine Layer */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent, rgba(255,255,255,0.08), transparent)",
                    }}
                  />

                  {/* 🟢 STATUS */}
                  <div className="absolute top-4 right-4 text-[10px] tracking-widest text-green-400">
                    ● LIVE SYSTEM
                  </div>

                  <CardContent className="p-8 relative z-10">

                    <div className="flex items-center justify-between mb-5">
                      <Badge className="bg-white/10 text-white border border-white/20">
                        {project.type}
                      </Badge>

                      <Link
                        href={project.link}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 p-3 rounded-full bg-white text-black"
                      >
                        <ArrowUpRight size={18} />
                      </Link>
                    </div>

                    <h3 className="text-2xl font-semibold mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-6 text-sm">
                      {project.description}
                    </p>

                    {/* 💥 IMPACT */}
                    <div className="mb-2 text-xs text-white/40 uppercase tracking-widest">
                      Impact
                    </div>

                    <p className="text-white/80 text-sm mb-6">
                      {project.impact}
                    </p>

                    {/* 🧠 TECH */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </CardContent>
                </Card>

                {/* 🔥 Glow */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}