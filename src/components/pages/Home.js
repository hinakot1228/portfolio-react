import React from 'react';
import '../../App.css';
import Main from '../Main';
import AboutSection from '../AboutSection';
import WorksSection from '../WorksSection';
import ContactSection from '../ContactSection';

function Home() {
    return (
        <>
            <Main />
            <AboutSection />
            <WorksSection />
            <ContactSection />
        </>
    )
}

export default Home;