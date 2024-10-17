import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import ShopCard from "./ShopCard";
import { LoadingBar } from "../../components/LoadingBar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function Shop() {
  const { addToCart, allItems, loading } = useContext(CartContext);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="w-full grid grid-cols-1 justify-items-center px-4 py-8 mb-8">
        {/* Banner Section */}
        <div className="w-full max-w-screen-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white py-10 px-5 rounded-lg text-center mb-12 shadow-md">
          <h2 className="text-5xl font-extrabold mb-4">Special Offer</h2>
          <div className="flex items-center justify-center">
            <span className="text-7xl font-extrabold">20%</span>
            <span className="text-4xl ml-2 self-end my-auto rotate-90">OFF</span>
          </div>
        </div>

        {loading ? (
          <LoadingBar />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {allItems.map((item) => (
              <ShopCard key={item.id} item={item} addToCart={addToCart} />
            ))}
          </div>
        )}
      </div>
    </LocalizationProvider>
  );
}

export default Shop;
