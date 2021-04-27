import React from 'react';
import '../../App.css';
import Heading from '../Heading';
import WorksSideBar from '../WorksSideBar';
import ContactSection from '../ContactSection';
import Footer from '../Footer';

function Works() {
    return (
        <>
            <Heading
            heading='WORKS'
            JapaneseHeading='制作したもの' />
            <WorksSideBar />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Works;
