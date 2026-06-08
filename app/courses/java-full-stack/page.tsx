import { Footer } from "@/components/footer";
import FounderLetterSection from "@/components/FounderSection";
import CurriculumRoadmapSection from "@/components/GenAICurriculum";
import GenAIProjectsSection from "@/components/GenAIProject";
import TheGenAIShiftSection from "@/components/GenAITransformation";
import MernHeroSection from "@/components/MERNAISection";
import MERNFullStackAIStack from "@/components/MERNAIToolSection";
import MERNFullStackRoadmapSection from "@/components/MERNCurriculumRoadmapSection";
import MERNFullStackAIProjectsSection from "@/components/MERNProjectsSection";
import MERNFullStackAIEvolutionSection from "@/components/MERNShiftSection";
import MERNEngineeringLayersSection from "@/components/MERNTechStackSection";
import { Navbar } from "@/components/navbar";
import TechStackSection from "@/components/TechStackGenAI";


export default function Hero() {

  return (
    <>

      <Navbar />
      <MernHeroSection />
      <MERNFullStackAIStack />
      <MERNFullStackAIEvolutionSection />
      <MERNFullStackAIProjectsSection/>
      <MERNEngineeringLayersSection />
      <MERNFullStackRoadmapSection />
      <FounderLetterSection />

      <Footer />

    </>
  )
}

