import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { TbTrash } from "react-icons/tb";
import { Button } from "@mui/material";
import dayjs from "dayjs";

function Cart() {
  const { items, removeOneFromCart, getTotalCost, checkout } = useContext(CartContext);

  return (
    <div className="overflow-auto max-h-96 absolute right-0 mt-2 w-96 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
      <p className="text-center font-semibold text-2xl py-4 border-b border-gray-200">
        Cart
      </p>
      <ul className="p-4">
        {items?.length > 0 ? (
          items.map((item, index) => (
            <li key={index} className="mb-4 flex justify-between items-start">
              <div className="flex items-start gap-4">
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                />
                <div className="text-sm">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                 
                  <p className="text-gray-600 mt-1">
                    {item.quantity} x $
                    {item.selectedVariation !== 'all'
                      ? item.variations[item.selectedVariation].newPrice
                      : item.newPrice}
                  </p>
                  <p className="text-gray-600 mt-1">
                    Service Type:{" "}
                    {item.selectedService}
                  </p>
                  <p className="text-gray-600 mt-1">
                    Service Date:{" "}
                    {dayjs(item.serviceDate).format("MM-DD-YYYY hh:mm A")}
                  </p>
                </div>
              </div>
              <TbTrash
                onClick={() => removeOneFromCart(item.id)}
                className="cursor-pointer text-red-500 hover:text-red-700 transition duration-200"
              />
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-8">Your cart is empty.</p>
        )}
      </ul>
      <div className="p-4 border-t border-gray-200 flex flex-col items-center">
        <div className="flex justify-between w-full font-semibold text-lg mb-4">
          <span>Total:</span>
          <span>${getTotalCost()}</span>
        </div>
        <Button
          size="large"
          variant="contained"
          color="salmon"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md shadow-md"
          onClick={() => checkout(items)}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;
