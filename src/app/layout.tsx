import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "../context/CartContext";
import { FavoritesProvider } from "../context/FavoritesContext";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chick n Fire",
    template: "%s | Chick n Fire",
  },
  description:
    "Premium Fast Food in Peshawar. Order Pizza, Burgers, Deals, Wings and Drinks online from Chick n Fire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body
        className={`${poppins.className} min-h-screen bg-zinc-100 text-zinc-900`}
      >
        <CartProvider>
          <FavoritesProvider>
            {children}
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}