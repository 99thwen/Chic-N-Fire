"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "../../context/CartContext";


export default function ProductModal({
  item,
  onClose,
}) {
const [selectedVariation, setSelectedVariation] = useState(null);
const [quantity, setQuantity] = useState(1);
const [selectedPizzaFlavor, setSelectedPizzaFlavor] = useState("");
const [selectedDrinkFlavor, setSelectedDrinkFlavor] = useState("");
const [showPizzaFlavors, setShowPizzaFlavors] =
  useState(false);
const [selectedPizza1Flavor, setSelectedPizza1Flavor] =
  useState("");

const [selectedPizza2Flavor, setSelectedPizza2Flavor] =
  useState("");
const [showDrinkFlavors, setShowDrinkFlavors] =
  useState(false);
const [selectedDrink1Flavor, setSelectedDrink1Flavor] =
  useState("");

const [selectedDrink2Flavor, setSelectedDrink2Flavor] =
  useState("");

  const [showDrink1Flavors, setShowDrink1Flavors] =
  useState(false);

const [showDrink2Flavors, setShowDrink2Flavors] =
  useState(false);

const [showToast, setShowToast] = useState(false);
const [showPizza1Flavors, setShowPizza1Flavors] =
  useState(false);

const [showPizza2Flavors, setShowPizza2Flavors] =
  useState(false);
  const [showVariations, setShowVariations] =
  useState(false);

    const { addToCart } = useCart();


useEffect(() => {
  if (item?.variations?.length > 0) {
    setSelectedVariation(item.variations[0]);
  }

  if (item?.pizzaVariations?.length > 0) {
    setSelectedPizzaFlavor("");
  }

  if (item?.drinkVariations?.length > 0) {
    setSelectedDrinkFlavor("");
  }

}, [item]);

  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [item]);

  if (!item) return null;

const variationPrice =
  Number(
    selectedVariation?.split("Rs ")[1]
  ) || item.price;

const unitPrice = variationPrice;

const totalPrice =
  unitPrice * quantity;
  
