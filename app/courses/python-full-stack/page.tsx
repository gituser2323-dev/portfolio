
import GenAIToolSection from "@/components/GenAIToolSection"
import TheGenAIShiftSection from "@/components/GenAITransformation"
import GenAIProjectsSection from "@/components/GenAIProject"
import TechStackSection from "@/components/TechStackGenAI"
import CurriculumRoadmapSection from "@/components/GenAICurriculum"
import FounderLetterSection from "@/components/FounderSection"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import GenAIHeroo from "@/components/GenAIHero"



export default function Hero() {

  return (
    <>

      <Navbar />
      {/* <GenAIHeroo/> */}
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

