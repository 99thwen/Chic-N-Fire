"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cartItems, setCartItems] =
    useState([]);

  const [isCartOpen, setIsCartOpen] =
    useState(false);

  useEffect(() => {

    const storedCart =
      localStorage.getItem("cartItems");

    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  const addToCart = (product) => {

    setCartItems((prev) => [
      ...prev,
      product,
    ]);

    setIsCartOpen(true);

  };

  const removeFromCart = (id) => {

    setCartItems((prev) =>
      prev.filter(
        (item) => item.cartId !== id
      )
    );

  };

  const increaseQuantity = (id) => {

    setCartItems((prev) =>
      prev.map((item) =>
        item.cartId === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              price:
                item.unitPrice *
                (item.quantity + 1),
            }
          : item
      )
    );

  };

  const decreaseQuantity = (id) => {

    setCartItems((prev) =>
      prev.map((item) =>
        item.cartId === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
                price:
                    item.quantity > 1
                      ? item.unitPrice *
                        (item.quantity - 1)
                      : item.price,
                              }
                            : item
                        )
                      );


  };


  const clearCart = () => {
  setCartItems([]);
};


  return (
    <CartContext.Provider
      value={{

        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,

      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () =>
  useContext(CartContext);