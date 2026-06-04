"use client"

import CoursesHero from "@/components/CourseHero"
import CoursePrograms from "@/components/CourseProgram"
import LearningExperience from "@/components/LearningExperience"
import LearningRoadmap from "@/components/LearningRoadmap"
import FinalCTA from "./CTA"
import CourseCTA from "@/components/cta-banner"
import TestimonialCollage from "@/components/TestimonialCollage"
import CourseStrategy from "@/components/CourseStrategy"

export default function Courses() {
  return (
    <>
      <CoursesHero />
      <CoursePrograms />
      <LearningExperience/>
      <LearningRoadmap/>
      <TestimonialCollage/>
      <CourseStrategy/>
      <FinalCTA/>
      <CourseCTA />
      
    </>
  )
}
