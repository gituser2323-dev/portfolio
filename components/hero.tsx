"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Link from "next/link"
import { Calendar, ArrowUpRight } from "lucide-react"

function StarField({ active }: { active: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!active) return
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    let raf: number

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const W = () => canvas.width
    const H = () => canvas.height

    const pts = Array.from({ length: 130 }, () => ({
      x: (Math.random() - 0.5) * 2400,
      y: (Math.random() - 0.5) * 2400,
      z: Math.random() * 1400,
      vz: Math.random() * 0.55 + 0.18,
    }))

    const draw = () => {
      const w = W(); const h = H()
      ctx.clearRect(0, 0, w, h)
      const fov = 520
      for (const p of pts) {
        p.z -= p.vz
        if (p.z < 1) {
          p.z = 1400
          p.x = (Math.random() - 0.5) * 2400
          p.y = (Math.random() - 0.5) * 2400
        }
        const s = fov / (fov + p.z)
        const px = p.x * s + w / 2
        const py = p.y * s + h / 2
        if (px < -4 || px > w + 4 || py < -4 || py > h + 4) continue
        const r = Math.max(0.25, 2.2 * s)
        const a = Math.min(1, s * 1.3) * 0.68
        ctx.beginPath()
        ctx.arc(px, py, r, 0, 6.283)
        ctx.fillStyle = `rgba(255,255,255,${a})`
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [active])

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  )
}

const CHIPS = [
  { label: "Python", x: "9%", y: "22%" },
  { label: "Next.js", x: "78%", y: "17%" },
  { label: "AI / LLMs", x: "83%", y: "63%" },
  { label: "TypeScript", x: "5%", y: "70%" },
  { label: "GenAI", x: "16%", y: "80%" },
  { label: "Full Stack", x: "68%", y: "78%" },
]

