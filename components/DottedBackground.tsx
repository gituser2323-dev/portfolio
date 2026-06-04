"use client"

export default function DottedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black-500">

      {/* DOT GRID */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />


      {/* VIGNETTE */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, black 85%)",
        }}
      />

    </div>
  )
}