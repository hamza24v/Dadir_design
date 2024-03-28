import React from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { ClickAwayListener } from '@mui/material';

const DropDown = ({ title, items, open, onClose, toggleDropdown }) => {
  const close = onClose ?? false;
  return (
    <>
      {close && <ClickAwayListener onClickAway={onClose}>
        <div className="relative">
          <div className='cursor-pointer hover:cursor-pointer hover:text-blue-100 transition duration-300'>
            <button
              className="py-2 ml-4 font-semibold"
              onClick={toggleDropdown}
            >
              {title}
            </button>
            {!open && <KeyboardArrowDownIcon onClick={toggleDropdown} />}
            {open && <KeyboardArrowUpIcon onClick={toggleDropdown} />}
          </div>
          {open && (
            <div className="absolute left-0 mt-2 py-2 bg-orange-300 shadow-xl w-auto">
              {items.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className="block px-8 py-2 text-md hover:bg-orange-200 whitespace-nowrap"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </ClickAwayListener>}
    </>
  );
};

export default DropDown;
