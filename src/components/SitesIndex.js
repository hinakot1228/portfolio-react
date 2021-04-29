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
                />
                <Site 
                image='webapp-1'
                category='Webアプリケーション'
                name='ストップウォッチ'
                />
                <Site 
                image='website-2'
                category='Webサイト'
                name='韓国食堂サイト'
                />
                <Site 
                image='webapp-2'
                category='Webアプリケーション'
                name='ドラマ・映画・本記録アプリ'
                />
            </div>
        </>
    )
}

export default SitesIndex
