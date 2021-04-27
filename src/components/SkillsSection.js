import React from 'react';
import './SkillsSection.css';
import AboutHeading from './AboutHeading';
import Skill from './Skill';

function SkillsSection() {
    return (
        <section className='about-page-section'>
                <AboutHeading
                heading='Skills'
                JapaneseHeading='スキル' />

                <div className='skills-items'> 
                    <Skill
                    icon='fab fa-html5'
                    name='HTML5'
                    stars='4'
                    startYear='20'
                    startMonth='8' />
                    <Skill
                    icon='fab fa-html5'
                    name='HTML5'
                    stars='4'
                    startYear='20'
                    startMonth='8' />
                    <Skill
                    icon='fab fa-html5'
                    name='HTML5'
                    stars='4'
                    startYear='20'
                    startMonth='8' />
                    <Skill
                    icon='fab fa-html5'
                    name='HTML5'
                    stars='4'
                    startYear='20'
                    startMonth='8' />
                    <Skill
                    icon='fab fa-html5'
                    name='HTML5'
                    stars='4'
                    startYear='20'
                    startMonth='8' />
                </div>                
        </section>
    )
}

export default SkillsSection
