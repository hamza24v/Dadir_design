import React from 'react'
import { Link } from 'react-router-dom';
import './comp.css'
function Navbar() {
    return (
        <div className='navbar'>
            {['/', '/Services', '/galleries', '/blog'].map((menu, idx) => {
                let showMenu;
                if(menu === '/')
                    showMenu = 'Home'
                else 
                    showMenu = menu.replace(/^\/(.)(.*)/, (match, firstLetter, rest) => firstLetter.toUpperCase() + rest)
                return <Link className='navitem' key={idx} to={menu}>{showMenu}</Link>
            })}
        </div>
      );
}

export default Navbar