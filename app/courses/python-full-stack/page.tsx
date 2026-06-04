
import CourseStrategy from "@/components/CourseStrategy";
import CourseCTA from "@/components/cta-banner";
import MERNCTA from "@/components/MERNCTA";
import CoursesLearningJourney from "@/components/MernLearningJourney";
import OutcomeStatement from "@/components/OutcomeStatement";
import PythonHero from "@/components/PythonHero";
import PYTHONSyllabus from "@/components/PythonSyllabus";
import PythonToolSection from "@/components/PythonToolSection";

import Schema from "@/components/Schema";

import pythonCourseSchema from "@/lib/schema/pythonCourse";
import pythonFaqSchema from "@/lib/schema/pythonFaq";
import { Metadata } from "next";
import CourseFAQ from "@/components/CourseFAQ";

const pythonFaqs = [
  {
    question:
      "Is Python Full Stack a good career in Pune?",

    answer:
      "Yes, Python Full Stack developers are highly in demand across startups, SaaS companies and software organizations in Pune."
  },

  {
    question:
      "Do you provide internship support?",

    answer:
      "Yes, students work on real-world Python Full Stack projects with internship-focused training."
  },

  {
    question:
      "Which technologies are covered in the Python Full Stack course?",

    answer:
      "The course covers Python, Django, REST APIs, React.js and deployment workflows."
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
    "Python Full Stack Course in Pune | Django React Training",

  description:
    "Join Python Full Stack training in Pune with Django, React.js, APIs and real-world projects. Learn backend and frontend development with internship and placement support.",

  keywords: [
    "Python Full Stack Course Pune",
    "Django Training Pune",
    "Python Course Pune",
    "React JS Training Pune",
    "Full Stack Python Developer Course Pune",
    "Python Internship Pune"
  ],

  alternates: {
    canonical:
      "https://speedupinfotech.com/courses/python-full-stack",
  },

  openGraph: {
    title:
      "Python Full Stack Course in Pune | SpeedUp Infotech",
    description:
      "Python Full Stack classes in Shivaji Nagar Pune with Django, APIs and internship-focused training.",
    url:
      "https://speedupinfotech.com/courses/python-full-stack",

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
          "Python Full Stack Course in Shivaji Nagar Pune"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Python Full Stack Course in Pune",

    description:
      "Learn Python, Django and React with internship and placement support.",

    images: [
      "https://speedupinfotech.com/og-image.png"
    ]
  }
};


export default function PythonSection() {
  return (
    <>
      <Schema data={pythonCourseSchema} />

      <Schema data={pythonFaqSchema} />
      <PythonHero />
      <PythonToolSection />
      <OutcomeStatement />
      <PYTHONSyllabus />
      <CoursesLearningJourney />
      <CourseStrategy />
      <MERNCTA />
      <CourseFAQ faqs={pythonFaqs} />
      <CourseCTA />


    </>
  )
}

