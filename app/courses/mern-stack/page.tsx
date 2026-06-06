import FounderLetterSection from "@/components/FounderSection";
import CurriculumRoadmapSection from "@/components/GenAICurriculum";
import GenAIHeroo from "@/components/GenAIHero";
import GenAIProjectsSection from "@/components/GenAIProject";
import GenAIToolSection from "@/components/GenAIToolSection";
import TheGenAIShiftSection from "@/components/GenAITransformation";
import { Navbar } from "@/components/navbar";
import TechStackSection from "@/components/TechStackGenAI";
import { Footer } from "react-day-picker";


export default function Hero() {

  return (
    <>

      <Navbar />
      <GenAIHeroo />
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

