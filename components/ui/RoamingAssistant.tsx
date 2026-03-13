"use client"

import { useEffect, useRef, useState } from "react"

const SAFE_POSITIONS = [
  { bottom: "24px", right: "24px" },
  { bottom: "24px", left: "24px" },
  { top: "35%", right: "24px" },
  { top: "40%", left: "24px" },
]

export default function RoamingAssistant() {
  const [visible, setVisible] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  const hasReturned = useRef(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  /* appear after page load */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 5000)
    return () => clearTimeout(t)
  }, [])

  /* roam slowly */
  useEffect(() => {
    if (!visible) return
    const interval = setInterval(() => {
      setPosIndex((i) => (i + 1) % SAFE_POSITIONS.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [visible])

  /* hide on scroll, return once */
  useEffect(() => {
    const onScroll = () => {
      setVisible(false)

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)

      scrollTimeout.current = setTimeout(() => {
        if (!hasReturned.current) {
          setVisible(true)
          hasReturned.current = true
        }
      }, 3500)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <div
      className="roaming-assistant"
      style={SAFE_POSITIONS[posIndex]}
    >
      <img
        src="/image.png"
        alt="AI Assistant"
        draggable={false}
      />
    </div>
  )
}
