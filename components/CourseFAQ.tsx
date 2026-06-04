"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

type FAQ = {
  question: string
  answer: string
}

type Props = {
  title?: string
  faqs: FAQ[]
}

export default function CourseFAQ({
  title = "Frequently Asked Questions",
  faqs,
}: Props) {
  const [active, setActive] = useState<number | null>(0)

  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.08),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {title}
          </h2>

          <p className="mt-5 text-white/60 text-base md:text-lg">
            Everything you need to know about the program.
          </p>
        </motion.div>

        {/* FAQ ITEMS */}
        <div className="mt-16 space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = active === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="
                  border border-white/10
                  bg-white/[0.02]
                  rounded-3xl
                  overflow-hidden
                "
              >
                <button
                  onClick={() =>
                    setActive(isOpen ? null : index)
                  }
                  className="
                    w-full flex items-center justify-between
                    text-left
                    px-6 md:px-8 py-6
                  "
                >
                  <span className="text-base md:text-lg font-medium">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-6 text-white/65 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}