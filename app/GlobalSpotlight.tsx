"use client"

import { useEffect } from "react"

export default function GlobalSpotlight() {
  useEffect(() => {
    const root = document.getElementById("global-spotlight")
    if (!root) return

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100

      root.style.setProperty("--mx", `${x}%`)
      root.style.setProperty("--my", `${y}%`)
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return null
}
