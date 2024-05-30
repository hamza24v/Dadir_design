import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';


function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="mb-2">
            <div className="flex justify-between">
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button
                className="ml-4 bg-red-500 text-white py-1 px-2 rounded"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
            <div className="text-sm text-gray-600">{item.serviceType}</div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <h3 className="text-xl">Total: ${totalAmount}</h3>
        <NavLink to='/Checkout'>
          <Button color='salmon' size='large' variant='contained'>
            Proceed to Checkout
          </Button>
        </NavLink>

      </div>
    </div>
  );
}

export default Cart;
