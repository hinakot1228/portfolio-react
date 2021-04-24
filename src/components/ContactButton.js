import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

export const ContactButton = ({
    type,
    onClick,
    buttonStyle
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    return (
        <>
            <div className='btn-wrapper'>
                <Link to='/contact'>
                    <button
                    className={`btn ${checkButtonStyle}`} 
                    onClick={onClick}
                    type={type}
                    >
                        Contact Me
                    </button>
                </Link>
            </div>
        </>

    )
};