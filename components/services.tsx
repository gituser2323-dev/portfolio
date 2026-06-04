"use client";

import {
  motion,
  useTransform,
  useScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import ShaderCursorDistortion from "./ShaderCursorDistortion";
import RevealText from "./RevealText";

const courses = [
  {
    title: "GenAI Engineering",
    badge: "Most In-Demand in 2027",
    subtitle: "Generative AI • Agents • RAG • MCP",
    description:
      "Build AI applications, AI agents, LLM workflows, RAG systems and production-ready AI products used by modern startups and enterprises.",
    outcomes: [
      "GenAI Engineer",
      "AI Application Developer",
      "AI Product Builder",
    ],
    href: "/courses/gen-ai",
  },

  {
    title: "MERN + AI",
    badge: "Most Popular",
    subtitle: "MERN • Next.js • Cloud",
    description:
      "Build scalable SaaS products, modern web applications, APIs and cloud-deployed systems with AI integrations.",
    outcomes: [
      "Full Stack Developer",
      "Software Engineer",
      "Frontend Engineer",
    ],
    href: "/courses/mern-stack",
  },

  {
    title: "Java Full Stack + AI",
    badge: "Enterprise Path",
    subtitle: "Java • Spring Boot • React",
    description:
      "Master enterprise-grade application development, backend architecture and production-ready systems used by large organizations.",
    outcomes: [
      "Java Developer",
      "Backend Engineer",
      "Full Stack Engineer",
    ],
    href: "/courses/java-full-stack",
  },

  {
    title: "Python Full Stack + AI",
    subtitle: "Python • APIs • Automation",
    description:
      "Build backend systems, automation tools, cloud services and AI-powered applications using Python.",
    outcomes: [
      "Python Developer",
      "Automation Engineer",
      "Backend Developer",
    ],
    href: "/courses/python-full-stack",
  },

  {
    title: "Data Science",
    badge: "Analytics & AI",
    subtitle: "Analytics • Data Science • ML",
    description:
      "Turn data into business decisions using SQL, Power BI, Python, Machine Learning and modern analytics workflows.",
    outcomes: [
      "Data Analyst",
      "Data Scientist",
      "Business Analyst",
    ],
    href: "/courses/data-science",
  },
  {
    title: "Data Analytics",
    badge: "Analytics & AI",
    subtitle: "Analytics • Data Science • ML",
    description:
      "Turn data into business decisions using SQL, Power BI, Python, Machine Learning and modern analytics workflows.",
    outcomes: [
      "Data Analyst",
      "Data Scientist",
      "Business Analyst",
    ],
    href: "/courses/data-analyst",
  },
];

export function CoursesExpertise() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const headingY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -100]
  );

  useEffect(() => {
    const el = document.createElement("canvas");

    el.style.position = "fixed";
    el.style.pointerEvents = "none";
    el.style.left = "0";
    el.style.top = "0";
    el.style.width = "100%";
    el.style.height = "100%";
    el.style.zIndex = "0";

    document.body.appendChild(el);

    return () => {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        py-14 sm:py-16 md:py-20 lg:py-24
        bg-black text-white
        overflow-x-hidden
      "
    >
      <ShaderCursorDistortion />

      {/* Decorative Blob */}
      <div
        className="
          absolute top-0 left-0
          w-[250px] h-[250px]
          sm:w-[350px] sm:h-[350px]
          md:w-[500px] md:h-[500px]
          pointer-events-none
        "
      />

      <div
        className="
          max-w-[1500px]
          mx-auto
          px-4 sm:px-6 md:px-10 lg:px-16
          relative z-10
          w-full
        "
      >

        {/* HERO */}
        <motion.div
          style={{ y: headingY }}
          className="
            text-center
            max-w-5xl
            mx-auto
            mb-14 sm:mb-16 md:mb-20 lg:mb-28
          "
        >


          {/* SEO TEXT */}
          <p className="sr-only">
            Industry-focused IT training institute in Pune offering
            MERN Stack, Java Full Stack, Python, AI,
            Data Science and DevOps courses with placement support.
          </p>


        </motion.div>

        {/* Section Label */}
        <div
          className="
            mt-14 sm:mt-16 md:mt-20 lg:mt-24
            mb-6 sm:mb-8 md:mb-12
            text-center
          "
        >
          <RevealText text="Choose Your Future Role" />
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-red-500 uppercase tracking-[0.3em] text-xs font-medium">
              AI-Powered Career Transformation
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black ">
              BUILD THE SKILLS
              COMPANIES WILL
              HIRE FOR IN 2027
            </h2>

            <p className="mt-6 text-zinc-400 text-lg">
              Every path is designed around real projects,
              AI-powered workflows, mentorship and industry readiness.
            </p>
          </div>
        </div>

        {/* Glass Container */}
        <div
          className="
            rounded-2xl sm:rounded-3xl
            border border-white/15
            bg-white/[0.02]
            backdrop-blur-2xl
            overflow-hidden
            w-full
          "
        >
          {courses.map((course) => (
            <CourseRow
              key={course.title}
              course={course}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseRow({
  course,
  index,
}: {
  course: any;
  index: number;
}) {
  return (
    <Link href={course.href}>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="
          group
          relative
          overflow-hidden
          border-b border-white/10
          last:border-none
          cursor-pointer
        "
      >
        {/* Background Glow */}
        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.4 }}
          className="
            absolute inset-0
            bg-gradient-to-r
            from-red-500/10
            via-red-500/5
            to-transparent
          "
        />

        {/* Huge Number */}
        <div
          className="
            absolute
            right-8
            top-1/2
            -translate-y-1/2
            text-[180px]
            font-black
            text-white/[0.03]
            pointer-events-none
            hidden lg:block
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        <div
          className="
            relative z-10
            px-8 md:px-12
            py-10 md:py-14
          "
        >
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* LEFT */}

            <div className="lg:col-span-5">
              <span
                className="
                  inline-flex
                  px-4 py-2
                  rounded-full
                  border border-red-500/20
                  bg-red-500/10
                  text-red-400
                  text-xs
                  uppercase
                  tracking-[0.2em]
                "
              >
                {course.badge}
              </span>

              <motion.h3
                variants={{
                  rest: { x: 0 },
                  hover: { x: 8 },
                }}
                className="
                  mt-6
                  text-4xl
                  md:text-6xl
                  font-black
                  tracking-[-0.05em]
                  leading-none
                "
              >
                {course.title}
              </motion.h3>

              <p
                className="
                  mt-4
                  text-red-400
                  uppercase
                  tracking-[0.25em]
                  text-sm
                "
              >
                {course.subtitle}
              </p>
            </div>

            {/* CENTER */}

            <div className="lg:col-span-4">
              <p
                className="
                  text-zinc-400
                  text-lg
                  leading-relaxed
                "
              >
                {course.description}
              </p>

              <div className="mt-8">
                <div
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-zinc-500
                    mb-3
                  "
                >
                  Career Outcomes
                </div>

                <div className="flex flex-wrap gap-2">
                  {course.outcomes.map((item: string) => (
                    <span
                      key={item}
                      className="
                        px-3 py-2
                        rounded-full
                        bg-white/5
                        border border-white/10
                        text-sm
                        text-zinc-300
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div className="lg:col-span-3 flex lg:justify-end">
              <motion.div
                variants={{
                  rest: {
                    scale: 1,
                    x: 0,
                  },
                  hover: {
                    scale: 1.08,
                    x: 8,
                  },
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="
                  h-16
                  w-16
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  flex items-center justify-center
                  text-2xl
                  backdrop-blur-xl
                "
              >
                →
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
