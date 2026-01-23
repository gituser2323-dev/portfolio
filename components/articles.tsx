import { Button } from "@/components/ui/button"
import { articles } from "@/lib/data"
import { ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

export function Articles() {
  return (
    <section id="articles" className="py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Articles
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8">
              Thoughts on tech & career
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I write about AI, web development, and career growth. Here are some of my latest pieces.
            </p>
          </div>

          {/* Articles List */}
          <div className="space-y-2 mb-12">
            {articles.map((article, index) => (
              <Link
                key={index}
                href={article.link}
                className="group block p-6 rounded-2xl border border-transparent hover:border-border/50 hover:bg-card/50 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground/70">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight size={20} className="text-primary" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="outline" asChild className="bg-transparent border-border/50 text-foreground hover:bg-card hover:border-primary/50 px-6">
              <Link href="#">
                Read More Articles
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
