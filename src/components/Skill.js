import React from 'react';
import './Skill.css';

function Skill(props) {
    return (
        <>
            <div className='skill-item'>
                <div className='skill-icon'>
                    <i className={props.icon}></i>
                </div>
                <div className='skill-info'>
                    <span className='skill-name'>{props.name}</span>
                    <span className="star5_rating" data-rate={props.stars}></span>
                    <span>20{props.startYear}年{props.startMonth}月～</span>
                </div>
            </div>
        </>
    )
}

export default Skill;