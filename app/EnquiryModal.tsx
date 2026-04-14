"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

const INTERESTS = [
  "GenAI / AI Engineer",
  "Full Stack + DevOps + AI Systems",
  "AI-Powered Creative Development",
  "UI/UX + Product Design",
  "Data Analytics + AI Insights",
  "Career Acceleration Program"
]

const PERSONAS = [
  "Student / Fresher",
  "Working Professional",
  "Founder / Builder",
  "Company / Hiring Team",
]

export function EnquiryModal({ open, onClose }: any) {
  const router = useRouter()

  const [step, setStep] = useState(1)
  const [interest, setInterest] = useState("")
  const [persona, setPersona] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  if (!open) return null

  const submit = () => {
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Enter valid phone number")
      return
    }

    setLoading(true)
    setTimeout(() => {
      onClose()
      router.push("/thank-you")
    }, 1200)
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-xl flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full max-w-xl bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
        >

          {/* 🔥 Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)] pointer-events-none" />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/40 hover:text-white"
          >
            <X size={20} />
          </button>

          {/* 💎 HEADER */}
          <div className="mb-8">
            <p className="text-xs text-white/40 tracking-widest mb-2">
              AI LEARNING PATH
            </p>
            <h3 className="text-2xl font-semibold">
              Let’s build your roadmap
            </h3>
          </div>

          {/* 📊 PROGRESS */}
          <div className="flex gap-2 mb-8">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full ${step >= i ? "bg-white" : "bg-white/10"
                  }`}
              />
            ))}
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <p className="mb-6 text-white/60">
                What do you want to build?
              </p>

              <div className="grid gap-3">
                {INTERESTS.map(item => (
                  <button
                    key={item}
                    onClick={() => {
                      setInterest(item)
                      setStep(2)
                    }}
                    className="choice-card hover:scale-[1.02]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <p className="mb-6 text-white/60">
                Where are you currently?
              </p>

              <div className="grid gap-3">
                {PERSONAS.map(item => (
                  <button
                    key={item}
                    onClick={() => {
                      setPersona(item)
                      setStep(3)
                    }}
                    className="choice-card"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <p className="mb-6 text-white/60">
                Get your personalized roadmap
              </p>

              <input
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mb-3 bg-transparent border border-white/20 rounded-xl px-4 py-3"
              />

              <input
                placeholder="Email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mb-4 bg-transparent border border-white/20 rounded-xl px-4 py-3"
              />

              {error && (
                <p className="text-sm text-red-400 mb-3">{error}</p>
              )}

              <button
                onClick={submit}
                className="w-full py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition"
              >
                {loading ? "Generating..." : "Get My AI Roadmap"}
              </button>

              {/* 🔥 TRUST */}
              <p className="text-xs text-green-400 mt-4 text-center">
                ● 1200+ students guided • Real-world systems focus
              </p>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}