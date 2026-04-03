"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function PocketSection() {
  const triggerRef = useRef<HTMLDivElement | null>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])

  const setItemRef = (el: HTMLDivElement | null, index: number) => {
    if (!el) return
    itemsRef.current[index] = el
  }

  useLayoutEffect(() => {
    if (!triggerRef.current) return

    console.log("Trigger:", triggerRef.current)
    console.log("Items:", itemsRef.current)

    const ctx = gsap.context(() => {

      gsap.fromTo(
        itemsRef.current,
        {
          y: 200,
          opacity: 0,
        },
        {
          y: -150,
          opacity: 1,
          stagger: 0.15,
          scrollTrigger: {
            trigger: triggerRef.current,

            // 🔥 FORCE correct behavior
            start: "top 95%",
            end: "bottom 20%",

            scrub: true,
            markers: true,
          },
        }
      )

      // 🔥 FORCE recalculation
      ScrollTrigger.refresh()

    }, triggerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative h-[1200px] bg-[#f3f3f3] flex items-end justify-center">

      {/* 🔥 THIS is the actual trigger */}
      <div
        ref={triggerRef}
        className="relative w-[1100px] h-[360px]"
      >

        <div className="absolute inset-0 bg-[#d8c7a8] rounded-t-[24px] overflow-hidden">

          <div className="absolute bottom-0 w-full flex justify-center gap-10 pb-8">

            {[
              "/img17.png",
              "/img18.png",
              "/img19.png",
              "/img17.png",
              "/img18.png",
            ].map((src, i) => (
              <div key={i} ref={(el) => setItemRef(el, i)}>
                <img src={src} className="w-[160px]" />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}