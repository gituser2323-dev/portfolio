import FounderLetterSection from "@/components/FounderSection";
import CurriculumRoadmapSection from "@/components/GenAICurriculum";
import GenAIProjectsSection from "@/components/GenAIProject";
import GenAISection from "@/components/GenAISection";
import GenAIToolSection from "@/components/GenAIToolSection";
import TheGenAIShiftSection from "@/components/GenAITransformation";
import { Navbar } from "@/components/navbar";
import TechStackSection from "@/components/TechStackGenAI";
import { Footer } from "react-day-picker";


export default function Hero() {

  return (
    <>

      <Navbar />
      <GenAISection />
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

