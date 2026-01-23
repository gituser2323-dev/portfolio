import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Terminal, Layers, Bot } from "lucide-react"
import { highlights } from "@/lib/data"

const iconMap = {
  code: Code,
  terminal: Terminal,
  layers: Layers,
  bot: Bot,
}

export function About() {
  return (
    <section id="about" className="py-28 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              About
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8">
              What I Do
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I&apos;m Pratik Sabale, a passionate technologist based in India with experience 
              in software development and education. My mission is to make 
              technology education accessible, practical, and career-transforming.
            </p>
          </div>

          {/* Highlight Cards - 4 cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((highlight, index) => {
              const Icon = iconMap[highlight.icon as keyof typeof iconMap]
              return (
                <Card
                  key={index}
                  className="group border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/30 transition-all duration-500"
                >
                  <CardContent className="p-7">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                        <Icon size={24} />
                      </div>
                      <Badge className="text-xs bg-card border border-border/50 text-muted-foreground hover:bg-card">
                        {highlight.badge}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
