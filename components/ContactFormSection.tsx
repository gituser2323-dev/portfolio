"use client";

import { useState, useRef, FormEvent } from "react";
import axios from "axios";

const API_URL = "https://si-crm-backend.vercel.app/api/enquiry";

export default function ContactLearning() {

  const formRef = useRef<HTMLFormElement>(null);

  const [course, setCourse] = useState("");
  const [goal, setGoal] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formStartTime] = useState(Date.now());

  // ================= OPTION BUTTON =================
  const Option = ({
    label,
    selected,
    onClick,
  }: {
    label: string;
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm transition border ${selected
          ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          : "bg-white/5 border-white/15 text-white/60 hover:border-white/40"
        }`}
    >
      {label}
    </button>
  );

  // ================= VALIDATION =================
  const validate = () => {

    if (!course || !goal) {
      setError("Please complete all selections.");
      return false;
    }

    if (!name.trim() || name.length < 3 || !/^[a-zA-Z\s]+$/.test(name)) {
      setError("Enter valid full name");
      return false;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Enter valid 10-digit mobile number");
      return false;
    }

    setError("");
    return true;
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if (!validate()) return;

    // anti bot protection
    if (Date.now() - formStartTime < 3000) return;

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {

      const payload = {
        name,
        phone,
        email: `${phone}@lead.local`,
        city: "Website Lead",
        interest: course,
        goal,
        source: "Contact Page",
      };

      const res = await axios.post(API_URL, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const id = res?.data?.data?._id;

      if (id) {
        sessionStorage.setItem("enquireId", id);
      }

      window.location.href = "/thank-you";

      // reset
      setName("");
      setPhone("");
      setCourse("");
      setGoal("");

    } catch (err: any) {

      const msg =
        err?.response?.data?.message?.toLowerCase?.() ||
        err?.response?.data?.err?.toLowerCase?.() ||
        "";

      // duplicate entry → treat as success
      if (msg.includes("already") || err?.response?.status === 409) {
        window.location.href = "/thank-you";
      } else {
        console.error("Submission error:", err);
        setError("Something went wrong. Try again.");
      }

    } finally {
      setIsSubmitting(false);
    }
  };

  // ================= UI =================
  return (
    <section
      className="
      relative bg-black text-white min-h-screen 
      flex items-center overflow-hidden
      py-20 lg:py-0
    "
    >
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:22px_22px]" />

      <div
        className="
        relative z-10 
        max-w-7xl mx-auto 
        px-5 sm:px-8 lg:px-8
        w-full 
        grid lg:grid-cols-2 
        gap-14 lg:gap-10 
        items-center
      "
      >

        {/* LEFT */}
        <div>
          <h1
            className="
            text-[clamp(42px,10vw,140px)] 
            lg:text-[clamp(60px,8vw,140px)]
            font-semibold leading-[0.9] tracking-tight
          "
          >
            Shall we <br className="hidden sm:block" />
            Design your Career?
          </h1>
        </div>

        {/* RIGHT */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-12 lg:space-y-14"
        >

          {/* COURSE */}
          <div>
            <p className="text-white/50 mb-4 text-sm sm:text-base">
              I want to learn …
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["Data Science",
                "Data Analytics",
                "Cloud Devops",
                "Java Full Stack",
                "MERN Stack",
                "Python Full Stack",

              ].map((c) => (
                <Option
                  key={c}
                  label={c}
                  selected={course === c}
                  onClick={() => setCourse(c)}
                />
              ))}
            </div>
          </div>

          {/* GOAL */}
          <div>
            <p className="text-white/50 mb-4 text-sm sm:text-base">
              Goal …
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                "Switch Career",
                "Job Ready",
                "Build Projects",
                "Upgrade Skills",
              ].map((g) => (
                <Option
                  key={g}
                  label={g}
                  selected={goal === g}
                  onClick={() => setGoal(g)}
                />
              ))}
            </div>
          </div>

          {/* DETAILS */}
          <div
            className="
            grid gap-8 
            pt-6 border-t border-white/15
            sm:grid-cols-2
          "
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="My Name"
              className="
                bg-black/40 border-b border-white/15
                py-3 px-2 text-sm sm:text-base
                outline-none focus:border-white transition
              "
            />

            <input
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              placeholder="My Phone no."
              inputMode="numeric"
              className="
                bg-black/40 border-b border-white/15
                py-3 px-2 text-sm sm:text-base
                outline-none focus:border-white transition
              "
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* CTA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              mt-4 lg:mt-6
              w-full sm:w-auto
              px-10 py-3 rounded-full
              bg-red-600 hover:bg-red-500
              transition text-white font-semibold
              shadow-lg shadow-red-600/30
              disabled:opacity-50
            "
          >
            {isSubmitting ? "Submitting..." : "Start My Path →"}
          </button>

        </form>
      </div>
    </section>
  );
}