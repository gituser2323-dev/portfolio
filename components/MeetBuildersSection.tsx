"use client"

import { useEffect, useRef } from "react"
import { gsap, initGSAP } from "@/lib/gsap"
import Image from "next/image";


export default function MeetBuildersSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    initGSAP()

    const ctx = gsap.context(() => {

      gsap.fromTo(
        ".builder-heading",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      )

      gsap.fromTo(
        ".builder-card",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      )

    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  const team = [
   
    {
      name: "Ashwin",
      role: "Data Science & AI Mentor",
      img: "team/ashwin.jpeg",
    },
     {
      name: "Pratik",
      role: "SDE-2",
      img:"team/pratik.jpeg",
    },
    {
      name: "Rutvij",
      role: "Frontend Mentor",
      img: "team/rutvij.jpeg",
    },
    {
      name: "Chetana",
      role: "Python and Data Analyst Mentor",
      img: "team/Chetana.jpeg",
    },
  ]

 return (
  <section
    ref={sectionRef}
    className="relative py-14 md:py-20 bg-black text-white overflow-hidden overflow-x-hidden"
  >
    {/* Background Word */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span className="text-[70px] sm:text-[100px] md:text-[220px] font-bold text-white/5 tracking-tight select-none whitespace-nowrap">
        TEAM
      </span>
    </div>

    {/* Glow */}
    <div className="absolute -bottom-32 md:-bottom-40 -left-32 md:-left-40 
                    w-[300px] sm:w-[400px] md:w-[500px] 
                    h-[300px] sm:h-[400px] md:h-[500px] 
                    bg-red-600/20 blur-[120px] md:blur-[180px] rounded-full" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

      {/* LEFT SIDE */}
      <div className="builder-heading text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Meet <br />
          The <span className="text-red-500">Builders</span>
        </h2>

        <p className="mt-5 md:mt-6 text-gray-400 text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
          Designers,Professionals, mentors, and operators building the
          infrastructure powering modern education.
        </p>
      </div>

      {/* RIGHT SIDE GRID */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-0">
        {team.map((member, index) => (
          <div
            key={index}
            className="builder-card group relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl
                       shadow-[0_30px_100px_rgba(0,0,0,0.7)]
                       transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]"
          >
            <div className="relative w-full h-[180px] sm:h-[220px] md:h-[360px] bg-gray-800">

              <img
                src={member.img}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover
                           grayscale group-hover:grayscale-0
                           transition duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none"
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs sm:text-sm">
                Image
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>

            <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5">
              <h3 className="text-sm sm:text-base md:text-xl font-semibold">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
)

}
