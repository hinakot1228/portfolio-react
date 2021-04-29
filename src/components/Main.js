import React from 'react';
import '../App.css';
import './Main.css';

function Main() {
    return (
        <section className='main-container'>
            <div className='main-background'>
                <img src={`${process.env.PUBLIC_URL}/coding-screen.jpg`}></img>
                <div className='main-heading-container'>
                    <h1>Hinako Tanaka</h1>
                </div>
            </div>
        </section>
    )
}

export default Main
