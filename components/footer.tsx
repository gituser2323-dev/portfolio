import Link from "next/link"
import { siteConfig, navLinks } from "@/lib/data"
import { Linkedin, Github, Youtube, Instagram } from "lucide-react"

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
                Mentoring developers, speaking about AI, and writing tech stories.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-border/50">
            <p className="text-sm text-muted-foreground/70">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
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
              <Link
                href={siteConfig.social.instagram}
                target="_blank"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
