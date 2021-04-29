import React from 'react';
import '../../App.css';
import Main from '../Main';
import AboutSection from '../AboutSection';
import WorksSection from '../WorksSection';
import ContactSection from '../ContactSection';
import ScrollUp from '../ScrollUp';

function Home() {
    return (
        <>
            <Main />
            <AboutSection />
            <WorksSection />
            <ContactSection />
            <ScrollUp />
        </>
    )
}

export default Home;