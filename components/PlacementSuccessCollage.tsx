"use client"

import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

type Placement = {
  id: number
  name: string
  role: string
  img: string
}

function shuffleArray(array: Placement[]) {
  return [...array].sort(() => Math.random() - 0.5)
}

export default function PlacementWallPremium() {

  const ITEMS_PER_BATCH = 15

  const [placementsData, setPlacementsData] = useState<Placement[]>([])
  const [visiblePlacements, setVisiblePlacements] = useState<Placement[]>([])
  const [page, setPage] = useState(0)

  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  /* ================= LOAD DATA ================= */

  useEffect(() => {
    async function loadPlacements() {
      const res = await fetch("/api/placements")
      const data = await res.json()

      setPlacementsData(data)
      setVisiblePlacements(
        shuffleArray(data).slice(0, ITEMS_PER_BATCH)
      )
    }

    loadPlacements()
  }, [])

  /* ================= INFINITE REVEAL ================= */

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage(p => p + 1)
        }
      },
      {
        rootMargin: "200px",
      }
    )

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current)
    }

    return () => observer.disconnect()

  }, [])

  /* ================= ADD MORE ITEMS ================= */

  useEffect(() => {

    if (!placementsData.length) return

    const more = shuffleArray(placementsData).slice(
      0,
      (page + 1) * ITEMS_PER_BATCH
    )

    setVisiblePlacements(prev => {
      if (more.length <= prev.length) return prev
      return more
    })

  }, [page, placementsData])

  /* ================= UI ================= */

  return (
    <section className="relative bg-black text-white py-10 md:py-24 overflow-hidden border-t border-white/5">

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-red-600/10 blur-[220px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* HEADLINE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[clamp(34px,5vw,90px)] font-medium leading-[1.1] tracking-tight max-w-4xl"
        >
          <span className="text-red-500">450+</span> students placed
          in real Enginnering roles.
        </motion.h2>

        {/* SOCIAL PROOF */}
        <div className="mt-6 flex flex-wrap gap-4 text-xs md:text-sm text-white/50">
          <span>✓ Placed across 27+ companies</span>
          <span>✓ Avg package ₹5.2 LPA</span>
          <span>✓ Real hiring outcomes</span>
        </div>

        <p className="text-white/40 mt-4 max-w-xl text-sm">
          New success stories are continuously added as students transition into
          real engineering careers.
        </p>

        {/* MASONRY GRID */}
        <div className="mt-16 md:mt-28 columns-2 sm:columns-2 md:columns-3 lg:columns-5 gap-4 md:gap-8">

          {visiblePlacements.map((p, i) => {

            const size =
              i % 7 === 0 ? "h-[240px] md:h-[280px]" :
                i % 5 === 0 ? "h-[200px] md:h-[220px]" :
                  "h-[160px] md:h-[180px]"

            const rotate =
              i % 2 === 0 ? "md:rotate-[-2deg]" : "md:rotate-[2deg]"

            return (
              <motion.div
                key={`${p.id}-${i}`}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 0.5,
                  y: {
                    duration: 6 + (i % 5),
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className={`mb-4 md:mb-8 break-inside-avoid ${rotate}`}
              >

                <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-2xl border border-white/15 hover:border-red-500/40 transition-all duration-500">

                  <div className={`relative ${size} overflow-hidden`}>
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      loading="lazy"
                      decoding="async"
                      priority={false}
                      quality={70}
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>

                  <div className="p-3 md:p-4 text-center">
                    <p className="text-xs md:text-sm font-semibold">
                      {p.name}
                    </p>

                    <p className="text-red-500 text-[10px] md:text-xs mt-1">
                      {p.role}
                    </p>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-600/10 to-transparent blur-xl" />

                </div>
              </motion.div>
            )
          })}
        </div>

        {/* LOAD TRIGGER */}
        <div
          ref={loadMoreRef}
          className="text-center mt-20 text-white/30 text-xs tracking-widest uppercase"
        >
          Loading more success stories...
        </div>

      </div>
    </section>
  )
}