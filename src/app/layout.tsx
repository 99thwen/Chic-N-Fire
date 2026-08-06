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
    default: "Chick n Fire",
    template: "%s | Chick n Fire",
  },

  description:
    "Premium Fast Food in Peshawar. Order Pizza, Burgers, Deals, Wings, Wraps, Seafood  and Drinks online from Chick n Fire.",

  verification: {
    google: "IXhAifbxz2dYEFxkrJUmGctZHPUAogo3sjSIz_8iWXo",
  },
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
},
  
  alternates: {
    canonical: "/",
  },
openGraph: {
  title: "Chick n Fire | Fast Food, Pizza & Burgers in Peshawar",
  description:
    "Premium Fast Food in Peshawar. Order Pizza, Burgers, Deals, Wings and Drinks online from Chick n Fire.",
  url: "https://www.chicknfire.pk",
  siteName: "Chick n Fire",

  images: [
    {
      url: "/logo.webp",
      width: 1200,
      height: 630,
      alt: "Chick n Fire",
    },
  ],

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



      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "Chick n Fire",
      image: "https://www.chicknfire.pk/logo.webp",
      url: "https://www.chicknfire.pk",
      telephone: "+92-3215823184"    ,
      servesCuisine: [
  "Fast Food",
  "Pizza",
  "Burgers",
  "Fried Chicken", 
  "Wraps",
  "Seafood",
  "Paratha Rolls",
  "Fried Items",
  "Drinks"
],
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "5-A, Block A, Yousafzai Market Phase 3, Hayatabad",
        addressLocality: "Peshawar",
        addressCountry: "PK",
      },
      openingHours: "Mo-Su 00:00-23:59",
    }),
  }}
/>

      </body>
    </html>
  );
}