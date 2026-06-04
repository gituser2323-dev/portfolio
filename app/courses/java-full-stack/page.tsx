

import MernToolsSection from "@/components/MernToolsSection";
import OutcomeStatement from "@/components/OutcomeStatement";
import MERNSyllabus from "@/components/mernSyllabus";
import MERNCTA from "@/components/MERNCTA";
import CourseCTA from "@/components/cta-banner";
import CoursesLearningJourney from "@/components/MernLearningJourney";
import CourseStrategy from "@/components/CourseStrategy";
import JavaHero from "@/components/JavaHero";
import JavaSyllabi from "@/components/JavaSyllabi";
import JavaToolSection from "@/components/JavaToolSection";

import Schema from "@/components/Schema";

import javaCourseSchema from "@/lib/schema/javaCourse";
import CourseFAQ from "@/components/CourseFAQ";


import javaFaqSchema from "@/lib/schema/javaFaq";
import { Metadata } from "next";

const javaFaqs = [
  {
    question:
      "Is Java Full Stack a good career in Pune?",

    answer:
      "Yes, Java Full Stack developers are highly in demand across enterprise companies, startups and IT organizations in Pune."
  },

  {
    question:
      "Do you provide internship support?",

    answer:
      "Yes, students work on real-world Java Full Stack projects with internship-focused training."
  },

  {
    question:
      "Which technologies are covered in the Java Full Stack course?",

    answer:
      "The course covers Java, Spring Boot, REST APIs, React.js, MySQL and deployment workflows."
  },

  {
    question:
      "Do you provide placement assistance?",

    answer:
      "Yes, we provide placement guidance, mock interviews and portfolio support for students."
  }
]

export const metadata: Metadata = {
    title:
        "Java Full Stack Course in Pune | Spring Boot React Training",
    description:
        "Learn Java Full Stack development near FC Road Pune with Spring Boot and React training.",

    keywords: [
        "Java Full Stack Course Pune",
        "Spring Boot Training Pune",
        "Java Course Pune",
        "React JS Training Pune",
        "Full Stack Java Developer Course Pune",
        "Java Internship Pune"
    ],

    alternates: {
        canonical:
            "https://speedupinfotech.com/courses/java-full-stack",
    },

    openGraph: {
        title:
            "Java Full Stack Course in Pune | SpeedUp Infotech",

        description:
            "Learn Java Full Stack with Spring Boot and React.js through real projects and placement-focused training.",

        url:
            "https://speedupinfotech.com/courses/java-full-stack",

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
                    "Java Full Stack Course in Pune"
            }
        ]
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Java Full Stack Course in Pune",

        description:
            "Learn Java, Spring Boot and React with internship and placement support.",

        images: [
            "https://speedupinfotech.com/og-image.png"
        ]
    }
};


export default function Courses() {
    return (
        <>

            <Schema data={javaCourseSchema} />

            <Schema data={javaFaqSchema} />

            <JavaHero />
            <JavaToolSection />
            <OutcomeStatement />
            <JavaSyllabi />
            <CoursesLearningJourney />
            <CourseStrategy />
            <CourseFAQ faqs={javaFaqs} />
            <MERNCTA />
            <CourseCTA />

        </>
    )
}
