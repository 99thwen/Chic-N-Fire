"use client";

import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import MenuSection from "../components/sections/MenuSection";
import CartDrawer from "../components/layout/CartDrawer";
import FloatingCartButton from "../components/layout/FloatingCartButton";
import LocationModal from "../components/ui/LocationModal";
import WhatsAppButton from "../components/common/WhatsAppButton";

export default function Home() {
  const [locationOpen, setLocationOpen] =
  useState(false);

  return (
    <>
    
    
    
        <Navbar />

        <main className="bg-zinc-100 min-h-screen">
          <MenuSection />
          <CartDrawer />
          <FloatingCartButton />
          <WhatsAppButton />
        </main>

        <Footer />
      
    </>
  );
}