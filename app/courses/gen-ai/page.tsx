
import CourseStrategy from "@/components/CourseStrategy"
import CourseCTA from "@/components/cta-banner"
import DataScienceHero from "@/components/DatascienceHero"
import GenAIToolSection from "@/components/GenAIToolSection"
import DSToolSection from "@/components/GenAIToolSection"
import DSSyllabus from "@/components/DSSyllabus"
import GenAIHero from "@/components/GenAIHero"
import MERNCTA from "@/components/MERNCTA"
import CoursesLearningJourney from "@/components/MernLearningJourney"
import OutcomeStatement from "@/components/OutcomeStatement"
import TheGenAIShiftSection from "@/components/GenAITransformation"
import GenAIProjectsSection from "@/components/GenAIProject"
import TechStackSection from "@/components/TechStackGenAI"
import CurriculumRoadmapSection from "@/components/GenAICurriculum"
import FounderLetterSection from "@/components/FounderSection"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"



export default function DataScienceSection() {

  return (
    <>

      <Navbar />
      <GenAIHero />
      <GenAIToolSection />
      <TheGenAIShiftSection />
      <GenAIProjectsSection />
      <TechStackSection />
      <CurriculumRoadmapSection />
      <FounderLetterSection />

      <Footer />

    </>
  )
}

