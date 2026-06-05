"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923335823184"
      target="_blank"
      rel="noopener noreferrer"
      className="
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
        flex
        items-center
        justify-center
        text-white
        shadow-2xl
      "
    >
      <FaWhatsapp size={30} />
    </a>
  );
}