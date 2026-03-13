"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
} from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export function UltraCTA() {
  const primaryRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLSpanElement>(null)

  /* ================= SCROLL VELOCITY ================= */
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(velocity, {
    stiffness: 400,
    damping: 40,
  })

  const scaleY = useTransform(smoothVelocity, (v: number) =>
    Math.max(0.94, Math.min(1.06, 1 + v / 3000))
  )
  const scaleX = useTransform(smoothVelocity, (v: number) =>
    Math.max(0.94, Math.min(1.06, 1 - v / 4000))
  )

  /* ================= MAGNETIC HOVER ================= */
  useEffect(() => {
    const el = primaryRef.current
    if (!el) return

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - r.left - r.width / 2
      const y = e.clientY - r.top - r.height / 2

      gsap.to(el, {
        x: x * 0.18,
        y: y * 0.18,
        duration: 0.35,
        ease: "power3.out",
      })
    }

    const leave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      })
    }

    el.addEventListener("mousemove", move)
    el.addEventListener("mouseleave", leave)

    return () => {
      el.removeEventListener("mousemove", move)
      el.removeEventListener("mouseleave", leave)
    }
  }, [])

  /* ================= CLICK RIPPLE ================= */
  const createRipple = (e: React.MouseEvent) => {
    const ripple = document.createElement("span")
    ripple.className = "cta-ripple"

    const rect = e.currentTarget.getBoundingClientRect()
    ripple.style.left = `${e.clientX - rect.left}px`
    ripple.style.top = `${e.clientY - rect.top}px`

    e.currentTarget.appendChild(ripple)

    gsap.fromTo(
      ripple,
      { scale: 0, opacity: 0.6 },
      {
        scale: 6,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        onComplete: () => ripple.remove(),
      }
    )
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-10">

      {/* ================= PRIMARY CTA ================= */}
      <motion.div
        ref={primaryRef}
        style={{ scaleX, scaleY }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="relative"
      >
        <Button
          asChild
          size="lg"
          className="btn-premium btn-ultra px-8 h-12 overflow-hidden"
        >
          <Link
            href="https://wa.link/fb2owa"
            target="_blank"
            className="relative flex items-center gap-2"
            onClick={createRipple}
            onMouseEnter={() =>
              gsap.to(arrowRef.current, {
                rotate: -45,
                x: 4,
                opacity: 1,
                duration: 0.35,
                ease: "power3.out",
              })
            }
            onMouseLeave={() =>
              gsap.to(arrowRef.current, {
                rotate: 0,
                x: -6,
                opacity: 0,
                duration: 0.25,
                ease: "power3.in",
              })
            }
          >
            <span className="cta-text">Let&apos;s Talk</span>
            <span ref={arrowRef} className="cta-arrow-ultra">
              <ArrowRight size={18} />
            </span>
          </Link>
        </Button>
      </motion.div>

      {/* ================= SECONDARY CTA ================= */}
      <motion.div
        whileHover={{ scale: 1.03, y: -1 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
      >
        <Button
          asChild
          variant="outline"
          size="lg"
          className="btn-outline-premium px-8 h-12"
        >
          <Link href="#work">View Work</Link>
        </Button>
      </motion.div>

    </div>
  )
}
