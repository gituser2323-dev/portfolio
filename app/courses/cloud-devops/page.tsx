
import DevOpsHero from "@/components/DevopsHero"

import MernToolsSection from "@/components/MernToolsSection";
import OutcomeStatement from "@/components/OutcomeStatement";
import MERNSyllabus from "@/components/mernSyllabus";
import MERNCTA from "@/components/MERNCTA";
import CourseCTA from "@/components/cta-banner";
import CoursesLearningJourney from "@/components/MernLearningJourney";
import CourseStrategy from "@/components/CourseStrategy";
import DevopsSyllabi from "@/components/Devopssyllabi";
import DevopsTool from "@/components/DevopsTool";
import CourseFAQ from "@/components/CourseFAQ";
import Schema from "@/components/Schema";

import devopsCourseSchema from "@/lib/schema/devopsCourse";
import devopsFaqSchema from "@/lib/schema/devopsFaq";
import { Metadata } from "next";
const devopsFaqs = [
  {
    question:
      "Is DevOps a good career in Pune?",

    answer:
      "Yes, DevOps engineers are highly in demand across cloud, SaaS and enterprise companies in Pune."
  },

  {
    question:
      "Do you provide internship support?",

    answer:
      "Yes, students work on real-world cloud and deployment projects with internship-focused training."
  },

  {
    question:
      "Which technologies are covered in the DevOps course?",

    answer:
      "The course covers AWS, Docker, Kubernetes, Linux, CI/CD pipelines and cloud infrastructure workflows."
  },

  {
    question:
      "Do you provide placement assistance?",

    answer:
      "Yes, we provide placement guidance, interview preparation and project portfolio support."
  }
]
/* =================================
   SEO METADATA
================================= */

export const metadata: Metadata = {
  title:
    "Cloud and DevOps Course in Pune | AWS Docker Kubernetes Training",

  description:
    "Join Cloud and DevOps training in Pune with AWS, Docker, Kubernetes and CI/CD pipelines. Learn deployment, automation and cloud infrastructure with internship and placement support.",

  keywords: [
    "DevOps Course Pune",
    "AWS Training Pune",
    "Docker Kubernetes Training Pune",
    "Cloud Computing Course Pune",
    "CI CD Training Pune",
    "DevOps Internship Pune"
  ],

  alternates: {
    canonical:
      "https://speedupinfotech.com/courses/devops",
  },

  openGraph: {
    title:
      "Cloud and DevOps Course in Pune | SpeedUp Infotech",

    description:
      "Learn AWS, Docker, Kubernetes and CI/CD through real-world projects and placement-focused training.",

    url:
      "https://speedupinfotech.com/courses/devops",

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
          "Cloud and DevOps Course in Pune"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Cloud and DevOps Course in Pune",

    description:
      "Learn AWS, Docker and Kubernetes with internship and placement support.",

    images: [
      "https://speedupinfotech.com/og-image.png"
    ]
  }
};



export default function Courses() {
  return (
    <>
      <Schema data={devopsCourseSchema} />

      <Schema data={devopsFaqSchema} />

      <DevOpsHero />
      <DevopsTool />
      <OutcomeStatement />
      <DevopsSyllabi />
      <CoursesLearningJourney />
      <CourseStrategy />
      <CourseFAQ faqs={devopsFaqs} />
      <MERNCTA />
      <CourseCTA />

    </>
  )
}
