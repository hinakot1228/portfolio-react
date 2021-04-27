import React from 'react';
import './CareerSection.css';
import AboutHeading from './AboutHeading';
import CareerItem from './CareerItem';

function CareerSection() {
    return (
        <>
            <section className='about-page-section'>
                <AboutHeading
                heading='Educational Background & Career'
                JapaneseHeading='学歴と経歴' />
                <div className='career-items'>
                    <CareerItem
                    year='15'
                    content='クラーク記念高等学校入学' />
                    <CareerItem
                    year='16'
                    content='オーストラリアに語学留学' />
                </div>
                
            </section>
        </>
    )
}

export default CareerSection
