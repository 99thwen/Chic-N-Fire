"use client";

import { useCart } from "../../context/CartContext";
import { ShoppingCart } from "lucide-react";
export default function FloatingCartButton() {

  const {
    cartItems,
    setIsCartOpen,
  } = useCart();

  return (
    <button
  onClick={() => setIsCartOpen(true)}
  className="fixed bottom-8 right-4 z-50 bg-orange-500 hover:bg-orange-500 transition w-14 h-14 rounded-full text-white shadow-2xl flex items-center justify-center"
>
    <ShoppingCart size={24} strokeWidth={2.5} />


  {cartItems.length > 0 && (

        <div className="absolute -top-2 -right-2 bg-white text-black w-7 h-7 rounded-full text-sm font-black flex items-center justify-center">

          {cartItems.length}

        </div>

      )}

    </button>
  );
}