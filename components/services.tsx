"use client";

import {
  motion,
  useTransform,
  useScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import ShaderCursorDistortion from "./ShaderCursorDistortion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const courses = [
  {
    title: "GenAI Engineering",
    badge: "Most Demand in 2027",
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
    title: "MERN + Devops :) AI",
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
    title: "AWS Cloud Devops :) AI",
    badge: "Most Popular",
    subtitle: "AWS • Cloud• Cloud",
    description:
      "Build scalable SaaS products, modern web applications, APIs and cloud-deployed systems with AI integrations.",
    outcomes: [
      "Cloud Developer",
      "Devops Engineer",
    ],
    href: "/courses/cloud-devops",
  },

  {
    title: "Full Stack + AI",
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
    badge:"Future Demands",
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
    title: "Data Science and Analytics",
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
        py-10 sm:py-10 md:py-10 lg:py-10
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
         <div className="relative max-w-4xl mx-auto text-center mb-16">

  {/* Ambient Glow */}

  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.35, 0.2],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
    }}
    className="
      absolute
      left-1/2
      top-0
      -translate-x-1/2
      h-40
      w-40
      rounded-full
      bg-red-500/20
      blur-3xl
    "
  />

  {/* Badge */}

  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-red-500/70
      
      backdrop-blur-xl
      px-4
      py-2
    "
  >
    <Sparkles size={12} className="text-red-500" />

    <span
      className="
        text-[10px]
        sm:text-xs
        font-semibold
        uppercase
        tracking-[0.2em]
        text-white
      "
    >
      AI-Powered Career Transformation
    </span>
  </motion.div>

  {/* Heading */}
<h2
  className="
    mt-4
    text-4xl
    sm:text-5xl
    md:text-6xl
    font-black

    text-transparent
    bg-clip-text

    bg-gradient-to-r
    from-white
    via-white
    to-red-500

    drop-shadow-[0_0_30px_rgba(231,0,11,0.35)]
  "
>
  BUILD THE SKILLS
  <br />
  COMPANIES WILL
  
  HIRE FOR IN 2027
</h2>

  {/* Animated Accent */}

  <motion.div
    animate={{
      width: ["80px", "120px", "80px"],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    className="
      mx-auto
      mt-6
      h-[3px]
      rounded-full
      bg-gradient-to-r
      from-transparent
      via-red-500
      to-transparent
    "
  />

  {/* Floating Particles */}

  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    className="
      absolute
      top-10
      right-10
      h-2
      w-2
      rounded-full
      bg-red-500/40
    "
  />

  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay: 1,
    }}
    className="
      absolute
      left-10
      bottom-5
      h-1.5
      w-1.5
      rounded-full
      bg-white/50
    "
  />

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
    whileTap={{ scale: 0.98 }}
    className="
      group
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      p-5
      m-10
      transition-all
      duration-300
    "
  >
    {/* Glow */}

    <div
      className="
        absolute
        -right-12
        -top-12
        h-32
        w-32
        rounded-full
        bg-red-500/10
        blur-3xl
      "
    />

    <div className="relative z-10">

      {/* Top */}

      <div className="flex items-start justify-between gap-4">

        <div>

          <span
            className="
              inline-flex
              rounded-full
              border
              border-red-500/20
              bg-red-500/10
              px-3
              py-1
              text-[10px]
              font-semibold
              uppercase
              tracking-wider
              text-red-400
            "
          >
            {course.badge}
          </span>

          <h3
            className="
              mt-4
              text-1xl
              md:text-2xl
              font-black
              leading-none
            "
          >
            {course.title}
          </h3>

          <p
            className="
              mt-2
              text-sm
              text-zinc-500
            "
          >
            {course.subtitle}
          </p>

        </div>

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-white/5
            border border-white/10
            shrink-0
          "
        >
          <ArrowUpRight size={18} />
        </div>

      </div>

      {/* Description */}

      <p
        className="
          mt-5
          text-sm
          leading-relaxed
          text-zinc-400
        "
      >
        {course.description}
      </p>

      {/* Outcomes */}

      <div className="mt-5 flex flex-wrap gap-2">

        {course.outcomes.slice(0, 4).map((item) => (
          <span
            key={item}
            className="
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-3
              py-1.5
              text-xs
              text-zinc-300
            "
          >
            {item}
          </span>
        ))}

      </div>

    </div>
  </motion.div>
</Link>
  );
}
