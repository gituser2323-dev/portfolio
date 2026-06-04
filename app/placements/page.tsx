import CourseCTA from "@/components/cta-banner";
import PlacementCredibility from "@/components/PlacementCredibility";
import PlacementHeroEditorial from "@/components/PlacementHero";
import PlacementOutcomesSection from "@/components/PlacementOutcomesSection";
import PlacementSuccessCollage from "@/components/PlacementSuccessCollage";
import TestimonialCollage from "@/components/TestimonialCollage";

export default function page() {
  return (
    <>
    <PlacementHeroEditorial/>
    <PlacementSuccessCollage/>
     <TestimonialCollage/>
    <PlacementCredibility/>
    <PlacementOutcomesSection/>
    <CourseCTA/>
    
    
    </>
  )
}
