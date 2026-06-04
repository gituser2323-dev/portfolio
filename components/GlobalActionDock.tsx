"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { MessageCircle, Phone, Calendar, Headset } from "lucide-react"

const actions = [
  {
    icon: MessageCircle,
    color: "text-green-400",
    href: "https://api.whatsapp.com/send?phone=917219777599&text=Hello%2C%20I%20want%20to%20know%20about%20Speedup%20Infotech%0A%0A",
  },
  {
    icon: Calendar,
    color: "text-red-500",
    href: "/book-session",
  },
  {
    icon: Phone,
    color: "text-white",
    href: "tel:+917219777599",
  },
]

export default function ProAgencyDock() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    let lastScroll = 0
    const handleScroll = () => {
      const current = window.scrollY
      setVisible(current < lastScroll || current < 50)
      lastScroll = current
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cursor follow effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })

  function handleMouseMove(e: any) {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.15)
    mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.15)
  }

  function resetMouse() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-8 right-8 z-50"
          style={{ x: springX, y: springY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetMouse}
        >
          {/* EXPANDING ACTIONS */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute bottom-16 right-0 flex flex-col gap-4"
              >
                {actions.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={i}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: i * 0.05, type: "spring", stiffness: 260 }}
                      whileHover={{ scale: 1.15 }}
                      className="w-11 h-11 rounded-full backdrop-blur-xl bg-white/[0.07] border border-white/15  flex items-center justify-center shadow-lg"
                    >
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </motion.a>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* MAIN TOGGLE */}
          <motion.button
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            className="relative w-14 h-14 rounded-full backdrop-blur-2xl bg-white/[0.08] border border-white/15  flex items-center justify-center shadow-[0_30px_80px_rgba(0,0,0,0.7)] overflow-hidden"
          >
            <motion.div
              animate={{ scale: open ? 1.4 : 1, opacity: open ? 0.2 : 0 }}
              className="absolute w-full h-full rounded-full bg-red-500/30 blur-xl"
            />
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Headset className="w-6 h-6 text-white" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
