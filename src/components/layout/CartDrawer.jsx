"use client";

import Image from "next/image";

import { useCart } from "../../context/CartContext";
import Link from "next/link";
import { useEffect } from "react";

export default function CartDrawer() {

  const {
    cartItems,
    removeFromCart,

    increaseQuantity,
    decreaseQuantity,

    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  );
useEffect(() => {
  if (isCartOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isCartOpen]);
  return (

    <div
      className={`fixed inset-0 z-50 transition duration-300 ${
        isCartOpen
          ? "visible opacity-100"
          : "invisible opacity-0"
      }`}
    >

      <div
        onClick={() =>
          setIsCartOpen(false)
        }
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
        <div
  className={`fixed  right-0 top-0 h-screen w-full max-w-full sm:max-w-md bg-white border-l border-zinc-200 flex flex-col transition duration-300 ${
    isCartOpen
      ? "translate-x-0"
      : "translate-x-full"
  }`}
>
      <div className="p-6 border-b border-zinc-200 flex items-center justify-between">

  <h2 className="text-3xl font-bold text-zinc-900">
    Your Cart
  </h2>

  <button
    onClick={() =>
      setIsCartOpen(false)
    }
    className="text-zinc-500 text-3xl hover:text-zinc-900 transition"
  >
    ×
  </button>

</div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (

            <div className="h-full flex items-center justify-center">

              <p className="text-zinc-400 text-xl">
                Cart is empty
              </p>

            </div>

          ) : (

            <div className="flex flex-col gap-6">

              {cartItems.map((item) => (

                <div
                  key={item.cartId}
                  className="bg-zinc-100 border border-zinc-200 rounded-2xl p-3"
                >

                  <div className="flex gap-4">

                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden">

                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />

                    </div>

                    <div className="flex-1">

                      <div className="flex items-start justify-between gap-4">

                        <div>

                          <h3 className="text-zinc-900 font-semibold text-lg">
                            {item.title}
                          </h3>

                         <div className="text-zinc-400 text-sm mt-1">

  {item.pizzaFlavor && (
    <p>Pizza: {item.pizzaFlavor}</p>
  )}

  {item.drinkFlavor && (
    <p>Drink: {item.drinkFlavor}</p>
  )}

  {item.variation && (
  <p>
    {typeof item.variation === "object"
      ? item.variation.name
      : item.variation}
  </p>
)}

</div>

                        </div>

                        <button
                          onClick={() =>
                            removeFromCart(
                              item.cartId
                            )
                          }
                          className="text-red-500"
                        >
                          Remove
                        </button>

                      </div>

                    

                      <div className="flex items-center justify-between mt-5">

                        <div className="flex items-center bg-white border border-zinc-200 rounded-xl overflow-hidden">

                          <button
                            onClick={() =>
                              decreaseQuantity(
                                item.cartId
                              )
                            }
                            className="w-8 h-8 text-zinc-900 text-xl"
                          >
                            -
                          </button>

                          <div className="w-10 text-center text-zinc-900 font-bold">
                            {item.quantity}
                          </div>

                          <button
                            onClick={() =>
                              increaseQuantity(
                                item.cartId
                              )
                            }
                            className="w-8 h-8 text-zinc-900 text-xl"
                          >
                            +
                          </button>

                        </div>

                        <p className="text-orange-500 font-black text-xl">
                          Rs {item.price}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>


  <div className="sticky bottom-0 p-6 border-t border-zinc-200 bg-white">

  <div className="flex items-center justify-between mb-6">

    <p className="text-zinc-500 text-lg">
      Total
    </p>

    <p className="text-zinc-900 text-3xl font-black">
      Rs {total}
    </p>

  </div>

  <Link
 
  onClick={() =>
    setIsCartOpen(false)
  }
    href="/checkout"
    className="block w-full bg-orange-500 hover:bg-orange-600 transition py-5 rounded-2xl text-white font-black text-xl text-center"
  >
    Checkout
  </Link>

</div>

      </div>

    </div>

  );
}