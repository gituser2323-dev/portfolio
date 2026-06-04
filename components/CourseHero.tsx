"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function CoursesHero() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".line", {
        y: 90,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative  bg-black text-white overflow-hidden"
    >
      <div className="pt-[22vh] md:pt-[30vh] px-6 md:px-24 lg:px-32">
        <div className="max-w-[1250px]">

          <h1
            className="
              text-[34px] sm:text-[40px] md:text-[60px] lg:text-[78px]
              font-light
              leading-[1.18] md:leading-[1.12]
              tracking-[-0.01em]
              text-white
            "
          >
            <span className="block line">
              At Speedup we train learners through immersive learning,
            </span>

            <span className="block line mt-4 sm:mt-4 md:mt-0">
              real-world systems, and
              <span className="text-red-500 font-medium">
                {" "}job-ready skills{" "}
              </span>
              built for today’s tech industry.
            </span>
          </h1>

        </div>
      </div>
    </section>
  )
}
