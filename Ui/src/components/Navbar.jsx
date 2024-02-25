import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import DropDown from './DropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const menuItems = ['Home', 'Services', 'Galleries', 'About'];
const serviceMenu = [
  {label: 'Indoor/Outdoor Furniture Assembly',path:'/indoor-outdoor-assembly'},
  {label: 'Furniture Delivery', path: '/furniture-delivery'}
]

const Navbar = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isServiceMenuVisible, setIsServiceMenuVisible] = useState(false)
  const [anchor, setAnchor] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  const toggleServiceMenu = (event) => {
    if(!isServiceMenuVisible){
      setAnchor(event.currentTarget);
    }
    else {
      setAnchor(null)
    }
    setIsServiceMenuVisible(!isServiceMenuVisible)
  }

  return (
    <nav className='bg-blue-300 shadow fixed top-0 w-full z-10'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <NavLink to="/" className='text-3xl font-serif  font-bold text-gray-900 hover:text-blue-100'>
            Dadir Designs
          </NavLink>
          {/* Desktop Menu */}
          <div className={`hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex items-center`}>
            {menuItems.map((menu, idx) => (
              <>
                {menu === 'Services' ?
                  <DropDown title="Services" items={serviceMenu} />
                  :
                  <NavLink
                    key={idx}
                    to={"/" + (menu === 'Home' ? '' : menu)}
                    className='py-2 px-4 text-gray-900 font-semibold hover:text-blue-100 transition duration-300'
                  >
                    {menu === 'About' ? menu + ' Us' : menu}
                  </NavLink>
                }
              </>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className='sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden'>
            <MenuIcon onClick={toggleMobileMenu} className='hover:text-blue-600' />
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