export default function Hero() {
  const [bootDone, setBootDone] = useState(false)
  const [typed, setTyped] = useState("")
  const boot = `> Detecting industry shift...\n> AI systems redefining workflows...\n> Updating skill requirements...\n> 2027 Mode Activated\n> Pratik Sabale is live`

  useEffect(() => {
    let i = 0
    const tick = () => {
      setTyped(boot.slice(0, i++))
      if (i <= boot.length) setTimeout(tick, i < 30 ? 42 : 18)
      else setTimeout(() => setBootDone(true), 500)
    }
    tick()
  }, [])

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const sx = useSpring(mx, { stiffness: 52, damping: 16 })
  const sy = useSpring(my, { stiffness: 52, damping: 16 })
  const rotX = useTransform(sy, [0, 1], [10, -10])
  const rotY = useTransform(sx, [0, 1], [-13, 13])

  const onMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }, [mx, my])

  const onLeave = useCallback(() => { mx.set(0.5); my.set(0.5) }, [mx, my])

  const layer = (z: number, delay: number, children: React.ReactNode) => (
    <div
      style={{
        transform: `translateZ(${z}px) translateY(${bootDone ? 0 : 36}px)`,
        opacity: bootDone ? 1 : 0,
        transition: `transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s, opacity 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )

  return (
    <>
      {!bootDone && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center px-4">
          <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
            {typed}<span className="animate-pulse">|</span>
          </pre>
        </div>
      )}

      <section
        className="relative min-h-screen bg-black"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          opacity: bootDone ? 1 : 0,
          transition: "opacity 0.7s ease",
          perspective: "1100px",
          overflow: "clip",
        }}
      >
        {/* Starfield */}
        <StarField active={bootDone} />

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* Red atmosphere — bottom left */}

        {/* White orb — top right */}
        <motion.div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 560, height: 560,
            top: "-13%", right: "-7%",
            background: "radial-gradient(circle, rgba(255,255,255,0.065) 0%, transparent 68%)",
            filter: "blur(90px)",
          }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.78, 0.4] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />

        {/* Subtle center glow */}
        <motion.div
          className="absolute pointer-events-none rounded-full"
          style={{
            width: 800, height: 400,
            top: "20%", left: "50%",
            transform: "translateX(-50%)",
            background: "radial-gradient(ellipse, rgba(255,80,80,0.045) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Floating tech chips */}
        {CHIPS.map((c, i) => (
          <motion.div
            key={c.label}
            className="absolute hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.09] bg-black/75 backdrop-blur-sm text-white/45 text-[11px] font-mono pointer-events-none select-none"
            style={{ left: c.x, top: c.y }}
            initial={{ opacity: 0, y: 14 }}
            animate={bootDone ? {
              opacity: [0.42, 0.82, 0.42],
              y: [0, -10, 0],
            } : { opacity: 0, y: 14 }}
            transition={{
              duration: 3.6 + i * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5 + i * 0.18,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/65" />
            {c.label}
          </motion.div>
        ))}

        {/* 3D tilt stage */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            style={{
              rotateX: rotX,
              rotateY: rotY,
              transformStyle: "preserve-3d",
            }}
            className="w-full max-w-5xl mx-auto text-center"
          >
            {/* z+50 — Available badge */}
            {layer(50, 0.1,
              <div className="mb-8 mt-10">
                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/14 bg-white/[0.045] backdrop-blur-md text-sm text-white/80">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-40" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Available for mentorship &amp; speaking
                </div>
              </div>
            )}

            {/* z+85 — Name (closest layer) */}
            {layer(85, 0.28,
              <div className="mb-5">
                <h1
                  className="text-white font-black tracking-tight leading-none select-none"
                  style={{
                    fontSize: "clamp(43px, 10.5vw, 100px)",
                    textShadow: [
                      "2px 3px 0px rgba(160,0,0,0.28)",
                      "5px 7px 0px rgba(120,0,0,0.15)",
                      "9px 12px 0px rgba(80,0,0,0.08)",
                      "0 0 80px rgba(255,60,60,0.06)",
                    ].join(", "),
                  }}
                >
                  Pratik Sabale
                </h1>
              </div>
            )}

            {/* z+38 — Tagline */}
            {layer(38, 0.46,
              <div className="max-w-2xl mx-auto mb-10">
                <p className="text-white/90 font-medium text-base sm:text-lg md:text-xl lg:text-[22px] leading-tight">
                  Most developers stay stuck in tutorials.
                  <span className="block mt-1 text-white/62"> I help them build real systems.</span>
                </p>
                
                <p className="text-white/48 text-sm sm:text-base mt-4 leading-relaxed">
                  <span className="text-white/78 font-semibold">End-to-end engineering</span>
                  {" — from "}
                  <span className="text-white/78 font-semibold">apps</span>
                  {" to "}
                  <span className="text-white/78 font-semibold">systems</span>
                  {" to "}
                  <span className="text-red-400 font-semibold">AI automation</span>.
                </p>
              </div>
            )}

            {/* z+62 — CTAs */}
            {layer(62, 0.64,
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
                <Link
                  href="https://wa.me/919763969449"
                  target="_blank"
                >
                  <button className="group relative w-full sm:w-auto overflow-hidden bg-red-600 hover:bg-red-500 px-8 py-3.5 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_55px_rgba(220,38,38,0.60)]">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Let&apos;s Talk
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>
                </Link>

                <Link
                  href="https://www.speedupinfotech.com/placements"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
    inline-flex
    items-center
    justify-center
    w-full sm:w-auto
    border border-white/20
    hover:border-white/45
    px-8 py-3.5
    rounded-xl
    text-white/80
    hover:text-white
    transition-all
    duration-300
    hover:bg-white/[0.05]
    hover:shadow-[0_0_32px_rgba(255,255,255,0.08)]
  "
                >
                  View Placements →
                </Link>
              </div>
            )}

            {/* z+26 — Social (deepest layer) */}
            {layer(26, 0.82,
              <div className="flex items-center justify-center gap-3">
                <Link
                  href="/book"
                  className="p-3 rounded-xl border border-red-500/38 bg-red-500/[0.09] hover:bg-red-500/22 transition-all duration-200 hover:scale-110 hover:shadow-[0_0_22px_rgba(220,38,38,0.38)]"
                >
                  <Calendar className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="p-3 rounded-xl border border-white/14 hover:bg-white/[0.09] hover:border-white/28 transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            )}
          </motion.div>
        </div>

        {/* Scan line sweep */}
        <motion.div
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{
            top: "38%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), rgba(220,38,38,0.18), rgba(255,255,255,0.12), transparent)",
          }}
          animate={{ scaleX: [0, 1, 0], opacity: [0, 0.7, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/85 to-transparent pointer-events-none" />
      </section>
      
    </>
  )
}
