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
            <footer className="contact-footer">
                <small>© 2021 Hinako Tanaka</small>
            </footer>
        </>
    )
}

export default Contact
