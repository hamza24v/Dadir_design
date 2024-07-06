import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import ShopCard from './ShopCard';
import dadiro_discount from '../../assets/dadiro_discount.jpg'

function Shop() {
  const { addToCart, allItems } = useContext(CartContext);
  
  return (
    <div className="w-full grid grid-col justify-items-center mt-20 px-4 py-8 mb-8">
      <img src={dadiro_discount} className="w-1/2 h-48 my-5" alt="dadir_discount_banner"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {allItems.map(item => (
            <ShopCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>

    </div>
  );
}

export default Shop;
