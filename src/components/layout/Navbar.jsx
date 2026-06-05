"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);
const [location, setLocation] =
  useState(null);

  useEffect(() => {
  const saved =
    localStorage.getItem("location");

  if (saved) {
    setLocation(JSON.parse(saved));
  }
}, []);
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-zinc-200">

        <div className="max-w-7xl mx-auto px-4">

          <div className="flex items-center justify-between h-24">
<div>
  <Image
    src="/logo.webp"
    alt="Chic N Fire"
    width={190}
    height={190}
    className="w-auto h-auto"
  />

  {location && (
    <p className="text-xs text-zinc-500 mt-1">
      {location.deliveryType === "delivery"
        ? `${location.area}, ${location.city}`
        : location.area}
    </p>
  )}
</div>

            <div className="hidden lg:flex items-center gap-10 text-zinc-700 font-semibold">

              <a
                href="#"
                className="hover:text-[#FFD400] transition"
              >
                Home
              </a>

              <a
                href="#Deals"
                className="hover:text-[#FFD400] transition"
              >
                Deals
              </a>

              <a
                href="#Pizza"
                className="hover:text-[#FFD400] transition"
              >
                Pizza
              </a>

              <a
                href="#Burgers"
                className="hover:text-[#FFD400] transition"
              >
                Burgers
              </a>

              <a
                href="#Drinks"
                className="hover:text-[#FFD400] transition"
              >
                Drinks
              </a>

            </div>

            <div className="hidden lg:flex items-center">

              <button className="border border-[#FFD400] text-zinc-900 hover:bg-[#FFD400] px-7 py-3 rounded-full font-semibold transition">
                Sign In / Register
              </button>

            </div>

            <button
              onClick={() =>
                setIsMenuOpen(true)
              }
              className="lg:hidden text-zinc-900 text-4xl"
            >
              ☰
            </button>

          </div>

        </div>

      </nav>

      <div
        className={`fixed inset-0 z-[100] transition duration-300 ${
          isMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >

        <div
          onClick={() =>
            setIsMenuOpen(false)
          }
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        <div
          className={`absolute top-0 right-0 h-screen w-[85%] max-w-sm bg-white border-l border-zinc-200 transition duration-300 ${
            isMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >

          <div className="p-6 border-b border-zinc-200 flex items-center justify-between">

            <h2 className="text-zinc-900 text-3xl font-black">
              Menu
            </h2>

            <button
              onClick={() =>
                setIsMenuOpen(false)
              }
              className="text-zinc-400 text-4xl"
            >
              ×
            </button>

          </div>

          <div className="flex flex-col p-6">

            <a
              href="#"
              className="text-zinc-900 text-lg font-semibold py-5 border-b border-zinc-200"
            >
              Home
            </a>

            <a
              href="#Deals"
              className="text-zinc-900 text-lg font-semibold py-5 border-b border-zinc-200"
            >
              Deals
            </a>

            <a
              href="#Pizza"
              className="text-zinc-900 text-lg font-semibold py-5 border-b border-zinc-200"
            >
              Pizza
            </a>

            <a
              href="#Burgers"
              className="text-zinc-900 text-lg font-semibold py-5 border-b border-zinc-200"
            >
              Burgers
            </a>

            <a
              href="#Drinks"
              className="text-zinc-900 text-lg font-semibold py-5 border-b border-zinc-200"
            >
              Drinks
            </a>

            <button className="mt-10 border border-[#FFD400] text-zinc-900 py-4 rounded-2xl font-semibold hover:bg-[#FFD400] transition">
              Sign In / Register
            </button>

          </div>

        </div>

      </div>

    </>
  );
}