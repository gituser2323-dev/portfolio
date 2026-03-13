"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import emailjs from "@emailjs/browser"
import { useRouter } from "next/navigation"

const INTERESTS = [
  "Career Clarity & Growth Guidance",
  "MERN Stack Mentorship (Job-Ready)",
  "Corporate Workshops & Upskilling",
  "Python Full-Stack Cohort Program",
  "AI Automation for Real-World Use",
]

const PERSONAS = [
  "Student / Fresher",
  "Working Professional",
  "Founder / Team Lead",
  "Company / HR",
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

  const validate = () => {
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number")
      return false
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return false
    }
    setError("")
    return true
  }

  const submitEnquiry = async () => {
    if (!validate()) return

    setLoading(true)

    try {
      // Email to YOU
    //   await emailjs.send(
    //     "service_xxx",
    //     "template_admin_enquiry",
    //     {
    //       interest,
    //       persona,
    //       phone,
    //       email,
    //     },
    //     "public_xxx"
    //   )

      // Auto-reply to USER
    //   await emailjs.send(
    //     "service_xxx",
    //     "template_user_reply",
    //     {
    //       interest,
    //       user_email: email,
    //     },
    //     "public_xxx"
    //   )

      onClose()
      router.push("/thank-you")
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full max-w-xl bg-[#0b0b0b] border border-white/10 rounded-2xl p-8 relative"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/40 hover:text-white"
          >
            <X size={20} />
          </button>

          {/* Progress */}
          <div className="flex gap-2 mb-6">
            {[1, 2, 3].map((i) => (
              <motion.span
                key={i}
                className="h-2 rounded-full"
                animate={{
                  width: step >= i ? 18 : 8,
                  backgroundColor:
                    step >= i ? "rgb(239,68,68)" : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <h3 className="text-2xl font-semibold mb-6">
                What are you looking for?
              </h3>
              <div className="grid gap-3">
                {INTERESTS.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setInterest(item)
                      setStep(2)
                    }}
                    className="choice-card"
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
              <h3 className="text-2xl font-semibold mb-6">
                Tell me about yourself
              </h3>
              <div className="grid gap-3 mb-6">
                {PERSONAS.map((item) => (
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

              <button
                onClick={() => setStep(3)}
                className="text-sm text-white/40 hover:text-white"
              >
                Skip →
              </button>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <h3 className="text-2xl font-semibold mb-4">
                How can I contact you?
              </h3>

              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                className="w-full mb-3 bg-transparent border border-white/20 rounded-xl px-4 py-3 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mb-4 bg-transparent border border-white/20 rounded-xl px-4 py-3 focus:outline-none"
              />

              {error && (
                <p className="text-sm text-red-400 mb-3">{error}</p>
              )}

              <button
                onClick={submitEnquiry}
                disabled={loading}
                className="nav-talk-btn w-full justify-center"
              >
                {loading ? "Submitting…" : "Submit enquiry"}
              </button>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
