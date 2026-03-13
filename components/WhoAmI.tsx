"use client"

import Image from "next/image"
import { WhatIDo } from "./WhatIDo"

export default function WhoAmI() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">
      {/* subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* ================= LEFT — PHOTO ================= */}
          <div className="relative group">
            {/* soft aura */}
            <div className="absolute -inset-10 rounded-3xl bg-white/5 blur-3xl opacity-30" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/cover.jpeg"
                alt="Pratik Sabale"
                width={560}
                height={720}
                priority
                className="
                  object-cover
                  grayscale
                  brightness-75
                  transition-all
                  duration-700
                  ease-out
                  group-hover:grayscale-0
                  group-hover:brightness-100
                "
              />
            </div>
          </div>

         <WhatIDo/>

        </div>
      </div>
    </section>
  )
}
