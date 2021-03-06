import React from 'react';
import Heading from './Heading';
import './WorksSection.css';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import WorksSlider from './WorksSlider';


function WorksSection() {
    return (
        <section className='works-section'>
            <Heading
            heading='WORKS'
            JapaneseHeading='制作したもの' />

            <div className='works-wrapper'> 
                <WorksSlider />
            </div>
            
            <Link to='/works'>
                <Button buttonStyle='btn--outline' />
            </Link>
        </section>
    )
}

export default WorksSection
