import React from 'react';
import './Site.css';

function Site(props) {
    return (
        <>
            <div className='site-container'>
                <div className='site-wrapper'>
                    {/* <img className='site-img' src={`${process.env.PUBLIC_URL}/{props.image}`}></img> */}
                    <img className='site-img' src={`${process.env.PUBLIC_URL}/website-2.png`}></img>
                    <div className='site-info'>
                        <span className='site-category'>
                            {props.category}
                        </span>
                        <span className='site-name'>
                            {props.name}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Site;
