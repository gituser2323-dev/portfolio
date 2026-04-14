"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: "Gen-AI Engineering",
    desc: "Designing intelligent systems using LLMs, agents, and real-world AI architectures that think, automate, and scale.",
    link: "/courses/gen-ai",
  },
  {
    title: "Full Stack + DevOps + AI",
    desc: "Building production-grade full stack applications with CI/CD pipelines, cloud infrastructure, and AI-powered features.",
    link: "/courses/mern-devops-ai",
  },
  {
    title: "UI / UX Design",
    desc: "Crafting high-conversion interfaces using design psychology, user behavior, and modern product thinking.",
    link: "/courses/ui-ux",
  },
  {
    title: "Data Science & Analytics",
    desc: "Transforming raw data into insights using machine learning, analytics, and decision intelligence systems.",
    link: "/courses/data-science",
  },
]

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const handleNavigate = (link: string) => {
    // 🔥 System flash transition
    gsap.to("body", {
      backgroundColor: "#ffffff",
      duration: 0.25,
      ease: "power2.out",
      onComplete: () => {
        router.push(link)
      },
    })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".service-row")

      // 🚀 Reveal animation
      gsap.from(rows, {
        y: 150,
        opacity: 0,
        scale: 0.95,
        duration: 1.4,
        ease: "power4.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      })

      // 🌊 Parallax effect
      rows.forEach((row) => {
        gsap.to(row, {
          y: -60,
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })

      // 🧲 Magnetic hover
      rows.forEach((row) => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = row.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          gsap.to(row, {
            x: (x - rect.width / 2) * 0.05,
            y: (y - rect.height / 2) * 0.05,
            duration: 0.4,
            ease: "power3.out",
          })
        }

        const handleMouseLeave = () => {
          gsap.to(row, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.4)",
          })
        }

        row.addEventListener("mousemove", handleMouseMove)
        row.addEventListener("mouseleave", handleMouseLeave)

        // cleanup per row
        return () => {
          row.removeEventListener("mousemove", handleMouseMove)
          row.removeEventListener("mouseleave", handleMouseLeave)
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-40 overflow-hidden relative"
      id="services"
    >
      {/* 🔥 Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <p className="text-white/20 mb-16 text-lg tracking-widest uppercase">
          Our expertise
        </p>

        <div className="border border-white/10 backdrop-blur-sm">
          {services.map((service, i) => (
            <div
              key={i}
              onClick={() => handleNavigate(service.link)}
              className="group relative block border-b border-white/10 last:border-none overflow-hidden service-row cursor-pointer"
            >
              {/* 💡 Label */}
              <span className="absolute top-6 left-10 text-xs text-white/30 tracking-widest uppercase group-hover:text-black/60 transition">
                Enter Program
              </span>

              {/* 🔥 Hover gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-neutral-200 to-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
              </div>

              {/* Glow line */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-white/40 group-hover:w-full transition-all duration-700" />

              <div className="relative z-10 flex items-center justify-between px-10 py-20 transition-all duration-500 group-hover:scale-[1.03]">
                <h3 className="text-4xl md:text-5xl font-semibold tracking-tight transition-all duration-500 group-hover:text-black">
                  {service.title}
                </h3>

                <div className="flex items-center gap-10">
                  <p className="hidden md:block max-w-sm text-white/50 group-hover:text-black/70 transition-all duration-500 text-lg">
                    {service.desc}
                  </p>

                  <ArrowRight
                    size={38}
                    className="transition-all duration-500 group-hover:translate-x-6 group-hover:rotate-12 group-hover:text-black"
                  />
                </div>
              </div>

              {/* 💎 Noise texture */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/noise.png')]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}