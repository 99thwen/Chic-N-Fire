"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

export default function WhatsAppButton() {
  const { isCartOpen } = useCart();

  return (
    <a
      href="https://wa.me/923215823184"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed
        bottom-41
        right-4
        z-50
        bg-green-500
        hover:bg-green-600
        transition
        w-14
        h-14
        rounded-full
        items-center
        justify-center
        text-white
        shadow-2xl
        ${
          isCartOpen
            ? "hidden"
            : "flex"
        }
      `}
    >
      <FaWhatsapp size={30} />
    </a>
  );
}