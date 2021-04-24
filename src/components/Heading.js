import React from 'react';
import './Heading.css';

function Heading(props) {
    return (
        <>
            <div className='heading-container'>
                <h2>{props.heading}</h2>
                <span>{props.JapaneseHeading}</span>
            </div>
        </>
    )
}

export default Heading;