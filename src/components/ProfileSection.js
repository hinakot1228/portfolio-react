import React from 'react';
import AboutHeading from './AboutHeading';
import './ProfileSection.css';

function ProfileSection() {
    return (
        <>
            <section className='about-page-section'>
                <AboutHeading
                heading='Profile'
                JapaneseHeading='プロフィール' />

                <div className='profile-text'> 
                    <p>
                        千葉県出身の21歳です。<br></br>
                        大学4年で、大学では韓国語・英語、韓国の歴史や文化について勉強をしています。 <br></br>
                        趣味は韓国映画やドラマを観ることです！<br></br><br></br>
                        2020年8月からプログラミングの独学を始め、10月からはプログラミングスクールのオンライン授業を受講し、HTML,CSS,PHP,Laravel,MySQLなどを学びました。<br></br><br></br>
                        現在は東京にある企業でエンジニアの長期インターンをしながら、日々プログラミングスキルを向上しています！
                    </p>
                </div>                
            </section>
        </>
    )
}

export default ProfileSection;
