import React, { useContext, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "./CartContext";
import Cart from "./Cart";

const CartIcon = () => {
  const { items } = useContext(CartContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="relative inline-block">
      <div className="cursor-pointer" onClick={toggleDropdown}>
        <ShoppingCartIcon
          fontSize="medium"
          style={{ fontSize: 30 }}
          className="text-gray-800 hover:text-gray-600 transition duration-200"
        />
        {items?.length > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
            {totalQuantity}
          </span>
        )}
      </div>
      {dropdownVisible && (
        <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-300 ease-in-out transform">
          <Cart />
        </div>
      )}
    </div>
  );
};

export default CartIcon;
