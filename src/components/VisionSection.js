import React from 'react';
import AboutHeading from './AboutHeading';
import './VisionSection.css';

function VisionSection() {
    return (
        <>
            <section className='about-page-section'>
                <AboutHeading
                heading='Vision'
                JapaneseHeading='ビジョン' />

                <div className='vision-text'> 
                    <p>
                        中期的な目標としては、プログラマーとしての現場経験を積み、プログラムの技術力を向上させながら開発における基本工程を携わっていきたいです！<br></br>
                        そして長期的な目標は、開発の全てを手掛けられるフルスタックエンジニアとして幅広いスキルを身につけ、キャリアアップしていきたいと考えています。<br></br><br></br>
                        最終目標としては、システムエンジニアやコンサルタント職に就くことを目指します！その理由は、顧客が抱えている課題や要求を聞き、要件定義・設計などを作成していくという開発の上流工程に携わることができるからです。私はIT技術を使用し不可能を可能にするという点でIT業界に興味を持ちました。クライアントの課題に対するソルーションを提供することを通して、社会課題を解決し、一人一人が住みやすい社会を作っていきたいです。そのためにプログラミングの技術的能力だけでなく、コミュニケーション能力やマネジメント能力を身につけるよう努力していきます。<br></br><br></br>
                        また、海外や外国語にも興味があり、プログラミングを通じて、外国にも進出できるような人材になっていきたいです！</p>
                </div>                
            </section>
        </>
    )
}

export default VisionSection
