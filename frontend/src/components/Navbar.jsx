import React from 'react';
import { NavLink } from 'react-router-dom';
import './comp.css'; // Ensure the CSS file includes the necessary Tailwind classes

function Navbar() {
    return (
        <nav className='bg-orange-200 shadow fixed top-0 w-full'>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='flex justify-between items-center py-6'>
                    {/* Website Logo */}
                    <NavLink to="/" exact className='text-xl font-dark text-gray-800'>
                        Dadir Design
                    </NavLink>
                    {/* Primary Navbar items */}
                    <div className='hidden md:flex items-center space-x-4'>
                        {['Home', 'Services', 'Galleries', 'Reviews', 'Blog'].map((menu, idx) => (
                            <NavLink 
                                key={idx} 
                                to={"/" + (menu === 'Home' ? '' : menu.toLowerCase())}
                                exact
                                className='py-2 text-gray-800 font-dark hover:text-blue-600 transition duration-300'
                                activeClassName='text-blue-600 border-b-2 border-blue-600'
                            >
                                {menu}
                            </NavLink>
                        ))}
                    </div>
                    {/* Mobile menu button */}
                    <div className='md:hidden'>
                        <button className='mobile-menu-button'>
                            {/* Icon for mobile menu */}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className='hidden mobile-menu'>
                <ul>
                    {['Home', 'Services', 'Galleries', 'Reviews', 'Blog'].map((menu, idx) => (
                        <li key={idx}>
                            <NavLink 
                                to={"/" + (menu === 'Home' ? '' : menu.toLowerCase())}
                                exact
                                className='block text-gray-800 font-light hover:bg-gray-200 transition duration-300'
                                activeClassName='bg-gray-200'
                            >
                                {menu}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
