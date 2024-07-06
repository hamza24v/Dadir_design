import React, { useContext, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './CartContext';
import Cart from './Cart';

const CartIcon = () => {
  const { items } = useContext(CartContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div className="relative inline-block" >
      <ShoppingCartIcon fontSize='small' onClick={toggleDropdown} style={{ fontSize: 40 }} />
      {items?.length > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
          {totalQuantity}
        </span>
      )}
      {dropdownVisible && <Cart />}
    </div>
  );
};

export default CartIcon;
