import React, { createContext, useState } from 'react';

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => { },
  addOneToCart: () => { },
  removeOneFromCart: () => { },
  deleteFromCart: () => { },
  getTotalCost: () => { }
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function getProductQuantity(id) {
    const quantity = cartItems.find(item => item.id === id)?.quantity;
    if (quantity === undefined) {
      return 0
    }
    return quantity
  }

  function addToCart(id) {
    const quantity = getProductQuantity(id)

    if (quantity === 0) {
      setCartItems([...cartItems, { id: id, quantity: 1 }])
    } else {
      setCartItems(
        cartItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      )
    }
  };

  function deleteFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id)
    if (quantity === 1) {
      deleteFromCart(id)
    } else {
      setCartItems(
        cartItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      )
    }
  }

  function getTotalCost() {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }


  const contextValue = {
    items: cartItems,
    getProductQuantity,
    addToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
