"use client"
import { useEffect, useState } from "react"

export default function ReadingProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const height =
        document.body.scrollHeight - window.innerHeight
      const progress = (scrollTop / height) * 100
      setWidth(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 h-[3px] w-full z-50">
      <div
        className="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-150"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}
