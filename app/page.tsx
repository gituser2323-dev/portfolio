import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import { Work } from "@/components/work"
import { Speaking } from "@/components/speaking"
import { Footer } from "@/components/footer"
import WhoAmI from "@/components/WhoAmI"
import Contact from "@/components/contact"
import Hero from "@/components/hero"
import dynamic from "next/dynamic"


import PremiumStatsSection from "@/components/PremiumStatsSection"
import localBusinessSchema from "@/lib/schema/localBusiness"
import homeFaqSchema from "@/lib/schema/homeFaq"
import Schema from "@/components/Schema"
import { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Best IT Training Institute in Pune | MERN, AI & Full Stack Courses",

  description:
    "SpeedUp Infotech is a leading IT training institute in Pune offering MERN Stack, Java, Python, AI, Data Science, Data Analytics and DevOps courses with internships and placement support.",

  keywords: [
    "IT Training Institute Pune",
    "MERN Stack Course Pune",
    "Java Full Stack Course Pune",
    "Python Full Stack Course Pune",
    "Data Science Course Pune",
    "Data Analyst Course Pune",
    "DevOps Course Pune",
    "AI Course Pune"
  ],

  alternates: {
    canonical: "https://speedupinfotech.com",
  },

  openGraph: {
    title:
      "Best IT Training Institute in Pune | SpeedUp Infotech",

    description:
      "Join Pune's leading IT training institute for MERN Stack, AI, Data Science and Full Stack Development.",

    url:
      "https://speedupinfotech.com",

    siteName:
      "SpeedUp Infotech",

    locale:
      "en_IN",

    type:
      "website",

    images: [
      {
        url:
          "https://speedupinfotech.com/og-image.png",

        width: 1200,

        height: 630,

        alt:
          "SpeedUp Infotech Pune"
      }
    ]
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Best IT Training Institute in Pune",

    description:
      "Learn MERN Stack, AI, Data Science and Full Stack Development with internship and placement support.",

    images: [
      "https://speedupinfotech.com/og-image.png"
    ]
  }
};
const CoursesExpertise = dynamic(
  () => import("@/components/services").then((m) => m.CoursesExpertise)
)


const Portfolio = dynamic(
  () => import("@/components/portfolio").then((m) => m.Portfolio)
)

const CoursesLearningJourney = dynamic(
  () => import("@/components/MernLearningJourney")
)

const PlacedStudents = dynamic(
  () => import("@/components/process")
)

const ModernFAQ = dynamic(
  () => import("@/components/ModernFAQ")
)

const CourseCTA = dynamic(
  () => import("@/components/cta-banner")
)


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhoAmI />

      <Schema data={localBusinessSchema} />

      <Schema data={homeFaqSchema} />
      <About />


      <CoursesExpertise />

      <Work />
      <Speaking />
      <Contact />
      <Footer />
    </main>
  )
}
