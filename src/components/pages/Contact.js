import React from 'react';
import '../../App.css';
import Heading from '../Heading';
import ContactForm from '../ContactForm';

function Contact() {
    return (
        <>
            <Heading
            heading='Contact'
            JapaneseHeading='お問い合わせ' />
            <ContactForm />
        </>
    )
}

export default Contact
