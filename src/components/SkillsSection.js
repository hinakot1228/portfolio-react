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
                    icon='fab fa-css3-alt'
                    name='CSS3'
                    stars='4'
                    startYear='20'
                    startMonth='8' />
                    <Skill
                    icon='fab fa-bootstrap'
                    name='Bootstrap'
                    stars='4'
                    startYear='20'
                    startMonth='11' />
                    <Skill
                    icon='fab fa-js'
                    name='JavaScript'
                    stars='3'
                    startYear='20'
                    startMonth='11' />
                    <Skill
                    icon='fas fa-code'
                    name='JQuery'
                    stars='4'
                    startYear='20'
                    startMonth='12' />
                    <Skill
                    icon='fab fa-react'
                    name='React.js'
                    stars='2.5'
                    startYear='21'
                    startMonth='4' />
                    <Skill
                    icon='fab fa-html5'
                    name='PHP'
                    stars='3'
                    startYear='20'
                    startMonth='11' />
                    <Skill
                    icon='fab fa-php'
                    name='PHP'
                    stars='3'
                    startYear='20'
                    startMonth='11' />
                    <Skill
                    icon='fab fa-laravel'
                    name='Laravel'
                    stars='3'
                    startYear='21'
                    startMonth='2' />
                    <Skill
                    icon='fab fa-git'
                    name='Git'
                    stars='3'
                    startYear='20'
                    startMonth='11' />
                    
                </div>                
        </section>
    )
}

export default SkillsSection
