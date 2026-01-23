"use client"

import { useState } from "react"
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

  return (
    <section id="work" className="py-28 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Work
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8">
              Featured projects & impact
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A selection of projects, talks, and media appearances that showcase my work 
              in development, education, and the tech community.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "transition-all duration-300",
                  activeFilter === filter 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-transparent border-border/50 text-muted-foreground hover:bg-card hover:text-foreground hover:border-primary/50"
                )}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className={cn(
                  "group border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card hover:border-primary/30 transition-all duration-500",
                  "animate-in fade-in slide-in-from-bottom-4"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className="text-xs bg-primary/10 text-primary border-0">
                      {project.type}
                    </Badge>
                    <Link
                      href={project.link}
                      className="p-2.5 rounded-xl border border-border/50 bg-card/50 hover:bg-primary hover:border-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs font-normal border-border/50 text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
