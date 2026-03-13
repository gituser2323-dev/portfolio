import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
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

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <About />

      <WhoAmI />
      <Blocks />

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
