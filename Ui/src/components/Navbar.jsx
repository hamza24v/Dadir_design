import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const getNavLinkClass = (isActive) =>
    isActive
        ? 'py-2 text-gray-800 font-dark hover:text-blue-600 transition duration-300 active'
        : 'py-2 text-gray-800 font-dark hover:text-blue-600 transition duration-300';

const menuItems = ['Home', 'Services', 'Galleries', 'Blog'];

const Navbar = () => {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuVisible(!isMobileMenuVisible);
    };
    return (
        <nav className='bg-orange-200 shadow fixed top-0 w-full'>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='flex justify-between items-center py-6'>
                    {/* Website Logo */}
                    <NavLink
                        to="/"
                        className={({ isActive }) => getNavLinkClass(isActive)}
                    >
                        Dadir Design
                    </NavLink>
                    {/* Primary Navbar items */}
                    <div className='hidden sm:flex items-center space-x-4'>
                        {menuItems.map((menu, idx) => (
                            <NavLink
                                key={idx}
                                to={"/" + (menu === 'Home' ? '' : menu.toLowerCase())}
                                className={({ isActive }) => getNavLinkClass(isActive)}
                            >
                                {menu}
                            </NavLink>
                        ))}
                    </div>
                    {/* Mobile menu button */}
                    <div className='sm:hidden'>
                        <button onClick={toggleMobileMenu} className='hover:text-blue-600'>
                            Menu
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`${isMobileMenuVisible ? '' : 'hidden'} mobile-menu`}>
                <ul>
                    {menuItems.map((menu, idx) => (
                        <li key={idx}>
                            <NavLink
                                to={"/" + (menu === 'Home' ? '' : menu.toLowerCase())}
                                className={({ isActive }) => getNavLinkClass(isActive)}
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
