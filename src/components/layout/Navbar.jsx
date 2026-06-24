"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "auto";
    }

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-zinc-200">

        <div className="max-w-7xl mx-auto px-4">

          <div className="flex items-center justify-between h-24">

            <a href="/">
              <Image
  src="/logo.webp"
  alt="Chick N Fire"
  width={190}
  height={190}
  priority
  className="w-auto h-auto"
/>
            
            </a>

            <div className="hidden lg:flex items-center gap-10 text-zinc-700 font-semibold">

              <a href="#" className="hover:text-[#FFD400]">
                Home
              </a>

              <a href="#Deals" className="hover:text-[#FFD400]">
                Deals
              </a>

              <a href="#Pizza" className="hover:text-[#FFD400]">
                Pizza
              </a>

              <a href="#Burgers" className="hover:text-[#FFD400]">
                Burgers
              </a>

              <a href="#Drinks" className="hover:text-[#FFD400]">
                Drinks
              </a>

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

      {/* Mobile Drawer */}

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

            {[
              "Home",
              "Deals",
              "Pizza",
              "Burgers",
              "Drinks",
            ].map((item) => (
              <a
                key={item}
                href={
                  item === "Home"
                    ? "#"
                    : `#${item}`
                }
                onClick={() =>
                  setIsMenuOpen(false)
                }
                className="text-zinc-900 text-lg font-semibold py-5 border-b border-zinc-200"
              >
                {item}
              </a>
            ))}

          </div>

        </div>

      </div>
    </>
  );
}