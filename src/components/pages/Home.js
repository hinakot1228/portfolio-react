import React from 'react';
import '../../App.css';
import Main from '../Main';
import AboutSection from '../AboutSection';
import WorksSection from '../WorksSection';
import ContactSection from '../ContactSection';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <Main />
            <AboutSection />
            <WorksSection />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Home;