import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Nav() {
    const pages = ['home', 'about', 'projects', 'contact'];
    const navLinks = pages.map(page => {
        if ( page  === 'home') {
            return (
                <Link to='/'>
                    <li onClick={() => { setMenuOpen(false) }}>
                        {page}
                    </li>
                </Link>
            )
        } else {
            return (
                <Link to={page}>
                    <li onClick={() => { setMenuOpen(false) }}>
                        {page}
                    </li>
                </Link>
            )
        }
    });
    let [menuOpen, setMenuOpen] = useState(false);
    const handleClick = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    }
    return (
        <div className="nav-container">
            <div className={`menu-btn ${menuOpen ? " open" : ""}`} onClick={handleClick}>
                <div className="menu-btn__burger"></div>
            </div>
            <nav className={`nav ${menuOpen ? " open" : ""}`}>{navLinks}</nav>
        </div>
    );
}
export default Nav;