import React from 'react';
import './ProductItem.css';

function ProductItem(props) {
    return (
        <>
            <div className='product-container'>
                <div className='product-img'>
                    <img src={`${process.env.PUBLIC_URL}/website-2.png`}></img>
                </div>
                <div className='product-info'>
                    <p>名前：{props.name}</p>
                    <p>サイト：{props.url}</p>
                    <p>GitHub URL：{props.github}</p>
                    <p>開発環境：{props.dev}</p>
                    <p>使用言語：{props.lang}</p>
                    <p>制作期間：{props.period}</p>
                    <p>機能：{props.functions}</p>
                    <p>こだわりポイント：{props.points}</p>
                </div>
                <div className='product-img'>
                    <img src={`${process.env.PUBLIC_URL}/website-2.png`}></img>
                </div>
            </div>
        </>
    )
}

export default ProductItem;
