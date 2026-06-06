import CareerSystemSection from '@/components/CareerSystemSection'
import FinalCTASection from '@/components/FinalCTASection'
import LearningApproachSection from '@/components/LearningApproachSection'
import OutcomesSection from '@/components/OutcomesSection'
import { CoursesExpertise } from '@/components/services'

export default function page() {
    return (
        <>
            <LearningApproachSection />
            <CoursesExpertise />
            <OutcomesSection />
            <CareerSystemSection />
            <FinalCTASection />


        </>
    )
}
