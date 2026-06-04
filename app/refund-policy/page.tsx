"use client";
import { motion } from "framer-motion";

export default function RefundPolicy() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <motion.h1 initial={{opacity:0,y:60}} animate={{opacity:1,y:0}} className="text-5xl font-semibold mb-12">
          Refund <span className="text-red-600">Policy</span>
        </motion.h1>

        <div className="space-y-10 text-white/70 leading-relaxed">
          <div>
            <h2 className="text-2xl text-white mb-3">Recorded Courses</h2>
            <p>Refund requests must be made within 3 days of batch start. If only the first 2 lectures are accessed, 100% refund applies. Beyond that, a prorated deduction is made.</p>
          </div>

          <div>
            <h2 className="text-2xl text-white mb-3">Live Batches</h2>
            <p>Full refund is available within 7 days of course commencement. After 7 days, refunds are not applicable due to resource allocation.</p>
          </div>

          <div>
            <h2 className="text-2xl text-white mb-3">How to Request</h2>
            <p>Email: <span className="text-red-500">support@speedupinfotech.com</span>  
            Subject: <b>ONLINE COURSE REFUND | Your Registered Email</b></p>
          </div>

          <p className="text-white/40 text-sm">Refund processing time: 7–10 business days.</p>
        </div>
      </div>
    </section>
  );
}
