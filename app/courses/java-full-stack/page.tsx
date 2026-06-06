
import GenAIToolSection from "@/components/GenAIToolSection"

import GenAIHero from "@/components/GenAIHero"

import TheGenAIShiftSection from "@/components/GenAITransformation"
import GenAIProjectsSection from "@/components/GenAIProject"
import TechStackSection from "@/components/TechStackGenAI"
import CurriculumRoadmapSection from "@/components/GenAICurriculum"
import FounderLetterSection from "@/components/FounderSection"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"



export default function Hero() {

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

