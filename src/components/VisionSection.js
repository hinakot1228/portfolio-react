import React from 'react';
import AboutHeading from './AboutHeading';

function VisionSection() {
    return (
        <>
            <section className='about-page-section'>
                <AboutHeading
                heading='Vision'
                JapaneseHeading='ビジョン' />

                <div className='vision-text'> 
                    <p>テキストテキストテキストテキストテキスト</p>
                    <p>テキストテキストテキストテキストテキスト</p>
                    <p>テキストテキストテキストテキストテキスト</p>
                    <p>テキストテキストテキストテキストテキスト</p>
                </div>                
            </section>
        </>
    )
}

export default VisionSection
