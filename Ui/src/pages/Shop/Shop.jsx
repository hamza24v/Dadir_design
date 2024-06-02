import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import ShopCard from './ShopCard';
import Cart from './Cart'
// const items = [
//   { id: 1, name: 'Bed frame', price: 299, image: new URL('../../assets/gallery/bed_frame.jpg', import.meta.url).href, serviceType: 'Indoor Furniture Assembly' },
//   { id: 2, name: 'Patio Table', price: 199, image: new URL('../../assets/gallery/patio_glass_table.jpg', import.meta.url).href, serviceType: 'Outdoor Furniture Assembly' },
//   { id: 3, name: 'TV Closet', price: 50, image: new URL('../../assets/gallery/tv_closet.jpg', import.meta.url).href, serviceType: 'Furniture Delivery' },
// ];

const items = [
  {
    id: 1,
    category: 'Bed Assembly',
    description: 'Not Bunk Bed; No Built In Storage',
    price: 90,
    ddPrice: 72,
    image: new URL('../../assets/gallery/bed_frame.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 2,
    category: 'Bed Assembly',
    description: 'Not Bunk Bed; Yes Built In Storage',
    price: 130,
    ddPrice: 104,
    image: new URL('../../assets/gallery/bed_frame.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
  {
    id: 3,
    category: 'Bed Assembly',
    description: 'Not Bunk Bed; Yes Built In Storage',
    price: 130,
    ddPrice: 104,
    image: new URL('../../assets/gallery/bed_frame.jpg', import.meta.url).href,
    serviceType: 'Indoor Furniture Assembly'
  },
];

function Shop() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="w-full mt-20 px-4 py-8 mb-8">
      <h1 className="text-3xl font-bold text-center mb-4">Shop</h1>
      <div className='flex justify-end flex-row'>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-4">
          {items.map(item => (
            <ShopCard key={item.id} item={item} addToCart={addToCart} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Shop;
