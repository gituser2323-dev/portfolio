"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import axios from "axios"

const API_URL = "https://si-crm-backend.vercel.app/api/enquiry"

/* ================= ANIMATION ================= */

const stepAnim = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.3 }
}

/* ================= COMPANIES ================= */

const COMPANIES = [
  "Infosys", "TCS", "Wipro", "Startup", "Accenture", "Capgemini",
  "Cognizant", "Tech Mahindra", "Persistent", "KPIT", "Zensar",
  "Synechron", "Cybage", "Mindbowser", "Veritas",
  "Amdocs", "PubMatic", "Xoriant",
]

export default function LandingCareerJourneyModal() {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  const TOTAL = 5
  const [step, setStep] = useState(1)

  const next = () => setStep(s => Math.min(s + 1, TOTAL))
  const back = () => setStep(s => Math.max(1, s - 1))

  /* ================= STATE ================= */

  const [companies, setCompanies] = useState<string[]>([])
  const [salary, setSalary] = useState(5)
  const [interest, setInterest] = useState("")
  const [responseTime, setResponseTime] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const [autoSent, setAutoSent] = useState(false)
  const [autoSentNumber, setAutoSentNumber] = useState<string | null>(null)

  /* ================= COMPANY TOGGLE ================= */

  const toggleCompany = (c: string) => {
    setCompanies(prev =>
      prev.includes(c)
        ? prev.filter(x => x !== c)
        : [...prev, c]
    )
  }

  /* ================= AUTO LEAD ================= */

  const autoSendLead = async (mobile: string) => {

    if (autoSent) return

    const phoneRegex = /^[6-9]\d{9}$/
    if (!phoneRegex.test(mobile)) return

    try {

      const payload = {
        name: name || "Website Lead",
        phone: mobile,
        email: `${mobile}@lead.local`,
        city: "Website Lead",
        interest,
        salary,
        companies: companies.join(", "),
        responseTime,
        source: "Auto Lead Trigger"
      }

      const res = await axios.post(API_URL, payload)

      const id = res?.data?.data?._id
      if (id) sessionStorage.setItem("enquireId", id)

      setAutoSent(true)
      setAutoSentNumber(mobile)

    } catch (err:any) {

      const msg =
        err?.response?.data?.message?.toLowerCase?.() ||
        err?.response?.data?.err?.toLowerCase?.() ||
        ""

      if (msg.includes("already") || err?.response?.status === 409) {
        setAutoSent(true)
        setAutoSentNumber(mobile)
      } else {
        console.log("Auto lead failed", err)
      }

    }
  }

  /* ================= SUBMIT ================= */

  const handleSubmit = async () => {

    if (isSubmitting) return

    const cleanName = name.trim()
    const cleanPhone = phone.trim()

    const nameRegex = /^[a-zA-Z\s.'-]{3,}$/
    const phoneRegex = /^[6-9]\d{9}$/

    if (!nameRegex.test(cleanName)) {
      setErrorMessage("Enter a valid full name.")
      return
    }

    if (!phoneRegex.test(cleanPhone)) {
      setErrorMessage("Enter a valid 10-digit mobile number.")
      return
    }

    setIsSubmitting(true)
    setErrorMessage("")

    try {

      if (autoSentNumber !== cleanPhone) {

        const payload = {
          name: cleanName,
          phone: cleanPhone,
          email: `${cleanPhone}@lead.local`,
          city: "Website Lead",
          interest,
          salary,
          companies: companies.join(", "),
          responseTime,
          source: "Manual Submit"
        }

        const res = await axios.post(API_URL, payload)

        const id = res?.data?.data?._id
        if (id) sessionStorage.setItem("enquireId", id)
      }

      window.location.assign("/thank-you")

    } catch (err:any) {

      const msg =
        err?.response?.data?.message?.toLowerCase?.() ||
        err?.response?.data?.err?.toLowerCase?.() ||
        ""

      if (msg.includes("already") || err?.response?.status === 409) {
        window.location.assign("/thank-you")
      } else {
        setErrorMessage("Submission failed. Please try again.")
      }

    } finally {
      setIsSubmitting(false)
    }
  }

  if (!open) return null

  /* ===================================================== */

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4">

      <motion.div
        initial={{ scale: .9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-6xl bg-[#050505] border border-white/10 rounded-3xl p-6 md:p-10 text-white"
      >

        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Design Your <span className="text-red-500">Career Path</span>
        </h2>

        {/* PROGRESS */}
        <div className="h-[2px] bg-white/10 mb-10">
          <motion.div
            className="h-full bg-red-600"
            animate={{ width: `${(step / TOTAL) * 100}%` }}
          />
        </div>

        <AnimatePresence mode="wait">

          {/* STEP 1 */}
          {step === 1 && (
            <motion.div key="1" {...stepAnim}>

              <p className="mb-6 text-white/60 text-lg font-semibold">
                Which company from the options would you choose to work at?
              </p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-h-[350px] overflow-y-auto">

                {COMPANIES.map(c => (
                  <button
                    key={c}
                    onClick={() => toggleCompany(c)}
                    className={`p-4 rounded-xl border ${
                      companies.includes(c)
                        ? "border-red-500 bg-red-500/10"
                        : "border-white/10"
                    }`}
                  >
                    {c}
                  </button>
                ))}

              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={next}
                  className="px-8 py-3 bg-red-600 rounded-full"
                >
                  Continue →
                </button>
              </div>

            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div key="2" {...stepAnim}>

              <p className="mb-6 text-white/60 text-lg font-semibold">
                What is your expected minimum package?
              </p>

              <h3 className="text-5xl text-center text-red-500 mb-6">
                {salary} LPA
              </h3>

              {salary > 10 && (
                <p className="text-center text-md text-yellow-400 mb-4 animate-pulse">
                  Your skills must grow in step with your choices
                </p>
              )}

              <input
                type="range"
                min="3"
                max="15"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="w-full"
              />

              <div className="flex justify-between mt-10">
                <button onClick={back}>← Back</button>
                <button
                  onClick={next}
                  className="px-8 py-3 bg-red-600 rounded-full"
                >
                  Continue →
                </button>
              </div>

            </motion.div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <motion.div key="3" {...stepAnim}>

              <p className="mb-6 text-white/60 text-lg font-semibold">
                Do you want to apply as a full-stack developer or in AI?
              </p>

              <div className="grid md:grid-cols-2 gap-6">

                {["Full Stack Development", "AI & Data Science"].map(i => (
                  <button
                    key={i}
                    onClick={() => { setInterest(i); next() }}
                    className="p-6 border rounded-xl"
                  >
                    {i}
                  </button>
                ))}

              </div>

              <button onClick={back} className="mt-6">
                ← Back
              </button>

            </motion.div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <motion.div key="4" {...stepAnim}>

              <p className="mb-6 text-white/60 text-lg font-semibold">
                How quickly can we get back to you with details?
              </p>

              {["Immediately", "Within 24 Hours", "This Week"].map(t => (
                <button
                  key={t}
                  onClick={() => { setResponseTime(t); next() }}
                  className="block w-full mb-4 p-5 border rounded-xl"
                >
                  {t}
                </button>
              ))}

              <button onClick={back}>
                ← Back
              </button>

            </motion.div>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <motion.div key="5" {...stepAnim}>

              <p className="mb-6 text-white/60 text-lg font-semibold">
                Our counsellor will contact you soon.
              </p>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-black/40 border-b border-white/20 py-3 outline-none focus:border-red-500"
                />

                <input
                  placeholder="Phone Number"
                  value={phone}
                  inputMode="numeric"
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 10)
                    setPhone(value)

                    if (value.length === 10) autoSendLead(value)
                  }}
                  className="bg-black/40 border-b border-white/20 py-3 outline-none focus:border-red-500"
                />

              </div>

              {errorMessage && (
                <p className="text-red-400 mt-3 text-sm">
                  ⚠️ {errorMessage}
                </p>
              )}

              <div className="flex justify-between mt-8">

                <button onClick={back}>
                  ← Back
                </button>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8 py-4 rounded-full bg-red-600"
                >
                  {isSubmitting ? "Submitting..." : "Get My Career Plan →"}
                </button>

              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </motion.div>
    </div>
  )
}