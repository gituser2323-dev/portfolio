"use client";

import { motion } from "framer-motion";

export default function SpeedupContactInfo() {
    return (
        <section className="
            relative bg-black text-white 
            py-16 sm:py-20 
            overflow-hidden
        ">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:22px_22px]" />

            <div className="
                relative z-10 
                max-w-7xl mx-auto 
                px-5 sm:px-8 
                grid lg:grid-cols-2 
                gap-16 lg:gap-28 
                items-start
            ">

                {/* LEFT SIDE */}
                <div className="space-y-14 sm:space-y-20">

                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                            Email Us
                        </h3>
                        <p className="text-white/50 mb-2 text-sm sm:text-base">
                            We read them
                        </p>
                        <a
                            href="mailto:support@speedupinfotech.com"
                            className="text-red-500 text-base sm:text-lg hover:underline break-all"
                        >
                            support@speedupinfotech.com
                        </a>
                    </div>

                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                            Call Us
                        </h3>
                        <p className="text-white/50 mb-2 text-sm sm:text-base">
                            We are happy to answer them.
                        </p>
                        <a
                            href="tel:+917219777599"
                            className="text-red-500 text-base sm:text-lg hover:underline"
                        >
                            +91 7219 777 599
                        </a>
                    </div>

                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                            Head Office (Pune, India)
                        </h3>
                        <p className="text-white/50 leading-relaxed text-sm sm:text-base">
                            SpeedUp Infotech,<br />
                            3rd Floor, 1204/16, DNG House,<br />
                            Avenir Building, Jangali Maharaj Rd,<br />
                            Opp. Bal Gandharv Police Station,<br />
                            Beside Shree Gajanan Maharaj Temple,<br />
                            Shivajinagar, Pune, Maharashtra 411004
                        </p>
                    </div>

                </div>

                {/* RIGHT SIDE — MAP */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    {/* Red Glow Pulse */}
                    <div className="
                        absolute -inset-4 sm:-inset-6 
                        bg-red-600/10 
                        blur-3xl 
                        rounded-3xl 
                        group-hover:bg-red-600/20 
                        transition duration-500 
                        pointer-events-none
                    " />

                    <motion.div
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 120 }}
                        className="
                            relative rounded-2xl sm:rounded-3xl 
                            overflow-hidden 
                            border border-white/15  
                            shadow-[0_30px_80px_rgba(0,0,0,0.7)]
                        "
                    >
                        <iframe
                            title="SpeedUp Location"
                            src="https://www.google.com/maps?q=JM+Road+Pune&output=embed"
                            className="
                                w-full 
                                h-[280px] sm:h-[360px] lg:h-[420px]
                                grayscale contrast-125 brightness-90
                            "
                            loading="lazy"
                        />
                    </motion.div>

                    {/* Directions Button */}
                    <div className="mt-5 sm:mt-6 flex justify-center">
                        <a
                            href="https://www.google.com/maps?q=SpeedUp+Infotech+JM+Road+Pune"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                px-6 sm:px-8 
                                py-2.5 sm:py-3 
                                text-sm sm:text-base
                                rounded-full 
                                border border-red-500 
                                text-red-500 
                                hover:bg-red-500 
                                hover:text-white 
                                transition inline-block
                            "
                        >
                            Get Directions →
                        </a>
                    </div>

                    <p className="text-white/40 text-xs sm:text-sm mt-4 text-center px-4 sm:px-0">
                        Visit our office for in-person mentorship and career guidance.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
