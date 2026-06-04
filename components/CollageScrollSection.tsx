"use client"

import { useEffect, useRef } from "react"
import { gsap, initGSAP } from "@/lib/gsap"
import Image from "next/image"

const collagePanels = [
  {
    images: ["scrolling/3.avif", "scrolling/7.avif", "scrolling/6.avif"],
  },
  {
    images: ["scrolling/2.avif", "scrolling/14.avif", "scrolling/9.avif"],
  },
  {
    images: ["scrolling/4.avif", "scrolling/12.avif", "scrolling/11.avif"],
  },
  {
    images: ["scrolling/1.avif", "scrolling/19.avif", "scrolling/22.avif"],
  },
]

export default function HorizontalCollageShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return

    initGSAP()

    const ctx = gsap.context(() => {

      const panels = gsap.utils.toArray<HTMLElement>(".collage-panel")

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + trackRef.current!.offsetWidth,
          scrub: 0.7,
          pin: true,
          snap: 1 / (panels.length - 1),
        },
      })

    }, sectionRef)

    return () => ctx.revert()

  }, [])

  return (
    <section ref={sectionRef} className="relative bg-black overflow-hidden">

      <div
        ref={trackRef}
        className="flex flex-row h-screen"
      >
        {collagePanels.map((panel, index) => (
          <CollagePanel key={index} images={panel.images} />
        ))}
      </div>

    </section>
  )
}

function CollagePanel({ images }: { images: string[] }) {
  return (
    <div className="collage-panel w-screen h-screen shrink-0 flex items-center justify-center px-6 lg:p-20">

      {/* MOBILE LAYOUT */}
      <div className="flex flex-col gap-6 w-full lg:hidden">

        <div className="relative rounded-2xl overflow-hidden shadow-xl h-[220px]">
          <Image src={`/${images[0]}`} alt="" fill sizes="100vw" className="object-cover"/>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-xl h-[180px]">
          <Image src={`/${images[1]}`} alt="" fill sizes="100vw" className="object-cover"/>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-xl h-[180px]">
          <Image src={`/${images[2]}`} alt="" fill sizes="100vw" className="object-cover"/>
        </div>

      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:grid grid-cols-2 grid-rows-2 gap-8 w-full h-full">

        <div className="relative col-span-1 row-span-2 rounded-3xl overflow-hidden shadow-2xl">
          <Image src={`/${images[0]}`} alt="" fill sizes="50vw" className="object-cover"/>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <Image src={`/${images[1]}`} alt="" fill sizes="25vw" className="object-cover"/>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <Image src={`/${images[2]}`} alt="" fill sizes="25vw" className="object-cover"/>
        </div>

      </div>

    </div>
  )
}