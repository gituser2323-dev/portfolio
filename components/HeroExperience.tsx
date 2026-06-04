"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { motion } from "framer-motion"
import { FaGoogle } from "react-icons/fa"
import { Star } from "lucide-react"
import DottedBackground from "./DottedBackground"

export default function HeroExperience() {

  const heroRef = useRef<HTMLDivElement>(null)

  /* ================= GSAP ENTRY ================= */
  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })

      gsap.from(".hero-sub", {
        y: 25,
        opacity: 0,
        delay: 0.2,
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  /* ================= DATA ================= */

  const techStack = [
    "Data Analytics",
    "Data Science",
    "Cloud Devops",
    "Java Full Stack",
    "MERN Stack + AI",
    "Python Stack",



  ]

  const logos = Array.from(
    { length: 20 },
    (_, i) => `/logos/${i + 1}.png`
  )

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col"
    >
      <DottedBackground />

      {/* ================= CENTER CONTENT ================= */}
      <div className="
        relative z-10 flex-1 flex flex-col
        items-center justify-center
        text-center
        px-4 sm:px-6
      ">

        <div className="max-w-5xl w-full space-y-5 sm:space-y-6">

          {/* TRUST BADGE */}
          <div className="
            mx-auto w-fit
            px-3 py-1.5 sm:py-2
            rounded-full
            bg-white/5 border border-red-900/40 backdrop-blur
            flex items-center gap-2 sm:gap-3
          ">
            <FaGoogle className="text-red-500 text-sm sm:text-base" />

            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className="sm:w-[14px] sm:h-[14px]"
                  fill="currentColor"
                />
              ))}
            </div>

            <span className="text-gray-300 text-xs sm:text-sm font-bold">
              Speedup Infotech
              <span className="text-green-500 px-1">•</span>
              Pune
            </span>
          </div>

          {/* HEADLINE */}
          <h1 className="
            hero-title
            text-2xl sm:text-3xl md:text-4xl lg:text-6xl
            font-extrabold
            leading-[1.15] lg:leading-tight
          ">
            We Are{" "}
            <span className="text-red-500 relative">
              Speedup Infotech
              <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-2 sm:h-3 bg-red-600/30 blur-xl" />
            </span>
            <br />
            Shaping Industry-Ready Professionals.
          </h1>

          {/* SUBTEXT */}
          <p className="
            hero-sub
            text-gray-400
            text-sm sm:text-base md:text-md
            max-w-2xl mx-auto
            leading-relaxed
          ">
            Based in Pune, Speedup Infotech is a modern technology training
            and mentorship company focused on practical learning, real-world
            projects, and industry workflows — helping learners transform
            into confident software engineering
          </p>

          {/* TECH STACK */}
          <div className="
            flex justify-center flex-wrap
            gap-2 sm:gap-3
             mx-auto
          ">
            {techStack.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ y: -4 }}
                className="
                  px-3 py-1.5 sm:px-4 sm:py-2
                  text-xs sm:text-sm
                  bg-black border border-red-900/60
                  rounded-full font-semibold
                  hover:border-red-500 transition
                "
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* STATS CARD */}
          <div className="relative group mt-4 sm:mt-6">

            {/* Glow */}
            <div className="
              absolute -inset-[1px] rounded-3xl
              bg-gradient-to-r from-red-600/40 via-transparent to-red-600/40
              opacity-60 blur-xl
              group-hover:opacity-100 transition duration-700
            " />

            {/* Glass Panel */}
            <div className="
              relative rounded-3xl
              bg-black/60 backdrop-blur-2xl
              border border-white/10
              p-3 sm:p-3 md:p-7
              overflow-hidden
            ">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center">

                {[
                  { value: "3500+", label: "Learners Enrolled" },
                  { value: "4–6 Months", label: "Industry Curriculum" },
                  { value: "75%", label: "Placement Support" },
                ].map((item, i) => (
                  <div key={i}>

                    <h3 className="
                      text-1xl sm:text-1xl md:text-1xl
                      font-bold tracking-tight leading-none
                    ">
                      {item.value}
                    </h3>

                    <p className="
                      mt-2 sm:mt-3
                      text-gray-400
                      text-xs sm:text-base
                      font-medium
                      tracking-wide
                    ">
                      {item.label}
                    </p>

                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>


        {/* ================= LOGO MARQUEE ================= */}
        <div className="relative w-full overflow-hidden mt-8 sm:py-3 bg-[#0b0b0b]">

          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 sm:w-40 z-10 bg-gradient-to-r from-[#0b0b0b] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 sm:w-40 z-10 bg-gradient-to-l from-[#0b0b0b] to-transparent" />

          <div className="flex w-max animate-marquee items-center gap-14 sm:gap-24">

            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="company"
                className="
                h-7 sm:h-10
                opacity-50
                hover:opacity-100 hover:grayscale-0 hover:scale-110
                transition-all duration-500
              "
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            ))}

          </div>
        </div>
      </div>

    </section>
  )
}