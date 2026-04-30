import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Work } from "@/components/work"
import { Speaking } from "@/components/speaking"
import { Articles } from "@/components/articles"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { JourneyTimeline } from "@/components/JourneyTimeline"
import WhoAmI from "@/components/WhoAmI"
import Contact from "@/components/contact"
import Blocks from "./Blocks"
import Hero from "@/components/hero"
import PocketSection from "@/components/PocketSection"
import Playground from "@/components/WordBlock"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhoAmI />

      {/* <Playground/> */}
      <Services />
      <About />


      {/* <PocketSection/> */}
      {/* <Blocks /> */}

      <Services />
      {/* <JourneyTimeline/> */}
      <Work />
      <Speaking />
      {/* <Articles /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  )
}
