
import CourseStrategy from "@/components/CourseStrategy"
import CourseCTA from "@/components/cta-banner"
import DASyllabus from "@/components/DASyllabus"
import DataAnalystHero from "@/components/DataAnalystHero"
import DataAnalystToolSection from "@/components/DataAnalystToolSection"
import MERNCTA from "@/components/MERNCTA"
import CoursesLearningJourney from "@/components/MernLearningJourney"
import OutcomeStatement from "@/components/OutcomeStatement"
import Schema from "@/components/Schema"


import dataAnalystCourseSchema from "@/lib/schema/dataAnalystCourse";
import dataAnalystFaqSchema from "@/lib/schema/dataAnalystFaq";
import { Metadata } from "next"
import CourseFAQ from "@/components/CourseFAQ";
const dataScienceFaqs = [
  {
    question:
      "Is Data Science a good career in Pune?",

    answer:
      "Yes, Data Science and AI professionals are highly in demand across startups, SaaS companies and enterprise organizations in Pune."
  },

  {
    question:
      "Do you provide internship support?",

    answer:
      "Yes, students work on real-world AI and Machine Learning projects with internship-focused training."
  },

  {
    question:
      "Which technologies are covered in the Data Science course?",

    answer:
      "The course covers Python, Pandas, Machine Learning, Deep Learning, AI and data visualization workflows."
  },

  {
    question:
      "Do you provide placement assistance?",

    answer:
      "Yes, we provide placement guidance, interview preparation and portfolio support for students."
  }
]

export const metadata: Metadata = {
  title:
    "Data Analyst Course in Pune | Excel SQL Power BI Training",

  description:
    "Join Data Analyst training in JM Road Pune with Excel, SQL, Power BI and Python. Learn dashboards, analytics and business intelligence with internship and placement support.",

  keywords: [
    "Data Analyst Course Pune",
    "Power BI Training Pune",
    "SQL Course Pune",
    "Excel Training Pune",
    "Business Analyst Course Pune",
    "Data Analytics Internship Pune"
  ],

  alternates: {
    canonical:
      "https://speedupinfotech.com/courses/data-analyst",
  },

  openGraph: {
    title:
      "Data Analyst Course in Pune | SpeedUp Infotech",

    description:
      "Learn Excel, SQL, Power BI and Python through real-world analytics projects and placement-focused training.",

    url:
      "https://speedupinfotech.com/courses/data-analyst",

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
          "Data Analyst Course in Pune"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Data Analyst Course in Pune",

    description:
      "Learn Excel, SQL, Power BI and Python with internship and placement support.",

    images: [
      "https://speedupinfotech.com/og-image.png"
    ]
  }
};

export default function CourseHero() {

  return (
    <>
      <Schema data={dataAnalystCourseSchema} />

      <Schema data={dataAnalystFaqSchema} />
      <DataAnalystHero />
      <DataAnalystToolSection />
      <OutcomeStatement />
      <DASyllabus />
      <CoursesLearningJourney />
      <CourseStrategy />
      <CourseFAQ faqs={dataScienceFaqs} />
      <MERNCTA />
      <CourseCTA />

    </>
  )
}

