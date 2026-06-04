
import CourseStrategy from "@/components/CourseStrategy"
import CourseCTA from "@/components/cta-banner"
import DataScienceHero from "@/components/DatascienceHero"
import DSToolSection from "@/components/Datasciencetoolsection"
import DSSyllabus from "@/components/DSSyllabus"
import MERNCTA from "@/components/MERNCTA"
import CoursesLearningJourney from "@/components/MernLearningJourney"
import OutcomeStatement from "@/components/OutcomeStatement"
import Schema from "@/components/Schema";
import CourseFAQ from "@/components/CourseFAQ";

import dataScienceCourseSchema from "@/lib/schema/dataScienceCourse";
import dataScienceFaqSchema from "@/lib/schema/dataScienceFaq";
import { Metadata } from "next"

const dataAnalystFaqs = [
  {
    question:
      "Is Data Analytics a good career in Pune?",

    answer:
      "Yes, Data Analysts are highly in demand across startups, SaaS companies and enterprise organizations in Pune."
  },

  {
    question:
      "Do you provide internship support?",

    answer:
      "Yes, students work on real-world analytics dashboards and internship-focused projects."
  },

  {
    question:
      "Which technologies are covered in the Data Analyst course?",

    answer:
      "The course covers Excel, SQL, Power BI, Python and business intelligence workflows."
  },

  {
    question:
      "Do you provide placement assistance?",

    answer:
      "Yes, we provide placement guidance, interview preparation and portfolio support."
  }
]

export const metadata: Metadata = {
  title:
    "Data Science Course in Pune | AI ML Python Training",

  description:
    "Join Data Science training in Shivaji Nagar Pune with Python, Machine Learning, AI and real-world projects. Learn analytics, models and deployment with internship and placement support.",

  keywords: [
    "Data Science Course Pune",
    "Machine Learning Course Pune",
    "AI Course Pune",
    "Python Data Science Training Pune",
    "Deep Learning Course Pune",
    "Data Science Internship Pune"
  ],

  alternates: {
    canonical:
      "https://speedupinfotech.com/courses/data-science",
  },

  openGraph: {
    title:
      "Data Science Course in Pune | SpeedUp Infotech",

    description:
      "Learn AI, Machine Learning and Python through real-world projects and placement-focused training.",

    url:
      "https://speedupinfotech.com/courses/data-science",

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
          "Data Science Course in Pune"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Data Science Course in Pune",

    description:
      "Learn AI, ML and Python with internship and placement support.",

    images: [
      "https://speedupinfotech.com/og-image.png"
    ]
  }
};

export default function DataScienceSection() {

  return (
    <>
       <Schema data={dataScienceCourseSchema} />

      <Schema data={dataScienceFaqSchema} />

      <DataScienceHero />
      <DSToolSection />
      <OutcomeStatement />
      <DSSyllabus />
      <CoursesLearningJourney />
      <CourseStrategy/>
      <CourseFAQ faqs={dataAnalystFaqs} />
      <MERNCTA />
      <CourseCTA />

    </>
  )
}

