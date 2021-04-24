import React from 'react';
import Heading from './Heading';
import './AboutSection.css';

function AboutSection() {
    return (
        <section className='about-section'>
            <Heading
            heading='ABOUT'
            JapaneseHeading='私について' />

            <div className='about-wrapper'> 
                <img src="http://placehold.jp/300x300.png" alt="" class="img-preview"></img>
                <div className='about-text'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius et esse doloribus non temporibus illum corrupti, officiis aperiam iste iure voluptate molestiae rem exercitationem suscipit vitae laudantium doloremque molestias vel?
                    </p>                              
                </div>
            </div>
        </section>
    )
}

export default AboutSection
