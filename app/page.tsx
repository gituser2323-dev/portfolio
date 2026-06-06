import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import { Work } from "@/components/work"
import { Speaking } from "@/components/speaking"
import { Footer } from "@/components/footer"
import WhoAmI from "@/components/WhoAmI"
import Contact from "@/components/contact"
import Hero from "@/components/hero"
import dynamic from "next/dynamic"


import localBusinessSchema from "@/lib/schema/localBusiness"
import homeFaqSchema from "@/lib/schema/homeFaq"
import Schema from "@/components/Schema"


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

      {/* <Schema data={localBusinessSchema} /> */}

      {/* <Schema data={homeFaqSchema} /> */}
      <About />


      <CoursesExpertise />

      <Work />
      <Speaking />
      <Contact />
      <Footer />
    </main>
  )
}
