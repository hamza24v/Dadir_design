import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import DropDown from './DropDown';
import dadir_design from '../assets/dadir_design.png'

const menuItems = ['Home', 'Shop', 'Galleries', 'About'];


const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };


  return (
    <nav className='bg-blue-200 shadow fixed top-0 w-full z-10'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <NavLink to="/" onClick={scrollToTop} className='text-3xl font-serif  font-bold text-gray-900 hover:text-blue-100'>
            <img className='w-20' src={dadir_design} alt='dadir design' />
          </NavLink>
          {/* Desktop Menu */}
          <div className={`hidden sm:hidden md:flex items-center`}>
            {menuItems.map((menu, idx) => (
                <NavLink
                  key={idx}
                  onClick={scrollToTop}
                  to={"/" + (menu === 'Home' ? '' : menu)}
                  className='py-2 px-4 text-gray-900 font-semibold hover:text-white transition duration-300'
                >
                  {menu === 'About' ? menu + ' Us' : menu}
                </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className='sm:flex md:hidden'>
            <MenuIcon onClick={toggleMobileMenu} className='hover:text-white' />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuVisible ? 'block' : 'hidden'} md:hidden`}>
        <ul className="flex flex-col items-center">
          {menuItems.map((menu, idx) => (
            <li key={idx} className='py-2'>
              <>
                {menu === 'Services' ?
                  <DropDown title="Services" items={serviceMenu} />
                  :
                  <NavLink
                    key={idx}
                    onClick={scrollToTop}
                    to={"/" + (menu === 'Home' ? '' : menu)}
                    className='py-2 px-4 text-gray-900 font-semibold hover:text-blue-100 transition duration-300'
                  >
                    {menu === 'About' ? menu + ' Us' : menu}
                  </NavLink>
                }
              </>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
