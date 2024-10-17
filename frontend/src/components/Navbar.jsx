import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { ClickAwayListener } from "@mui/material";
import { scrollToTop } from "../utils";

import CartIcon from "../pages/Shop/CartIcon";

const menuItems = ["Home", "Galleries", "About", "Shop"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (event) => {
    setOpen((prev) => !prev);
    event.stopPropagation(); // Prevents click from immediately triggering ClickAway
    scrollToTop();
  };

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="bg-blue-100 shadow top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <div className="flex flex-col">
            <div className="flex justify-between items-center py-4">
              <NavLink
                to="/"
                onClick={handleNavClick}
                className="text-3xl font-serif font-bold text-gray-900 hover:text-blue-100"
              >
                <div className="bg-slate-900 rounded-full">
                  <img
                    className="w-20"
                    src="/ophela_logo.png"
                    alt="dadir design"
                  />
                </div>
              </NavLink>
              {/* Desktop Menu */}
              <div className={`hidden sm:hidden md:flex items-center`}>
                {menuItems.map((menu, idx) => (
                  <NavLink
                    key={idx}
                    to={"/" + (menu === "Home" ? "" : menu)}
                    onClick={handleNavClick}
                    className="py-2 px-4 text-gray-900 font-semibold hover:text-white transition duration-300"
                  >
                    {menu === "About" ? menu + " Us" : menu}
                  </NavLink>
                ))}
                <CartIcon />
              </div>
              {/* Mobile Menu */}
              <div className="sm:flex md:hidden flex flex-row justify-center items-center gap-4 text-center">
                <MenuIcon
                  onClick={toggleMenu}
                  className="hover:text-gray-600 transition duration-200 cursor-pointer"
                  fontSize="medium"
                />
                  <CartIcon />
              </div>
            </div>
            {open && (
              <ul className="text-center justify-center md:hidden">
                {menuItems.map((menu, idx) => (
                  <li key={idx} className="py-2 w-full">
                    <NavLink
                      to={"/" + (menu === "Home" ? "" : menu)}
                      onClick={handleNavClick}
                      className="py-2 px-4 text-gray-900 font-semibold hover:text-blue-100 transition duration-300"
                    >
                      {menu === "About" ? menu + " Us" : menu}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </ClickAwayListener>
      </div>
    </nav>
  );
};

export default Navbar;
