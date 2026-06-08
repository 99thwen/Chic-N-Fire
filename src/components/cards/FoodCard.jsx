"use client";

import Image from "next/image";
import {
  useFavorites,
} from "../../context/FavoritesContext";

export default function FoodCard({
  product,
  onCustomize,
}) {
  const {
    toggleFavorite,
    isFavorite,
  } = useFavorites();
const displayPrice =
  product.variations?.[0]?.price ||
  product.price ||
  0;
 return (
  <div className="bg-white rounded-2xl border border-zinc-200 flex overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200">

    <div className="flex w-full">

      <div className="relative w-24 h-24 md:w-40 md:h-44 flex-shrink-0">

        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="200px"
          className="object-contain p-2"
        />

      </div>

      <div className="flex-1 p-3 md:p-5 flex flex-col justify-between md:min-h-[176px]">

        <div>

        <h3 className="text-lg md:text-xl font-bold text-zinc-900 leading-tight">
            {product.title}
          </h3>

<p className="text-[11px] md:text-sm text-zinc-500 mt-1 md:mt-2 line-clamp-2 leading-4 md:leading-5">
    {product.description}
  </p>

        </div>

        <div>

          <p className="inline-block bg-black text-white px-2.5 md:px-3 py-1 rounded-lg font-bold text-xs md:text-sm">
           Rs {displayPrice}
          </p>

          <div className="mt-2 md:mt-3 flex items-center justify-between">

            <button
              onClick={() =>
                onCustomize(product)
              }
              className="bg-[#FFD400] hover:bg-red-600 hover:text-white text-black px-4 md:px-5 py-2 md:py-2.5 rounded-xl font-bold text-sm md:text-base transition-all duration-300"
            >
              Add To Cart
            </button>

            <button
              onClick={() =>
                toggleFavorite(product)
              }
              className={`text-xl md:text-2xl transition ${
                isFavorite(product.id)
                  ? "text-red-500"
                  : "text-zinc-400 hover:text-red-500"
              }`}
            >
              ♥
            </button>

          </div>

        </div>

      </div>

    </div>
 </div>
);
}