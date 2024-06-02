import React, { useContext } from 'react';
import { CartContext } from './CartContext';


function Cart() {
  const { items, removeOneFromCart, getTotalCost } = useContext(CartContext);

  console.log("items; ", items)
  return (
    <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
      <ul className="p-4">
        {items?.length && items.map((item, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="w-10 h-10 mr-2" />
              <div>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.quantity} x ${item.price}</p>
              </div>
            </div>
            <button
              className="ml-4 bg-red-500 text-white p-1 rounded"
              onClick={() => removeOneFromCart(item.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>${getTotalCost}</span>
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
