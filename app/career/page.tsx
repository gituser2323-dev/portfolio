"use client"

import CareerBenefitsSection from "@/components/CareerBenefitsSection"
import CareerCultureSection from "@/components/CareerCultureSection"
import CareerGrowthSection from "@/components/CareerGrowthSection"
import CareerHero from "@/components/CareerHero"
import CourseCTA from "@/components/cta-banner"
import MeetBuildersSection from "@/components/MeetBuildersSection"
import OpenRolesSection from "@/components/OpenRolesSection"
import PlacementStatsSection from "@/components/PlacementStatsSection"

const page = () => {
  return (
    <>
      <CareerHero />

      <CareerCultureSection />
      <OpenRolesSection />

      <CareerGrowthSection />
      {/* <MeetBuildersSection /> */}
      <CareerBenefitsSection />
      <PlacementStatsSection />
      <CourseCTA />
    </>
  )
}

export default page