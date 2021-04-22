import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(!click);

    return (
        <>
            <header>
                <nav className='header'>
                    <div className='header-container'>
                        <Link to='/' className='header-logo'>
                            Hinako Tanaka<i class="fas fa-sun" />
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to= '/' className='nav-links' onClick={closeMobileMenu}>
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to= '/about' className='nav-links' onClick={closeMobileMenu}>
                                    ABOUT
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to= '/works' className='nav-links' onClick={closeMobileMenu}>
                                    WORKS
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;
