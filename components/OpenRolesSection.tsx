"use client"

import { useEffect, useRef } from "react"
import { gsap, initGSAP } from "@/lib/gsap"
import Link from "next/link"

export default function OpenOpportunitiesPro() {
  const gridRef = useRef<HTMLDivElement>(null)

  const jobs = [
    {
      title: "Business Development Executive",
      slug: "business-development-executive",
      exp: "0–3 Years",
      skills: ["Sales", "Communication", "Lead Generation", "Client Handling"],
      type: "Full-Time",
      location: "Onsite",
    },

    {
      title: "Admission Counsellor",
      slug: "admission-counsellor",
      exp: "1–4 Years",
      skills: ["Counselling", "Communication", "CRM", "Sales"],
      type: "Full-Time",
      location: "Onsite",
    },
    {
      title: "Java Fullstack Trainer",
      slug: "java-fullstack-trainer",
      exp: "1–3 Years",
      skills: ["Java", "Spring Boot", "React", "Database"],
      type: "Full-Time",
      location: "Onsite",
    },
    {
      title: "Placement Coordinator",
      slug: "placement-coordinator",
      exp: "0–2 Years",
      skills: ["Coordination", "Communication", "HR Basics", "Scheduling"],
      type: "Full-Time",
      location: "Onsite",
    },
  ];

  useEffect(() => {
    initGSAP()

    const ctx = gsap.context(() => {
      gsap.set(".job-card", { opacity: 0, y: 60 })

      gsap.to(".job-card", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      })
    }, gridRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="openroles" className="relative py-10 md:py-20 bg-black text-white overflow-hidden overflow-x-hidden">

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 
                      w-[350px] sm:w-[600px] md:w-[800px] 
                      h-[350px] sm:h-[600px] md:h-[800px]
                      -translate-x-1/2 -translate-y-1/2
                      bg-red-600/10 blur-[120px] md:blur-[220px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] text-gray-500 uppercase">
            Careers & Opportunities
          </p>

          <h2 className="mt-4 md:mt-6 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Join the <span className="text-red-500">Team</span>
          </h2>

          <p className="mt-4 md:mt-6 text-sm sm:text-base text-gray-400 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
            We’re hiring Industry-Ready Professionals and educators building scalable
            career acceleration Tools & Technologies.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14"
        >
          {jobs.map((job, index) => (
            <div
              key={index}
              className="job-card group relative p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl
                         border border-white/10
                         bg-gradient-to-br from-white/5 to-black/40
                         backdrop-blur-2xl
                         transition-all duration-500
                         hover:-translate-y-3
                         hover:shadow-[0_60px_160px_rgba(239,68,68,0.25)]"
            >

              {/* MOBILE Badge (inline) */}
              <div className="md:hidden mb-4 inline-block px-3 py-1 text-[10px] sm:text-xs
                              bg-red-600/20 border border-red-500/40
                              rounded-full text-red-400">
                {job.exp}
              </div>

              {/* DESKTOP Badge (absolute) */}
              <div className="hidden md:block absolute top-8 right-8 px-4 py-1 text-xs
                              bg-red-600/20 border border-red-500/40
                              rounded-full text-red-400">
                {job.exp}
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug md:pr-28">
                {job.title}
              </h3>

              <div className="mt-4 md:mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-gray-500">
                <span>{job.type}</span>
                <span>{job.location}</span>
              </div>

              {/* Skills */}
              <div className="mt-6 md:mt-8 flex flex-wrap gap-2 sm:gap-3">
                {job.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs rounded-full
                               bg-white/10 border border-white/15  
                               text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link
                href={`/career/${job.slug}`}
                className="inline-flex items-center gap-2 mt-8 md:mt-10 px-5 py-2.5 
             text-xs sm:text-sm font-medium rounded-full
             bg-gradient-to-r from-red-500 to-pink-500 
             text-white shadow-md
             hover:shadow-lg hover:scale-[1.03]
             transition-all duration-300 ease-out
             group"
              >
                Apply Now
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
