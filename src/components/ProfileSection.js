import React from 'react';
import AboutHeading from './AboutHeading';

function ProfileSection() {
    return (
        <>
            <section className='about-page-section'>
                <AboutHeading
                heading='Profile'
                JapaneseHeading='プロフィール' />

                <div className='profile-text'> 
                    <p>テキストテキストテキストテキストテキスト</p>
                    <p>テキストテキストテキストテキストテキスト</p>
                    <p>テキストテキストテキストテキストテキスト</p>
                    <p>テキストテキストテキストテキストテキスト</p>
                </div>                
            </section>
        </>
    )
}

export default ProfileSection
