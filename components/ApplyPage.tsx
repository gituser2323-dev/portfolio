"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function ApplyForm({ role }: { role: string }) {
  const router = useRouter()

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    college: "",
    profileUrl: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [countdown, setCountdown] = useState(7)
  const [fadeOut, setFadeOut] = useState(false)
  const [resume, setResume] = useState<File | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const validate = () => {
    if (!form.name.trim()) return "Full name required"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Valid email required"
    if (!/^[6-9]\d{9}$/.test(form.mobile))
      return "Valid 10 digit mobile required"
    if (!form.college.trim()) return "College required"
    return ""
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validation = validate()
    if (validation) {
      setError(validation)
      return
    }

    if (!resume) {
      setError("Resume is required")
      return
    }

    setLoading(true)
    setError("")

    try {
      const formData = new FormData()

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value)
      })

      formData.append("role", role)
      formData.append("resume", resume)

      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      })

      if (!res.ok) {
        const text = await res.text() // better debugging
        console.error("API Error:", text)
        throw new Error("Failed request")
      }

      setSuccess(true)
    } catch (err) {
      console.error(err)
      setError("Submission failed. Please try again.")
    } finally {
      setLoading(false) // ✅ always runs (cleaner)
    }
  }

  console.log(resume)
  /* SUCCESS EFFECTS — SAFE */
  useEffect(() => {
    if (!success) return

    let interval: NodeJS.Timeout

    const run = async () => {
      if (typeof window !== "undefined") {
        const module = await import("canvas-confetti")
        const confetti = module.default

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      }

      interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval)
            setFadeOut(true)

            setTimeout(() => {
              router.push("/courses")
            }, 600)

            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    run()

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [success, router])

  /* SUCCESS SCREEN */
  if (success) {
    return (
      <div
        className={`mt-20 p-12 rounded-3xl border border-white/15  
        bg-white/5 backdrop-blur-2xl text-center transition-all duration-500
        ${fadeOut ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
      >
        <h3 className="text-3xl font-semibold text-white">
          Application Submitted
        </h3>

        <p className="mt-4 text-gray-400">
          Thank you for applying for{" "}
          <span className="text-white">{role}</span>.
        </p>

        <p className="mt-6 text-lg text-red-400 font-medium">
          Redirecting in {countdown} seconds...
        </p>

        <div className="mt-6 h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-500 transition-all duration-1000"
            style={{ width: `${(7 - countdown) * (100 / 7)}%` }}
          />
        </div>


        <button
          onClick={() => router.push("/courses")}
          className="mt-8 px-8 py-3 rounded-full border border-red-500/40 
                     hover:bg-red-500/10 transition"
        >
          Go Now →
        </button>
      </div>
    )
  }

  /* FORM UI */
  return (
    <div className="mt-20 max-w-3xl">
      <div
        className="p-12 rounded-3xl border border-white/15  
                   bg-gradient-to-br from-white/5 to-black/40 
                   backdrop-blur-3xl 
                   shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
      >
        <h2 className="text-3xl font-semibold text-white mb-10">
          Apply for this role
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <FloatingInput
            label="Full Name *"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <FloatingInput
            label="Email *"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
          />

          <FloatingInput
            label="Mobile *"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            type="tel"
          />

          <FloatingInput
            label="College / Company *"
            name="college"
            value={form.college}
            onChange={handleChange}
          />

          <FloatingInput
            label="LinkedIn or Portfolio URL"
            name="profileUrl"
            value={form.profileUrl}
            onChange={handleChange}
            type="url"
          />

          <div className="space-y-2">
            <label className="text-sm text-gray-400">
              Upload Resume (PDF, max 2MB) *
            </label>

            <input
              type="file"
              accept=".pdf"
              required
              onChange={(e) => {
                const file = e.target.files?.[0]

                if (!file) return

                if (file.type !== "application/pdf") {
                  setError("Only PDF allowed")
                  return
                }

                if (file.size > 2 * 1024 * 1024) {
                  setError("File must be less than 2MB")
                  return
                }

                setResume(file)
                setError("")
              }}
              className="w-full text-sm text-gray-300 
               file:mr-4 file:py-2 file:px-4 
               file:rounded-full file:border-0
               file:bg-red-500/10 file:text-red-400
               hover:file:bg-red-500/20"
            />

            {resume && (
              <p className="text-green-400 text-sm">
                Uploaded: {resume.name}
              </p>
            )}
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="relative w-full py-4 rounded-full font-medium text-white
                       bg-gradient-to-r from-red-600 to-red-500
                       hover:scale-[1.02] transition-all duration-300
                       disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="animate-spin w-5 h-5" />}
            {loading ? "Submitting..." : "Submit Application →"}
          </button>
        </form>
      </div>
    </div>
  )
}

/* Properly Typed Floating Input */
type FloatingInputProps = {
  label: string
  name: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  type?: string
}

function FloatingInput({
  label,
  name,
  value,
  onChange,
  type = "text",
}: FloatingInputProps) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer w-full bg-transparent border border-white/15   
                   rounded-xl px-4 py-4
                   focus:border-red-500 focus:ring-2 focus:ring-red-500/20
                   outline-none transition"
      />
      <label
        className="absolute left-4 top-4 text-gray-400 text-sm
                   peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400
                   peer-focus:-top-2 peer-focus:text-xs peer-focus:text-red-400
                   transition-all duration-300 bg-black px-1 rounded"
      >
        {label}
      </label>
    </div>
  )
}
