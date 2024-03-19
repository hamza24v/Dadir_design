// DropdownMenu.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { ClickAwayListener } from '@mui/material';

const DropDown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  

  return (
    <ClickAwayListener onClickAway={toggleDropdown}>
    <div className="relative">
      <div className='cursor-pointer hover:cursor-pointer hover:text-blue-100 transition duration-300'>
        <button
          className="py-2 ml-4 font-semibold"
          onClick={toggleDropdown}
        >
          {title}
        </button>
        {!isOpen && <KeyboardArrowDownIcon onClick={toggleDropdown} />}
        {isOpen && <KeyboardArrowUpIcon onClick={toggleDropdown} />}
      </div>
      {isOpen && (
        <div className="absolute left-0 mt-2 py-2 bg-orange-400 shadow-xl w-auto">
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="block px-8 py-2 text-md hover:bg-orange-300 whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
    </ClickAwayListener>
  );
};

export default DropDown;
