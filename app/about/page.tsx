import AboutSpeedUpSection from '@/components/AboutSpeedUpSection'
import CareerSystemSection from '@/components/CareerSystemSection'
import CourseCTA from '@/components/cta-banner'
import FinalCTASection from '@/components/FinalCTASection'
import LearningApproachSection from '@/components/LearningApproachSection'
import MentorsSection from '@/components/MentorsSection'
import OutcomesSection from '@/components/OutcomesSection'
import ProgramsOverviewSection from '@/components/ProgramsOverviewSection'
import Wordblock from '@/components/Wordblock'

export default function page() {
    return (
        <>
            <Wordblock />
            <LearningApproachSection />
            <AboutSpeedUpSection/>
            <ProgramsOverviewSection />
            <MentorsSection />
            <OutcomesSection />
            <CareerSystemSection />
            <FinalCTASection />
            <CourseCTA />


        </>
    )
}
