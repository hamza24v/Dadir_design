import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_API_URL}/services`).then(async (response) => {
      const data = await response.json();
      console.log("response: ", data);
      setAllItems(data);
      setLoading(false);
    });
  }, []);

  function getProductQuantity(id) {
    const quantity = cartItems.find((item) => item.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addToCart(product, variation) {
    const id = variation
      ? `${product.id}.${variation.selectedVariation}`
      : product.id;
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      if (variation) {
        const { newPrice, oldPrice, selectedVariation, priceId, serviceDate } = variation;
        setCartItems([
          ...cartItems,
          {
            ...product,
            id: `${product.id}.${selectedVariation}`,
            quantity: 1,
            newPrice,
            oldPrice,
            selectedVariation,
            priceId,
            serviceDate,
          },
        ]);
      } else {
        setCartItems([...cartItems, { ...product, id, quantity: 1 }]);
      }
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  function getTotalCost() {
    return cartItems.reduce(
      (total, item) => total + item.newPrice * item.quantity,
      0
    );
  }

  const contextValue = {
    items: cartItems,
    getProductQuantity,
    addToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    allItems,
    loading,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
