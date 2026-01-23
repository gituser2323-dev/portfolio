import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { services } from "@/lib/data"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Services() {
  return (
    <section id="services" className="py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8">
              How I can help you grow
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Whether you&apos;re starting your coding journey or looking to level up your career, 
              I offer personalized guidance tailored to your goals.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
              >
                {service.featured && (
                  <div className="absolute top-5 right-5">
                    <Badge className="text-xs bg-primary text-primary-foreground">
                      Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-7">
                  <h3 className="text-xl font-semibold text-foreground mb-4 pr-20">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs font-normal border-border/50 text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
