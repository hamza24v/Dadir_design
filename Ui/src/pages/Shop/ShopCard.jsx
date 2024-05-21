import React from 'react';
import Button from '@mui/material/Button';

function ShopCard({ item, addToCart }) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <img className="w-full h-64 object-cover mb-4"src={item.image} alt={item.name} />
      <h3 className="text-xl mb-2">{item.name}</h3>
      <p className="text-lg font-bold">${item.price}</p>
      <p className="text-sm text-gray-600 mb-2">{item.serviceType}</p>
      <Button size='large' variant='contained' color='salmon'
        onClick={() => {addToCart(item)}}
      > 
        Add to Cart
      </Button>
    </div>
  );
}

export default ShopCard;
