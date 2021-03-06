import React from 'react';
import './CareerItem.css';

function CareerItem(props) {
    return (
        <>
            <ul class="timeline">
                <li>
                    <p class="timeline-date">20{props.year}</p>
                    <div class="timeline-content">
                        <p>{props.event}</p>
                        {/* <p>{props.content}</p> */}
                    </div>
                </li>
            </ul>
        </>
    )
}

export default CareerItem
