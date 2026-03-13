"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"


export default function CourseContact() {
  const [track, setTrack] = useState("");
  const [goal, setGoal] = useState("");
  const [time, setTime] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState<{[key:string]:string}>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter()

  // Spotlight effect
  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--x",
        `${e.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--y",
        `${e.clientY}px`
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const validate = () => {
    const e: any = {};
    if (!track) e.track = "Select your path";
    if (!goal) e.goal = "Select your goal";
    if (!time) e.time = "Choose start time";
    if (!name.trim()) e.name = "Enter your name";
    if (!/^[6-9]\d{9}$/.test(phone)) e.phone = "Enter valid 10-digit phone";
    if (email && !/^\S+@\S+\.\S+$/.test(email)) e.email = "Invalid email";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const sendForm = async () => {
    if (!validate()) return;
    try {
      setLoading(true);

      // await emailjs.send(
      //   "YOUR_SERVICE_ID",
      //   "YOUR_TEMPLATE_ID",
      //   { name, phone, email, track, goal, time },
      //   "YOUR_PUBLIC_KEY"
      // );

      setSuccess(true);
      setLoading(false);
      router.push("/thank-you")

    } catch {
      alert("Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <section className="contact-dots relative min-h-screen bg-black text-white px-8 md:px-16 py-32 flex flex-col lg:flex-row gap-24 overflow-hidden" id="contact">

      {/* Cursor spotlight */}
      <div className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(600px at var(--x) var(--y), rgba(255,255,255,0.06), transparent 60%)",
        }}
      />

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white/20 rounded-full"
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 6 + i }}
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
        />
      ))}

      {/* LEFT SIDE */}
      <div className="flex-1">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[90px] md:text-[110px] leading-[0.9] font-semibold tracking-tight"
        >
          Let’s shape <br /> your tech <br /> future.
        </motion.h2>

        <p className="text-white/40 mt-12 max-w-sm">
          You don’t need another course. You need the right direction.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 max-w-2xl">

        {/* TRACK */}
        <p className="text-lg mb-5 text-white/70">Which path interests you?</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {["MERN Stack","Python Full Stack","AI & Data Science","Career Mentorship"].map(t => (
            <motion.button whileHover={{ scale: 1.05 }} key={t}
              onClick={()=>setTrack(t)}
              className={`px-5 py-2.5 rounded-full border text-sm transition
              ${track===t?"bg-white text-black":"bg-white/[0.04] border-white/10 hover:bg-white hover:text-black"}`}>
              {t}
            </motion.button>
          ))}
        </div>
        {errors.track && <p className="text-red-400 text-sm mb-6">{errors.track}</p>}

        {/* GOAL */}
        <p className="text-lg mb-5 text-white/70">What is your goal?</p>
        <div className="flex gap-3 flex-wrap mb-6">
          {["Get a job","Switch career","Freelancing","Build startup"].map(g => (
            <motion.button whileHover={{ scale: 1.05 }} key={g}
              onClick={()=>setGoal(g)}
              className={`px-5 py-2.5 rounded-full border text-sm transition
              ${goal===g?"bg-white text-black":"bg-white/[0.04] border-white/10 hover:bg-white hover:text-black"}`}>
              {g}
            </motion.button>
          ))}
        </div>
        {errors.goal && <p className="text-red-400 text-sm mb-6">{errors.goal}</p>}

        {/* TIME */}
        <p className="text-lg mb-5 text-white/70">When do you want to start?</p>
        <div className="flex gap-3 mb-8">
          {["Immediately","1 Month","Exploring"].map(t => (
            <motion.button whileHover={{ scale: 1.05 }} key={t}
              onClick={()=>setTime(t)}
              className={`px-5 py-2.5 rounded-full border text-sm transition
              ${time===t?"bg-white text-black":"bg-white/[0.04] border-white/10 hover:bg-white hover:text-black"}`}>
              {t}
            </motion.button>
          ))}
        </div>
        {errors.time && <p className="text-red-400 text-sm mb-8">{errors.time}</p>}

        {/* INPUTS */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mb-10">
          <div>
            <input value={name} onChange={(e)=>setName(e.target.value)}
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-white/10 focus:border-white py-3 outline-none"/>
            {errors.name && <p className="text-red-400 text-xs mt-2">{errors.name}</p>}
          </div>

          <div>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)}
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-white/10 focus:border-white py-3 outline-none"/>
            {errors.phone && <p className="text-red-400 text-xs mt-2">{errors.phone}</p>}
          </div>

          <div className="col-span-2">
            <input value={email} onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email (optional)"
              className="w-full bg-transparent border-b border-white/10 focus:border-white py-3 outline-none"/>
            {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email}</p>}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          disabled={loading}
          onClick={sendForm}
          className="nav-talk-btn px-10 py-3 rounded-full opacity-50"
        >
          {loading ? "Processing..." : success ? "Plan Sent ✓" : "Start My Learning Plan"}
        </motion.button>
      </div>
    </section>
  );
}
