import React from 'react';
import './SnsButtons.css';

function SnsButtons() {
    return (
        <>
            <div className='sns-btns sns-btns--fixed'>
                <a href='https://github.com/hinakot1228' className='sns-btn'>
                    <i class="fab fa-github"></i>
                </a>
                <a href='https://twitter.com/ohinako1228' className='sns-btn'>
                    <i class="fab fa-twitter"></i>
                </a>
            </div>
        </>
    )
}

export default SnsButtons;
