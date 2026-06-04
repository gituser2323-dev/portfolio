"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import CourseCTA from "./cta-banner";

interface CareerModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export function CareerModal({ open, setOpen }: CareerModalProps) {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const closeModal = () => {
    setOpen(false);
  };

  const handleSuccess = () => {
    setOpen(false);
    router.push("/thank-you");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999]"
            onClick={closeModal}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center px-4"
          >
            <div
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ✅ CLOSE BUTTON */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-[1100] text-white hover:text-red-500 text-2xl transition"
              >
                ✕
              </button>

              <CourseCTA onSuccess={handleSuccess} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
