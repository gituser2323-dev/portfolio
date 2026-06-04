"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import gsap from "gsap"

const team = [
  {
    name: "Sithara",
    role: "Senior HR Manager",
    quote:
      "We bridge the gap between academic knowledge and corporate expectations.",
    img: "team/sitthara.jpeg",
  },
  {
    name: "Shrushti",
    role: "Senior Accountant",
    quote:
      "Strong financial structure ensures long-term growth and sustainability.",
    img: "team/20.jpg",
  },
  {
    name: "Rutvij",
    role: "Frontend Mentor",
    quote:
      "Clean code and strong fundamentals create future-ready developers.",
    img: "team/rutvij.jpeg",
  },
  {
    name: "Ashwin",
    role: "Data Science & AI Mentor",
    quote:
      "Intelligence begins with asking the right questions from your data.",
    img: "team/ashwin.jpeg",
  },
  {
    name: "Pratik",
    role: "Full Stack & AI Mentor ( SDE ) ",
    quote:
      "Industry-Ready Software Development mindset transforms ideas into scalable solutions.",
    img: "team/pratik.jpeg",
  },
  {
    name: "Chetana",
    role: "Python & Data Analyst Mentor",
    quote:
      "Data-driven thinking unlocks smarter business decisions.",
    img: "team/chetana.jpeg",
  },
  // {
  //   name: "Sakshi",
  //   role: "Senior Career Counsellor",
  //   quote:
  //     "Right guidance at the right time changes career trajectories.",
  //   img: "team/19.jpeg",
  // },
  {
    name: "Gaurav",
    role: "Senior Graphic Designer",
    quote:
      "Design is not decoration — it’s communication with clarity.",
    img: "team/18.jpg",
  },
  {
    name: "Shrawani",
    role: "Senior HR Executive",
    quote:
      "A supportive environment builds confident Industry-Ready Professionals.",
    img: "team/shrawani.jpeg",
  },
  // {
  //   name: "Shruti",
  //   role: "Business Development Executive",
  //   quote:
  //     "Building meaningful partnerships drives organizational growth.",
  //   img: "team/shruti.jpeg",
  // },
  {
    name: "Siddhi",
    role: "Placement Officer",
    quote:
      "Our focus is turning skills into successful placements.",
    img: "team/siddhi.jpeg",
  },
  {
    name: "Vaishnavi",
    role: "Placement Officer",
    quote:
      "Every student deserves clarity, direction, and opportunity.",
    img: "team/15.png",
  },
  {
    name: "Harlin",
    role: "Placement Officer",
    quote:
      "We prepare students not just for interviews, but for careers.",
    img: "team/12.png",
  },
  // {
  //   name: "Shraddha",
  //   role: "Senior Counsellor",
  //   quote:
  //     "Understanding individual goals helps us guide them effectively.",
  //   img: "team/10.png",
  // },
  // {
  //   name: "Bhumika",
  //   role: "Business Development Executive",
  //   quote:
  //     "Strategic outreach creates impactful growth opportunities.",
  //   img: "team/11.png",
  // },
  // {
  //   name: "Nikita",
  //   role: "Business Development Executive",
  //   quote:
  //     "Strong relationships form the backbone of sustainable success.",
  //   img: "team/nikita.jpeg",
  // },
  // {
  //   name: "Nikita",
  //   role: "Business Development Executive",
  //   quote:
  //     "Consistent communication builds trust and long-term value.",
  //   img: "team/16.png",
  // },
  // {
  //   name: "Sawani",
  //   role: "Business Development Executive",
  //   quote:
  //     "Growth begins with initiative and disciplined execution.",
  //   img: "team/10.png",
  // },
]

export default function TeamCollageInsane() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const cards = document.querySelectorAll(".glass-card")

    cards.forEach(card => {
      const sweep = card.querySelector(".glass-sweep")

      card.addEventListener("mouseenter", () => {
        gsap.fromTo(
          sweep,
          { x: "-120%", opacity: 0 },
          { x: "120%", opacity: 1, duration: 0.9, ease: "power2.out" }
        )
      })
    })
  }, [isMobile])

  return (
    <section className="relative bg-black text-white pb-14 overflow-hidden">

      {/* Glow */}
      <div
        className="absolute -top-10 md:-top-20 left-1/2 -translate-x-1/2 
        w-[450px] sm:w-[700px] md:w-[1000px] 
        h-[250px] sm:h-[350px] md:h-[500px] 
        bg-red-600/10 blur-[120px] md:blur-[200px]"
      />

      {/* Background Typography */}
      <div
        className="absolute inset-0 flex flex-col items-center 
        justify-start pt- md:pt-10 
        pointer-events-none select-none"
      >
        <h2 className="text-[24vw] sm:text-[18vw] font-black text-white/8 md:text-white/10 leading-none text-center">
          MEET
        </h2>

        <h2 className="text-[24vw] sm:text-[18vw] font-black text-white/8 md:text-white/10 leading-none text-center">
          OUR TEAM
        </h2>
      </div>

      {/* Cards Container */}
      <div
        className="relative z-10 max-w-7xl mx-auto 
        px-5 sm:px-8 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-10 sm:gap-14 md:gap-20 
        mt-80 sm:mt-32 md:mt-36"
      >
        {team.map((member, i) => {
          const rotation =
            i % 2 === 0 ? "md:rotate-[-4deg]" : "md:rotate-[3deg]"

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`${rotation} hover:md:rotate-0 transition flex justify-center`}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1200}
                className="glass-card group relative 
                  w-full max-w-sm 
                  bg-white/[0.04] backdrop-blur-2xl 
                  border border-white/15  
                  rounded-2xl overflow-hidden 
                  shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
              >
                {/* Sweep Effect */}
                <div className="glass-sweep pointer-events-none absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/40 to-transparent blur-xl opacity-0" />

                {/* IMAGE AREA ✅ FIXED */}
                <div className="relative h-[320px] sm:h-[300px] md:h-[340px] overflow-hidden bg-black">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="
                      w-full h-full
                      object-cover
                      object-[center_top]
                      group-hover:scale-110
                      transition duration-700
                    "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 md:p-8 text-center md:text-left">
                  <h3 className="text-base sm:text-lg font-semibold">
                    {member.name}
                  </h3>

                  <p className="text-red-500 text-xs sm:text-sm mt-1">
                    {member.role}
                  </p>

                  <p className="text-white/50 text-xs sm:text-sm mt-3 sm:mt-4 italic leading-relaxed">
                    "{member.quote}"
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-red-600/10 to-transparent blur-2xl" />
              </Tilt>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}