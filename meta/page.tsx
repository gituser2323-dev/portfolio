"use client"

import HeroExperience from "@/components/HeroExperience"
import LandingCareerJourneyModal from "@/components/LandingCareerJourneyModal"

export default function Landing() {
    return (
        <main className="bg-black text-whpm2 restart next-appite overflow-x-hidden">
            <HeroExperience/>
            <LandingCareerJourneyModal/>
        </main>
    )
}