return (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">

    <div className="relative bg-white w-full max-w-6xl h-[90vh] rounded-3xl overflow-hidden animate-scaleIn">

      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white text-zinc-800 text-2xl shadow-md"
      >
        ×
      </button>

      <div className="grid lg:grid-cols-2 h-full">

        <div className="relative h-[280px] lg:h-full">

            <Image
  src={item.image}
  alt={item.title}
  fill
  sizes="50vw"
  className="object-contain p-8 drop-shadow-2xl"
/>
        </div>

        <div className="overflow-y-auto p-8">

          <div className="flex items-start justify-between gap-6">

            <div>

              <h2 className="text-3xl sm:text-4xl font-black text-zinc-900">
                {item.title}
              </h2>

              <p className="text-zinc-500 mt-3 leading-7">
                {item.description}
              </p>

            </div>

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-100 text-zinc-700 text-sm font-semibold whitespace-nowrap">
  {selectedVariation}
</span>
          </div>

          <div className="mt-10">
{item.variations && (
  <div className="mt-6">

    <div className="border border-zinc-200 rounded-2xl overflow-hidden">

      <button
        onClick={() =>
          setShowVariations(!showVariations)
        }
        className="w-full flex items-center justify-between p-4 bg-white"
      >
        <div className="flex items-center gap-3">

          <span className="font-semibold">
            Variation
          </span>

          <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-500">
            Required
          </span>

        </div>

        <span>
          {selectedVariation || "Select"}
        </span>

      </button>

      {showVariations && (
        <div className="border-t">

          {item.variations.map(
            (variation) => (
              <button
                key={variation}
                onClick={() => {
                  setSelectedVariation(
                    variation
                  );
                  setShowVariations(false);
                }}
                className={`w-full text-left px-4 py-4 hover:bg-zinc-50 ${
                  selectedVariation ===
                  variation
                    ? "bg-zinc-100 font-semibold"
                    : ""
                }`}
              >
                {variation}
              </button>
            )
          )}

        </div>
      )}

    </div>

  </div>
)}
{item.pizzaVariations && (
  <div className="mt-10">

    <div className="border border-zinc-200 rounded-2xl overflow-hidden">

      <button
        onClick={() =>
          setShowPizzaFlavors(
            !showPizzaFlavors
          )
        }
        className="w-full flex items-center justify-between p-4 bg-white"
      >
        <div className="flex items-center gap-3">

          <span className="font-semibold">
            Pizza Flavor
          </span>

          <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-500">
            Required
          </span>

        </div>

        <span>
          {selectedPizzaFlavor ||
            "Select"}
        </span>

      </button>

      {showPizzaFlavors && (
        <div className="border-t">

          {item.pizzaVariations.map(
            (flavor) => (
              <button
                key={flavor}
                onClick={() => {
                  setSelectedPizzaFlavor(
                    flavor
                  );
                  setShowPizzaFlavors(
                    false
                  );
                }}
                className={`w-full text-left px-4 py-4 hover:bg-zinc-50 ${
                  selectedPizzaFlavor ===
                  flavor
                    ? "bg-zinc-100 font-semibold"
                    : ""
                }`}
              >
                {flavor}
              </button>
            )
          )}

        </div>
      )}

    </div>

  </div>
)}
{item.pizza1Variations && (
  <div className="mt-6">

    <div className="border border-zinc-200 rounded-2xl overflow-hidden">

      <button
        onClick={() =>
          setShowPizza1Flavors(
            !showPizza1Flavors
          )
        }
        className="w-full flex items-center justify-between p-4 bg-white"
      >
        <div className="flex items-center gap-3">

          <span className="font-semibold">
            Pizza 1 Flavor
          </span>

          <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-500">
            Required
          </span>

        </div>

        <span>
          {selectedPizza1Flavor ||
            "Select"}
        </span>

      </button>

      {showPizza1Flavors && (
        <div className="border-t">

          {item.pizza1Variations.map(
            (flavor) => (
              <button
                key={flavor}
                onClick={() => {
                  setSelectedPizza1Flavor(
                    flavor
                  );
                  setShowPizza1Flavors(
                    false
                  );
                }}
                className="w-full text-left px-4 py-4 hover:bg-zinc-50"
              >
                {flavor}
              </button>
            )
          )}

        </div>
      )}

    </div>

  </div>
)}
{item.pizza2Variations && (
  <div className="mt-6">

    <div className="border border-zinc-200 rounded-2xl overflow-hidden">

      <button
        onClick={() =>
          setShowPizza2Flavors(
            !showPizza2Flavors
          )
        }
        className="w-full flex items-center justify-between p-4 bg-white"
      >
        <div className="flex items-center gap-3">

          <span className="font-semibold">
            Pizza 2 Flavor
          </span>

          <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-500">
            Required
          </span>

        </div>

        <span>
          {selectedPizza2Flavor ||
            "Select"}
        </span>

      </button>

      {showPizza2Flavors && (
        <div className="border-t">

          {item.pizza2Variations.map(
            (flavor) => (
              <button
                key={flavor}
                onClick={() => {
                  setSelectedPizza2Flavor(
                    flavor
                  );
                  setShowPizza2Flavors(
                    false
                  );
                }}
                className="w-full text-left px-4 py-4 hover:bg-zinc-50"
              >
                {flavor}
              </button>
            )
          )}

        </div>
      )}

    </div>

  </div>
)}
{item.drinkVariations && (
  <div className="mt-6">

    <div className="border border-zinc-200 rounded-2xl overflow-hidden">

      <button
        onClick={() =>
          setShowDrinkFlavors(
            !showDrinkFlavors
          )
        }
        className="w-full flex items-center justify-between p-4 bg-white"
      >
        <div className="flex items-center gap-3">

          <span className="font-semibold">
            Drink Flavor
          </span>

          <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-500">
            Required
          </span>

        </div>

        <span>
          {selectedDrinkFlavor ||
            "Select"}
        </span>

      </button>

      {showDrinkFlavors && (
        <div className="border-t">

          {item.drinkVariations.map(
            (drink) => (
              <button
                key={drink}
                onClick={() => {
                  setSelectedDrinkFlavor(
                    drink
                  );
                  setShowDrinkFlavors(
                    false
                  );
                }}
                className="w-full text-left px-4 py-4 hover:bg-zinc-50"
              >
                {drink}
              </button>
            )
          )}

        </div>
      )}

    </div>

  </div>
)}

{item.drink1Variations && (
  <div className="mt-6">

    <div className="border border-zinc-200 rounded-2xl overflow-hidden">

      <button
        onClick={() =>
          setShowDrink1Flavors(
            !showDrink1Flavors
          )
        }
        className="w-full flex items-center justify-between p-4 bg-white"
      >
        <div className="flex items-center gap-3">

          <span className="font-semibold">
            Drink 1 Flavor
          </span>

          <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-500">
            Required
          </span>

        </div>

        <span>
          {selectedDrink1Flavor ||
            "Select"}
        </span>

      </button>

      {showDrink1Flavors && (
        <div className="border-t">

          {item.drink1Variations.map(
            (drink) => (
              <button
                key={drink}
                onClick={() => {
                  setSelectedDrink1Flavor(
                    drink
                  );
                  setShowDrink1Flavors(
                    false
                  );
                }}
                className="w-full text-left px-4 py-4 hover:bg-zinc-50"
              >
                {drink}
              </button>
            )
          )}

        </div>
      )}

    </div>

  </div>
)}

{item.drink2Variations && (
  <div className="mt-6">

    <div className="border border-zinc-200 rounded-2xl overflow-hidden">

      <button
        onClick={() =>
          setShowDrink2Flavors(
            !showDrink2Flavors
          )
        }
        className="w-full flex items-center justify-between p-4 bg-white"
      >
        <div className="flex items-center gap-3">

          <span className="font-semibold">
            Drink 2 Flavor
          </span>

          <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-500">
            Required
          </span>

        </div>

        <span>
          {selectedDrink2Flavor ||
            "Select"}
        </span>

      </button>

      {showDrink2Flavors && (
        <div className="border-t">

          {item.drink2Variations.map(
            (drink) => (
              <button
                key={drink}
                onClick={() => {
                  setSelectedDrink2Flavor(
                    drink
                  );
                  setShowDrink2Flavors(
                    false
                  );
                }}
                className="w-full text-left px-4 py-4 hover:bg-zinc-50"
              >
                {drink}
              </button>
            )
          )}

        </div>
      )}

    </div>

  </div>
)}



     </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">

            <div className="flex items-center bg-white rounded-2xl overflow-hidden border border-zinc-300">

              <button
                onClick={() =>
                  quantity > 1 &&
                  setQuantity(quantity - 1)
                }
                className="w-14 h-14 text-2xl bg-zinc-100 text-zinc-900 hover:bg-zinc-200  font-black transition"
              >
                -
              </button>

              <div className="w-14 text-center text-zinc-900 font-bold text-lg">
                {quantity}
              </div>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
                className="w-14 h-14 text-2xl bg-zinc-100 text-zinc-900 hover:bg-zinc-200 font-black transition"
              >
                +
              </button>

            </div>


<button
disabled={
  (item.pizzaVariations &&
    !selectedPizzaFlavor) ||

  (item.pizza1Variations &&
    !selectedPizza1Flavor) ||

  (item.pizza2Variations &&
    !selectedPizza2Flavor) ||

  (item.drinkVariations &&
    !selectedDrinkFlavor) ||

  (item.drink1Variations &&
    !selectedDrink1Flavor) ||

  (item.drink2Variations &&
    !selectedDrink2Flavor)
}
  onClick={() => {

    addToCart({
  cartId: Date.now(),
  title: item.title,
  image: item.image,
  variation: selectedVariation,

  pizzaFlavor: selectedPizzaFlavor,
  pizza1Flavor: selectedPizza1Flavor,
  pizza2Flavor: selectedPizza2Flavor,
  drinkFlavor: selectedDrinkFlavor,
drink1Flavor:
  selectedDrink1Flavor,

drink2Flavor:
  selectedDrink2Flavor,
  quantity,
  unitPrice,
  price: totalPrice,
});

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      onClose();
    }, 1500);

  }}
  className={`flex-1 py-5 rounded-2xl font-black text-xl transition ${
  (item.pizzaVariations &&
    !selectedPizzaFlavor) ||

  (item.pizza1Variations &&
    !selectedPizza1Flavor) ||

  (item.pizza2Variations &&
    !selectedPizza2Flavor) ||

  (item.drinkVariations &&
    !selectedDrinkFlavor)

    ? "bg-zinc-300 text-zinc-500 cursor-not-allowed"
    : "bg-[#FFD400] hover:bg-[#F4C400] text-black"
}`}
>
  Add To Cart • Rs {totalPrice}
</button>

          </div>

        </div>

      </div>

    </div>
{showToast && (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] bg-zinc-900 text-white px-5 py-3 rounded-2xl shadow-xl">
    ✓ Added to Cart
  </div>
)}
  </div>
);
}