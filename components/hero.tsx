import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Youtube, Instagram, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/data"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-20 overflow-hidden flex items-center">
      {/* Cinematic Premium Background (ThinkSchool vibe) */}
      <div className="absolute inset-0 cinematic-bg" />

      {/* Fine noise overlay for premium feel */}
      <div className="absolute inset-0 opacity-[0.06] bg-[url('/noise.png')] pointer-events-none" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.14] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:90px_90px] pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute -top-32 left-6 w-[520px] h-[520px] rounded-full bg-primary/20 blur-[90px] opacity-70 pointer-events-none" />
      <div className="absolute top-12 right-[-120px] w-[520px] h-[520px] rounded-full bg-sky-500/15 blur-[110px] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-border/50 bg-card/30 backdrop-blur-md text-sm font-medium text-muted-foreground mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-25" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for mentorship & speaking
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[82px] font-extrabold tracking-tight leading-[1.03] text-balance mb-8 text-white">
            Pratik Sabale.
          </h1>

     {/* Subtitle */}
<div className="max-w-3xl mx-auto mb-12 text-pretty">
  {/* Vision tagline (ThinkSchool style) */}
  <p className="text-white/85 text-xl md:text-2xl font-semibold leading-snug mb-5">
    Inspiring the next generation of engineers to build India’s future
  </p>

  {/* Technical tagline */}
  <p className="text-lg md:text-xl text-white/70 leading-relaxed">
  <span className="text-white/90 font-semibold">
    End-to-end engineering —
  </span>{" "}
  <span className="text-white/70">
    from
  </span>{" "}
  <span className="text-white font-semibold">apps</span>{" "}
  <span className="text-white/55">→</span>{" "}
  <span className="text-white font-semibold">systems</span>{" "}
  <span className="text-white/55">→</span>{" "}
  <span className="text-white font-semibold">automation</span>.
  <br />

</p>

</div>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              size="lg"
              asChild
              className="btn-glow w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-12 text-base rounded-full"
            >
              <Link href="https://wa.link/fb2owa" target="_blank">
                Let&apos;s Talk
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto bg-transparent border-white/15 hover:bg-white/5 hover:border-primary/50 text-white px-10 h-12 text-base rounded-full"
            >
              <Link href="#work">View Work</Link>
            </Button>
          </div>

          {/* Credibility line */}
          <p className="text-sm text-white/55 tracking-wide mb-7">
            Mentorship • Python • MERN + AI • Workshops • AI Automation • DevOps 
          </p>

          {/* Trust line */}
          <p className="text-sm text-white/45 mb-14">
            Sessions & Workshops across{" "}
            <span className="text-white/70 font-medium">Pune, Nashik, A.Nagar & Mumbai</span>{" "}
            — VIIT • JSPM • MMCOE • JSPM  • Vikhe Patil Foundation • SIMMC
          </p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-3">
            <Link
              href={siteConfig.social.linkedin}
              target="_blank"
              className="p-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40 transition-all duration-300 text-white/70 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href={siteConfig.social.github}
              target="_blank"
              className="p-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40 transition-all duration-300 text-white/70 hover:text-white"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href={siteConfig.social.youtube}
              target="_blank"
              className="p-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40 transition-all duration-300 text-white/70 hover:text-white"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </Link>
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              className="p-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40 transition-all duration-300 text-white/70 hover:text-white"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
