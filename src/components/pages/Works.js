import React from 'react';
import '../../App.css';
import Heading from '../Heading';
import WorksSideBar from '../WorksSideBar';
import ContactSection from '../ContactSection';
import SnsButtons from '../SnsButtons';
import Footer from '../Footer';

function Works() {
    return (
        <>
            <Heading
            heading='WORKS'
            JapaneseHeading='制作したもの' />
            <WorksSideBar />
            <SnsButtons />
            <ContactSection />
            <ContactSection />
            <ContactSection />
            <ContactSection />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Works;
