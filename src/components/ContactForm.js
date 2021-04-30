import React from 'react';
import './ContactForm.css'

function ContactForm() {
    return (
        <>
            <div className='contact-container'>
                <span>
                    TwitterのDMからお問い合わせくださいませ。24時間以内に返信いたします！
                </span> 
                <a href='https://twitter.com/ohinako1228' className='contact-btn'>
                    <i class="fab fa-twitter-square"></i>
                </a>
            </div>
        </>
    )
}

export default ContactForm
