"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import gsap from "gsap"

export default function ThankYouPage() {
  const router = useRouter()
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(wrapperRef.current, {
        y: 32,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
    })

    const redirect = setTimeout(() => {
      router.push("/")
    }, 5000)

    return () => {
      ctx.revert()
      clearTimeout(redirect)
    }
  }, [router])

  return (
    <main className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Subtle dotted grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Soft red presence */}
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_40%,rgba(255,43,43,0.14),transparent_70%)]" />

      <section className="relative z-10 w-full">
        <div
          ref={wrapperRef}
          className="max-w-xl mx-auto px-6 text-center translate-y-[-40px]"
        >
          {/* Confirmation */}
          <p className="text-xs tracking-[0.35em] uppercase text-white/50 mb-10">
            Enquiry received
          </p>

          {/* Core message */}
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-8">
            You’re on the right track.
          </h1>

          {/* Reassurance */}
          <p className="text-lg text-white/60 leading-relaxed mb-12">
            I personally read every enquiry.
            <br />
            If there’s a genuine fit,
            <br />
            you’ll hear back from me.
          </p>

          {/* Signature */}
          <div className="flex flex-col items-center gap-3 mb-14">
            <div className="w-12 h-[1px] bg-white/30" />
            <p className="text-sm text-white/75">
              — Pratik Sabale
            </p>
            <p className="text-xs text-white/45 tracking-wide">
              Founder • Mentor • Corporate Speaker
            </p>
          </div>

          {/* Exit hint */}
          <p className="text-xs text-white/40">
            Redirecting you back home…
          </p>
        </div>
      </section>
    </main>
  )
}
