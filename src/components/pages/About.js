import React from 'react';
import '../../App.css';
import Heading from '../Heading';
import ProfileSection from '../ProfileSection';
import SkillsSection from '../SkillsSection';
import CareerSection from '../CareerSection';
import VisionSection from '../VisionSection';
import ContactSection from '../ContactSection';
import ScrollUp from '../ScrollUp';
import SnsButtons from '../SnsButtons';
import Footer from '../Footer';

function About() {
    return (
        <>
            <Heading
            heading='ABOUT'
            JapaneseHeading='私について' />
            <SnsButtons />
            <ProfileSection />
            <SkillsSection />
            <CareerSection />
            <VisionSection />
            <ContactSection />
            <ScrollUp />
            <Footer />
        </>
    )
}

export default About;
