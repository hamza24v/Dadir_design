import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { ClickAwayListener } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CartIcon from "../pages/Shop/CartIcon";
import { navLinks } from '../constants'


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="bg-blue-100 shadow top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <div className="flex items-center justify-between py-2">
            <NavLink
              to="/"
              onClick={handleNavClick}
              className="text-3xl font-serif font-bold text-gray-900 hover:text-blue-200"
            >
              <div className="bg-slate-900 rounded-full">
                <img
                  className="w-16"
                  src="/ophela_logo.png"
                  alt="dadir design"
                />
              </div>
            </NavLink>
            {/* Desktop Menu */}
            <div className={`hidden md:flex items-center`}>
              {navLinks.map(({title, menu}, idx) => (
                <NavLink
                  key={idx}
                  to={"/" + (menu === "home" ? "" : menu)}
                  onClick={handleNavClick}
                  className="px-3 text-gray-900 font-semibold hover:text-blue-600 transition duration-300"
                >
                  {title === "About" ? title + " Us" : title}
                </NavLink>
              ))}
              <CartIcon />
            </div>
            {/* Mobile Menu */}
            <div className="md:hidden flex items-center">
              {!open ? (
                <MenuIcon
                  onClick={toggleMenu}
                  className="hover:text-gray-600 transition duration-200 cursor-pointer"
                  fontSize="medium"
                />
              ) : (
                <CloseIcon
                  onClick={toggleMenu}
                  className="hover:text-gray-600 transition duration-200 cursor-pointer"
                  fontSize="medium"
                />
              )}
              <CartIcon />
            </div>
          </div>
        </ClickAwayListener>
        {/* Mobile Dropdown Menu */}
        {open && (
          <div className=" p-4 bg-blue-200 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
            <ul className="text-left py-2">
              {navLinks.map((menu, idx) => (
                <li
                  key={idx}
                  className="font-poppins py-1 font-medium text-[18px]"
                >
                  <NavLink
                    to={"/" + (menu === "Home" ? "" : menu)}
                    onClick={handleNavClick}
                    className="text-gray-900 font-medium cursor-pointer hover:text-blue-600 transition duration-300"
                  >
                    {menu === "About" ? menu + " Us" : menu}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
