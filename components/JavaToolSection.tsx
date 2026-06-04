"use client"

import { motion } from "framer-motion"
import Image from "next/image";


const tools = [

    "/icons/js.svg",
    "/icons/java.png",
    "/icons/springboot.png",

    "/icons/react.svg",
    "/icons/next.svg",
    "/icons/tailwind.svg",
    "/icons/bootstrap.svg",
    "/icons/docker.svg",
    "/icons/openai.svg",
];

export default function JavaToolSection() {
    return (
        <section className="relative bg-black text-white py-20 md:py-28 lg:py-36 overflow-hidden">

            {/* subtle dotted texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:22px_22px]" />

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16">

                {/* 🔹 MICRO HEADLINE */}
                <p className="text-[10px] sm:text-xs tracking-[0.35em] text-white/40 mb-12 md:mb-20">
                    TOOLS YOU'LL MASTER
                </p>

                <div className="grid lg:grid-cols-[140px_1fr] gap-6 md:gap-8">

                    {/* LEFT LABEL (desktop only) */}
                    <div className="hidden lg:flex items-start pt-10">
                        <div className="flex flex-col items-center gap-6">
                            <div className="w-px h-24 bg-white/20" />
                            <p className="text-xs tracking-[0.35em] text-white/40 rotate-[-90deg] origin-left">
                                STACK
                            </p>
                        </div>
                    </div>

                    {/* LOGO STRIP */}
                    <div className="relative overflow-hidden">

                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                duration: 35, // slightly slower = premium feel
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="flex gap-8 sm:gap-12 md:gap-16 w-max py-6 sm:py-8 md:p-10"
                        >
                            {[...tools, ...tools].map((logo, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -8, scale: 1.08 }}
                                    className="
                    w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32
                    rounded-full
                    bg-white/[0.02]
                    border border-white/10
                    backdrop-blur-md
                    flex items-center justify-center
                    hover:border-red-600
                    hover:shadow-[0_0_40px_rgba(255,0,0,0.25)]
                    transition
                  "
                                >
                                    <img
                                        src={logo}
                                        className="w-8 sm:w-10 md:w-12 opacity-70 hover:opacity-100 transition"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}
