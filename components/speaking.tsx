import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { speakingEvents, siteConfig } from "@/lib/data"
import { ArrowRight, Mic } from "lucide-react"
import Link from "next/link"

export function Speaking() {
  return (
    <section id="speaking" className="py-28 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Speaking
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8">
              Speaking & Workshops
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I conduct workshops and speak at colleges, communities, and conferences — mainly across Pune & Mumbai.
            </p>
          </div>

          {/* Speaking Events Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {speakingEvents.map((event, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-border/50 bg-background/50 hover:bg-secondary/50 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Mic size={18} />
                  </div>
                  <Badge className="text-xs bg-secondary border border-border/50 text-muted-foreground hover:bg-secondary">
                    {event.location}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {event.event}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {event.topic}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-2xl border border-primary/20 bg-primary/5">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Interested in having me speak?
              </h3>
              <p className="text-muted-foreground">
                Available for workshops, seminars, guest lectures & corporate sessions.
              </p>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
              <Link href={`mailto:${siteConfig.email}?subject=Speaking Inquiry`}>
                Invite Me to Speak
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
