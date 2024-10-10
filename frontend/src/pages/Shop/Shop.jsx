import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import ShopCard from './ShopCard';

function Shop() {
  const { addToCart, allItems } = useContext(CartContext);

  return (
    <div className="w-full grid grid-col justify-items-center mt-20 px-4 py-8 mb-8">
      {/** Enhanced banner */}
      <div className="w-3/4 h-[25vh] bg-blue-400 flex items-center justify-center rounded-lg ">
        {/* Left side with text */}
        <div className="flex flex-col justify-center bg-white p-8 rounded-md shadow-md scale-75">
          <h2 className="text-black text-4xl font-extrabold">Special Offer</h2>
          <div className="flex items-center justify-items-center mt-4">
            <span className="text-black text-[6rem] font-extrabold leading-none">20%</span>
            <span className="text-gray-500 text-3xl ml-2 self-end my-auto rotate-90">OFF</span>
          </div>
        </div>
      </div>

      {/* Shop Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {allItems?.map((item) => (
          <ShopCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
