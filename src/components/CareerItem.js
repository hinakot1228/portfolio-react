import React from 'react';
import './CareerItem.css';

function CareerItem(props) {
    return (
        <>
            <div className='career-item'>
                <div>
                    <span className='career-year'>20{props.year}</span>
                </div>
                <span className='career-border'></span>
                <div className='career-content-container'>
                    <p className='career-content'>{props.content}</p>
                </div>
            </div>
        </>
    )
}

export default CareerItem
