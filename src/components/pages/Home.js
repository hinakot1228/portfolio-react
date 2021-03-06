import React from 'react';
import '../../App.css';
import Main from '../Main';
import AboutSection from '../AboutSection';
import WorksSection from '../WorksSection';
import ContactSection from '../ContactSection';
import ScrollUp from '../ScrollUp';
import SnsButtons from '../SnsButtons';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <Main />
            <SnsButtons />
            <AboutSection />
            <WorksSection />
            <ContactSection />
            <ScrollUp />
            <Footer />
        </>
    )
}

export default Home;