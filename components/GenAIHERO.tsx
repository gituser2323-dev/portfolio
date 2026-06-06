"use client";

import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser"


export default function GenAIHeroo() {
    const heroRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");
    const [goal, setGoal] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [curriculumOpen, setCurriculumOpen] = useState(false);

    const [error, setError] = useState("");

    useEffect(() => {
        const card = cardRef.current;

        gsap.from(".badge", {
            opacity: 0,
            y: 20,
            duration: 0.8,
        });

        gsap.from(".title-line", {
            opacity: 0,
            y: 80,
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
        });

        gsap.from(".desc", {
            opacity: 0,
            y: 30,
            delay: 0.4,
            duration: 1,
        });

        gsap.from(".cta", {
            opacity: 0,
            y: 30,
            delay: 0.6,
            duration: 1,
        });

      if (!card) return;

const rotateY = gsap.quickTo(card, "rotateY", {
  duration: 0.4,
});

const rotateX = gsap.quickTo(card, "rotateX", {
  duration: 0.4,
});

const move = (e: MouseEvent) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  rotateY(x * 10);
  rotateX(-y * 10);
};

        window.addEventListener("mousemove", move);

        return () => {
            window.removeEventListener("mousemove", move);
        };
    }, []);

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!name || !phone) {
            setError("Please fill all required fields");
            return;
        }

        if (!/^[6-9]\d{9}$/.test(phone)) {
            setError("Enter a valid phone number");
            return;
        }

        try {
            setLoading(true);
            setError("");

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name,
                    phone,
                    role,
                    goal,
                    submittedAt: new Date().toLocaleString(),
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setSuccess(true);

            setName("");
            setPhone("");
            setRole("");
            setGoal("");

            setTimeout(() => {
                setOpen(false);
                setSuccess(false);
            }, 2000);
        } catch (err) {
            console.error(err);
            setError("Failed to submit");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            ref={heroRef}
            className="
      relative
      min-h-screen
      bg-black
      flex
      items-center
      justify-center
      overflow-hidden
      px-6
    "
        >
            {/* Noise */}
            <div
                className="
        absolute inset-0 opacity-[0.03]
        bg-[url('/noise.png')]
      "
            />

            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-white/10 blur-[180px]" />

            {/* Floating Ring */}
            <div className="absolute h-[800px] w-[800px] rounded-full border border-white/5" />

            <div
                ref={cardRef}
                className="
        relative
        w-full
        max-w-7xl
        rounded-[48px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-3xl
        p-8
        md:p-20
        shadow-[0_0_120px_rgba(255,255,255,0.05)]
        will-change-transform
      "
            >
                {/* Glass Reflection */}
                <div
                    className="
          absolute
          inset-0
          rounded-[48px]
          bg-gradient-to-br
          from-white/10
          via-transparent
          to-transparent
          pointer-events-none
        "
                />

                <div className="max-w-5xl mx-auto text-center my-10">
                    <div
                        className="
            badge
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            px-4
            py-2
            text-xs
            uppercase
            tracking-[0.3em]
            text-white/50
            backdrop-blur-xl
          "
                    >
                        AI ENGINEERING PROGRAM
                    </div>

                    <div className="mt-10 overflow-hidden">
                        <h1
                            className="
              title-line
              text-white
              text-6xl
              md:text-8xl
              lg:text-[9rem]
              font-semibold
              tracking-tight
              leading-[0.88]
            "
                        >
                            Build
                        </h1>

                        <span
                            className="
              title-line
              text-white
              text-3xl
              md:text-8xl
              lg:text-[7rem]
              font-semibold
              mx-5
              tracking-tight
              leading-[0.88]
            "
                        >
                            Intelligent
                        </span>

                        <span
                            className="
              title-line
              text-white/30
              text-1xl
              md:text-8xl
              lg:text-[7rem]
              font-semibold
              tracking-tight
              leading-[0.88]
            "
                        >
                            Systems
                        </span>
                    </div>

                    <p
                        className="
            desc
            mt-10
            max-w-2xl
            mx-auto
            text-lg
            md:text-xl
            text-white/55
            leading-relaxed
          "
                    >
                        Master LLMs, RAG, Agents, MCP, LangGraph,
                        AI Automation and Production Deployment.
                        Build AI systems that solve real business
                        problems at scale.
                    </p>

                    <div
                        className="
            cta
            mt-14
            flex
            justify-center
            gap-4
            flex-wrap
          "
                    >

                        <button
                            onClick={() => setOpen(true)}
                            className="
    group
    relative
    h-14
    px-8
    rounded-2xl
    overflow-hidden
    bg-white
    text-black
    font-medium
    transition-all
    hover:scale-[1.03]
  "
                        >
                            Apply Now
                        </button>

<button
  onClick={() => setCurriculumOpen(true)}
  className="
    h-14
    px-8
    rounded-2xl
    border
    border-white/10
    bg-white/5
    text-white
    backdrop-blur-xl
  "
>
  Explore Curriculum
</button>
                    </div>
                </div>



                {/* Bottom Metrics */}
                <div
                    className="
          mt-20
          grid
          grid-cols-3
          border-t
          border-white/10
          pt-10
        "
                >
                    {[
                        ["6+", "AI Projects"],
                        ["12+", "Production Tools"],
                        ["100%", "Hands-On"],
                    ].map(([v, t]) => (
                        <div key={t} className="text-center">
                            <div className="text-3xl font-semibold text-white">
                                {v}
                            </div>
                            <div className="text-white/40 mt-2">
                                {t}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {open && (
                <div
                    className="
      fixed
      inset-0
      z-[999]
      flex
      items-center
      justify-center
      bg-black/70
      backdrop-blur-xl
      px-6
    "
                >
                    {/* Close Layer */}
                    <div
                        className="absolute inset-0"
                        onClick={() => setOpen(false)}
                    />

                    <div
                        className="
        relative
        w-full
        max-w-xl
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-3xl
        p-8
        shadow-[0_0_100px_rgba(255,255,255,0.08)]
      "
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="
          absolute
          right-5
          top-5
          text-white/50
          hover:text-white
        "
                        >
                            ✕
                        </button>

                        <div className="mb-8">
                            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                                AI ENGINEERING COHORT
                            </p>

                            <h2 className="mt-3 text-4xl font-semibold text-white">
                                Apply Now
                            </h2>

                            <p className="mt-3 text-white/50">
                                Start your AI Engineering journey.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >                           <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Full Name"
                                className="w-full h-14 rounded-xl border border-white/10 bg-white/5 px-5 text-white outline-none"
                            />


                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Phone Number"
                                className="w-full h-14 rounded-xl border border-white/10 bg-white/5 px-5 text-white outline-none"
                            />

                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full h-14 rounded-xl border border-white/10 bg-white/5 px-5 text-white outline-none"
                            >
                                <option value="">Current Role</option>
                                <option value="Student">Student</option>
                                <option value="Developer">Developer</option>
                                <option value="Working Professional">
                                    Working Professional
                                </option>
                                <option value="Founder">Founder</option>
                            </select>
                            <textarea
                                rows={4}
                                value={goal}
                                onChange={(e) => setGoal(e.target.value)}
                                placeholder="What do you want to achieve with AI?"
                                className="w-full rounded-xl border border-white/10 bg-white/5 p-5 text-white outline-none"
                            />

                            {error && (
                                <p className="text-red-400 text-sm">
                                    {error}
                                </p>
                            )}

                            {success && (
                                <p className="text-green-400 text-sm">
                                    Application submitted successfully!
                                </p>
                            )}<button
                                type="submit"
                                disabled={loading}
                                className="
    w-full
    h-14
    rounded-2xl
    bg-white
    text-black
    font-medium
    transition-all
    hover:scale-[1.02]
    disabled:opacity-50
  "
                            >
                                {loading
                                    ? "Submitting..."
                                    : "Submit Application →"}
                            </button>
                        </form>
                    </div>
                </div>
            )}


        </section>


    );
}
