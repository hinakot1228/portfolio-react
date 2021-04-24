import React from 'react';
import './ContactSection.css';
import Heading from './Heading';
import {ContactButton} from './ContactButton';

function ContactSection() {
    return (
        <>
            <section className='contact-section'>
                <Heading
                heading='CONTACT'
                JapaneseHeading='お問い合わせ' />

                <div className='contact-text'> 
                    <p>何でもお気軽にお問い合わせください！</p>
                </div>
                
                <ContactButton buttonStyle='btn--outline' />
            </section>
        </>
    )
}

export default ContactSection
