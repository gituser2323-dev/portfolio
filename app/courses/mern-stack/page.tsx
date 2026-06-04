import type { Metadata } from "next";

import MernToolsSection from "@/components/MernToolsSection";
import MernHero from "@/components/MernHero";
import OutcomeStatement from "@/components/OutcomeStatement";
import MERNSyllabus from "@/components/mernSyllabus";
import MERNCTA from "@/components/MERNCTA";
import CourseCTA from "@/components/cta-banner";
import CoursesLearningJourney from "@/components/MernLearningJourney";
import CourseStrategy from "@/components/CourseStrategy";

import Schema from "@/components/Schema";

import mernCourseSchema from "@/lib/schema/mernCourse";

import mernFaqSchema from "@/lib/schema/mernFaq";
import localBusinessSchema from "@/lib/schema/localBusiness";
import CourseFAQ from "@/components/CourseFAQ";

const mernFaqs = [
  {
    question:
      "Is MERN Stack a good career in Pune?",

    answer:
      "Yes, MERN Stack developers are highly in demand across startups and software companies in Pune."
  },

  {
    question:
      "Do you provide internship support?",

    answer:
      "Yes, students work on real-world projects and internship-focused programs."
  },

  {
    question:
      "Which technologies are covered in the MERN Stack course?",

    answer:
      "The course covers MongoDB, Express.js, React.js, Node.js, APIs and deployment workflows."
  },

  {
    question:
      "Do you provide placement assistance?",

    answer:
      "Yes, we provide placement guidance, interview preparation and portfolio support."
  }
]
/* =================================
   SEO METADATA
================================= */

export const metadata: Metadata = {
  title:
    "MERN Stack Course in Pune | Training with Internship & Placement Support",

  description:
    "Join the best MERN Stack training institute in Pune near FC Road & Shivaji Nagar. Learn MongoDB, Express, React and Node.js with real projects, mentorship and placement assistance.",

  keywords: [
    "MERN Stack Course Pune",
    "React JS Training Pune",
    "Node JS Course Pune",
    "MongoDB Training Pune",
    "Full Stack Developer Course Pune",
    "MERN Stack Internship Pune"
  ],

  alternates: {
    canonical:
      "https://speedupinfotech.com/courses/mern-stack",
  },

  openGraph: {
    title:
      "MERN Stack Course in Pune | SpeedUp Infotech",


    description:
      "Join MERN Stack training in Deccan Pune near FC Road and Shivaji Nagar with real projects and placement support.",

    url:
      "https://speedupinfotech.com/courses/mern-stack",

    siteName: "SpeedUp Infotech",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url:
          "https://speedupinfotech.com/og-image.png",

        width: 1200,

        height: 630,

        alt:
          "MERN Stack Course in Pune"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "MERN Stack Course in Pune",

    description:
      "Learn MERN Stack with internship and placement support.",

    images: [
      "https://speedupinfotech.com/og-image.png"
    ]
  }
};



/* =================================
   MAIN PAGE
================================= */

export default function MERNSection() {
  return (
    <>
      <Schema data={mernCourseSchema} />

      <Schema data={mernFaqSchema} />
      <Schema data={localBusinessSchema} />
      <MernHero />
      <MernToolsSection />
      <OutcomeStatement />
      <MERNSyllabus />
      <CoursesLearningJourney />
      <CourseStrategy />
      <CourseFAQ faqs={mernFaqs} />


      <MERNCTA />
      <CourseCTA />
    </>
  );
}