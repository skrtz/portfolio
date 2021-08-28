import React, { useState } from "react";

function Burger() {
    let [menuOpen, setMenuOpen] = useState(false);
    const menuBtn = document.querySelector('.menu-btn');
    // const navOpen = document.querySelector('.nav');
    const handleClick = () => {
        if(!menuOpen) {
            // navOpen.style.display = 'flex';
            menuBtn.classList.add('open');
            menuOpen = true;
          } else {
            // navOpen.style.display = 'none';
            menuBtn.classList.remove('open');
            menuOpen = false;
          }
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    }
    return (
        <div class="menu-btn"  onClick={handleClick}>
            <div class="menu-btn__burger"></div>
        </div>
    )
};

export default Burger;