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
                    event='クラーク記念高等学校に入学'
                    />
                    <CareerItem
                    year='16.1-4'
                    event='オーストラリアに語学留学'
                    />
                    <CareerItem
                    year='18'
                    event='クラーク記念高等学校を卒業 、埼玉にある私立大学に入学'
                    />
                    <CareerItem
                    year='18.8-9'
                    event='フィリピンセブに語学留学'
                    />
                    <CareerItem
                    year='19.9'
                    event='韓国に語学留学'
                    />
                    <CareerItem
                    year='20.8'
                    event='プログラミング学習を開始'
                    />
                    <CareerItem
                    year='21.3-'
                    event='エンジニア長期インターンを開始'
                    />
                </div>
                
            </section>
        </>
    )
}

export default CareerSection
