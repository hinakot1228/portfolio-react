import React from 'react';
import './SitesIndex.css';
import Site from './Site';

function SitesIndex() {
    return (
        <>
            <div className='site-items'>
                <Site 
                image='website-1.png'
                category='Webサイト'
                name='韓国ドラマ紹介サイト'
                url='https://objective-goodall-6b3fca.netlify.app/'
                github='https://github.com/hinakot1228/kdrama'
                dev='テキストエディタ（VSCode）'
                lang='HTML,CSS'
                period='?'
                functions='レスポンシブ対応'
                points='プログラミング学習を開始して初めて制作した静的のWebサイトです。
                私自身韓国ドラマが好きであり、おすすめのドラマを紹介するサイトを制作しました。
                このサイトでこだわった点は、ドラマに興味を持ってもらうようなデザインです。
                紹介のため、ドラマのポスター写真と簡単な紹介文を記載し、ドラマについてのイメージや情報をわかりやすくしています。'
                img='{`${process.env.PUBLIC_URL}/website-1.png`}'
                />
                <Site
                category='Webアプリケーション'
                name='ストップウォッチ'
                url='https://epic-haibt-ef2ccd.netlify.app/'
                github='https://github.com/hinakot1228/stopwatch'
                dev='テキストエディタ（VSCode）'
                lang='HTML,CSS,JaveScript'
                period='?'
                functions='ストップウォッチ機能'
                points='JavaScriptを学習して初めて開発したアプリケーションです。
                HTMLやCSSのスキルが身に付き、新たな技術を学習したいと思いJavaScriptを勉強しました。
                基本構文を一通り理解し、DOM操作についても勉強した後に、このアプリを作成しました。
                このアプリケーションでこだわった点は、デザインです。
                デザインは落ち着いた雰囲気を目指しました。
                ストップウォッチアプリケーションであるため、シンプルな時計の背景画像にし、スタート・ストップ・リセットのボタンも落ち着いたグレーにしました。
                また数字のフォントを変更し、オシャレな雰囲気を醸し出しました。'
                img='{`${process.env.PUBLIC_URL}/website-1.png`}'
                />
                <Site
                category='Webサイト'
                name='韓国食堂サイト'
                url='https://nospicy-koreanrestaurant.herokuapp.com/'
                github='https://github.com/hinakot1228/kitchen'
                dev='テキストエディタ（VSCode）,Apache（webサーバー）'
                lang='HTML, CSS, JavaScript, PHP, MySQL'
                period='?'
                functions='レスポンシブ対応、多言語対応（日本語、英語、韓国語）'
                points='PHPとMySQLを学習して、お問い合わせフォームを実装したWebサイトです。
                韓国料理食堂についてのサイトで、メニューや食堂の特徴などを1ページで紹介しています。
                このサイトでこだわった点は、デザインと外国語対応機能です。
                デザインは、辛いイメージのある韓国料理を連想させる赤を基調としました。そしてマウスストーカーの実装し、可愛らしい唐辛子のキャラクターをマウスポインターにし、韓国料理らしさを出しています。（このキャラクターは私自身が描いたものです）
                外国語対応機能については、大学で外国語を専攻しているので追加した機能です。日本語の文章を自ら英語と韓国語に翻訳し、glottologist.jsを使用し多言語対応を施しています。
                
                また、言語については以前までのHTML、CSS、JavaScriptに加え、PHP、MySQLを追加してこのサイトを制作しました。
                JavaScriptのスキルを向上するため、ハンバーガーメニュー、モーダル、スクロールトップボタンを実装しました。
                そしてPHP、MySQLを使用し、予約フォーム（サニタイズ処理あり）を実装しました。'
                img='{`${process.env.PUBLIC_URL}/website-1.png`}'
                />
                <Site
                category='Webアプリケーション'
                name='ドラマ・映画鑑賞記録アプリ'
                url='https://recordnotes.herokuapp.com/'
                github='https://github.com/hinakot1228/dramarecords'
                dev='テキストエディタ（VSCode）,Apache（webサーバー）'
                lang='HTML, CSS, JQuery, PHP, Bootstrap, MySQL'
                period='?'
                functions='レスポンシブ対応、認証機能、写真投稿機能'
                points='PHPとMySQLを使用した記録アプリケーションです。
                ドラマ・映画を鑑賞した後に感想や印象に残った言葉を記録できます。
                SQLのCRUD処理をアウトプットしたいと思い、このアプリを開発しました。
                またJQueryとBootstrapを学習したため、これらの言語も使用しています。JQueryではトップスクロール機能を、Bootstrapでは全体のUIを作りました。
                
                このポートフォリオでこだわった点は、機能です。
                認証機能を付け、会員個人個人の記録を作成・表示できます。
                また、ドラマ・映画の印象を残すために写真投稿機能を実装し、ポスター写真やお気に入りのシーンの画像を記録として残すことができるようにしました。'
                img='{`${process.env.PUBLIC_URL}/website-1.png`}'
                />
            </div>
        </>
    )
}

export default SitesIndex
