import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

// const SIZES = []

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLE[0];

    return (
        <Link to='/contact' className='btn-mobile'>
            <button 
                className={`btn ${checkButtonStyle}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
};