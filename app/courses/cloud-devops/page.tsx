
import GenAIToolSection from "@/components/GenAIToolSection"

import TheGenAIShiftSection from "@/components/GenAITransformation"
import GenAIProjectsSection from "@/components/GenAIProject"
import TechStackSection from "@/components/TechStackGenAI"
import CurriculumRoadmapSection from "@/components/GenAICurriculum"
import FounderLetterSection from "@/components/FounderSection"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import GenAISection from "@/components/GenAISection"



export default function DataScienceSection() {

  return (
    <>

      <Navbar />
      <GenAISection/>
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

