"use client";

import { useEffect, useState } from "react";
const cityAreas = { Peshawar: [
    "Hayatabad",
     "Hayatabad Phase 1", 
  "Hayatabad Phase 2", 
  "Hayatabad Phase 3", 
  "Hayatabad Phase 4", 
  "Hayatabad Phase 5",
   "Hayatabad Phase 6", 
  "Hayatabad Phase 7", 
  "University Town",
   "Town", 
   "Tehkal", 
   "Tehkal Bala",
    "Tehkal Payan", 
    "Saddar",
     "Cantt", 
     "DHA", 
     "Ring Road",
      "Warsak Road",
       "Board Bazaar",
        "Karkhano Market", 
        "GT Road", 
        "Kohat Road", 
        "Dalazak Road",
         "Faqirabad",
          "Gulbahar", 
         "Hashtnagri", 
         "Nishtarabad", 
         "Yakatoot", 
         "Chowk Yadgar", 
         "Sufaid Dheri", 
         "Arbab Road",
          "Askari 2",
          "Askari 6", 
          "Bilal Town", 
          "Ashrafia Colony", 
          "Badezai", 
          "Behari Colony",
           "Canal Road", 
           "Nasir Bagh Road", 
   "Jamrud Road", 
  ], };
const areaETA = {
    "Hayatabad": "15-25 min", 
  "Hayatabad Phase 1": "20-25 min",
  "Hayatabad Phase 2": "20-25 min",
  "Hayatabad Phase 3": "20-25 min",
  "Hayatabad Phase 4": "20-25 min",
  "Hayatabad Phase 5": "15-20 min",
  "Hayatabad Phase 6": "15-20 min",
  "Hayatabad Phase 7": "15-20 min",

  "University Town": "25-35 min",
  "Town": "25-35 min",
  "Tehkal": "25-35 min",
  "Tehkal Bala": "30-40 min",
  "Tehkal Payan": "30-40 min",

  "Ring Road": "30-40 min",
  "Jamrud Road": "20-30 min",
  "Board Bazaar": "35-45 min",
  "Karkhano Market": "15-25 min",

  "Saddar": "40-50 min",
  "Cantt": "40-50 min",
  "DHA": "40-50 min",

  "GT Road": "40-50 min",
  "Kohat Road": "45-55 min",
  "Dalazak Road": "45-60 min",

  "Faqirabad": "45-55 min",
  "Gulbahar": "45-55 min",
  "Hashtnagri": "50-60 min",
  "Nishtarabad": "50-60 min",
  "Yakatoot": "50-60 min",
  "Chowk Yadgar": "50-60 min",

  "Sufaid Dheri": "25-35 min",
  "Arbab Road": "35-45 min",
  "Askari 2": "35-45 min",
  "Askari 6": "35-45 min",

  "Bilal Town": "30-40 min",
  "Ashrafia Colony": "35-45 min",
  "Badezai": "45-55 min",
  "Behari Colony": "40-50 min",
  "Canal Road": "35-45 min",
  "Nasir Bagh Road": "30-40 min",
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
const [locationDetected, setLocationDetected] =
  useState(false);
  const [searchArea, setSearchArea] =
  useState("");

const [showAreas, setShowAreas] =
  useState(false);
  const pickupBranches = [
    "Chick n Fire - Hayatabad",
    
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
    async (position) => {
const lat = position.coords.latitude;
const lon = position.coords.longitude;
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
    );

    const data = await res.json();

    let detectedArea =
      data.address.suburb ||
      data.address.neighbourhood ||
      data.address.city_district ||
      data.address.town ||
      "";
if (!detectedArea) {
  detectedArea = "Hayatabad";
}

if (detectedArea.toLowerCase().includes("hayatabad"))
  detectedArea = "Hayatabad";

else if (detectedArea.toLowerCase().includes("tehkal bala"))
  detectedArea = "Tehkal Bala";

else if (detectedArea.toLowerCase().includes("tehkal payan"))
  detectedArea = "Tehkal Payan";

else if (detectedArea.toLowerCase().includes("tehkal"))
  detectedArea = "Tehkal";

else if (
  detectedArea.toLowerCase().includes("university")
)
  detectedArea = "University Town";

else if (detectedArea.toLowerCase().includes("town"))
  detectedArea = "Town";

else if (detectedArea.toLowerCase().includes("saddar"))
  detectedArea = "Saddar";

else if (
  detectedArea.toLowerCase().includes("cantonment") ||
  detectedArea.toLowerCase().includes("cantt")
)
  detectedArea = "Cantt";

else if (detectedArea.toLowerCase().includes("dha"))
  detectedArea = "DHA";

else if (detectedArea.toLowerCase().includes("ring"))
  detectedArea = "Ring Road";

else if (detectedArea.toLowerCase().includes("warsak"))
  detectedArea = "Warsak Road";

else if (detectedArea.toLowerCase().includes("board"))
  detectedArea = "Board Bazaar";

else if (detectedArea.toLowerCase().includes("karkhano"))
  detectedArea = "Karkhano Market";

else if (detectedArea.toLowerCase().includes("gt road"))
  detectedArea = "GT Road";

else if (detectedArea.toLowerCase().includes("kohat"))
  detectedArea = "Kohat Road";

else if (detectedArea.toLowerCase().includes("dalazak"))
  detectedArea = "Dalazak Road";

else if (detectedArea.toLowerCase().includes("faqirabad"))
  detectedArea = "Faqirabad";

else if (detectedArea.toLowerCase().includes("gulbahar"))
  detectedArea = "Gulbahar";

else if (detectedArea.toLowerCase().includes("hashtnagri"))
  detectedArea = "Hashtnagri";

else if (detectedArea.toLowerCase().includes("nishtarabad"))
  detectedArea = "Nishtarabad";

else if (detectedArea.toLowerCase().includes("yakatoot"))
  detectedArea = "Yakatoot";

else if (
  detectedArea.toLowerCase().includes("chowk yadgar")
)
  detectedArea = "Chowk Yadgar";

else if (detectedArea.toLowerCase().includes("sufaid"))
  detectedArea = "Sufaid Dheri";

else if (detectedArea.toLowerCase().includes("arbab"))
  detectedArea = "Arbab Road";

else if (detectedArea.toLowerCase().includes("askari 2"))
  detectedArea = "Askari 2";

else if (detectedArea.toLowerCase().includes("askari 6"))
  detectedArea = "Askari 6";

else if (detectedArea.toLowerCase().includes("bilal"))
  detectedArea = "Bilal Town";

else if (detectedArea.toLowerCase().includes("ashrafia"))
  detectedArea = "Ashrafia Colony";

else if (detectedArea.toLowerCase().includes("badezai"))
  detectedArea = "Badezai";

else if (detectedArea.toLowerCase().includes("behari"))
  detectedArea = "Behari Colony";

else if (detectedArea.toLowerCase().includes("canal"))
  detectedArea = "Canal Road";

else if (detectedArea.toLowerCase().includes("nasir bagh"))
  detectedArea = "Nasir Bagh Road";

else if (detectedArea.toLowerCase().includes("jamrud"))
  detectedArea = "Jamrud Road";

console.log("Detected Area:", detectedArea);

    

    setArea(detectedArea);
    setSearchArea(detectedArea);

    setLocationDetected(true);
  } catch (err) {
    console.error(err);
  }
setDetectingLocation(false);
},
(error) => {
  console.error(error);

  setDetectingLocation(false);
  setLocationDetected(false);
}
);
};
 const handleContinue = () => {
  if (!area) return;

  sessionStorage.setItem(
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
const filteredAreas =
  cityAreas[city]?.filter((item) =>
    item
      .toLowerCase()
      .includes(searchArea.toLowerCase())
  ) || [];
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
       <div className="relative overflow-visible w-[92%] max-w-[340px] md:max-w-[475px] rounded-3xl bg-white">
          

          <button
            onClick={() => setOpen(false)}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700"
          >
            ✕
          </button>

       <div className="overflow-visible px-4 py-4 md:px-7 md:py-5">

            <div className="flex justify-center">
              <img
                src="/logo.webp"
                alt="Chick n Fire"
               className="h-20 w-auto object-contain"
                
                
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
                
                    : "border border-zinc-300 bg-white text-black hover:bg-zinc-50"
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
                    : "border border-zinc-300 bg-white text-black hover:bg-zinc-50"
                }`}
              >
                Pick-Up
              </button>

            </div>

            <div className="my-3 border-t border-zinc-200" />

            {deliveryType === "delivery" && (
              <>
                <p className="text-center text-[14px] font-semibold text-black">
                  Please select your location
                </p>

                <div className="mt-3 flex justify-center">
                  <button
                    onClick={handleLocation}
                    className={`flex h-9 items-center gap-2 rounded-full px-5 text-[13px] font-medium transition-all ${
  locationDetected
    ? "bg-green-100 text-green-700 border border-green-300"
    : "border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100"
}`}>
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

                    {
  detectingLocation
    ? "Detecting..."
    : locationDetected
    ? "Location Detected ✓"
    : "Use Current Location"
}
                  </button>
                </div>

                <div className="mt-3">

                 <label 
                  htmlFor="city-select"
                 className="mb-2 block text-[13px] font-semibold text-black">
                Select City / Region
              </label>
<select
 id="city-select"
  value={city}
  onChange={(e) => {
    setCity(e.target.value);
    setArea("");
    setSearchArea("");
  }}
  className="mb-3 h-[42px] w-full rounded-xl border border-zinc-300 bg-white px-4 text-zinc-900 text-[15px] outline-none focus:border-orange-500"
>
  <option>Peshawar</option>
</select>


  <label className="mb-2 block text-[13px] font-semibold text-black">
  Search Area / Sub Region
</label>

<div className="relative">

  <input
    type="text"
    placeholder="Search Area / Sub Region"
    value={searchArea}
    onChange={(e) => {
      setSearchArea(e.target.value);
      setShowAreas(true);
    }}
    onFocus={() =>
      setShowAreas(true)
    }
    className="h-[42px] w-full rounded-xl border border-zinc-300 bg-white px-4 text-black placeholder:text-black text-[15px] outline-none focus:border-orange-500"
  />

  {showAreas && (
   <div className="absolute left-0 top-full z-[99999] mt-1 w-full max-h-48 overflow-y-auto rounded-xl border border-zinc-200 bg-white shadow-xl">

      {filteredAreas.map((item) => (

        <button
          key={item}
          type="button"
          onClick={() => {
            setArea(item);
            setSearchArea(item);
            setShowAreas(false);
          }}
         className="flex w-full items-center justify-between px-4 py-3 text-left text-black hover:bg-orange-50"
        >
          <span>{item}</span>

         <span className="text-xs text-black font-medium">
  {areaETA[item] || "30-45 min"}
</span>

        </button>

      ))}

    </div>
  )}

</div>
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