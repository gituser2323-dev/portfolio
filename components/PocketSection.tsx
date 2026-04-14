"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";

const items = [
  { id: 1, src: "/img17.png", left: "8%" },
  { id: 2, src: "/img18.png", left: "28%" },
  { id: 3, src: "/img19.png", left: "48%" },
  { id: 4, src: "/img18.png", left: "68%" },
  { id: 5, src: "/img17.png", left: "85%" },
];

export default function PocketSection() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  // 🔥 Mouse Parallax
  const mouseX = useSpring(mouse.x, { stiffness: 60, damping: 20 });
  const mouseY = useSpring(mouse.y, { stiffness: 60, damping: 20 });

  // 🔥 Perspective tilt
  const rotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-12, 0]);

  // 🔥 VIHA-style Y animation (stagger + overshoot)
  const createY = (delay = 0, distance = -260) =>
    useSpring(
      useTransform(
        scrollYProgress,
        [0, 0.3 + delay, 0.7 + delay, 1],
        [140, 140, distance - 40, distance]
      ),
      {
        stiffness: 120,
        damping: 18,
        mass: 0.6,
      }
    );

  const yValues = [
    createY(0, -240),
    createY(0.05, -280),
    createY(0.1, -320),
    createY(0.15, -300),
    createY(0.2, -260),
  ];

  // 🔥 Overshoot scale
  const scaleGlobal = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [0.9, 1.05, 1]
  );

  return (
    <div className="bg-[#ede8e0] min-h-[200vh]">
      <div ref={containerRef} className="h-[180vh]">

        <div
          className="sticky top-0 h-screen flex items-end justify-center px-4"
          onMouseMove={(e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 40;
            const y = (e.clientY / window.innerHeight - 0.5) * 40;
            setMouse({ x, y });
          }}
        >
          <div className="perspective-[1200px] w-full max-w-[1100px]">

            <motion.div
              style={{
                rotateX,
                rotateY,
                x: mouseX,
                y: mouseY,
              }}
              className="relative bg-[#c9b99a] rounded-t-xl shadow-2xl"
            >
              {/* TAB */}
              <div className="absolute -top-6 md:-top-8 left-6 md:left-10 w-[120px] md:w-[160px] h-[30px] md:h-[40px] bg-[#d8cdb4] rounded-t-xl" />

              {/* LIP */}
              <div className="absolute top-0 w-full h-[18px] md:h-[22px] bg-[#b5a485] z-20 rounded-t-xl" />

              {/* OBJECT AREA */}
              <div className="relative h-[220px] md:h-[280px] overflow-hidden">

                {items.map((item, i) => {
                  const isActive = active === item.id;

                  return (
                    <motion.img
                      key={item.id}
                      src={item.src}
                      onMouseEnter={() => setActive(item.id)}
                      onMouseLeave={() => setActive(null)}
                      className="absolute top-[-140px] w-[140px] md:w-[220px] lg:w-[260px] cursor-pointer"
                      style={{
                        left: item.left,
                        y: yValues[i],
                        rotate: i % 2 === 0 ? 8 : -8,
                        scale: isActive ? 1.25 : scaleGlobal,
                        zIndex: isActive ? 100 : i + 1,

                        // 🔥 Depth effects
                        filter: isActive
                          ? "blur(0px)"
                          : active
                          ? "blur(3px)"
                          : "blur(0px)",

                        opacity: isActive ? 1 : active ? 0.4 : 1,

                        boxShadow: isActive
                          ? "0px 40px 100px rgba(0,0,0,0.4)"
                          : "0px 10px 30px rgba(0,0,0,0.2)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 20,
                      }}
                    />
                  );
                })}

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>

              {/* BOTTOM */}
              <div className="flex flex-col md:flex-row justify-between gap-6 p-6 md:p-8">

                {/* NOTE */}
                <div className="w-[120px] md:w-[140px] h-[120px] md:h-[140px] bg-yellow-300 rotate-[-6deg] p-3 md:p-4 shadow-md text-xs md:text-sm">
                  Hover & explore 🚀
                </div>

                {/* DOTS */}
                <div className="flex gap-3 justify-center md:justify-end">
                  <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded-full bg-orange-500" />
                  <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded-full bg-yellow-500" />
                  <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded-full bg-teal-600" />
                  <div className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded-full bg-green-700" />
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}