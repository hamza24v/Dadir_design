import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="fixed top-0 right-0 bg-white w-64 h-full shadow-lg p-4">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="mb-2">
            <div className="flex justify-between">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
            <div className="text-sm text-gray-600">{item.serviceType}</div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button className="w-full bg-blue-500 text-white py-2 rounded">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
