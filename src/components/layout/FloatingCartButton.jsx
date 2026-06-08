"use client";

import { useCart } from "../../context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function FloatingCartButton() {
  const {
    cartItems,
    setIsCartOpen,
    isCartOpen,
  } = useCart();

  const cartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className={`fixed bottom-8 right-4 z-40 transition ${
        isCartOpen ? "hidden" : "flex"
      } bg-orange-500 hover:bg-orange-600 w-14 h-14 rounded-full text-white shadow-2xl items-center justify-center`}
    >
      <ShoppingCart
        size={24}
        strokeWidth={2.5}
      />

      {cartCount > 0 && (
        <div className="absolute -top-2 -right-2 bg-white text-black w-7 h-7 rounded-full text-sm font-black flex items-center justify-center">
          {cartCount}
        </div>
      )}
    </button>
  );
}