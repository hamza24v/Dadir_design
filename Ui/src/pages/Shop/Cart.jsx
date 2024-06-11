import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { TbTrash } from "react-icons/tb";

function Cart() {
  const { items, removeOneFromCart, getTotalCost } = useContext(CartContext);

  return (
    <div className="absolute right-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
      <ul className="p-4">
        {items?.length && items.map((item, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="w-24 h-24 mr-2" />
              <div>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.quantity} x ${item.newprice}</p>
              </div>
            </div>
            <TbTrash onClick={() => removeOneFromCart(item.id)} />
          </li>
        ))}
      </ul>
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>${getTotalCost()}</span>
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
