import React from 'react';
import '../../App.css';
import Heading from '../Heading';
import ProfileSection from '../ProfileSection';
import SkillsSection from '../SkillsSection';
import CareerSection from '../CareerSection';
import VisionSection from '../VisionSection';
import ContactSection from '../ContactSection';
import ScrollUp from '../ScrollUp';


function About() {
    return (
        <>
            <Heading
            heading='ABOUT'
            JapaneseHeading='私について' />
            <ProfileSection />
            <SkillsSection />
            <CareerSection />
            <VisionSection />
            <ContactSection />
            <ScrollUp />

        </>
    )
}

export default About;
