"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { speakingEvents, siteConfig } from "@/lib/data"
import { ArrowRight, Mic } from "lucide-react"
import Link from "next/link"

export function Speaking() {
  return (
    <section
      id="speaking"
      className="relative py-32 bg-[#050505] text-white overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* 💎 HEADER */}
          <div className="mb-20">
            <p className="text-xs tracking-[0.35em] text-white/40 mb-4">
              SESSIONS & WORKSHOPS
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-tight">
              Teaching Real-World Systems
              <br />
              <span className="text-white/40">
                MERN • AI • Automation
              </span>
            </h2>

            <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
              I conduct high-impact workshops focused on real-world development,
              AI integration, and building scalable systems — not just theory.
            </p>
          </div>

          {/* 🔥 GRID */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {speakingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
                className="group relative"
              >
                <div className="relative p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/10">

                  {/* 💡 Shine */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* 🟢 Status */}
                  <div className="absolute top-4 right-4 text-[10px] text-green-400 tracking-widest">
                    ● LIVE SESSION
                  </div>

                  {/* ICON */}
                  <div className="mb-5 w-12 h-12 flex items-center justify-center rounded-xl bg-white/10">
                    <Mic size={20} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold mb-2">
                    {event.event}
                  </h3>

                  {/* LOCATION */}
                  <Badge className="mb-3 text-xs bg-white/10 border border-white/20 text-white/60">
                    {event.location}
                  </Badge>

                  {/* TOPIC */}
                  <p className="text-sm text-white/60 leading-relaxed mb-4">
                    {event.topic}
                  </p>

                  {/* 💥 OUTCOME */}
                  <p className="text-xs text-white/40 uppercase tracking-widest">
                    Outcome
                  </p>
                  <p className="text-sm text-white/80">
                    Hands-on understanding of real-world systems and AI workflows.
                  </p>
                </div>

                {/* Glow */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition" />
              </motion.div>
            ))}
          </div>

          {/* 🚀 CTA */}
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20" />

            <div className="flex-1 relative z-10">
              <h3 className="text-2xl font-semibold mb-2">
                Want a high-impact tech session?
              </h3>
              <p className="text-white/60">
                Workshops focused on MERN, AI, and real-world system building for students and teams.
              </p>
            </div>

            <Button
              asChild
              className="relative z-10 bg-white text-black hover:bg-white/90 px-6 py-3 text-sm font-medium"
            >
              <Link
                href={`mailto:${siteConfig.email}?subject=Workshop / Speaking Inquiry`}
              >
                Book a Session
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}