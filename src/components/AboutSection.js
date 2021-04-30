import React from 'react';
import Heading from './Heading';
import './AboutSection.css';
import {Link} from 'react-router-dom';
import {Button} from './Button';

function AboutSection() {
    return (
        <section className='about-section'>
            <Heading
            heading='ABOUT'
            JapaneseHeading='私について' />

            <div className='about-wrapper'> 
                {/* <div className='about-img'>
                    <img src=""></img>
                </div> */}
                <div className='about-text'>
                    <p>
                        21歳大学4年生Tanaka Hinakoと申します。大学では外国語や外国の文化・歴史について勉強をしています。<br></br>また、2020年8月からプログラミング学習を始め、６カ月間スクールに通いHTML, CSS, PHP, Laravel, MySQLなどを身につけました。<br></br>2021年3月からエンジニア長期インターンをしています！
                    </p>
                                               
                </div>
                <Link to='/about'>
                        <Button buttonStyle='btn--outline' />
                </Link>
            </div>
            
        </section>
    )
}

export default AboutSection
