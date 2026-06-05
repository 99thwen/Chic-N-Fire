"use client";

import { useEffect, useState } from "react";

const cityAreas = {
  Peshawar: [
    "Hayatabad",
    "University Town",
    "Saddar",
    "Ring Road",
    "Warsak Road",
    "Board Bazaar",
  ],
};

export default function LocationModal({
  open,
  setOpen,
}) {
  const [deliveryType, setDeliveryType] =
    useState("delivery");

  const [city, setCity] =
    useState("Peshawar");

  const [area, setArea] =
    useState("");

  const [detectingLocation, setDetectingLocation] =
    useState(false);

  const pickupBranches = [
    "Chic n Fire - Hayatabad",
    "Chic n Fire - DHA",
  ];

  useEffect(() => {
    document.body.style.overflow = open
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleLocation = () => {
    setDetectingLocation(true);

    navigator.geolocation.getCurrentPosition(
      () => {
        setTimeout(() => {
          setDetectingLocation(false);
        }, 800);
      },
      () => {
        setDetectingLocation(false);
      }
    );
  };

 const handleContinue = () => {
  if (!area) return;

  localStorage.setItem(
    "location",
    JSON.stringify({
      deliveryType,
      city,
      area,
    })
  );

  setOpen(false);
};

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-[9998] bg-black/25 backdrop-blur-[5px]" />

      <div
  style={{
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0,0,0,0.2)",
  }}
>
        <div className="relative w-full max-w-[360px] md:max-w-[475px] rounded-3xl bg-white">
          

          <button
            onClick={() => setOpen(false)}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700"
          >
            ✕
          </button>

          <div className="px-4 py-5 md:px-7 md:py-6">

            <div className="flex justify-center">
              <img
                src="/logo.webp"
                alt="Chic n Fire"
                className="h-29 w-auto object-contain"
                
                
              />
            </div>

            <h2 className="mt-3 text-center text-[18px] font-bold text-zinc-800">
              Select your order type
            </h2>

            <div className="mt-3 flex justify-center gap-1.5">

              <button
                onClick={() => {
                  setDeliveryType("delivery");
                  setArea("");
                }}
                className={`h-8 min-w-[86px] rounded-full px-5 text-sm font-semibold transition-all duration-300 ${
                  deliveryType === "delivery"
                    ? "bg-orange-500 text-white scale-105 shadow-md"
                    : "border border-zinc-300 bg-white text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                Delivery
              </button>

              <button
                onClick={() => {
                  setDeliveryType("pickup");
                  setArea("");
                }}
                className={`h-8 min-w-[86px] rounded-full px-5 text-sm font-semibold transition-all duration-300 ${
                  deliveryType === "pickup"
                    ? "bg-orange-500 text-white scale-105 shadow-md"
                    : "border border-zinc-300 bg-white text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                Pick-Up
              </button>

            </div>

            <div className="my-3 border-t border-zinc-200" />

            {deliveryType === "delivery" && (
              <>
                <p className="text-center text-[14px] font-semibold text-zinc-700">
                  Please select your location
                </p>

                <div className="mt-3 flex justify-center">
                  <button
                    onClick={handleLocation}
                    className="flex h-9 items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-5 text-[13px] font-medium text-zinc-700 transition-all hover:bg-zinc-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    {detectingLocation
                      ? "Detecting..."
                      : "Use Current Location"}
                  </button>
                </div>

                <div className="mt-4">
                  <label className="mb-2 block text-[13px] font-semibold text-zinc-700">
                    Select City / Region
                  </label>

                  <select
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                      setArea("");
                    }}
                    className="h-[42px] w-full rounded-xl border border-zinc-300 bg-white px-4 text-[15px] outline-none focus:border-orange-500"
                  >
                    <option>Peshawar</option>
                  </select>
                </div>

                <div className="mt-3">
                  <label className="mb-2 block text-[13px] font-semibold text-zinc-700">
                    Select Area / Sub Region
                  </label>

                  <select
                    value={area}
                    onChange={(e) =>
                      setArea(e.target.value)
                    }
                    className="h-[42px] w-full rounded-xl border border-zinc-300 bg-white px-4 text-[15px] outline-none focus:border-orange-500"
                  >
                    <option value="">
                      Select Area / Sub Region
                    </option>

                    {cityAreas[city]?.map((item) => (
                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            {deliveryType === "pickup" && (
              <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200">
                {pickupBranches.map((branch) => (
                  <button
                    key={branch}
                    onClick={() => setArea(branch)}
                    className={`flex w-full items-center border-b border-zinc-200 px-4 py-3 text-left text-[14px] transition last:border-b-0 hover:bg-zinc-50 ${
                      area === branch
                        ? "bg-orange-50 text-orange-600 font-semibold"
                        : "text-zinc-700"
                    }`}
                  >
                    {branch}
                  </button>
                ))}
              </div>
            )}

            <button
  onClick={handleContinue}
  disabled={!area}
  className={`mt-4 h-[44px] w-full rounded-xl text-[15px] font-semibold transition-all ${
    area
      ? "bg-orange-500 text-white hover:bg-orange-600"
      : "bg-zinc-200 text-zinc-400"
  }`}
>
  Select
</button>

          </div>
        </div>
      </div>
    </>
  );
}