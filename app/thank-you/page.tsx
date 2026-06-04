"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowUpRight, MessageCircle, Calendar,
  Zap, Users, BookOpen, Clock, Star, Share2, Copy, ChevronDown
} from "lucide-react"

// ─── Confetti ─────────────────────────────────────────────────────────────────
function Confetti({ fire }: { fire: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!fire) return
    const canvas = ref.current!
    const ctx = canvas.getContext("2d")!
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const pieces = Array.from({ length: 110 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 200,
      vx: (Math.random() - 0.5) * 3.5,
      vy: 2.5 + Math.random() * 3.5,
      r: 3 + Math.random() * 5,
      color: ["#ef4444", "#ffffff", "#f97316", "#a3a3a3", "#dc2626"][Math.floor(Math.random() * 5)],
      spin: (Math.random() - 0.5) * 0.18,
      angle: Math.random() * Math.PI * 2,
    }))

    let raf: number
    let tick = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of pieces) {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.045
        p.angle += p.spin
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.angle)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r)
        ctx.restore()
      }
      tick++
      if (tick < 160) raf = requestAnimationFrame(draw)
      else ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [fire])

  return <canvas ref={ref} className="fixed inset-0 pointer-events-none z-50" />
}

// ─── Step Card ─────────────────────────────────────────────────────────────────
function StepCard({
  num, icon, title, desc, cta, href, highlight, delay
}: {
  num: string; icon: React.ReactNode; title: string; desc: string
  cta?: string; href?: string; highlight?: boolean; delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl border p-6 flex flex-col gap-4 transition-all duration-300 ${
        highlight
          ? "border-red-500/40 bg-red-500/[0.07] hover:border-red-500/70 hover:bg-red-500/[0.12]"
          : "border-white/[0.09] bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black ${
          highlight ? "bg-red-600 text-white" : "bg-white/[0.08] text-white/60"
        }`}>
          {num}
        </div>
        <div className={`p-2 rounded-lg ${highlight ? "bg-red-500/15 text-red-400" : "bg-white/[0.06] text-white/50"}`}>
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-white font-semibold text-base mb-1">{title}</h3>
        <p className="text-white/52 text-sm leading-relaxed">{desc}</p>
      </div>
      {cta && href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 w-fit ${
            highlight
              ? "bg-red-600 hover:bg-red-500 text-white hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
              : "border border-white/18 hover:border-white/38 text-white/80 hover:text-white hover:bg-white/[0.05]"
          }`}
        >
          {cta}
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      )}
    </motion.div>
  )
}

