"use client"

import { useEffect, useRef } from "react"
import Matter from "matter-js"
import { motion } from "framer-motion";

const words = [
  { text: "AI Learners", highlight: true },
  { text: "Code" },
  { text: "Developers", highlight: true },
  { text: "Build" },
  { text: "Thinkers" },
  { text: "Creators", highlight: true },
  { text: "Deploy" },
  { text: "Get Hired" },
  { text: "Strategists" },
  { text: "Industry-Ready" },
  { text: "Dreamers" },
  { text: "Doers", highlight: true },
]

export default function Playground() {
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sceneRef.current) return

    const isMobile = window.innerWidth < 768
    const physicsHeight = isMobile ? 160 : 460

    const Engine = Matter.Engine
    const Render = Matter.Render
    const Runner = Matter.Runner
    const Bodies = Matter.Bodies
    const Composite = Matter.Composite
    const Mouse = Matter.Mouse
    const MouseConstraint = Matter.MouseConstraint

    const engine = Engine.create()
    engine.gravity.y = 0.8

    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: physicsHeight,
        wireframes: false,
        background: "transparent",
      },
    })

    const ground = Bodies.rectangle(
      sceneRef.current.clientWidth / 2,
      physicsHeight,
      sceneRef.current.clientWidth,
      40,
      { isStatic: true, render: { visible: false } }
    )

    const leftWall = Bodies.rectangle(-10, physicsHeight / 2, 20, 1000, { isStatic: true })
    const rightWall = Bodies.rectangle(sceneRef.current.clientWidth + 10, physicsHeight / 2, 20, 1000, { isStatic: true })

    const bodies = words.map((w, i) =>
      Bodies.rectangle(
        Math.random() * sceneRef.current.clientWidth,
        -50 - i * (isMobile ? 60 : 80),
        isMobile
          ? w.text.length * 9 + 60
          : w.text.length * 12 + 90,
        isMobile ? 44 : 60,
        {
          restitution: 0.2,
          friction: 0.4,
          density: 0.002,
          chamfer: { radius: isMobile ? 20 : 28 },
          render: {
            fillStyle: w.highlight ? "#000000" : "#ffffff",
            strokeStyle: "#000",
            lineWidth: 1,
          },
        }
      )
    )

    const mouse = Mouse.create(render.canvas)
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    })

    Composite.add(engine.world, [ground, leftWall, rightWall, ...bodies, mouseConstraint])

    Render.run(render)
    const runner = Runner.create()
    Runner.run(runner, engine)

    const labels = bodies.map((body, i) => {
      const el = document.createElement("div")
      el.innerText = words[i].text
      el.style.position = "absolute"
      el.style.pointerEvents = "none"

      // Responsive styling
      el.style.padding = isMobile ? "10px 24px" : "18px 46px"
      el.style.fontWeight = "800"
      el.style.fontSize = isMobile ? "14px" : "20px"
      el.style.borderRadius = isMobile
        ? "10px 999px 999px 10px"
        : "14px 999px 999px 14px"

      if (words[i].highlight) {
        el.style.background = "#ff1e1e"
        el.style.color = "#fff"
      } else {
        el.style.background = "#ffffff"
        el.style.color = "#000"
      }

      el.style.letterSpacing = "0.5px"
      el.dataset.baseRotate = (Math.random() * 8 - 4).toString()

      sceneRef.current?.appendChild(el)
      return { body, el }
    })

    Matter.Events.on(engine, "afterUpdate", () => {
      labels.forEach(({ body, el }) => {
        el.style.left = `${body.position.x - el.offsetWidth / 2}px`
        el.style.top = `${body.position.y - el.offsetHeight / 2}px`
        el.style.transform = `rotate(calc(${body.angle}rad + ${el.dataset.baseRotate}deg))`
      })
    })

    const handleResize = () => {
      if (!sceneRef.current) return
      render.canvas.width = sceneRef.current.clientWidth
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      Render.stop(render)
      Runner.stop(runner)
      Matter.World.clear(engine.world, false)
      Matter.Engine.clear(engine)
      render.canvas.remove()
    }
  }, [])

  return (
<section className="relative bg-black text-white min-h-[100svh] overflow-hidden pt-14 sm:pt-16 md:pt-20">
      {/* Ambient Glow */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] md:w-[900px] h-[300px] sm:h-[400px] md:h-[500px] bg-red-600/10 blur-[120px] md:blur-[160px]" /> */}
      {/* <div className="absolute bottom-0 right-0 w-[300px] sm:w-[450px] md:w-[600px] h-[250px] sm:h-[300px] md:h-[400px] bg-white/5 blur-[100px] md:blur-[140px]" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-16 sm:pt-20 md:pt-24">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] sm:text-[11px] tracking-[0.45em] text-white/35 uppercase mb-4 sm:mb-6"
        >
          Who We Are
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(36px,9vw,90px)] font-bold leading-[1] md:leading-[0.95] tracking-tight max-w-5xl"
        >
          Build Industry-Ready <br />
          <span className="text-red-500">Developers.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/40 mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed"
        >
          We don’t just teach tools. We train students to think like Industry-Ready Software Developers, build Industry-ready systems, and develop the confidence to solve real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 sm:mt-8 text-xs sm:text-sm text-white/35"
        >
          Project-Based Learning • Mentor Guidance • Industry-Oriented Curriculum
        </motion.div>
      </div>

      <div
        ref={sceneRef}
        className="
          absolute left-0 w-full
          h-[240px] sm:h-[200px] md:h-[360px]
          top-[75%] sm:top-[72%] md:top-[68%]
          -translate-y-1/2
        "
      />
    </section>
  )
}
