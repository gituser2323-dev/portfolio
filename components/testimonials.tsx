import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { testimonials } from "@/lib/data"
import { Quote, Play, MessageCircle } from "lucide-react"

// Placeholder data for screenshot testimonials
const screenshotTestimonials = [
  { id: 1, alt: "Student review 1" },
  { id: 2, alt: "Student review 2" },
  { id: 3, alt: "Student review 3" },
  { id: 4, alt: "Student review 4" },
  { id: 5, alt: "Student review 5" },
  { id: 6, alt: "Student review 6" },
]

// Placeholder data for video testimonials
const videoTestimonials = [
  { id: 1, title: "From Zero to Full Stack Developer", thumbnail: "/placeholder-video-1.jpg" },
  { id: 2, title: "How Mentorship Changed My Career", thumbnail: "/placeholder-video-2.jpg" },
]

export function Testimonials() {
  return (
    <section className="py-28 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8">
              What People Say
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Real feedback from students and professionals I&apos;ve worked with.
            </p>
          </div>

          {/* Written Testimonials */}
          <div className="grid md:grid-cols-3 gap-5 mb-20">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card hover:border-primary/30 transition-all duration-500"
              >
                <CardContent className="p-7">
                  <Quote className="w-8 h-8 text-primary/30 mb-5" />
                  <p className="text-foreground leading-relaxed mb-6">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-11 h-11 border border-border/50">
                      <AvatarFallback className="bg-card text-foreground text-sm font-medium">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* WhatsApp Screenshot Reviews */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Student Reviews</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {screenshotTestimonials.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 bg-card/30 hover:border-primary/30 transition-all duration-500 group"
                >
                  {/* Placeholder for screenshot */}
                  <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-card/80 flex items-center justify-center">
                    <div className="text-center p-4">
                      <MessageCircle className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
                      <p className="text-xs text-muted-foreground/50">Screenshot placeholder</p>
                    </div>
                  </div>
                  {/* Badge */}
                  <Badge className="absolute top-4 left-4 text-xs bg-primary text-primary-foreground">
                    Real Student Review
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Video Feedback */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Play className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Video Feedback</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {videoTestimonials.map((video) => (
                <div
                  key={video.id}
                  className="group relative aspect-video rounded-2xl overflow-hidden border border-border/50 bg-card/30 hover:border-primary/30 transition-all duration-500 cursor-pointer"
                >
                  {/* Placeholder thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-muted/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary/90 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-105 transition-all duration-500">
                        <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                      <p className="text-sm text-muted-foreground/50">Video placeholder</p>
                    </div>
                  </div>
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background/95 via-background/60 to-transparent">
                    <p className="text-sm font-medium text-foreground">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