// ─── FAQ ───────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "When does the program officially start?",
    a: "The cohort kicks off within 48 hours of your enrollment. You'll receive a detailed schedule and access credentials on your registered email.",
  },
  {
    q: "What if I miss a live session?",
    a: "Every session is recorded. You'll have lifetime access to all recordings inside your private dashboard.",
  },
  {
    q: "Is this beginner-friendly?",
    a: "You need basic coding awareness — no prior AI/ML experience required. We go from foundations to production-grade systems.",
  },
  {
    q: "What kind of support do I get?",
    a: "Private WhatsApp community, weekly live Q&A with Pratik, peer accountability groups, and async doubt resolution.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left border border-white/[0.08] rounded-xl overflow-hidden hover:border-white/18 transition-colors duration-200"
    >
      <div className="flex items-center justify-between gap-4 p-5">
        <span className="text-white/82 font-medium text-sm">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-white/40 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.26 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm text-white/50 leading-relaxed border-t border-white/[0.06] pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ThankYouPage() {
  const [confettiFired, setConfettiFired] = useState(false)
  const [copied, setCopied] = useState(false)
  const shareUrl = "https://pratik.dev/genai-course"

  useEffect(() => {
    const t = setTimeout(() => setConfettiFired(true), 400)
    return () => clearTimeout(t)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const sx = useSpring(mx, { stiffness: 52, damping: 18 })
  const sy = useSpring(my, { stiffness: 52, damping: 18 })
  const rotX = useTransform(sy, [0, 1], [6, -6])
  const rotY = useTransform(sx, [0, 1], [-8, 8])

  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{ perspective: "1200px" }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        mx.set((e.clientX - r.left) / r.width)
        my.set((e.clientY - r.top) / r.height)
      }}
      onMouseLeave={() => { mx.set(0.5); my.set(0.5) }}
    >
      <Confetti fire={confettiFired} />

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(220,38,38,0.10) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-28">

        {/* ── Hero ── */}
        <motion.div
          style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 220, damping: 18 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-red-600/20 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-red-500" strokeWidth={1.8} />
              </div>
              <span className="absolute inset-0 rounded-full animate-ping bg-red-500/15" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-red-400 font-mono text-xs tracking-[0.22em] uppercase mb-3">
              Enrollment Confirmed
            </p>
            <h1
              className="font-black tracking-tight leading-none text-white mb-5"
              style={{
                fontSize: "clamp(38px, 8vw, 72px)",
                textShadow: "2px 4px 0 rgba(180,0,0,0.22), 6px 10px 0 rgba(100,0,0,0.10)",
              }}
            >
              You&apos;re In.
            </h1>
            <p className="text-white/68 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto">
              Welcome to the{" "}
              <span className="text-white font-semibold">Gen-AI Mastery Program</span>.
              Your seat is locked — now let&apos;s make sure you hit the ground running.
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-10"
          >
            {[
              { icon: <Users className="w-3.5 h-3.5" />, label: "48 seats. 11 left." },
              { icon: <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />, label: "4.9 / 5 avg rating" },
              { icon: <Zap className="w-3.5 h-3.5" />, label: "Cohort starts in 48 hrs" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-white/50 text-xs font-mono">
                {icon}
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-14" />

        {/* ── Next Steps ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="mb-14"
        >
          <p className="text-white/38 text-xs font-mono tracking-[0.18em] uppercase mb-6">
            Your Next 3 Moves
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <StepCard
              num="01"
              icon={<MessageCircle className="w-4 h-4" />}
              title="Join the Private Community"
              desc="500+ builders shipping real AI products. Drop in, introduce yourself, and get your first win today."
              cta="Join WhatsApp Group"
              href="https://wa.me/919999999999"
              highlight
              delay={0.72}
            />
            <StepCard
              num="02"
              icon={<Calendar className="w-4 h-4" />}
              title="Book Your Onboarding Call"
              desc="30-min 1-on-1 with Pratik to align your goals, set your sprint targets, and unlock your fast-start plan."
              cta="Book Free Call"
              href="/book"
              delay={0.82}
            />
            <StepCard
              num="03"
              icon={<BookOpen className="w-4 h-4" />}
              title="Access Pre-Work Material"
              desc="2 hours of prep content sent to your email. Complete it before Day 1 and you'll be 3x ahead of the batch."
              cta="Check Email"
              href="mailto:pratik08sabale@gmail.com"
              delay={0.92}
            />
          </div>
        </motion.div>

        {/* ── Week 1 Timeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 mb-14"
        >
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-4 h-4 text-red-400" />
            <p className="text-white/80 font-semibold text-sm">What happens in your first 7 days</p>
          </div>
          <div className="space-y-4">
            {[
              { day: "Day 0", text: "Pre-work + community onboarding. Get familiar with the cohort dashboard." },
              { day: "Day 1", text: "Live Kickoff Session — Build your first working AI agent end-to-end." },
              { day: "Day 3", text: "Deep-dive: RAG systems, vector DBs, and real production architecture." },
              { day: "Day 7", text: "Week 1 project review — submit your build and get 1-on-1 feedback." },
            ].map(({ day, text }, i) => (
              <div key={day} className="flex items-start gap-4">
                <span className="flex-shrink-0 text-xs font-mono text-red-400/80 w-12 pt-0.5">{day}</span>
                <div className="flex-1 flex items-start gap-3">
                  <div className="flex flex-col items-center mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/60 flex-shrink-0" />
                    {i < 3 && <div className="w-px h-7 bg-white/[0.07] mt-1" />}
                  </div>
                  <span className="text-sm text-white/58 leading-relaxed">{text}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Referral CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-white/[0.09] bg-white/[0.03] p-7 mb-14"
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Share2 className="w-4 h-4 text-white/50" />
                <p className="text-white font-semibold text-sm">Know someone who needs this?</p>
              </div>
              <p className="text-white/45 text-sm max-w-sm">
                Refer a friend — if they enroll, you both unlock a free 1-on-1 mentorship session.
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-white/32 text-xs font-mono truncate max-w-[140px] hidden sm:block">
                {shareUrl}
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-white/16 hover:border-white/32 text-white/70 hover:text-white text-xs font-semibold transition-all duration-200"
              >
                <Copy className="w-3 h-3" />
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── FAQ ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.22, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-white/38 text-xs font-mono tracking-[0.18em] uppercase mb-6">Quick Answers</p>
          <div className="space-y-2">
            {FAQS.map((f) => <FAQItem key={f.q} {...f} />)}
          </div>
        </motion.div>

        {/* ── Footer strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35 }}
          className="text-center space-y-4"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <p className="text-white/30 text-xs">
            Questions? Reach out at{" "}
            <a
              href="mailto:pratik08sabale@gmail.com"
              className="text-white/55 hover:text-white underline underline-offset-2 transition-colors"
            >
              pratik08sabale@gmail.com
            </a>
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-white/28 hover:text-white/60 text-xs transition-colors"
          >
            ← Back to pratik.dev
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
