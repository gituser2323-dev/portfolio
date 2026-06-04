"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import LandingApplyModal from "./LandingApplyModal";

/* =====================================================
   LANDING CTA + MODAL (NO FORM HERE)
===================================================== */

export default function LandingCTA() {

  const [open, setOpen] = useState(false);

  /* lock background scroll */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* ================= FLOATING CTA ================= */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center">

        <div className="w-full max-w-4xl flex items-center justify-between gap-6 rounded-3xl bg-[#0f0f0f] text-white px-7 py-5 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">

          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-white/10 overflow-hidden">
              <img src="/speedup.webp" className="w-full h-full object-cover" />
            </div>

            <div>
              <p className="text-lg font-semibold">
                Start Your Tech Career Journey
              </p>
              <p className="text-sm text-white/60">
                Limited Seats Available
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="bg-red-500 hover:bg-red-600 px-10 py-4 rounded-full font-semibold text-lg"
          >
            Apply Now →
          </button>

        </div>
      </div>

      {/* ================= MODAL ================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* background click */}
            <div
              className="absolute inset-0"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ scale: .9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: .9, opacity: 0 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/60 hover:bg-black border border-white/20 flex items-center justify-center text-white text-xl"
              >
                ✕
              </button>

              {/* ✅ FORM COMES FROM SEPARATE COMPONENT */}
              <LandingApplyModal
                onSuccess={() => {
                  setOpen(false);
                  window.location.href = "/thank-you";
                }}
              />

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}