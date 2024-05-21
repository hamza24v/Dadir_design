import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import ShopCard from './ShopCard';

const items = [
  { id: 1, name: 'Bed frame', price: 299, image: new URL('../../assets/gallery/bed_frame.jpg', import.meta.url).href, serviceType: 'Indoor Furniture Assembly' },
  { id: 2, name: 'Patio Table', price: 199, image:  new URL('../../assets/gallery/patio_glass_table.jpg', import.meta.url).href, serviceType: 'Outdoor Furniture Assembly' },
  { id: 3, name: 'TV Closet', price: 50, image:  new URL('../../assets/gallery/tv_closet.jpg', import.meta.url).href, serviceType: 'Furniture Delivery' },
];

function Shop() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="mt-20 px-4 py-8 mb-8">
      <h1 className="text-3xl font-bold text-center mb-4">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map(item => (
          <ShopCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
