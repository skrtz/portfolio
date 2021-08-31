import React, { useState } from "react";

function Nav({ currentPage, handlePageChange, }) {
    const pages = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'];
    const navLinks = pages.map(page => {

        return (
            <a href={'/#' + page.toLocaleLowerCase()} onClick={() => handlePageChange(page)}>
                {page}
            </a>
        )
    });
    let [menuOpen, setMenuOpen] = useState(false);
    const handleClick = () => {
        if (!menuOpen) {
            menuOpen = true;
        } else {
            menuOpen = false;
        }
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
