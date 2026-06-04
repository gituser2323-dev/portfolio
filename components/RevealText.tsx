"use client";
import { motion } from "framer-motion";

export default function RevealText({ text }: { text: string }) {
  return (
    <span className="block overflow-hidden text-left my-10 text-xl font-700">
      <motion.span
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="block"
      >
        {text}
      </motion.span>
    </span>
  );
}
