import React, { Component } from 'react';
import './WorksSideBar.css';
import { Link } from 'react-scroll';

class WorksSideBar extends Component {
    render() {
    return (
        <>
            <div className='works-sidebar works-sidebar--fixed'>
                    <a href='#website' className='sodebar-btn'>
                        Webサイト
                    </a>
                    <a href='#webapp' className='sodebar-btn'>
                        Webアプリ
                    </a>
            </div>
        </>
    )
    }
}

export default WorksSideBar;
