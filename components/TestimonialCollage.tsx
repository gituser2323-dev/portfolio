
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMemo } from "react";

const testimonials = [
  {
    type: "whatsapp",
    text: "Honestly, I was scared of backend before joining, but now Node feels easy. Huge confidence boost!",
    name: "Rahul (Placed @ Infosys)",
  },
  {
    type: "google",
    text: "This is the first place where I actually understood how full stack apps work together.",
    name: "Priya S.",
  },
  {
    type: "whatsapp",
    text: "Chetana ma'am explained SQL like real-life stories. Dashboards finally make sense 🙌",
    name: "Aman (Data Analyst Intern)",
  },
  {
    type: "google",
    text: "Every topic connects to a real project. Nothing feels useless or random.",
    name: "Sneha K.",
  },
  {
    type: "whatsapp",
    text: "Ashwin sir made machine learning less scary. I can finally understand models properly 😭",
    name: "Vikram (Data Science Student)",
  },
  {
    type: "google",
    text: "The mentors actually care. They review code, not just teach and leave.",
    name: "Harshit",
  },
  {
    type: "whatsapp",
    text: "Rutvij sir helped me improve my UI skills a lot. My projects look 10x better now 🎨",
    name: "Neha",
  },
  {
    type: "google",
    text: "This feels like industry training, not college-style theory.",
    name: "Karan P.",
  },
  {
    type: "whatsapp",
    text: "I never thought I could deploy a full project on my own. That moment felt unreal 🚀",
    name: "Aditya",
  },
  {
    type: "google",
    text: "The roadmap is very clear. You always know what to learn next.",
    name: "Megha T.",
  },
  {
    type: "whatsapp",
    text: "Database design finally clicked for me after those sessions. Earlier I just copied queries.",
    name: "Rohan",
  },
  {
    type: "google",
    text: "Mentors push you to improve but never make you feel bad. Very supportive vibe.",
    name: "Tanvi",
  },
  {
    type: "whatsapp",
    text: "Mock interviews reduced my fear a lot. Real interview felt much easier after that.",
    name: "Ankit",
  },
  {
    type: "google",
    text: "I learned more practical things here in months than years of random YouTube learning.",
    name: "Divya",
  },
  {
    type: "whatsapp",
    text: "Working with business datasets made data analysis feel real, not just numbers on screen.",
    name: "Sakshi",
  },
  {
    type: "google",
    text: "Project reviews are strict but that’s why we improve so fast.",
    name: "Ritesh",
  },
  {
    type: "whatsapp",
    text: "Model evaluation and ML workflow finally make sense to me now 📊",
    name: "Mitali",
  },
  {
    type: "google",
    text: "Best decision for my career honestly. I feel job-ready now.",
    name: "Yash",
  },
  {
    type: "whatsapp",
    text: "My React understanding improved a lot. Now I build instead of just watching tutorials.",
    name: "Nikhil",
  },
  {
    type: "google",
    text: "Everything we learn connects to how companies actually work.",
    name: "Pooja",
  },
  {
    type: "whatsapp",
    text: "Writing clean code became a habit here. Earlier I never cared about structure.",
    name: "Manish",
  },
  {
    type: "google",
    text: "This is mentorship, not just a course. Big difference.",
    name: "Krishna",
  },
  {
    type: "whatsapp",
    text: "My interview confidence improved a lot after this program 🙌",
    name: "Rutuja",
  },
];


export default function TestimonialCollage() {

 // detect device
const isMobile =
  typeof window !== "undefined" && window.innerWidth < 768;

// reduce cards on mobile
const visibleTestimonials = isMobile
  ? testimonials.slice(0, 8)   // 👈 change number if needed
  : testimonials;

// stable random positions
const positions = useMemo(() => {
  if (typeof window === "undefined") return [];

  const width = window.innerWidth;
  const maxLeft = width < 768 ? width - 300 : 1000;

  return visibleTestimonials.map(() => ({
    top: Math.random() * 420,
    left: Math.random() * Math.max(0, maxLeft),
    rotate: Math.random() * 20 - 10,
  }));
}, [visibleTestimonials]);


  return (


    <section className="relative bg-black text-white py-10 overflow-hidden">


      {/* Background dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16">

        <h2 className="text-center text-[clamp(36px,5vw,72px)] font-semibold mb-20">
          What Students <span className="text-red-600">Say</span>
        </h2>


        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mb-16"
        >
          <div className="px-6 py-3 rounded-full bg-white/5 border border-white/15   text-xs tracking-[0.4em] uppercase text-white/60 backdrop-blur-xl">
            Drag • Move • Play
          </div>
        </motion.div>

        <div className="relative h-[700px]">


          {positions.length > 0 && visibleTestimonials.map((t, i) => {

            const x = useMotionValue(0);
            const y = useMotionValue(0);

            const smoothX = useSpring(x, { stiffness: 180, damping: 20 });
            const smoothY = useSpring(y, { stiffness: 180, damping: 20 });

            const rotateX = useTransform(smoothY, [-120, 120], [14, -14]);
            const rotateY = useTransform(smoothX, [-120, 120], [-14, 14]);

            return (
              <motion.div
                key={i}
                drag
                dragElastic={0.25}
                dragMomentum
                dragConstraints={{ left: -250, right: 250, top: -180, bottom: 180 }}
                style={{
                  x: smoothX,
                  y: smoothY,
                  rotateX,
                  rotateY,
                  top: `${positions[i].top}px`,
                  left: `${positions[i].left}px`,
                  rotate: `${positions[i].rotate}deg`,
                }}
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, type: "spring" }}
                whileHover={{ scale: 1.12, zIndex: 100 }}
                className={`group absolute w-[280px] p-5 rounded-2xl backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] border border-white/15  cursor-grab
                ${t.type === "whatsapp" ? "bg-green-500/10" : "bg-white/[0.03]"}`}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 shadow-[0_0_60px_rgba(255,255,255,0.06)]" />

                <div className="flex items-center justify-between mb-3 relative z-10">
                  <span className="text-xs text-white/40">
                    {t.type === "whatsapp" ? "WhatsApp" : "Google Review"}
                  </span>
                  <span className="text-yellow-400 text-xs">★★★★★</span>
                </div>

                <p className="text-sm text-white/80 leading-relaxed mb-4 relative z-10">
                  {t.text}
                </p>

                <p className="text-xs text-white/40 relative z-10">— {t.name}</p>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
