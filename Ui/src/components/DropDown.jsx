// DropdownMenu.jsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const DropDown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside); // Bind the event listener
    return () => {
      
      document.removeEventListener("mousedown", handleClickOutside); // Unbind the event listener on clean up
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
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
        <div className="absolute left-0 mt-2 py-2 bg-blue-300 shadow-xl">
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="block px-4 py-2 text-sm hover:bg-blue-400"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
