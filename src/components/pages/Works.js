import React from 'react';
import '../../App.css';
import Heading from '../Heading';
import WorksSideBar from '../WorksSideBar';
import SitesIndex from '../SitesIndex';
import ContactSection from '../ContactSection';
import SnsButtons from '../SnsButtons';
import ScrollUp from '../ScrollUp';
import Footer from '../Footer';

function Works() {
    return (
        <>
            <Heading
            heading='WORKS'
            JapaneseHeading='制作したもの' />
            <WorksSideBar />
            <SitesIndex />
            <SnsButtons />
            <ContactSection />
            <ScrollUp />
            <Footer />
        </>
    )
}

export default Works;
