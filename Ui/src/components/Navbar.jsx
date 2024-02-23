import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = ['Home', 'Services', 'Galleries', 'Blog'];

const Navbar = () => {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuVisible(!isMobileMenuVisible);
    };
  
    return (
      <nav className='bg-blue-300 shadow fixed top-0 w-full z-10'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='flex justify-between items-center py-4'>
            <NavLink to="/" className='text-xl font-bold text-gray-900'>Dadir Design</NavLink>
            
            {/* Desktop Menu */}
            <div className='hidden md:flex items-center space-x-1'>
              {menuItems.map((menu, idx) => (
                <NavLink
                  key={idx}
                  to={"/" + (menu === 'Home' ? '' : menu.toLowerCase())}
                  className='py-2 px-4 text-gray-900 hover:text-blue-200 transition duration-300'
                >
                  {menu}
                </NavLink>
              ))}
            </div>
  
            {/* Mobile Menu Button */}
            <div className='md:hidden'>
              <MenuIcon onClick={toggleMobileMenu} className='hover:text-blue-600'/>
            </div>
          </div>
        </div>
  
        {/* Mobile Menu */}
        <div className={`${isMobileMenuVisible ? 'block' : 'hidden'} md:hidden`}>
          <ul className="flex flex-col items-center">
            {menuItems.map((menu, idx) => (
              <li key={idx} className='py-2'>
                <NavLink
                  to={"/" + (menu === 'Home' ? '' : menu.toLowerCase())}
                  className='text-gray-900 hover:text-blue-200 transition duration-300'
                  onClick={() => setIsMobileMenuVisible(false)}
                >
                  {menu}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  };
  

export default Navbar;
