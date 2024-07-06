import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { TbTrash } from "react-icons/tb";
import { Button } from '@mui/material';

function Cart() {
  const { items, removeOneFromCart, getTotalCost } = useContext(CartContext);

  const checkout = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/stripe/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: items })
    }).then((response) => {
      return response.json()
    }).then((response) => {
      if(response.url){
        window.location.assign(response.url); // forwards user to stripe url
      }
    })
  }
  return (
    <div className="overflow-auto max-h-96 absolute right-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
      <p className='text-center font-semibold text-3xl'>Cart</p>
      <ul className="p-2">
        {items?.length && items.map((item, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            <div className="flex items-center">
              <img src={item.image} alt={item.category} className="w-24 h-24 mr-2" />
              <div>
                <p className="text-sm font-semibold">{item.name}</p>
                {item?.selectedVariation &&
                  <p className="text-sm font-semibold">{item.selectedVariation}</p>
                }
                <p className="text-sm font-semibold text-gray-600">{item.quantity} x ${item.newPrice}</p>
              </div>
            </div>
            <TbTrash onClick={() => removeOneFromCart(item.id)} />
          </li>
        ))}
      </ul>
      <div className="p-4 border-t flex flex-col border-gray-200">
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>${getTotalCost()}</span>
        </div>
        <Button size='large' variant='contained' color='salmon' onClick={checkout}>
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;
