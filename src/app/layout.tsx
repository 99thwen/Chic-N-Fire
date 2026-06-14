import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CartProvider } from "../context/CartContext";
import { FavoritesProvider } from "../context/FavoritesContext";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.chicknfire.pk"),

  title: {
    default: "Chick n Fire | Yummy Fast Food Deals & Pizza in Cheap prices in Peshawar, Hayatabad.",
    template: "%s | Chick n Fire",
  },

  description:
    "Premium Fast Food in Peshawar. Order Pizza, Burgers, Deals, Wings, Wraps, Seafood  and Drinks online from Chick n Fire.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Chick n Fire | Fast Food, Pizza & Burgers in Peshawar",
    description:
      "Premium Fast Food in Peshawar. Order Pizza, Burgers, Deals, Wings and Drinks online from Chick n Fire.",
    url: "https://www.chicknfire.pk",
    siteName: "Chick n Fire",
    locale: "en_PK",
    type: "website",
  },
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
        <Analytics />
      <SpeedInsights />
      </body>
    </html>
  );
}