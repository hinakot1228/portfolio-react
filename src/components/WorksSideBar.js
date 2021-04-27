import React from 'react';
import './WorksSideBar.css';

function WorksSideBar() {
    return (
        <>
            <div className='works-sidebar works-sidebar--fixed'>
                <button className='sodebar-btn'>
                    Webサイト
                </button>
                <button className='sodebar-btn'>
                    Webアプリ
                </button>
            </div>
        </>
    )
}

export default WorksSideBar;
