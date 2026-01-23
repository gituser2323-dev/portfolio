import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Work } from "@/components/work"
import { Speaking } from "@/components/speaking"
import { Articles } from "@/components/articles"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Speaking />
      <Articles />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
