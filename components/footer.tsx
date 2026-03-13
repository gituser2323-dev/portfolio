import Link from "next/link"
import { siteConfig } from "@/lib/data"
import { Linkedin, Github, Youtube, Instagram, Calendar } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-10">

            {/* Logo & Description */}
            <div>
              <Link
                href="/"
                className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-300"
              >
                {siteConfig.name}
              </Link>
              <p className="text-sm text-muted-foreground mt-3 max-w-xs leading-relaxed">
                Engineering mentor, AI speaker, and builder of real-world tech solutions.
              </p>
            </div>

            {/* Quick Links (Updated) */}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                About
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Services
              </Link>
              <Link href="/speaking" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Speaking
              </Link>
              <Link href="/insights" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Insights
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-border/50">
            <p className="text-sm text-muted-foreground/70">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>

            {/* Social + Booking */}
            <div className="flex items-center gap-3">

              {/* Cal.com Booking */}
              <Link
                href="/book"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
              >
                Book a Call
              </Link>


              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href={siteConfig.social.github}
                target="_blank"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </Link>
              <Link
                href={siteConfig.social.youtube}
                target="_blank"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </Link>
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
