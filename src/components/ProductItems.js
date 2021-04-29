import React from 'react'
import ProductItem from './ProductItem';

function ProductItems() {
    return (
        <>
            <ProductItem
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
        </>
    )
}

export default ProductItems
