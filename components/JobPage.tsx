"use client"

import { useState } from "react"

export default function JobPage({
  params,
}: {
  params: { slug: string }
}) {
  const role = params.slug.replace(/-/g, " ")

  const [form, setForm] = useState({
    name: "",
    email: "",
    experience: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name || !form.email) {
      setError("Please fill all required fields.")
      return
    }

    setError("")
    setLoading(true)

    try {
      await fetch("https://script.google.com/macros/s/AKfycbx6jOUGaxALNchMOnIRX6ELqoHpKyRiFmjLcleRAnOZ4_1TggQwJfl6OUc5Y91y04Mo/exec", {
        method: "POST",
        body: JSON.stringify({
          ...form,
          role,
        }),
      })

      setSuccess(true)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    }

    setLoading(false)
  }

  if (success) {
    return (
      <section className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center max-w-xl">
          <h1 className="text-4xl font-semibold">
            Application Submitted
          </h1>
          <p className="mt-6 text-gray-400">
            Thank you for applying for <span className="text-white">{role}</span>.
            Our team will contact you soon.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-black text-white py-32">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div className="border-b border-white/15  pb-16">
          <p className="text-[11px] tracking-[0.35em] uppercase text-red-500">
            Open Position
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-semibold capitalize tracking-tight">
            {role}
          </h1>

          <div className="mt-8 flex flex-wrap gap-8 text-sm text-gray-500">
            <span>Full-Time</span>
            <span>0–2 Years</span>
            <span>Remote / Hybrid</span>
          </div>
        </div>

        {/* FORM */}
        <div className="mt-24 max-w-2xl">

          <h2 className="text-2xl font-semibold mb-12">
            Apply for this role
          </h2>

          <form onSubmit={handleSubmit} className="space-y-14">

            <div>
              <label className="block text-sm text-gray-500 mb-3">
                Full Name *
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/15   py-4
                           focus:border-red-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-3">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/15   py-4
                           focus:border-red-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-3">
                Years of Experience
              </label>
              <input
                name="experience"
                value={form.experience}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/15   py-4
                           focus:border-red-500 outline-none transition"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">
                {error}
              </p>
            )}

            <div className="pt-10">
              <button
                type="submit"
                disabled={loading}
                className="px-10 py-4 bg-red-600 rounded-full
                           hover:bg-red-700 transition
                           text-sm font-medium tracking-wide
                           disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application →"}
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  )
}
