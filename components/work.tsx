"use client"

import { useState } from "react"
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const filters = ["All", "Project", "Talk", "Media"]

export function Work() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter)

  // 🎯 Mouse Spotlight Logic
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 300 })
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 300 })

  const maskImage = useMotionTemplate`
    radial-gradient(400px at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.35), transparent 70%)
  `

  return (
    <section
      id="work"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }}
      className="relative py-36 bg-[#070707] text-white overflow-hidden"
    >
      {/* 🫧 Mouse Bubble Light */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.18), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <p className="text-xs tracking-[0.35em] text-white/60 mb-4">SELECTED WORK</p>
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6 tracking-tight">
            Engineering Impact Through Real Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            Projects, talks, and technical work demonstrating system design,
            AI integration, and production-grade engineering.
          </p>
        </motion.div>

        {/* FILTERS */}
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

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <Card className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <CardContent className="p-8">

                  <div className="flex items-center justify-between mb-5">
                    <Badge className="bg-white/10 text-white border border-white/20">
                      {project.type}
                    </Badge>
                    <Link
                      href={project.link}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 p-3 rounded-full bg-white text-black hover:scale-105"
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

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

              {/* Soft Edge Glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
