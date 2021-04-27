import React from 'react';
import '../../App.css';
import Heading from '../Heading';
import Footer from '../Footer';
import ProfileSection from '../ProfileSection';
import SkillsSection from '../SkillsSection';


function About() {
    return (
        <>
            <Heading
            heading='ABOUT'
            JapaneseHeading='私について' />
            <ProfileSection />
            <SkillsSection />
            <Footer />
        </>
    )
}

export default About;
