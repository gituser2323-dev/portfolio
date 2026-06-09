import CourseCTA from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import PlacementSuccessCollage from "@/components/PlacementSuccessCollage";
import TestimonialCollage from "@/components/TestimonialCollage";

export default function page() {
  return (
    <>
    <Navbar/>
    {/* <PlacementHeroEditorial/> */}
    <PlacementSuccessCollage/>
     <TestimonialCollage/>
    <Footer/>
    
    
    </>
  )
}
