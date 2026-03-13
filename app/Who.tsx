import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export function Who() {
  return (
    <section id="who-am-i" className="relative py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* Image Column */}
          <div className="relative">
            {/* subtle glow behind image */}
            <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl opacity-40" />

            <div className="relative rounded-3xl overflow-hidden border border-border/40">
              <Image
                src="/cover.jpeg"   /* <-- your image */
                alt="Pratik Sabale"
                width={600}
                height={720}
                className="object-cover grayscale hover:grayscale-0 transition duration-700"
                priority
              />
            </div>
          </div>

          {/* Content Column */}
          <div>
            <Badge className="mb-6 bg-secondary text-secondary-foreground border border-border/50">
              Who Am I
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
              Engineer. Mentor. Builder.
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I’m <span className="text-foreground font-semibold">Pratik Sabale</span> — 
              a software engineer, mentor, and educator focused on building 
              real-world engineering skills that actually matter.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I work at the intersection of <span className="text-foreground font-medium">
              systems thinking, full-stack development, and AI-driven automation</span>. 
              My mission is simple: help engineers think clearly, build confidently, 
              and grow sustainably.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Through mentorship, workshops, and content, I focus on 
              <span className="text-foreground font-medium">
              practical clarity over hype</span> — the same mindset I bring 
              into every system I design.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
