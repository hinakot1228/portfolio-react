import React from 'react';
import './WorksSideBar.css';

function WorksSideBar() {
    return (
        <>
            <div>
                <button>
                    Webサイト
                </button>
            </div>
        </>
    )
}

export default WorksSideBar;

            <div className='btn-wrapper'>
                <Link to='/contact'>
                    <button
                    className={`btn ${checkButtonStyle}`} 
                    onClick={onClick}
                    type={type}
                    >
                        Contact Me
                    </button>
                </Link>
            </div>