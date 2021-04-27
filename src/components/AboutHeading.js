import React from 'react';
import './AboutHeading.css';

function AboutHeading(props) {
    return (
        <>
            <div className='about-heading-container'>
                <h3>{props.heading}</h3>
                <span>{props.JapaneseHeading}</span>
            </div>
        </>
    )
}

export default AboutHeading;