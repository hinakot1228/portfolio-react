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
                <div className='about-img'>
                    <img src="http://placehold.jp/300x300.png"></img>
                </div>
                <div className='about-text'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius et esse doloribus non temporibus illum corrupti, officiis aperiam iste iure voluptate molestiae rem exercitationem suscipit vitae laudantium doloremque molestias vel?
                    </p>                              
                </div>
            </div>
            <Link to='/about'>
                <Button buttonStyle='btn--outline' />
            </Link>
        </section>
    )
}

export default AboutSection
