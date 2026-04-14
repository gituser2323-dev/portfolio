"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import gsap from "gsap"

export default function ThankYouPage() {
  const router = useRouter()

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [charging, setCharging] = useState(false)
  const [unlocked, setUnlocked] = useState(false)

  // 🎉 PARTICLES BACKGROUND
  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: any[] = []

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 2,
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255,255,255,0.5)"
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  // 🎬 ENTRY
  useEffect(() => {
    gsap.from(".reveal", {
      y: 60,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
    })
  }, [])

  // 🔊 AI VOICE (ISHA)
  const speak = () => {
    const msg = new SpeechSynthesisUtterance(
      "Welcome. You just unlocked your next level."
    )
    msg.rate = 0.9
    msg.pitch = 1.1
    speechSynthesis.speak(msg)
  }

  // ⚡ HOLD TO CHARGE
  const startCharge = () => {
    setCharging(true)

    gsap.to(".core", {
      scale: 1.4,
      duration: 0.5,
    })

    gsap.to(glowRef.current, {
      scale: 2,
      duration: 0.8,
    })
  }

  const releaseCharge = () => {
    if (!charging || unlocked) return

    setCharging(false)
    setUnlocked(true)

    speak()

    // 💥 EXPLOSION
    gsap.to(".core", {
      scale: 3,
      opacity: 0,
      duration: 0.6,
      ease: "power4.out",
    })

    // ⚡ FLASH
    const flash = document.createElement("div")
    flash.className =
      "fixed inset-0 bg-white z-50 pointer-events-none"
    document.body.appendChild(flash)

    gsap.fromTo(
      flash,
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.8,
        onComplete: () => flash.remove(),
      }
    )

    // 🌊 SHOCKWAVE
    const wave = document.createElement("div")
    wave.className =
      "fixed left-1/2 top-1/2 w-10 h-10 border border-white rounded-full z-40"
    document.body.appendChild(wave)

    gsap.to(wave, {
      scale: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => wave.remove(),
    })

    // 🎊 CONFETTI BURST (simple)
    for (let i = 0; i < 60; i++) {
      const dot = document.createElement("div")
      dot.className =
        "fixed w-2 h-2 bg-white rounded-full z-40"
      document.body.appendChild(dot)

      gsap.fromTo(
        dot,
        {
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        },
        {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: 0,
          duration: 1.2,
          onComplete: () => dot.remove(),
        }
      )
    }

    // 🚀 EXIT
    gsap.to(wrapperRef.current, {
      y: -40,
      opacity: 0,
      delay: 2,
      duration: 1,
      onComplete: () => router.push("/"),
    })
  }

  return (
    <main className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center text-white">

      <canvas ref={canvasRef} className="absolute inset-0" />

      <div
        ref={glowRef}
        className="absolute w-[300px] h-[300px] bg-red-500/20 blur-[150px] rounded-full"
      />

      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div
        ref={wrapperRef}
        className="relative z-10 text-center max-w-2xl px-6"
      >
        <p className="reveal text-xs tracking-[0.5em] text-white/50 mb-6">
          SYSTEM UPDATED
        </p>

        <h1 className="reveal text-5xl md:text-6xl font-semibold mb-6">
          You’ve unlocked your next level.
        </h1>

        <p className="reveal text-lg text-white/60 mb-10">
          Hold. Feel it. Then release.
        </p>

        {/* 🎮 CORE */}
        <div
          onMouseDown={startCharge}
          onMouseUp={releaseCharge}
          onTouchStart={startCharge}
          onTouchEnd={releaseCharge}
          className="core reveal mx-auto w-24 h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center cursor-pointer"
        >
          <span className="text-xs tracking-widest">
            HOLD
          </span>
        </div>

        <p className="reveal mt-6 text-xs text-white/40">
          Power builds in your hands ⚡
        </p>
      </div>
    </main>
  )
}