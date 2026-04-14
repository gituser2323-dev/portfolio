import Link from "next/link"
import { siteConfig } from "@/lib/data"
import { Linkedin, Github, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-20 bg-[#050505] text-white border-t border-white/10 overflow-hidden">

      {/* 🔥 Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* 💎 TOP CTA (HIGH CONVERSION) */}
          <div className="mb-16 p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                Ready to build real-world systems?
              </h3>
              <p className="text-white/60">
                Learn MERN + AI + Automation with practical, production-level projects.
              </p>

              {/* 🟢 TRUST SIGNAL */}
              <p className="text-xs text-green-400 mt-3">
                ● 1200+ students trained • Real project-based learning
              </p>
            </div>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition"
            >
              Start Your Journey →
            </Link>
          </div>

          {/* 🔥 MAIN FOOTER */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 mb-12">

            {/* 🧠 BRAND */}
            <div>
              <Link
                href="/"
                className="text-2xl font-semibold tracking-tight hover:text-white/80 transition"
              >
                {siteConfig.name}
              </Link>

              <p className="text-sm text-white/50 mt-4 max-w-xs leading-relaxed">
                Building AI-powered systems, training developers, and helping
                people move from learning to real-world execution.
              </p>
            </div>

            {/* 🔗 LINKS */}
            <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm">
              <Link href="/about" className="text-white/50 hover:text-white transition">
                About
              </Link>
              <Link href="/services" className="text-white/50 hover:text-white transition">
                Systems
              </Link>
              <Link href="/speaking" className="text-white/50 hover:text-white transition">
                Workshops
              </Link>
              <Link href="/insights" className="text-white/50 hover:text-white transition">
                Insights
              </Link>
              <Link href="/contact" className="text-white/50 hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

          {/* ⚡ BOTTOM */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10">

            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} {siteConfig.name}. Built with focus on systems, scale & AI.
            </p>

            {/* 🔗 SOCIAL + CTA */}
            <div className="flex items-center gap-3">

              {/* 🔥 PRIMARY CTA */}
              <Link
                href="/book"
                className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition"
              >
                Book Strategy Call
              </Link>

              {/* SOCIALS */}
              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                className="p-2.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition"
              >
                <Linkedin size={18} />
              </Link>

              <Link
                href={siteConfig.social.github}
                target="_blank"
                className="p-2.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition"
              >
                <Github size={18} />
              </Link>

              <Link
                href={siteConfig.social.youtube}
                target="_blank"
                className="p-2.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition"
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