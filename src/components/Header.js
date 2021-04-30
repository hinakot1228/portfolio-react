import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(!click);

    return (
        <>
            <header>
                <nav className='navbar'>
                    <div className='navbar-container'>
                        <div className='navbar-logo-container'>
                            <Link to='/' className='navbar-logo' >
                                HINAKO TANAKA
                            </Link>
                        </div>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item nav-item--border">
                                <Link to= '/' className='nav-links nav-links--home' onClick={closeMobileMenu}>
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item nav-item--border">
                                <Link to= '/about' className='nav-links nav-links--about' onClick={closeMobileMenu}>
                                    ABOUT
                                </Link>
                            </li>
                            <li className="nav-item nav-item--border">
                                <Link to= '/works' className='nav-links nav-links--works' onClick={closeMobileMenu}>
                                    WORKS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to= '/contact' className='nav-links nav-links--contact' onClick={closeMobileMenu}>
                                    CONTACT
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
