"use client"

import { useEffect } from "react"

export default function AnimationGuard() {
  useEffect(() => {
    return () => {
      try {
        const gsap = require("gsap")
        const ScrollTrigger = require("gsap/ScrollTrigger")

        if (ScrollTrigger?.ScrollTrigger?.getAll) {
          ScrollTrigger.ScrollTrigger.getAll().forEach((t: any) => t.kill())
        }

        if (gsap?.globalTimeline) {
          gsap.globalTimeline.clear()
        }
      } catch (e) {
        // silent
      }
    }
  }, [])

  return null
}
