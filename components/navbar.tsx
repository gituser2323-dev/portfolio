"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import gsap from "gsap"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/lib/data"
import { EnquiryModal } from "@/app/EnquiryModal"

const MENU_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Speaking", href: "#speaking" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [openEnquiry, setOpenEnquiry] = useState(false)

  const overlayRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLAnchorElement[]>([])

  useEffect(() => {
    if (!overlayRef.current) return

    if (open) {
      gsap.set(overlayRef.current, { display: "block" })

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out" }
      )

      gsap.fromTo(
        itemsRef.current,
        { y: 60, opacity: 0, skewY: 3 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          stagger: 0.12,
          duration: 0.85,
          ease: "power4.out",
          delay: 0.15,
        }
      )
    } else {
      gsap.to(itemsRef.current, {
        y: 30,
        opacity: 0,
        skewY: -2,
        stagger: 0.06,
        duration: 0.35,
        ease: "power3.in",
      })

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 0.15,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(overlayRef.current, { display: "none" })
        },
      })
    }
  }, [open])

  return (
    <>
      {/* ================= TOP BAR ================= */}
<header className="navbar-same-as-hero fixed top-0 left-0 right-0 z-50 pt-5">
        <div className="container mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold text-white">
            {siteConfig.name}
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* LET’S TALK — opens modal */}
            <button
              onClick={() => setOpenEnquiry(true)}
              className="nav-talk-btn"
            >
              let’s talk
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="text-white/80 hover:text-white transition"
              aria-label="Open menu"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= ENQUIRY MODAL ================= */}
      <EnquiryModal
        open={openEnquiry}
        onClose={() => setOpenEnquiry(false)}
      />

      {/* ================= FULLSCREEN MENU ================= */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[999] hidden bg-black"
      >
        {/* Top right actions */}
        <div className="absolute top-6 right-6 flex items-center gap-4">
          {/* Let’s talk inside menu */}
          <button
            onClick={() => {
              setOpen(false)
              setOpenEnquiry(true)
            }}
            className="nav-talk-btn-engaged"
          >
            <span className="cta-text">let’s talk</span>
            <span className="cta-arrow">↗</span>
          </button>

          <button
            onClick={() => setOpen(false)}
            className="text-white/70 hover:text-white transition"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu items */}
        <div className="h-full flex items-center">
          <nav className="container mx-auto px-6 lg:px-8">
            <ul className="space-y-12">
              {MENU_ITEMS.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    ref={(el) => {
                      if (el) itemsRef.current[i] = el
                    }}
                    onClick={() => setOpen(false)}
                    className="menu-item-ultra"
                  >
                    <span className="menu-arrow-left">→</span>
                    <span className="menu-label">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
