"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

/* =====================================================
   TYPES
===================================================== */

interface CourseCTAProps {
    onSuccess?: () => void;
}

/* =====================================================
   ANIMATION
===================================================== */

const stepAnim = {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
    transition: { duration: 0.35 },
};

/* =====================================================
   COMPONENT
===================================================== */

export default function LandingApplyModal({ onSuccess }: CourseCTAProps) {

    /* ================= STATE ================= */

    const [step, setStep] = useState(1);

    const [interest, setInterest] = useState("");
    const [webType, setWebType] = useState("");
    const [mode, setMode] = useState("");
    const [start, setStart] = useState("");

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formStartTime] = useState(Date.now());

    /* ================= NAVIGATION ================= */

    const next = () => setStep((s) => s + 1);
    const back = () => setStep((s) => s - 1);

    /* Skip stack step if not Full Stack */
    useEffect(() => {
        if (step === 2 && interest !== "Full Stack Development") {
            setStep(3);
        }
    }, [step, interest]);

    /* ================= RECOMMENDATION ================= */

    let recommended = "";

    if (interest === "Full Stack Development") {
        recommended =
            webType === "JavaScript (MERN)"
                ? "MERN Stack"
                : "Python Full Stack";
    } else if (interest === "AI & Data Science") {
        recommended = "Data Science";
    } else if (interest === "Data Analytics") {
        recommended = "Data Analyst";
    }

    /* ================= VALIDATION ================= */

    const validate = () => {
        const newErrors: { name?: string; phone?: string } = {};

        if (!name.trim() || name.length < 3 || !/^[a-zA-Z\s]+$/.test(name)) {
            newErrors.name = "Enter valid full name";
        }

        if (!/^[6-9]\d{9}$/.test(phone)) {
            newErrors.phone = "Enter valid 10-digit mobile number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /* ================= SUBMIT ================= */

    const handleSubmit = async () => {

        if (!validate()) return;
        if (Date.now() - formStartTime < 3000) return;
        if (isSubmitting) return;

        setIsSubmitting(true);

        try {

            const templateParams = {
                name,
                phone,
                email: `${phone}@lead.local`,
                city: "Website Lead",
                interest,
                webType,
                mode,
                start,
                recommended,
            };

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_KEY!
            );

            if (onSuccess) onSuccess();

        } catch (error) {
            console.error("EmailJS Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    /* =====================================================
       UI
    ===================================================== */

    return (
        <section className="relative bg-black text-white py-16 px-6 rounded-3xl border border-white/15 shadow-2xl overflow-hidden">

            <div className="max-w-5xl mx-auto">

                {/* TITLE */}
                <h2 className="text-[clamp(28px,5vw,56px)] font-semibold mb-6">
                    Design Your <span className="text-red-600">Career Path</span>
                </h2>

                {/* PROGRESS BAR */}
                <div className="h-[2px] bg-white/10 rounded-full mb-10 overflow-hidden">
                    <motion.div
                        className="h-full bg-red-600"
                        animate={{ width: `${step * 20}%` }}
                    />
                </div>

                <AnimatePresence mode="wait">

                    {/* ================= STEP 1 ================= */}
                    {step === 1 && (
                        <motion.div key="1" {...stepAnim}>
                            <p className="mb-6 text-white/60">Choose your path</p>

                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    "Full Stack Development",
                                    "AI & Data Science",
                                    "Data Analytics",
                                ].map(item => (
                                    <button
                                        key={item}
                                        onClick={() => { setInterest(item); next(); }}
                                        className="p-6 rounded-2xl border border-white/15 bg-white/[0.03] hover:border-red-500/40 transition"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* ================= STEP 2 ================= */}
                    {step === 2 && interest === "Full Stack Development" && (
                        <motion.div key="2" {...stepAnim}>
                            <p className="mb-6 text-white/60">Select your stack</p>

                            <div className="flex flex-wrap gap-4">
                                {["JavaScript (MERN)", "Python Full Stack"].map(stack => (
                                    <button
                                        key={stack}
                                        onClick={() => { setWebType(stack); next(); }}
                                        className="px-6 py-3 rounded-full border border-white/15 hover:border-red-500/40"
                                    >
                                        {stack}
                                    </button>
                                ))}
                            </div>

                            <button onClick={back} className="mt-6 text-white/40">← Back</button>
                        </motion.div>
                    )}

                    {/* ================= STEP 3 ================= */}
                    {step === 3 && (
                        <motion.div key="3" {...stepAnim}>
                            <p className="mb-6 text-white/60">Preferred learning mode</p>

                            <div className="flex flex-wrap gap-4">
                                {["Live Online", "Classroom", "Hybrid"].map(m => (
                                    <button
                                        key={m}
                                        onClick={() => { setMode(m); next(); }}
                                        className="px-6 py-3 rounded-full border border-white/15 hover:border-red-500/40"
                                    >
                                        {m}
                                    </button>
                                ))}
                            </div>

                            <button onClick={back} className="mt-6 text-white/40">← Back</button>
                        </motion.div>
                    )}

                    {/* ================= STEP 4 ================= */}
                    {step === 4 && (
                        <motion.div key="4" {...stepAnim}>
                            <p className="mb-6 text-white/60">When do you want to start?</p>

                            <div className="flex flex-wrap gap-4">
                                {["Next Batch", "Within 30 Days", "Planning Phase"].map(s => (
                                    <button
                                        key={s}
                                        onClick={() => { setStart(s); next(); }}
                                        className="px-6 py-3 rounded-full border border-white/15 hover:border-red-500/40"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>

                            <button onClick={back} className="mt-6 text-white/40">← Back</button>
                        </motion.div>
                    )}

                    {/* ================= STEP 5 ================= */}
                    {step === 5 && (
                        <motion.div key="5" {...stepAnim}>

                            <div className="mb-6 text-white/40 uppercase text-sm">
                                Recommended Program
                            </div>

                            <div className="p-6 mb-8 rounded-2xl border border-red-500/30 bg-black/60">
                                <h3 className="text-xl font-semibold text-red-500">
                                    {recommended}
                                </h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        placeholder="Full Name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        className={`w-full bg-black/40 border-b py-3 outline-none ${errors.name ? "border-red-500" : "border-white/15"
                                            }`}
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>

                                <div>
                                    <input
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        className={`w-full bg-black/40 border-b py-3 outline-none ${errors.phone ? "border-red-500" : "border-white/15"
                                            }`}
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="mt-8 px-10 py-4 rounded-full bg-red-600 hover:bg-red-500 transition disabled:opacity-50"
                            >
                                {isSubmitting ? "Submitting..." : "Get My Career Plan →"}
                            </button>

                            <button onClick={back} className="block mt-6 text-white/40">
                                ← Back
                            </button>

                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </section>
    );
}