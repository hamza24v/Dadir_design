import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import ShopCard from './ShopCard';
import { shop_items } from '../../constants/shop_items'


function Shop() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="w-full mt-20 px-4 py-8 mb-8">
      <h1 className="text-3xl font-bold text-center mb-4">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {shop_items.map(item => (
            <ShopCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>

    </div>
  );
}

export default Shop;
